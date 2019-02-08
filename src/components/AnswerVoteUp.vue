<template lang="pug">
  #answerUpvote.d-inline
    button.btn-vote.btn.btn-primary.u-round(@click="vote")
      i.far.fa-thumbs-up
    span.text-primary.ml-2 {{count}}
</template>

<script>
export default {
  name: "answerUpvote",
  props: ["answerId", "upvoteCount"],
  data() {
    return {
      count: this.upvoteCount
    }
  },
  methods: {
    vote() {
      this.count++
      this.$http.post('/answers/'+this.answerId+'/upvote')
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
  background-color: $secondary;
  border-color: $secondary;
}
</style>
