import R from 'ramda';

function reducer(
    state = {
        showToolbar: false,
        showGroupSetting: false,
        showGroupNotice: false,
    }, 
    action
) {
    switch (action.type) {
        case 'ShowToolbar': {
            let newState = R.clone(state);
            newState.showToolbar = true;
            return newState;
        }
        case 'CloseToolbar': {
            let newState = R.clone(state);
            newState.showToolbar = false;
            return newState;
        }

        case 'OpenGroupSetting': {
            let newState = R.clone(state);
            newState.showGroupSetting = true;
            return newState;
        }
        case 'CloseGroupSetting': {
            let newState = R.clone(state);
            newState.showGroupSetting = false;
            return newState;
        }
        case 'OpenGroupNotice': {
            let newState = R.clone(state);
            newState.showGroupNotice = true;
            return newState;
        }
        case 'CloseGroupNotice': {
            let newState = R.clone(state);
            newState.showGroupNotice = false;
            return newState;
        }
        default: 
            return state;
    }
}

export default reducer;