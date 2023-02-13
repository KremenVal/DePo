import Service from "../services/service";

const reducerLanguage = (state = Service._default, action) => {
    switch (action.type) {
        case 'LANGUAGE':
            return action.language;
        default:
            return state;
    }
}

export default reducerLanguage;