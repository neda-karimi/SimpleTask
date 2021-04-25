<template>
   <div class="container-fluid" dir="rtl">
        <div class="row">
      <ProductContainer v-for="item in getAsalList" :key="item.name" :info="item"/>
    </div>
  </div>
</template>

<script>
import ProductContainer from './components/ProductContainer.vue'
import getProduct from "./components/getProduct.graphql";
export default {
  name: 'App',
  components: {
  ProductContainer
  },
  data(){
    return {
      asal:null
    }
  },
  computed:{
    getAsalList(){
      return this.asal ? this.asal.data.productSearch.products : null
    }
  },
  async created(){
    try {
      const response = await fetch("https://api.basalam.com/user", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ query: getProduct })
      });
      const responseJson = await response.json();
      this.asal = responseJson
    } catch (error) {
      console.log(error)
    }
  }
  
}
</script>

<style>
* {
  /* margin: 0px;
  padding: 0px; */
  box-sizing: border-box;
  direction: rtl;
  font-family: IRANSans;
  /* max-width: 360px; */
}
@font-face {
  font-family: IRANSans;
  font-style: normal;
  font-weight: normal;
  src: url("../fonts/ttfFa/IRANSansWeb(FaNum)_Medium.ttf");
}

body {
     font-family: 'IRANsans' !important;
     background-color: rgb(180, 79, 112);
     
   }
a {
  text-decoration: none;
}
.loading {
  padding: 10px;
  text-align: center;
  background-color: #ffffff;
}
.loadingbutton {
  border: none;
  width: 100%;
  color: white;
  font-size: 16px;
  font-weight: bold;
  height: 48px;
  background-color: rgba(223, 56, 86, 1);
  padding: 15px;
  border-radius: 50px;
  text-align: center;
  margin-top: 220px;
}
h1{
  color: red;
}

</style>
