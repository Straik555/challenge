const newItem = (people, filter) => {
    if(filter === 0){
        return []
    }
    return people.filter(i => {
        return i.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
    })
}

const searchItem = (state, action) => {
    const {peopleList: {people}} = state;
    const item = newItem(people, action)
    return item
}

const selectedItem = (state, peopleId) => {
    const {peopleList: {people}} = state;
        const peoples = people.find(item => item.id === peopleId);
        return peoples
}

const filterUserName = (bol, el) => {
    if(bol){
        return el.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
    } else{
        return el.reverse((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
    }

}

const filterUserAge = (bol, el) => {
    if(bol){
        return el.sort((a, b) => {
            return a.age - b.age
        })
    } else {
        return el.reverse((a, b) => {
            return a.age - b.age
        })
    }
}

const filterName = (state) => {
    const {peopleList: {people}, selectedElement: {search, sortName, filter}} = state;
    if(filter.length !== 0){
        return filterUserName(sortName, filter)
    } else if(search !== undefined && search.length !== 0){
        return filterUserName(sortName, search)
    } else {
        return filterUserName(sortName, people)
    }
}

const filterAge = (state) => {
    const {peopleList: {people}, selectedElement: {search, sortName, filter}} = state;
    if(filter.length !== 0){
        return filterUserAge(sortName, filter)
    }
    if(search !== undefined && search.length !== 0){
        return filterUserAge(sortName, search)
    }
    return filterUserAge(sortName, people);
}

const filterReset = (state) => {
    const {peopleList: {people}} = state;
    return people.sort((a, b) => {
        return a.id - b.id
    })
}

export const updateSelectedElement = (state, action) => {
    
    if(state === undefined){
        return {
            peopleId: [],
            search: [],
            filter: [],
            sortName: true
        }
    };

    switch(action.type){
        case 'PEOPLE_ITEM':
            return {
                peopleId: selectedItem(state, action.payload),
                search: [],
                filter: []
            }

        case 'SEARCH_ITEM':
            return {
                search: searchItem(state, action.payload),
                peopleId: [],
                filter: []
            };

        case 'FILTER_BUTTON_NAME':
            return {
                search: [],
                peopleId: [],
                filter: filterName(state),
                sortName: !state.selectedElement.sortName
            }

        case 'FILTER_BUTTON_AGE':
            return {
                search: [],
                peopleId: [],
                filter: filterAge(state),
                sortName: !state.selectedElement.sortName
            }

        case 'FILTER_BUTTON_RESET':
            return {
                search: [],
                peopleId: [],
                filter: filterReset(state),
                sortName: true
            }

       default:
            return state.selectedElement; 
    }

}
