// eslint-disable-next-line vue/valid-template-root
<template>
  
</template>

<script>
import axios from "axios";

export default {
    name:'async',
data(){
    return{

    }
},
beforeCreate(){
    
},
methods:{
    getData: async ()=>{
       let data = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
       console.log(data);
    }
}
}
</script>

<style>

</style>