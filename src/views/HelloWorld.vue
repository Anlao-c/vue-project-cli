<template>
  <div class="hello">
   HelloWorld
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
    login() {
      let data = {
        phone: this.phone,
        code: this.code
      };
      this.$store.dispatch("Login", data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../styles/common.scss";
@import "../styles/util.scss";
.hello {
  width: rem(20);
}
</style>
