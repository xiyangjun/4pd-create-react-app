import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { getDemo, setDemoData, DemoActions } from '../action/demo.action';
import DemoComponent from '../component/demo.component';
import { AppState } from '../reducer';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state: AppState) => {
    return state.monitor;
};

const mapDispatchToProps = (dispatch: Dispatch<DemoActions>) => ({
    actions: bindActionCreators(
        {
                getDemo,
                setDemoData,
        },
        dispatch
    ),
});


const connector = connect(mapStateToProps, mapDispatchToProps);

export type DemoComponentProps = ConnectedProps<typeof connector>;

export default withRouter(connector(DemoComponent))
