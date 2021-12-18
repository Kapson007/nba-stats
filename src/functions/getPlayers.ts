import {ref} from 'vue';


const getPlayers = (url : string) =>{
    const documents = ref(null);
    fetch(url)
    .then(response => response.json())
    .then(data => documents.value = data)
    .catch(err => console.log(err.message));

    return documents;
}

export {getPlayers};