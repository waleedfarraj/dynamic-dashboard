<template>
  <component
    :is="option.type"
    v-for="option in options"
    v-bind="option.propsData"
     :key="option.type"
  ></component>
</template>

<script>
import Product from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    Product,
  },
  data() {
    return {
      options: [
        {
          type: "product",
          propsData: { msg: "Name", isChart: false },
        },
        {
          type: "product",
          text: "Send",

          propsData: { msg: "Send", title: "Html", isChart: false },
        },
        {
          type: "product",
          propsData: {
            width: 500,
            height: 500,
            data: [8, 9, 7, 2, 5],
            type: "bar",
            isChart: true,
          },
        },
      ],
      test: "i am alive",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: grid;

  grid-template-columns: 1pt 1pt 1pt 1pt 1pt 1pt;
  grid-template-rows: 1pt 1pt 1pt 1pt 1pt ;

}
</style>
