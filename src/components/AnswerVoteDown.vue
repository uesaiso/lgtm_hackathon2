<template lang="pug">
  #answerDownvote(@click="vote").d-inline
    button.btn-vote.btn.btn-secondary.u-round
      i.far.fa-thumbs-down
    span.text-secondary.ml-2 {{count}}
</template>

<script>
export default {
  name: 'answerDownvote',
  props: ["answerId", "downvoteCount"],
  data() {
    return {
      count: this.downvoteCount
    }
  },
  methods: {
    vote() {
      this.count++
      this.$http.post('/answers/'+this.answerId+'/downvote')
        .catch((error) => {
          window.alert(error)
          this.count--
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/base";
.btn:hover {
  background-color: $primary;
  border-color: $primary;
}
</style>
