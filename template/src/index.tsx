import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import "css/view-sass/index.scss";
import reportWebVitals from './reportWebVitals';
import App from './pages/MonoPage'
import ErrorBoundary from './error/ErrorBoundary';
//import Param from './paramEnv/navParam'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ErrorBoundary>
        <Suspense fallback={<h1>Chargement...</h1>}>

            <App />
        </Suspense>

    </ErrorBoundary>

);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
