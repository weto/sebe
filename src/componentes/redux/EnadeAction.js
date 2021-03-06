import axios from 'axios';
import urlApi from '../../config';

const onLoadListService = axios.create({
    baseURL: urlApi,
    timeout: 20000,
});

export async function onLoadList(event){
    const performances = await onLoadListService.get().then((retorno) => {
        return retorno.data.Model;
    })

    return {
        type: 'ON_LOAD_LIST',
        payload: performances
    }
}

export async function onSearchList(event){
    const param = event.tipoPesquisa.concat('-').concat(event.campoPesquisa);
    const performances = await axios.get(urlApi.concat(param)).then((retorno) => {
        return retorno.data.Model;
    })

    return {
        type: 'ON_SEARCH_LIST',
        payload: performances
    }
}


