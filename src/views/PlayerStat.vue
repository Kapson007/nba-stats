<template>
 <!-- <Title :text="player.first_name"/> -->
 <div class="dashboard">
   <div class="bio">
     <h2 class="bio__info">{{name}} {{surname}}</h2>
   </div>
   <div class="club">

   </div>
 </div>
 
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType } from 'vue';
import Title from '../components/Title.vue';
import { Player } from '../types/player';
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
      }
  },
  setup(props) {
    const stats = getPlayerStats("https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237");
    onMounted(()=>{
      // console.log(props.player);
    })
  }

  
});
</script>

<style lang="scss">
  @import '../assets/variables.scss';

  .dashboard{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    grid-template-areas: "bio empty"
                          "gamesPlayed scoredPoints";
    grid-auto-rows: minmax(100px, auto);

  .bio{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 2px solid red;
    &__info{

        font-size: 3rem;
        font-weight: 600;
        background-image: linear-gradient(45deg, $crismon, $indigo);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        padding: 20px;
        grid-area: bio;
    }
  }
  }

  
</style>