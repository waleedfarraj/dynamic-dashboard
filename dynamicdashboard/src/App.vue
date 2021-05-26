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
// import { defineAsyncComponent } from 'vue'
import data from "./data/config";
export default {
  name: "App",
  components: {
    Product: Product,
  },
  methods: {},
  mounted() {
    console.log("mounting app");
  },
  data() {
    return {
      options: data.sort((a, b) => {
        return a.priorty - b.priorty;
      }),
    };
  },
};
</script>

<style >
html{
background-color: rgba(68, 85, 90, 0.8);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
  /*   
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: stretch; */
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(200px);
  column-gap: 20px;
  row-gap: 15px;

  justify-items: stretch;
  justify-content: stretch;
  grid-auto-flow: row dense;
}
</style>
