<template>
<div class="wrap">
  <commonHeader>
    <router-views></router-views>
  </commonHeader>
  <router-view/>
</div>

</template>
<script>
import commonHeader from '@/components/common/headerComponent.vue'
export default {
  components: {
    commonHeader
  },
  setup () {

  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
