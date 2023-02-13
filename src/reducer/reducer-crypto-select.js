const reducerCryptoSelect = (state = false, action) => {
    switch (action.type) {
        case 'CRYPTO_SELECT':
            return action.crypto;
        default:
            return state;
    }
}

export default reducerCryptoSelect;