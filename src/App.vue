<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>
import Diary from './components/Diary'
export default {
  name: 'Diary',
  components:{Diary}
}
</script>

<style lang="scss" scoped>
</style>
