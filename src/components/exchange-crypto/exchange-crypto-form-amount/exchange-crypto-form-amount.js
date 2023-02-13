import React from "react";
import {connect} from "react-redux";
import sendReceiveAction from "../../../actions/send-receive-action";
import './exchange-crypto-form-amount.css';

const ExchangeCryptoFormAmount = ({service, currency, sendReceive, sendAction}) => {
    const currencies = service.getCurrencies();

    return (
        <div className="exchange-crypto--form-amount">
            <div className="exchange-crypto--form-convert">
                <div className="exchange-crypto--form-value">
                    $
                    <div contentEditable={true}
                         suppressContentEditableWarning={true}
                         className="exchange-crypto--form-currency">0.0</div>
                </div>
                <span className="exchange-crypto--form-crypto">1 {currency} ≈ ${currencies[currency].cost}</span>
            </div>
            <button className="exchange-crypto--form-change"
                    onClick={(e) => {
                        e.preventDefault();
                        sendAction((+!parseInt(sendReceive)).toString())
                    }}
                    type='submit'></button>
        </div>
    );
};

const mapStateToProps = (state) => state,
    mapDispatchToProps = dispatch => ({
        sendAction: (sendReceive) => dispatch(sendReceiveAction(sendReceive)),
    });

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeCryptoFormAmount);