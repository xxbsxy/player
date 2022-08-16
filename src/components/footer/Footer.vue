<template>
  <audio
    :src="currentSong.url"
    ref="audio"
    @canplay="getDuration"
    @timeupdate="timeupdate"
    v-if="currentSong"
  ></audio>
  <div class="footer">
    <!-- 音乐图片名称区域 -->
    <div class="left-area">
      <img src="../../assets/img/header/vae.jpg" alt="" class="pic" v-if="!currentSong" />
      <div v-if="currentSong" class="song">
        <img :src="currentSong.al.picUrl" alt="" class="pic" />
        <div class="name">
          <div class="song-name">{{ currentSong.name }}</div>
          <p class="al-name">
            <span v-for="(item, index) in currentSong.ar" :key="item.id">
              {{ item.name }}
              <span v-show="index < currentSong.ar.length - 1">/&nbsp;</span>
            </span>
          </p>
        </div>
      </div>
    </div>
    <!-- 控制音乐区域 -->
    <div class="contral">
      <!-- 播放下一首等按钮 -->
      <div class="icon">
        <img src="@/assets/img/footer/orderPlay.svg" alt @click="orderPlay" class="order-play" />
        <img src="@/assets/img/footer/radomplay.svg" alt @click="randomPlay" class="random-play" />
        <img src="@/assets/img/footer/back.svg" alt @click="backPlay" />
        <img src="@/assets/img/footer/play.svg" alt @click="controlPlay" v-show="!playActive" />
        <img src="@/assets/img/footer/pause.svg" alt @click="controlPlay" v-show="playActive" />
        <img src="@/assets/img/footer/next.svg" alt @click="nextPlay" />
        <img src="@/assets/img/footer/circulate.svg" alt class="circulate" @click="circulate" />
        <img
          src="@/assets/img/footer/listCirculate.svg"
          class="list-circulate"
          @click="listCirculate"
        />
      </div>
      <!-- 进度条 -->
      <div class="progress">
        <div class="left-time">{{ currentTime }}</div>
        <div class="slider-demo-block">
          <el-slider
            size="small"
            :show-tooltip="false"
            v-model="songSlider"
            @change="changeSongSlider"
            @click="clickSongSlider"
          />
        </div>
        <div class="right-time">{{ endTime }}</div>
      </div>
    </div>
    <!-- 声音控制 -->
    <div class="volume">
      <img src="@/assets/img/footer/volume.svg" alt />
      <div class="volume-progress">
        <el-slider
          size="small"
          :show-tooltip="false"
          @click="clickVolumeSlider"
          @change="changeVolumeSlider"
          v-model="volume"
        />
      </div>
      <el-badge type="primary" :value="state.playlist.length">
        <img
          src="@/assets/img/footer/playlist.svg"
          alt
          class="total-img"
          @click="toPlaylistQueue"
        />
      </el-badge>
    </div>
  </div>
</template>

<script>
export default { name: 'Footer' }
</script>
<script setup>
import { computed, watch, reactive, ref, nextTick, beforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { footerStore } from '@/store/footer'
import { storeToRefs } from 'pinia'
import { formatMillisecond } from '@/utils/formatMillisecond'
import state from './hook/useState'
const router = useRouter()
const store = footerStore()
const { song } = storeToRefs(store)
let drawer = ref(false)
let playActive = ref(false)
let platState = ref(-1) //-1表示列表循环 0表示随机播放 1表示单曲循环
let songSlider = ref() //音乐播放进度条
let volume = ref(100)
const endTime = ref('00 : 00') //播放时长
const currentTime = ref('00 : 00') //音乐实时播放时间
const audio = ref()

//获得歌曲播放时长
const getDuration = () => {
  endTime.value = formatMillisecond(audio.value.duration * 1000)
}
// 开始播放音频
const audioPlay = () => {
  audio.value.play()
  playActive.value = true
}
//控制播放与暂停
const controlPlay = () => {
  if (!audio.value.paused) {
    audio.value.pause() // 停止播放
    playActive.value = false
  } else {
    audio.value.play() // 开始播放
    playActive.value = true
  }
}
//歌曲播放时更新时间与进度条
const timeupdate = (e) => {
  songSlider.value = (e.target.currentTime / audio.value.duration) * 100
  currentTime.value = formatMillisecond(e.target.currentTime * 1000)
  //进度条结束播放下一首
  if (e.target.currentTime === audio.value.duration) {
    playActive.value = true
    nextTick(() => {
      nextPlay()
    })
  }
}
//下一首
const nextPlay = () => {
  if (platState.value === -1) {
    state.currentIndex =
      state.currentIndex === state.playlist.length - 1 ? 0 : state.currentIndex + 1
    // 这里要延迟播放，因为要先让它加载一下

    nextTick(() => {
      audioPlay()
    })
  } else if (platState.value === 0) {
    state.currentIndex = Math.floor(Math.random() * state.playlist.length)

    nextTick(() => {
      audioPlay()
    })
  } else if (platState.value === 1) {
    nextTick(() => {
      audioPlay()
    })
  }
}
//上一首
const backPlay = () => {
  state.currentIndex = state.currentIndex === 0 ? state.playlist.length - 1 : state.currentIndex - 1
  playActive.value = true
  nextTick(() => {
    audioPlay()
  })
}
//拖拽音乐进度条改变时间
const changeSongSlider = () => {
  audio.value.currentTime = audio.value.duration * (songSlider.value / 100)
  currentTime.value = formatMillisecond(audio.value.currentTime * 1000)
  console.log(songSlider.value / 100)
}
//点击音乐进度条改变时间
const clickSongSlider = () => {
  audio.value.currentTime = audio.value.duration * (songSlider.value / 100)
  currentTime.value = formatMillisecond(audio.value.currentTime * 1000)
}
//点击音量进度条改变音量
const clickVolumeSlider = () => {
  audio.value.volume = volume.value / 100
}
//拖拽音量进度条改变音量
const changeVolumeSlider = () => {
  audio.value.volume = volume.value / 100
}
//随机播放
const randomPlay = () => {
  ElMessage.success('随机播放')
  platState.value = 0
}
//单曲循环
const circulate = () => {
  ElMessage.success('单曲循环')
  platState.value = 1
}
//列表循环
const listCirculate = () => {
  ElMessage.success('列表循环')
  platState.value = -1
}
//顺序播放
const orderPlay = () => {
  ElMessage.success('顺序播放')
  platState.value = -1
}
//控制播放队列
const toPlaylistQueue = () => {
  store.isPlayQueue = true
}
//返回需要播放的歌曲详情
const currentSong = computed(() => {
  return state.playlist[state.currentIndex]
})
watch(song, (newValue) => {
  let flag = true //解决点击同一首歌问题
  nextTick(() => {
    audioPlay()
  })
  state.playlist.forEach((item, index) => {
    if (item.id === newValue.id) {
      state.currentIndex = index
      flag = false
    }
  })
  if (flag) {
    const obj = {
      name: newValue.name,
      al: newValue.al,
      ar: newValue.ar,
      dt: newValue.dt,
      id: newValue.id,
      url: newValue.url
    }
    state.playlist.splice(state.currentIndex, 0, obj)
  }
})
</script>
<style scoped lang="less">
.footer {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  .left-area {
    width: 250px;
    overflow: hidden;
    .pic {
      width: 60px;
      height: 60px;
      border-radius: 10px;
    }
    .song {
      display: flex;
      .name {
        margin-left: 12px;

        .song-name {
          width: 180px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .al-name {
          position: relative;
          top: 16px;
          margin: 0;
          width: 180px;
          height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }

  .contral {
    width: 600px;
    height: 60px;
    margin-left: 60px;
    .icon {
      margin-left: 175px;
      img {
        cursor: pointer;
      }
      .order-play {
        position: relative;
        bottom: 6px;
        right: 25px;
      }
      .random-play {
        position: relative;
        bottom: 3px;
        right: 10px;
      }
      .list-circulate,
      .circulate {
        position: relative;
        bottom: 3px;
        left: 10px;
      }
      .list-circulate {
        left: 25px;
      }
    }
    .progress {
      display: flex;
    }
    .slider-demo-block {
      position: relative;
      bottom: 3px;
      width: 500px;
    }
    .left-time {
      width: 60px;
      position: relative;
      right: 20px;
    }
    .right-time {
      width: 60px;
      position: relative;
      left: 20px;
    }
  }
  .volume {
    display: flex;
    margin-top: 20px;
    margin-left: 140px;
    .volume-progress {
      position: relative;
      top: 3px;
      width: 80px;
      margin-left: 20px;
    }
    .total-img {
      margin-left: 40px;
      cursor: pointer;
    }
  }
}
</style>
