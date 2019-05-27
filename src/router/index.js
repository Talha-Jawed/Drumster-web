import React, { Component } from 'react';
import { Router, Route, Link } from "react-router-dom";
import Drumster from '../component/Drumster'
import Menu from '../component/Menu'
import QA from '../component/Q&A'
import TermAndCondition from '../component/TermAndCondition'
import history from '../history'

class Routers extends Component {

    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Drumster} />
                    <Route path='/Menu' component={Menu} />
                    <Route path='/Q&A' component={QA} />
                    <Route path='/TermAndCondition' component={TermAndCondition} />
                </div>
            </Router>
        )
    }

}
export default Routers;