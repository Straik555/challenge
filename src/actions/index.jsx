const peopleLoaded = (newPersons) => {
    return {
        type: 'FETCH_PEOPLE_SUCCESS',
        payload: newPersons
    }
}

const peopleRequested = () => {
    return {
        type: 'FETCH_PEOPLE_REQUEST'
    }
}

const peopleError = (error) => {
    return {
        type: 'FETCH_PEOPLE_FAILURE',
        payload: error
    }
}

const fetchPeoples = (peoplestoreService) => () => (dispatch) => {
    dispatch(peopleRequested());
    peoplestoreService.getPerson()
        .then(data => dispatch(peopleLoaded(data)))
        .catch(err => dispatch(peopleError(err)))
}

const peopleItem = (peopleId) => {
    return {
        type: 'PEOPLE_ITEM',
        payload: peopleId
    }
}

const searchItem = (peopleId) => {
    return {
        type: 'SEARCH_ITEM',
        payload: peopleId
    }
}

const filterButtonName = (peopleId) => {
    return {
        type: 'FILTER_BUTTON_NAME'
    }
}

const filterButtonAge = (peopleId) => {
    return {
        type: 'FILTER_BUTTON_AGE',
        payload: peopleId
    }
}

const filterButtonReset = () => {
    return {
        type: 'FILTER_BUTTON_RESET'
    }
}

export {
    fetchPeoples,
    peopleItem,
    searchItem,
    filterButtonName,
    filterButtonAge,
    filterButtonReset
}