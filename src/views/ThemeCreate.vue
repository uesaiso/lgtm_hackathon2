<template lang="pug">
  #themeCreate
    form
      .form-group
        label.h4.font-weight-bold(for="themeInput") ハラスメント
        input#themeInput.form-control(v-model="themeInput" placeholder="とてつもないハラスメント" required)
      .form-group
        label.h4.font-weight-bold(for="modelAnswerInput") 模範回答
        input#modelAnswerInput.form-control(v-model="modelAnswerInput", placeholder="ウィットに富んだ返し", required)
      .mt-4.text-center
        button.btn.btn-primary.u-round.btn-lg.px-4.mt-4(type="submit" @click="submit") 送信
</template>

<script>
export default {
  name: "newTheme",
  methods: {
    submit() {
      if(this.input=="" || this.modelAnswerInput=="") {
        return
      }
      this.$http.post("/themes", {
        content: this.themeInput,
        model_answer: this.modelAnswerInput
      })
       .then(() => {
          this.$router.push({name: 'home'})
          })
        .catch((error) => {
          window.alert(error)
      })
    }
  },
  data() {
    return {
      themeInput: "",
      modelAnswerInput: ""
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
