<template>
  <div :style="styles">
    <h1 v-if="title">{{ title }}</h1>
    <p v-if="msg">{{ msg }}</p>
    <img class="icon" v-if="icon" :src="icon" alt="hey">
    <h3 v-if="info">{{info}}</h3>
    <canvas
      :width="width"
      :height="height"
      v-if="isChart"
      id="myChart"
      ref="myChart"
    ></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  name: "Widget",
  props: {
    msg: {
      type: String,
      required:true
    },
    title: {
      type: String,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    isChart: {
      type: Boolean,
    },
    rules: {
      type: Object,
    },
    rows: {
      type: Number,
      default: 1,
    },
    columns: {
      type: Number,
      default: 1,
    },
    rowStart : {
      type: Number,
     
    },
    columnStart : { 
      type: Number,
      
    },align : {
      type:String,
      default:'center'
    },icon : {
      type:String,
    },info : {
      type:String
    }
  },
  methods: {
    chartMaker: async function (rules) {
      // console.log(`we have ${type} and ${data}`);

      if (rules) {
       
        const ctx = this.$refs["myChart"];
        
        let myChart = await new Chart(ctx, rules);

        console.log(myChart);
      }
    },
  },
  mounted() {
    console.log(this.$refs);

    console.log(this.isChart);
    if (this.isChart) {
      this.chartMaker(this.rules);
    }
  },
  computed: {
    styles() {
      return {
          "grid-column-end": `span ${this.columns}`,
          "grid-row-end": `span ${this.rows}`,
          "grid-column-start": this.rowStart,
          "grid-row-start": this.columnStart,
          "align-self" : this.align
        

      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin-top:10px ;
  background-color: white;
  padding: 20px;
  border: 1px solid black;
  text-align: center;
  vertical-align: middle;
  align-self: center;
  box-sizing: border-box;
 
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.icon{
  padding: 5px;
  width: 40%;
  height: 50%;
}
</style>
