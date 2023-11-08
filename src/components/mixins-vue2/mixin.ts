const testMixin = (message: string) => ({
  data: function () {
    return {
      message,
    };
  },
  methods: {
    testMixin() {
      console.log('testMixin');
    },
  },
  created: function () {
    console.log('Mixin created');
  },
});

export default testMixin;
