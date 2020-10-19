<!--
 * @Author: Vhen
 * @Date: 2020-10-10 13:58:28
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-19 10:11:46
 * @Description:
-->
<template>
  <div class="home container">
    home
{{message}}
{{host}}
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {},
  data() {
    return {
      message: '撒地方建设的福建师范',
      host: ''
    };
  },
  computed: {},
  components: {},
  methods: {},
  mounted(){
    this.host = process.env.NODE_ENV
  },
  watch: {}
}
</script>
<style lang='scss' scoped>
.home{
  font-size: 18px;
  color: red;
}
</style>
