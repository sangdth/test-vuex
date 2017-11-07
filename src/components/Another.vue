<template>
  <div>
    <button @click="changeState">Add one then display double of "count"</button>
    {{ doubleCount }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      demovuex: 0
    }
  },
  
  computed: {
    ...mapGetters(['doubleCount'])
  },
  methods: {
    changeState: function() {
      this.$store.dispatch('addmore');
    }
  }
}
</script>

<style>

</style>
