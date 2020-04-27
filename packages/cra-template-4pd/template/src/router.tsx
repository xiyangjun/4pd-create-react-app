import React, { memo } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Demo from './react/container/demo.container';

const App: React.FC<{}> = memo((props) => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/' exact>
                        <Demo />
                    </Route>
                </Switch>
            </Router>
        </>
    );
});

export default App;
