<template lang="pug">
  #Home
    .text-center
      img(src="@/assets/logo.png").logo
    p.text-center
      span.h3.font-weight-bold.text-primary web
      span.h4.font-weight-bold.text-primary で体験！
      br
      span.h4.font-weight-bold.text-secondary どきどきハラスメント！
    
    .d-flex.mt-5.justify-content-center
      router-link(:to="{name: 'newTheme'}")
        button.btn.btn-lg.btn-primary._btn-link.u-round.btn-long ハラスメント作成
      router-link(:to="{name: 'themes'}").ml-5
        button.btn.btn-lg.btn-secondary._btn-link.u-round.btn-short 回答をみる
</template>

<script>
export default {
  name: 'home',
}
</script>

<style lang="scss" scoped>
._btn-link {
  width: 3rem;
}
.logo {
  max-width: 80vw;
}
</style>
