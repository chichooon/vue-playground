<template>
  <h1>{{ n }}</h1>
  <div class="message-wrapper">
    {{ message }}
  </div>
  <input type="text" v-model="message" />
</template>

<script lang="ts">
let intervalID: number;

export default {
  data: function () {
    return {
      n: 0,
      message: '',
    };
  },
  methods: {
    add: function () {
      this.n += 1;
    },
  },
  mounted: function () {
    intervalID = setInterval(() => {
      this.add();
    }, 1000);
  },
  unmounted: function () {
    clearInterval(intervalID);
  },
};
</script>

<style scoped lang="scss">
.message-wrapper {
  height: 20px;
}
</style>
