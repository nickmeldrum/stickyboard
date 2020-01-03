import render from 'setup/render';
import initialDataLoad from 'setup/initial-data-load';
import * as serviceWorker from 'setup/serviceWorker';

render();

initialDataLoad();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
