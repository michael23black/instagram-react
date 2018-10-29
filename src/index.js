import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import Main from './containers/CMain/CMain.jsx';


import './index.css';

ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();