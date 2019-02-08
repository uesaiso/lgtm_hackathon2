<template lang="pug">
  #theme
    h2.font-weight-bold 「{{content}}」に対する返答
    .row.mt-5
      answerItem.col-md-4.mb-3(v-for="answer in answers" :answer-data="answer" :key="answer.answer_id")
</template>

<script>
export default {
  name: "theme",
  components: {
    'answerItem': () => import(/* webpackChunkName: "answerItem" */ '@/components/AnswerItem.vue')
  },
  created() {
    this.$http.get('/themes/'+this.$route.params.themeId)
      .then((response) => {
        this.answers = response.data.records
        this.content = response.data.content
      })
      .catch((error) => {
        window.alert(error)
    })
  },
  data() {
    return {
      answers: [],
      content: ""
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
