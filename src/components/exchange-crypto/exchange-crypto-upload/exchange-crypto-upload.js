import React from "react";
import {connect} from "react-redux";
import LaunchApp from "../../launch-app";
import './exchange-crypto-upload.css';

const ExchangeCryptoUpload = ({service, language}) => {
    const footer = service.getExchangeCrypto(language);

    return (
        <div className="exchange-crypto--upload">
            <h1 className="exchange-crypto--upload-title">{footer.main}</h1>
            <LaunchApp classes={['exchange-crypto-btn']}/>
            <span className="exchange-crypto--upload-text">{footer.mainText}</span>
        </div>
    );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ExchangeCryptoUpload);