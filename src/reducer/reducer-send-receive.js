const reducerSendReceive = (state = '0', action) => {
    switch (action.type) {
        case 'SEND_RECEIVE':
            return action.sendReceive;
        default:
            return state;
    }
};

export default reducerSendReceive;