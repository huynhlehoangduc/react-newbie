import _ from 'lodash';

const initialState = {
    list: [],
    activeHobby: null
}

const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newState = _.cloneDeep(state);
            newState.list.push(action.payload);
            return newState;
        }
        case 'SET_ACTIVE_HOBBY': {
            const newState = _.cloneDeep(state);
            newState.activeHobby = action.payload;
            return newState;
        }
        default:
            return state;
    }
}

export default hobbyReducer;
