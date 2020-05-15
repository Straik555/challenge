import {updatePeopleList} from './updatePeopleList';
import {updateSelectedElement} from './updateSelectedElement';
 
const reducer = (state, action) => {
    return {
        peopleList: updatePeopleList(state, action),
        selectedElement: updateSelectedElement(state, action)
    }
}

export default reducer;