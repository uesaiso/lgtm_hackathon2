<template lang="pug">
  #app
    nav.navbar.navbar-light.border-bottom.border-black.mb-4(:class="{'d-none': $route.name === 'home'}")
      .container
        router-link.middle-align.navbar-brand(:to="{name: 'home'}")
          img(src="@/assets/logo.png").logo
    .container
      router-view
</template>


<style lang="scss" scoped>
.logo {
  height: 3rem;
}
</style>


