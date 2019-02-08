<template lang="pug">
  #themeItem
    router-link(:to="{name: 'theme', params: {themeId: themeData.theme_id}}").card.link-decoration-none
      .card-body
        h5.font-weight-bold {{themeData.content}}
        p.card-text 回答数: {{themeData.answers_count}}
        p.h7.card-subtitle.text-muted.mt-2 {{date}}
</template>

<script>
export default {
  name: 'themeItem',
  props: ["themeData"],
  computed: {
    date() {
      const date = new Date(this.themeData.created_at*1000)
      return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日 ${date.getHours()}:${date.getMinutes()}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/base";
.card {
  color: $body-color;
  @include transition($btn-transition);
}
.card:hover {
  color: $primary;
  background-color: $secondary;
}
</style>
