import React, {Component} from 'react';
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import NotFoundView from '../components/index.jsx';
import * as navigation from '~/common/navigation.js';

class NotFound extends Component {
    render() {
        return (
            <NotFoundView goToHomePage={this.props.goToHomePage} />
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        goToHomePage: navigation.goToHomePage
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
