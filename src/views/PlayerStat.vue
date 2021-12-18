<template>
  <h1>{{id}}</h1>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
export default defineComponent({
  name: 'PlayerStat',
  components: {
    
  },
  props: ['id'],
  setup(props) {
    console.log(props.id);
  }

  
});
</script>

<style>

</style>