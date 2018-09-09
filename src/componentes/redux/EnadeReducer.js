const INITIAL_STATE = { campoPesquisa:'', tipoPesquisa:'instituicao', performances:[] };
export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ON_LOAD_LIST':
            return {
                performances: action.payload
            }
        case 'ON_SEARCH_LIST':
            return {
                performances: action.payload
            }
        default:
            return state
    }
}
