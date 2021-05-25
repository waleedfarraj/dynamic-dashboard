<template>
  <div>
    <h1 v-if="title">{{ title }}</h1>
    <p v-if="msg">{{ msg }}</p>
    <canvas
      v-if="height"
      id="myChart"
      ref="myChart"
      :width="width"
      :height="height"
    ></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
export default {
  name: "Product",
  props : {
        msg : {
            type : String,
        },title : {
            type :String
        },
        width : {
            type : Number
        },
        height : {
            type : Number
        }, isChart :{
             type : Boolean
        },type : {
            type : String
        },data: {
            type : Array
        }
    }, methods:{
        chartMaker : async function (type,data){
            console.log(`we have ${type} and ${data}`);
            
            if(type && data){
              console.log(this.$refs["myChart"]);
                // var ctx = document.getElementById('myChart').getContext('2d');
                const ctx = this.$refs["myChart"];
                console.log(ctx);
              let myChart = await new Chart(ctx, {
                type: type,
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            })
            
            console.log(myChart);
            }

            }
    },
    mounted() {
        
      console.log(this.$refs)
            
        console.log(this.isChart);
        if(this.isChart){
        this.chartMaker(this.type,this.data);
        }
      }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
