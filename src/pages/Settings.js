import React, {Component} from "react";
import {Container} from "native-base";

import {navigationOptions, styles} from "../styles/common";
import {createHeaderButton} from "../components/Header";

export default class Settings extends Component {

    static navigationOptions = navigationOptions;

    render() {
        return(
            <Container>
                {createHeaderButton("Settings", ()=> this.props.navigation.goBack())}
            </Container>
        );

    }
}
