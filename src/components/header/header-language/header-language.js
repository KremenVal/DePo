import React from "react";
import './header-language.css';

const HeaderLanguage = ({languages}) => {
    return languages.map((item) => {
        const {language, image, text, onclick, onSelect, selected} = item,
            languageText = text ? <span className={'header--container-lang-text' + (selected ? ' selected' : '')}>{text}</span> : null;

        return (
            <div className={'header--container-selected' + (selected ? ' selected' : '')}
                 onClick={() => {onclick(language); onSelect(false)}}
                 key={language}>
                <img src={image}
                     className="header--container-lang-img"
                     alt={language}/>
                {languageText}
            </div>
        );
    });
}

export default HeaderLanguage;
