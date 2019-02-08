<template lang="pug">
  #answerItem
    .card
      .card-body
        h5.font-weight-bold {{answerData.content}}
        .mt-2
          AnswerDownvote(:answer-id="answerData.anwer_id" :downvote-count="answerData.vote.down")
          AnswerUpvote.ml-3(:answer-id="answerData.answer_id" :upvote-count="answerData.vote.up")
        p.h7.card-subtitle.text-muted.mt-2 {{date}}
</template>

<script>
export default {
  name: 'answerItem',
  props: ["answerData"],
  components: {
    AnswerUpvote: () => import(/* webpackChunkName: "answerUpvote" */ '@/components/AnswerVoteUp.vue'),
    AnswerDownvote: () => import(/* webpackChunkName: "answerDownvote" */ '@/components/AnswerVoteDown.vue')
  },
  computed: {
    date() {
      const date = new Date(this.answerData.created_at*1000)
      return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日 ${date.getHours()}:${date.getMinutes()}`
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
