import React, {useState} from "react";
import {connect} from "react-redux";
import selectCryptoAction from "../../../actions/select-crypto-action";
import cryptoCurrencyAction from "../../../actions/crypto-currency-action";
import PhoneInput, {isPossiblePhoneNumber} from "react-phone-number-input";
import './exchange-crypto-from-fields.css';

const ExchangeCryptoFromFields = ({service, language, crypto, currency, selectCrypto, changeCrypto}) => {
    const data = service.getExchangeCrypto(language),
        currencies = service.getCurrencies(),
        {payment, sending, notes, number, placeHolder} = data,
        [phone, setPhone] = useState();
    let itemsCurrencies = [];

    Object.keys(currencies).forEach(key => {
        itemsCurrencies.push(
            <li key={key}
                onClick={() => {selectCrypto(!crypto); changeCrypto(key);}}
                className={'exchange-crypto--form-payment ' + currencies[key].name.toLowerCase()}>
                {currencies[key]['name']}
            </li>
        );
    });

    return (
        <div className="exchange-crypto--form-fields">
            <div className="exchange-crypto--form-item">
                <span className="exchange-crypto--form-text">{payment}</span>
                <div className="exchange-crypto--form-select">
                            <span className={'exchange-crypto--form-selected' + (crypto ? ' show' : '') + ' ' + currencies[currency].name.toLowerCase()}
                                  onClick={() => selectCrypto(!crypto)}>{currencies[currency].name}</span>
                    <ul className={'exchange-crypto--form-list' + (crypto ? ' show' : '')}>
                        {itemsCurrencies}
                    </ul>
                </div>
            </div>
            <div className="exchange-crypto--form-item">
                <span className="exchange-crypto--form-text">{sending}</span>
                <PhoneInput defaultCountry={language.toUpperCase()}
                            required={true}
                            value={phone}
                            autoComplete="false"
                            onChange={setPhone}
                            placeholder={number}
                            onBlur={() => {
                                if (!phone || !isPossiblePhoneNumber(phone)) {
                                    setPhone('');
                                }
                            }}/>
            </div>
            <div className="exchange-crypto--form-item">
                <span className="exchange-crypto--form-text">{notes}</span>
                <input className="exchange-crypto--form-data"
                       placeholder={placeHolder}
                       type="text"/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => state,
    mapDispatchToProps = dispatch => ({
        selectCrypto: (crypto) => dispatch(selectCryptoAction(crypto)),
        changeCrypto: (currency) => dispatch(cryptoCurrencyAction(currency)),
    });

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeCryptoFromFields);