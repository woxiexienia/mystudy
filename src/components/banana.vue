<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{  $route.params.color }}</p>
    <router-view/>
    <button @click="getParam">get param</button>
  </div>  
</template>
<script>
export default {
  data () {
    return {
      msg: 'i am banana '
    }
  },
  methods: {
  	getParam (){
  		console.log(this.$route.params)
  	}
  }
}
</script>