import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainPage from './components/MainPage';
import './index.less';
import registerServiceWorker from './registerServiceWorker';

/**
 * Site root
 */
ReactDOM.render(<MainPage/>,document.getElementById('root') as HTMLElement);
registerServiceWorker();
