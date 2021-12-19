<template>
 <!-- <Title :text="player.first_name"/> -->
 <div class="dashboard">
   <div class="bio">
     <h2 class="bio__info">{{name}} {{surname}}</h2>
   </div>
   <div class="club">
      <h3>Club: <span class="club__name">{{club}}</span></h3>
   </div>

   <div class="statistics">
     
   </div>
 </div>
 
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType } from 'vue';
import Title from '../components/Title.vue';
import { Player } from '../types/player';
import {getPlayerStats} from '../functions/getPlayerStats';

export default defineComponent({
  name: 'PlayerStat',
  components: {
    Title
  },
  props: {
      id: {
        required: true,
        type: Number,
      },
      name: {
          required: true,
          type: String
      },
      surname: {
        required: true,
        type: String
      },
      club: {
        required: true,
        type: String
      }
  },
  setup(props) {
    const stats = getPlayerStats(`https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=${props.id}`);
    console.log(stats);
    
  }

  
});
</script>

<style lang="scss">
  @import '../assets/variables.scss';

  @mixin flex{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .dashboard{
    display: grid;
    
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    grid-template-areas: "bio club"
                          "gamesPlayed scoredPoints";
    grid-auto-rows: minmax(100px, auto);
    color: $white-2;

  .bio{
    @include flex;
    grid-area: bio;
    &__info{

        font-size: 3rem;
        font-weight: 600;
        
        padding: 20px;
        
    }
  }
  .club{
    @include flex;
    grid-area: club;
    font-size: 3rem;
  }
  }
  
</style>