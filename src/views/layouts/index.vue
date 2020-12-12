<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer">
      <TabBar :data="tabbars" @change="handleChange" />
    </div>
  </div>
</template>

<script>
  import TabBar from '@/components/TabBar'
  export default {
    name: 'AppLayout',
    data() {
      return {
        tabbars: [{
            title: '首页',
            to: {
              name: 'Home'
            },
            active: require('../../../static/image/home_active.png'),
            inactive: require('../../../static/image/home.png'),
          },{
            title: '动态',
            to: {
              name: 'Dynamic'
            },
            active: require('../../../static/image/dynamic_active.png'),
            inactive: require('../../../static/image/dynamic.png'),
          },
          {
            title: '我的',
            to: {
              name: 'Mine'
            },
            active: require('../../../static/image/mine_active.png'),
            inactive: require('../../../static/image/mine.png'),
          }
        ]
      }
    },
    components: {
      TabBar
    },
    methods: {
      handleChange(v) {
        console.log('tab value:', v)
      }
    }
  }
</script>
