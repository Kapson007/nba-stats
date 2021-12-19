<template>
  <h1 class="title">{{text}}</h1>
</template>

<script>
import '../assets/variables.scss'
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'Title',
  components: {
    
  },
  props: {
    text: String
  }
});
</script>

<style lang="scss">
@import '../assets/variables.scss';

    .title{
        font-size: 4rem;
        font-weight: 600;
        background-image: linear-gradient(45deg, $crismon, $indigo);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 20px;
  }


</style>