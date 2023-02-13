import React, {Component} from "react";
import {connect} from "react-redux";
import Header from "../header/header";
import ExchangeCrypto from "../exchange-crypto/exchange-crypto";
import detectDevice from "../../additional/detect-device";
import deviceAction from "../../actions/device-action";

class App extends Component {
    componentDidMount() {
        window.addEventListener('resize', () => {
            this.props.detectDevice(detectDevice())
        });
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <ExchangeCrypto/>
            </React.Fragment>
        );
    }
}


const mapStateToProps = (state) => state,
    mapDispatchToProps = dispatch => ({
        detectDevice: (device) => dispatch(deviceAction(device))
    });

export default connect(mapStateToProps, mapDispatchToProps)(App);