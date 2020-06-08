<template>
  <div class="index">
    <md/>
  </div>
</template>

<script>
import md from '../../_documents/test.md'
export default {
  components: {
    md
  },
  setup () {
  }
}
</script>
<style lang="scss" scoped>
.index{
  max-width: 730px;
  margin: 0 auto;
}
</style>
