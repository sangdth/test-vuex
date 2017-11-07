<template>
  <div class="hello">
    <button @click="displayCount">Fetch the current state</button>
    <h1>{{ current }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      current: 'Click the button :D '
    }
  },
  
  methods: {
    displayCount: function() {
      this.current = this.$store.state.count;
      console.log(this.$store.state.count);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
