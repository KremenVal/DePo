import Service from "../services/service";

const reducerService = (state = new Service(), action) => {
    switch (action.type) {
        case 'SERVICE':
            return action.service;
        case 'GET_HEADER':
            return action.payload;
        default:
            return state;
    }
}

export default reducerService;