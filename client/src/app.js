import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import LayoutChatsList from './LayoutChatsList';
import LayoutChat from './LayoutChat';
import NotFound from './NotFound';
import Register from './Register';
import Login from './Login';

const App = () => (
    <div className={'app-container'}>
        <main>
            <Switch>
                {/*<Route exact path='/'><Redirect to={{pathname: '/chats'}} /></Route>
                <Route exact path='/chats' component={LayoutChatsList} />*/}
                <Route exact path='/' component={LayoutChatsList} />
                <Route exact path='/chat' component={LayoutChat} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route component={NotFound} />
            </Switch>
        </main>
    </div>
);

export default App;
