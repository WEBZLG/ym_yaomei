<template>
  <div>
    <van-tabbar fixed route v-model="active" @change="handleChange" active-color="#314454" inactive-color="#c3c3c3">
      <van-tabbar-item v-for="(item, index) in data" :to="item.to" :key="index">
        <span>{{ item.title }}</span>
        <template #icon="props">
          <img :src="props.active ? item.active : item.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  export default {
    name: 'TabBar',
    props: {
      defaultActive: {
        type: Number,
        default: 0
      },
      data: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    data() {
      return {
        active: this.defaultActive
      }
    },
    methods: {
      handleChange(value) {
        this.$emit('change', value)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
