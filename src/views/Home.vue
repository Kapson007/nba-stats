<template>
  <div class="wrapper">
    <Title text="NBA players stats by balldontlie.io"></Title>
    
    <div class="players" v-if="players.length">
      <table class="players__table table" >
            <thead class="table__head head">
              <th class="head__name">Name</th>
              <th class="head__surname">Surname</th>
            </thead>
            <tbody class="players__body body">
              
              <tr class="body__info player" v-for="player in players" :key="player.id">
                <td class="body__data" ><router-link :to="{name: 'PlayerStat', params: {id: player.id,name: player.first_name, surname: player.last_name, club: player.team.full_name}}" >{{player.first_name}}</router-link></td>
                <td class="body__data"><router-link :to="{name: 'PlayerStat', params: {id: player.id,name: player.first_name, surname: player.last_name, club: player.team.full_name}}" >{{player.last_name}}</router-link></td>
              </tr>
            </tbody>
            
          </table>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import {getPlayers} from '../functions/getPlayers';
import Title from '../components/Title.vue';
import PlayerStat from '../views/PlayerStat.vue';
import {Player} from  '../types/player';

export default defineComponent({
  name: 'Home',
  components: {
    Title, PlayerStat
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
    position: relative;
    left: 300px;
    display: block;
    height: 500px;
    width: 40vw;
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

    .head{
      position: fixed;
      top: 105px;
    }

    &__head{
      display: flex;
      justify-content: space-around;
      width: 577px;
      height: 55px;
      background: $candy-pink;
      border-radius: 5px;
      
    }

    .head__name, .head__surname{
      padding: 1rem 2rem;
      text-transform: uppercase;
      letter-spacing: .1rem;
      font-size: 1.9rem;
      font-weight: 700;
      
      color: $gray;
    }

    .body{
      
      &__data{
        padding: 1rem 2rem;
        color: $white;
        font-weight: 500;
        text-align: center;

      }

      &__data:hover{
        color: $crismon;
      }

      &__info:nth-child(odd){
        background: $blue;
      }
      &__info:nth-child(even){
        background: $tufts-blue;
      }
    }
  }

  .body__data a{
    text-decoration: none;
    color: inherit;
  }


</style>
