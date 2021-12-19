import {ref, TrackOpTypes} from 'vue';
import { Stats } from '@/types/stats';
// const stats: Array<Stats> = [];
const stats = ref<Stats[]>([]);
const getPlayerStats = (url: string) =>{
    
    fetch(url)
    .then(response => response.json())
    .then(resource => stats.value = resource.data)
    .catch(err => console.log(err.message));
    return stats;
}

export {getPlayerStats};
