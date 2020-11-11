<!--
 * @Author: Vhen
 * @Date: 2020-10-10 13:58:28
 * @LastEditors: Vhen
 * @LastEditTime: 2020-11-11 13:54:35
 * @Description:
-->
<template>
  <div class="home container">
    首页
    {{ host }}
  </div>
</template>

<script>
export default {
  name: "home",
  props: {},
  data() {
    return {
      message: "",
      host: "",
    };
  },
  computed: {},
  components: {},
  methods: {},
  mounted() {
    this.host = process.env.NODE_ENV;
  },
  watch: {},
};
</script>
<style lang='scss' scoped>
.home {
  font-size: 18px;
  color: red;
}
</style>
