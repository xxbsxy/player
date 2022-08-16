<template>
  <div class="user-detail">
    <div class="left-area">
      <img :src="otherProfile.avatarUrl" alt="" />
    </div>
    <div class="rigth-area">
      <h2>{{ otherProfile.nickname }}</h2>
      <div class="des">
        <div class="account-status">
          <h3>{{ otherProfile.accountStatus }}</h3>
          <p>动态</p>
        </div>
        <div class="follows">
          <h3 @click="toUserFollws(otherProfile.userId, otherProfile.nickname)">
            {{ otherProfile.follows }}
          </h3>
          <p>关注</p>
        </div>
        <div class="followeds">
          <h3 @click="toUserFollweds(otherProfile.userId, otherProfile.nickname)">
            {{ formatPlayCount(otherProfile.followeds) }}
          </h3>
          <p>粉丝</p>
        </div>
      </div>
      <div class="signature">
        <p><span>个人介绍:</span> {{ otherProfile.signature }}</p>
      </div>
    </div>
  </div>
  <h4 class="create-playlist">创建的歌单({{ otherPlaylist.length }})</h4>
  <Playlist :playlists="otherPlaylist" />
</template>

<script>
export default { name: 'UserDetail' }
</script>
<script setup>
import Playlist from '@/components/playlist/Playlist.vue'
import { watch } from 'vue'
import { userStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { formatPlayCount } from '@/utils/formatPlayCount.js'

const route = useRoute()
const router = useRouter()
const store = userStore()
const { otherProfile, otherPlaylist } = storeToRefs(store)
const toUserFollweds = (id, name) => {
  router.push({
    path: '/userFolloweds',
    query: {
      id,
      name
    }
  })
}
const toUserFollws = (id, name) => {
  router.push({
    path: '/userFollows',
    query: {
      id,
      name
    }
  })
}
watch(
  () => route.query.id,
  (newvalue) => {
    if (newvalue && route.path === '/userDetail') {
      store.getUserDetail(newvalue)
      store.getUserSongList(newvalue)
    }
  },
  { immediate: true, deep: true }
)
</script>
<style scoped lang="less">
.user-detail {
  display: flex;
  .left-area {
    margin-left: 30px;
    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
  }
  .rigth-area {
    margin-left: 50px;
    .des {
      display: flex;
      margin-left: -25px;
      p,
      h3 {
        margin: 0;
      }
      h3 {
        cursor: pointer;
      }
      .follows,
      .followeds,
      .account-status {
        width: 80px;
        height: 60px;
        text-align: center;
        p {
          margin-top: 10px;
          color: rgb(104, 104, 104);
        }
      }
    }
    .signature {
      p {
        width: 800px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: rgb(74, 74, 74);
        span {
          font-size: 14;
          color: rgb(74, 74, 74);
        }
      }
    }
  }
}
.create-playlist {
  margin: 0;
  margin-top: 50px;
  margin-left: 20px;
}
</style>
