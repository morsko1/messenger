import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import LayoutChatsList from './LayoutChatsList';
import LayoutChat from './LayoutChat';
import NotFound from './NotFound';

const App = () => (
    <div className={'app-container'}>
        <main>
            <Switch>
                <Route exact path='/'><Redirect to={{pathname: '/chats'}} /></Route>
                <Route exact path='/chats' component={LayoutChatsList} />
                <Route exact path='/chats/:id' component={LayoutChat} />
                <Route component={NotFound} />
            </Switch>
        </main>
    </div>
);

export default App;
