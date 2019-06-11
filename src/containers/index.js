import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
// import CreateUser from '../components/createUser';
import showList from './showlist';
// import EditUser from '../components/editUser';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    render() {
        return <BrowserRouter>
        <div>
            <Route >
                <Route exact={true} path='/' component={showList} />
                {/* <Route path='/createuser' component={CreateUser}/> */}
                {/* <Route path='/edituser/:userId' component={EditUser}/> */}
            </Route>
        </div>
        </BrowserRouter>
    }
}
export default App;