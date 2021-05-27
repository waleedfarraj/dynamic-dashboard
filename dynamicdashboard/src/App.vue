<template>
  <header>
    <button id="add" @click="showForm()"><strong>+</strong></button>
  </header>
    <builder  @added="handleSubmit(output)" v-if="formClicked"></builder >
  <section id="widgetContainer">
    <component
      :is="option.name"
      v-for="option in options"
      v-bind="option.propsData"
      :key="option.type"
    ></component>
  </section>
</template>


<script>
import Product from "./components/Widget.vue";
import Builder from "./components/builder";
// import { defineAsyncComponent } from 'vue'
import data from "./data/config";
export default {
  name: "App",
  components: {
    Product: Product,
    Builder: Builder,
  },
  methods: {
    showForm() {
      console.log("sup from showForm");
      this.formClicked = true;
      
    }, handleSubmit(output){
      console.log('submitted');
      console.log('output in app',output);
      this.formClicked = false
      
    }
  },
  mounted() {
    console.log("mounting app");
  },
  data() {
    return {
      options: data.sort((a, b) => {
        return a.priorty - b.priorty;
      }),
      formClicked: false,
      
    };
  },
};
</script>

<style >
html {
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
}
#add {
  position: absolute;
  right: 10%;
  top: 2%;
  width: 50px;
  height: 40px;
  font-size: 2rem;
  vertical-align: middle;
  text-align: center;
}
#widgetContainer {
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
