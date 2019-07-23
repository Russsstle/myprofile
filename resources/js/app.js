// import './bootstrap'
// import '../sass/app.scss'
// import 'jquery-highlight'
// import 'datatables.net'

import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './content/App'

render(
    <AppContainer>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AppContainer>,
    document.getElementById('app')
)
