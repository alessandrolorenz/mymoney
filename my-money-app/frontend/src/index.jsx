import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './main/app'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
                    && window.__REDUX_DEVTOOLS_EXTENSION__()

// const store = createStore(reducers) // sem o middleware as props ficam undefined pois a promise da URI nao foi resolvida a tempo
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools) //promise retorna uma func, cujo pram é createStore e isso retorna uma func que o param é o reducer
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
            
    , document.getElementById('app'))