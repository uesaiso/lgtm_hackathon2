<template lang="pug">
  #themeList
    h2.font-weight-bold ハラスメント一覧
    .row.mt-5
      ThemeItem.col-md-4.mb-3(v-for="theme in themes" :theme-data="theme" :key="theme.theme_id")
</template>

<script>
export default {
  name: "themes",
  components: {
    'ThemeItem': () => import(/* webpackChunkName: "themeItem" */ '@/components/ThemeItem.vue')
  },
  created() {
    this.$http.get('/themes')
      .then((response) => {
        this.themes = response.data
      })
      .catch((error) => {
        window.alert(error)
    })
  },
  data() {
    return {
      themes: []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
