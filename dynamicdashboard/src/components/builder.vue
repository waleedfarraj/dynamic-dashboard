// eslint-disable-next-line vue/valid-template-root
<template>
  <div id="form">
    <form @submit.prevent="onSubmit">
      <h2>Add a widget</h2>
      <select name="type" v-model="type" id="type" @change="onChange">
        <option
          :key="option.id"
          v-for="option in options"
          :value="option.value"
        >
          {{ option.name }}
        </option>
      </select>
      <input type="text" value="product" id="name" hidden />
      <fieldset v-for="key in keys" :key="key">
        <legend :key="key">{{ key }}</legend>
        <br />
        <input
          :key="key"
          :type="getValues(key)"
          :placeholder="key"
          :id="key"
          value=""
          :ref="key"
        />
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import data from "../data/configurator";
export default {
  data() {
    return {
      options: [
        { name: "HTML", value: "html", id: 0 },
        { value: "chart", name: "Chart", id: 1 },
      ],
      type: "html",
      typeId: 0,
      keys: [],
      config: data,
    
    };
  },
  created() {
    console.log(this.options);
    console.log(this.type);
    console.log(this.typeId);
    this.getFormKeys(data[this.typeId]);
    console.log(data[this.typeId][this.keys[0]]);
  },
  methods: {
    onChange() {
      if (this.type == "html") {
        this.typeId = 0;
      }
      if (this.type == "chart") {
        this.typeId = 1;
      }
      this.getFormKeys(data[this.typeId]);
      console.log(this.type);
    },
    onSubmit() {
      console.log("submit");
      let output = {};
      for (let i = 0; i < this.keys.length; i++) {
        let element = this.keys[i];
        if (output[element] === undefined) output[element] = {};
        output[element] = this.$refs[element].value;
        console.log(this.$refs[element].value);
      }
      console.log(output);
      this.$emit("added", output);
    },
    getFormKeys(object) {
      console.log("getFormKeyscalled");
      let getKeys = (obj, prefix = "") =>
        Object.keys(obj).reduce((res, el) => {
          if (Array.isArray(obj[el])) {
            return res;
          } else if (typeof obj[el] === "object" && obj[el] !== null) {
            return [...res, ...getKeys(obj[el], prefix + el + ".")];
          }
          return [...res, prefix + el];
        }, []);

      let output = getKeys(object);

      output.forEach((e,i) => {
        let splitted = e.split('.')
        splitted.length == 2 ? output[i] = splitted[1] : 0  
      });
        console.log(output);
      // loop over the output check if it contains propData  it some where and remove it .
      // while making the output object

      this.keys = output;
    },
    getValues(key){

      return (this.config[this.typeId][key]) ? (this.config[this.typeId][key]) : (this.config[this.typeId].propsData[key])
    }
  },
  beforeCreate() {
    console.log(data);
  },
};
</script>

<style scoped>
.form {
  width: 500px;
  height: 500px;
  z-index: 10;
  position: absolute;
}
form {
  background-color: white;
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  -moz-text-size-adjust: none;
}

h2,
.muted {
  color: #2c3e5099;
}

h2 {
  font-size: 26px;
  font-weight: 600;
}
</style>