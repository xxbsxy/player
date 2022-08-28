<template>
  <div class="content">
    <img :src="currentSong.al.picUrl" alt="" class="img" />
    <div class="right-area">
      <h2>
        {{ currentSong.name }}
      </h2>
      专辑 :
      <span class="al-name" @click="toAlbumDetail(currentSong.al.id)">{{
        currentSong.al.name
      }}</span>
      歌手 :
      <span v-for="(item, index) in currentSong.ar" :key="item.id">
        <span class="ar-name" @click="toSingerDetail(item.id)">{{ item.name }}</span>
        <span v-show="index < currentSong.ar.length - 1">/&nbsp;</span>
      </span>
      <!-- 歌词 -->
      <div class="lyric" ref="songBox">
        <p v-for="(v, i) in lyrics" :key="i" :ref="lyricRef">{{ v.msg }}</p>
      </div>
    </div>
  </div>
  <!-- 评论 -->
  <div class="comment">
    <Comment :comments="comments" />
  </div>
</template>

<script>
export default { name: 'Lyric' }
</script>
<script setup>
import { reactive, watch, computed, ref, nextTick } from 'vue'
import Comment from '@/components/comment/Comment.vue'
import { footerStore } from '@/store/footer'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const store = footerStore()
const itemRef = []
const songBox = ref()
const { lyrics, song, comments, state, time } = storeToRefs(store)
const lyricRef = (el) => {
  if (el) {
    itemRef.push(el)
  }
}

//点击歌手去歌手详情
const toSingerDetail = (id) => {
  router.push({
    path: '/singerDetail',
    query: {
      id
    }
  })
}
//点击专辑详情
const toAlbumDetail = (id) => {
  router.push({
    path: '/albumDetail',
    query: {
      id
    }
  })
}
const currentSong = computed(() => {
  return state.value.playlist[state.value.currentIndex]
})
watch(
  state,
  (newValue) => {
    if (newValue) {
      router.push({
        path: '/lyric',
        query: {
          id: newValue.playlist[newValue.currentIndex].id
        }
      })
    }
  },
  { deep: true, immediate: true }
)
watch(
  () => route.query.id,
  (newValue) => {
    store.getSongLyric(newValue)
  },
  { immediate: true }
)
watch(time, (newValue) => {
  let flag = 1
  for (let i = 0; i < lyrics.value.length; i++) {
    if (lyrics.value[i].time >= newValue) {
      flag = i - 1
      break
    }
  }
  if (itemRef[flag]) {
    itemRef[flag].classList.add('active-lyric')
  }
  for (let i = 0; i < flag; i++) {
    itemRef[i].classList.remove('active-lyric')
  }
  songBox.value.scrollTo({
    top: ((songBox.value.scrollHeight - 400) / lyrics.value.length) * flag,
    behavior: 'smooth'
  })
})
</script>
<style scoped lang="less">
@keyframes xuanzhuan {
  0% {
    transform: rotate(-360deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
.content {
  display: flex;

  .img {
    margin-top: 150px;
    margin-left: 100px;
    margin-right: 200px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    animation: xuanzhuan 45s linear infinite;
  }
  .right-area {
    .al-name,
    .ar-name {
      color: #507daf;
      cursor: pointer;
      &:hover {
        color: #1359a9;
      }
    }
    .al-name {
      margin-right: 60px;
    }
    .lyric {
      margin-top: 20px;
      width: 500px;
      height: 570px;
      line-height: 30px;
      overflow: scroll;
    }
  }
}
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.06);
}
.comment {
  margin-top: 50px;
  width: 900px;
}
.active-lyric {
  font-weight: 700;
  font-size: 22px;
}
</style>
