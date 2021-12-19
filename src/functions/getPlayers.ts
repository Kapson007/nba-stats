import {ref} from 'vue';
import { Player } from '@/types/player';
const documents = ref<Player[]>([]);


const getPlayers = (url : string) =>{
    fetch(url)
    .then(response => response.json())
    .then(resource => documents.value = resource.data)
    .catch(err => console.log(err.message));
    console.log("arr: ",documents);
    return documents;
}

export {getPlayers};