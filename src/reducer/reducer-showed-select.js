const reducerShowedSelect = (state = false, action) => {
    switch (action.type) {
        case 'IS_SHOWED_SELECT':
            return action.select;
        default:
            return state;
    }
}

export default reducerShowedSelect;