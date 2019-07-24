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

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept()
}
