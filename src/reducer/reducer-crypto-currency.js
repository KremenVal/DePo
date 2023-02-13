const reducerCryptoCurrency = (state = 'BTC', action) => {
    switch (action.type) {
        case 'CRYPTO_CURRENCY':
            return action.currency;
        default:
            return state;
    }
}

export default reducerCryptoCurrency;