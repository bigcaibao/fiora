import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Store from '../store';

import App from './app';
import Login from '../webPc/login/login';
import Signup from '../webPc/signup/signup';
import Chat from '../webPc/main/chat';
import Body from '../webPc/main/chat/body';
import GroupManage from '../webPc/main/linkmanManage/groupManage';

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}
// requires and returns all modules that match
requireAll(require.context('../plugins/', true, /^\.\/.*\.js$/));

ReactDom.render(
    <Provider store={Store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Login} />
                <Route path="login" component={Login} />
                <Route path="signup" component={Signup} />
                <Route path="chat" component={Chat}>
                    <IndexRoute component={Body} />
                    <Route path="body" component={Body} />
                    <Route path="body/:type/:id" component={Body} />
                    <Route path="manage" component={GroupManage} />
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.querySelector('#app')
);
