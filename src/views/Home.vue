<template>
  
  <div class="wrapper">
    <div class="" v-if="players.length">
        <div  class="job" v-for="player in players" :key="player.id">
            <div>{{player.id}} {{player.first_name}}</div>
        </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {getPlayers} from '../functions/getPlayers';

export default defineComponent({
  name: 'Home',
  components: {
    
  },
  setup() {
    const players = getPlayers(`https://www.balldontlie.io/api/v1/players`);
    console.log(players);

    return {players}
  }

  
});
</script>

<style lang="scss">
  .home{
    background-color: red;
  }
</style>
