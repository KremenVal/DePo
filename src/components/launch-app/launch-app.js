import React from "react";
import './launch-app.css';

const LaunchApp = ({classes}) => {
    classes.push('launch-app');

    return <button className={classes.join(' ')}
                   type="submit">Launch app</button>;
};

export default LaunchApp;