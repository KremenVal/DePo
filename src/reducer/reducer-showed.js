const reducerShowed = (state = false, action) => {
    switch (action.type) {
        case 'IS_SHOWED':
            return action.show;
        case 'IS_SHOWED_MENU':
            return action.show;
        default:
            return state
    }
}

export default reducerShowed;