import React from "react";
import ExchangeCryptoFooter from "../exchange-crypto-footer";
import ExchangeCryptoUpload from "../exchange-crypto-upload";
import ExchangeCryptoForm from "../exchange-crypto-form";
import {connect} from "react-redux";
import './exchange-crypto.css';

const ExchangeCrypto = ({device}) => {
    return (
        <div className="exchange-crypto">
            <div className="exchange-crypto--container">
                <ExchangeCryptoUpload/>
                <ExchangeCryptoForm/>
            </div>
            {device !== 'mobile' ? <ExchangeCryptoFooter/> : null}
        </div>
    );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ExchangeCrypto);