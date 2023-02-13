import React from "react";
import {connect} from "react-redux";
import HeaderLinks from "../header-links";
import HeaderLanguageContainer from "../header-language-container";
import showedAction from "../../../actions/showed-action";
import './header-menu.css';

const HeaderMenu = ({show, showedAction, service, language}) => {
    const selectLanguage = service.getHeaderLanguages()[language].selectLanguage;

    return (
        <div className={'header--container' + (show ? ' show' : '')}
             onClick={() => showedAction(!show)}>
            <div className="header--container-menu"
                 onClick={(event) => event.stopPropagation()}>
                <HeaderLinks/>
                <div className="header--container-languages">
                    <span className="header--container-choose">{selectLanguage}</span>
                    <HeaderLanguageContainer/>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => state,
    mapDispatchToProps = dispatch => ({
        showedAction: (show) => dispatch(showedAction(show))
    });

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
