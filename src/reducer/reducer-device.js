import detectDevice from "../additional/detect-device";

const reducerDevice = (state = detectDevice(), action) => {
    switch (action.type) {
        case 'VISITED_DEVICE':
            return action.device;
        default:
            return state;
    }
}

export default reducerDevice;