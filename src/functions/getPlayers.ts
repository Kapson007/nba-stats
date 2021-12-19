import {ref} from 'vue';
import { Player } from '@/types/player';



const getPlayers = (url : string) =>{
    const documents = ref<Player[]>([]);
    fetch(url)
    .then(response => response.json())
    .then(resource => documents.value = resource.data)
    .catch(err => console.log(err.message));
    console.log("arr: ",documents);
    return documents;
}

export {getPlayers};