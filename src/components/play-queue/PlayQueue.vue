<template>
  <div class="queue" v-show="isPlayQueue">
    <h3>播放列表</h3>
    <div class="songs">
      <!-- 播放列表 -->
      <el-table
        :data="state.playlist"
        style="width: 100%"
        @cell-dblclick="toPlayMusic"
        :show-header="false"
        size="small"
      >
        <el-table-column type="index" width="30px" />
        <!-- 歌曲名 -->
        <el-table-column prop="name" width="110px">
          <template #default="scope">
            <p class="song-name">
              <span>{{ scope.row.name }}</span>
            </p>
          </template>
        </el-table-column>
        <!-- 歌手 -->
        <el-table-column width="130px">
          <template #default="scope">
            <p class="singer-colunm">
              <span v-for="(item, index) in scope.row.ar">
                <span class="singer" @click="toSingerDetail(item.id)">{{ item.name }}</span>
                <span v-show="index < scope.row.ar.length - 1">&nbsp;/&nbsp;</span>
              </span>
            </p>
          </template>
        </el-table-column>
        <!-- 时间 -->
        <el-table-column prop="duration">
          <template #default="scope">{{ formatMillisecond(scope.row.dt) }}</template>
        </el-table-column>
      </el-table>
    </div>
    <div @click="closePlayQueue" class="buttom">
      <img src="@/assets/img/footer/playlist.svg" alt class="total-img" />
      <span>收起</span>
    </div>
  </div>
</template>

<script>
export default { name: 'PlayQueue' }
</script>
<script setup>
import { footerStore } from '@/store/footer'
import { storeToRefs } from 'pinia'
import { formatMillisecond } from '@/utils/formatMillisecond'
import state from '../footer/hook/useState'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = footerStore()
const { isPlayQueue } = storeToRefs(store) //是否显示播放列表
//关闭播放列表
const closePlayQueue = () => {
  store.isPlayQueue = false
}
//点击歌手去歌手详情
const toSingerDetail = (id) => {
  router.push({
    path: '/singerDetail',
    query: {
      id
    }
  })
  store.isPlayQueue = false
}
//双击播放音乐
const toPlayMusic = (row) => {
  store.getSongUrl(row.id)
}
</script>
<style scoped lang="less">
.queue {
  position: fixed;
  z-index: 3000;
  width: 350px;
  height: 820px;
  margin-left: 1150px;
  background-color: #ffffff;
  box-shadow: -1px 0px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0 30px 30px 0;
  h3 {
    margin-left: 15px;
  }
  .songs {
    height: 670px;
    .singer {
      cursor: pointer;
      &:hover {
        color: #6ca5fe;
      }
    }
    .singer-colunm {
      width: 120px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .song-name {
      width: 100px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .buttom {
    margin-top: 40px;
    margin-left: 260px;
    cursor: pointer;
    span {
      position: relative;
      left: 5px;
      bottom: 8px;
    }
  }
}
</style>
