import * as actions from '../actions/redux.actions';

const initialState = {
    loading: true
};

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_INITIAL_DATA:
            return {
                ...state,
                loading: false
            };
        default:
            return state
    }
}

export default homeReducer;
