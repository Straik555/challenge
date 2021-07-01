
export const updatePeopleList = (state, action) => {
    if(state === undefined){
        return {
            people: [],
            loading: true,
            error: null
        }
    }
    switch(action.type){
        case 'FETCH_PEOPLE_REQUEST':
            return {
                people: [],
                loading: true,
                error: null
            };

        case 'FETCH_PEOPLE_SUCCESS':
            return{
                people: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_PEOPLE_FAILURE':
            return {
                people: [],
                loading: false,
                error: action.payload
            }
        
        default:
            return state.peopleList;
    }
}
