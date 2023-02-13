import React from "react";
import {connect} from "react-redux";
import HeaderLinks from "../header-links";
import HeaderLanguage from "../header-language";
import HeaderMenu from "../header-menu";
import HeaderLanguageContainer from "../header-language-container";
import LaunchApp from "../../launch-app";
import showedAction from "../../../actions/showed-action";
import showedSelectLanguagesAction from "../../../actions/showed-select-languages-action";
import './header.css';
import logo from './img/logo.jpg';

const Header = ({language, show, device, select, isShowed, isShowedSelect, service}) => {
    const linksComponent = device === 'desktop' ? <HeaderLinks/> : null,
        menu = device !== 'desktop' ? <HeaderMenu/> : null,
        selectData = [
            {
                language,
                image: service.getHeaderLanguages()[language].image,
                text: null,
                onclick: () => isShowedSelect(!select),
                onSelect: () => {},
                selected: true
            },
        ],
        selectLanguage = device !== 'mobile' ? <HeaderLanguage languages={selectData}/> : null,
        optionsLanguage = device !== 'mobile' ? <HeaderLanguageContainer/> : null;

    return (
        <div className="header">
            <div className="header--wrap">
                <div className="header--logo-links">
                    <img className="header--logo"
                         src={logo}
                         alt="DePO"/>
                    {linksComponent}
                </div>
                {menu}
                <div className="header--buttons">
                    <div className={'header--select-container' + (show ? ' show' : '')}>
                        {selectLanguage}
                        {optionsLanguage}
                    </div>
                    <LaunchApp classes={['header-btn', (show ? 'show' : null)]}/>
                    {device !== 'desktop' ? <button className={'header-list' + (show ? ' show' : '')}
                                                    onClick={() => isShowed(!show)}
                                                    type="submit"></button> : null}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => state,
    mapDispatchToProps = dispatch => ({
        isShowed: (show) => dispatch(showedAction(show)),
        isShowedSelect: (select) => dispatch(showedSelectLanguagesAction(select)),
    });

export default connect(mapStateToProps, mapDispatchToProps)(Header);