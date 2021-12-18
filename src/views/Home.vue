<template>
  <div class="wrapper">
    <Title/>
    
    <div class="players" v-if="players.length">
      <table class="players__table table" >
            <thead class="table__head head">
              <th class="head__name">Name</th>
              <th class="head__surname">Surname</th>
            </thead>
            <tbody class="players__body body">
              <tr class="body__info player" v-for="player in players" :key="player.id">
                <td class="body__data">{{player.first_name}}</td>
                <td class="body__data">{{player.last_name}}</td>
              </tr>
            </tbody>
            
          </table>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {getPlayers} from '../functions/getPlayers';
import Title from '../components/Title.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Title
  },
  setup() {
    const players = getPlayers(`https://www.balldontlie.io/api/v1/players`);
    console.log(players);

    return {players}
  }

  
});
</script>

<style lang="scss">
@import '../assets/variables.scss';

  .players{
    display: block;
    
    height: 500px;
    overflow-y: scroll;
    border: 2px solid $indigo;
    border-radius: 5px;
    box-shadow: 0 0 5px $indigo;
  }

  .wrapper{
    height: 50vh;
    display: grid;
    align-items: center;
    // align-content: center;
    justify-content: center;
    
  }

  .table{
    position: relative;
    border-collapse: collapse;
    box-shadow: 0px 0px 10px $gray;
    
    box-sizing: border-box;
    text-align: left;
    height: 200px;
    width: 100%;
    
  


    &__head{
      box-shadow: 0px 5px 10px $blue;
      
    }

    .head__name, .head__surname{
      padding: 1rem 2rem;
      text-transform: uppercase;
      letter-spacing: .1rem;
      font-size: 1.9rem;
      font-weight: 700;
      background: $candy-pink;
      color: $gray;
    }

    .body{
      
      &__data{
        padding: 1rem 2rem;
        color: $white;
        font-weight: 500;

      }
      &__info:nth-child(odd){
        background: $blue;
      }
      &__info:nth-child(even){
        background: $tufts-blue;
      }
    }
  }


</style>
