import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './profile/Main'

export class Router extends Component {
    render() {
        return (
            <>
                <div>
                    <Switch>
                        <Route exact path='/' component={Main} />
                    </Switch>
                </div>
            </>
        )
    }
}

export default Router
