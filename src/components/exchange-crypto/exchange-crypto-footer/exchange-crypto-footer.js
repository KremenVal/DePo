import React from "react";
import {connect} from "react-redux";
import './exchange-crypto-footer.css';
import facebook from './img/facebook.svg';
import twitter from './img/twitter.svg';
import instagram from './img/instagram.svg';

const ExchangeCryptoFooter = ({service, language}) => {
    const footer = service.getExchangeCrypto(language);

    return (
        <div className="exchange-crypto--footer">
            <span className="exchange-crypto--down">{footer.down}</span>
            <div className="exchange-crypto--social">
                <span className="exchange-crypto--social-text">{footer.social}</span>
                <ul className="exchange-crypto--social-network">
                    <li>
                        <a href="#"
                           className="exchange-crypto--social-item facebook">
                            <span></span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="exchange-crypto--social-item twitter">
                            <span></span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="exchange-crypto--social-item instagram">
                            <span></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ExchangeCryptoFooter);