import React from "react";
import {connect} from "react-redux";
import './header-links.css';

const HeaderLinks = ({device, service, language}) => {
    const underline = device === 'desktop' ? <span className="header--container-underline"></span> : '',
        {links} = service.getHeader(language);
    let items = [];

    Object.keys(links).forEach(key => {
        items.push(
            <li key={key} className="header--container-item">
                <a href="src/components/header/header-links/header-links#">{links[key]}</a>
                {underline}
            </li>
        );
    });

    return (
        <ul className="header--container-links">
            {items}
        </ul>
    );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(HeaderLinks);