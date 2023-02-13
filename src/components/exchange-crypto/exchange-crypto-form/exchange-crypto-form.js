import React from "react";
import {connect} from "react-redux";
import ExchangeCryptoFromFields from "../exchange-crypto-from-fields";
import ExchangeCryptoFormAmount from "../exchange-crypto-form-amount";
import 'react-phone-number-input/style.css'
import './exchange-crypto-form.css';

const ExchangeCryptoForm = ({language, service, sendReceive}) => {
    const data = service.getExchangeCrypto(language),
        {actions, continueTrans} = data;

    return (
        <div className="exchange-crypto--transfer">
            <form className="exchange-crypto--form"
                  action="#">
                <div className="exchange-crypto--arrow green"></div>
                <div className="exchange-crypto--form-wrapper">
                    <div className="exchange-crypto--form-actions">
                        {actions.map((action, index) => {
                            return <span key={action}
                                         className={'exchange-crypto--form-action' + (sendReceive === index.toString() ? ' selected' : '')}>{action}</span>;
                        })}
                    </div>
                    <ExchangeCryptoFormAmount/>
                    <ExchangeCryptoFromFields/>
                    <button className="exchange-crypto--form-send" type="submit">{continueTrans}</button>
                </div>
                <div className="exchange-crypto--arrow blue"></div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ExchangeCryptoForm);