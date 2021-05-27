<template>
<Header/>
  <div>
    <button id="add" @click="showForm()"><strong>+</strong></button>
  </div>
    <builder  @added="handleSubmit(output)" @closeForm="closeForm" v-if="formClicked"></builder >
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
import Widget from "./components/Widget.vue";
import Builder from "./components/builder";
import Header from "./components/Header";
import data from "./data/config";
export default {
  name: "App",
  components: {
    Widget: Widget,
    Builder: Builder,
    Header: Header
  },
  methods: {
    showForm() {
      console.log("sup from showForm");
      this.formClicked = true;
      
    }, handleSubmit(output){
     
      console.log('output in app',output);
      this.formClicked = false
      
    },
    closeForm(){
      
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
 * { margin: 0; padding : 0; }

html {
  
  background-color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


  /*   
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: stretch; */
}
#add {
  margin:10px;
  float: right;
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
