import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import './styles/nifty/css/bootstrap.min.css';
import '../public/assets/nifty/css/bootstrap.min.css'
import '../public/assets/nifty/css/nifty.min.css'
// import './styles/nifty/css/nifty.min.css';

import { HashRouter as Router} from 'react-router-dom';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <Router>
        <App /> 
    </Router>
)



