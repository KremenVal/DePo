import React from "react";
import HeaderLanguage from "../header-language";
import {connect} from "react-redux";
import languageAction from "../../../actions/language-action";
import showedSelectLanguagesAction from "../../../actions/showed-select-languages-action";
import './header-language-container.css';

const HeaderLanguageContainer = ({select, service, language, changeLanguage, isShowedSelect}) => {
    const languages = service.getHeaderLanguages();
    let languagesData = [];

    for (let lang in languages) {
        languagesData.push({
            'language': lang,
            'image': languages[lang].image,
            'text': languages[lang].language,
            'onclick': changeLanguage,
            'onSelect': isShowedSelect,
            'selected': lang === language
        });
    }

    return (
        <div className={'header--container-select' + (select ? ' show' : '')}>
            {<HeaderLanguage languages={languagesData}/>}
        </div>
    );
}

const mapStateToProps = (state) => state,
    mapDispatchToProps = dispatch => ({
        changeLanguage: (language) => dispatch(languageAction(language)),
        isShowedSelect: (select) => dispatch(showedSelectLanguagesAction(select)),
    });

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLanguageContainer);