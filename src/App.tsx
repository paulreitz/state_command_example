import type { Component } from 'solid-js';
import styles from './App.module.scss';

import Toolbar from './components/toolbar/toolbar';
import Display from './components/display/display';

const App: Component = () => {
    return (
        <div class={styles.App}>
            <Toolbar />
            <Display />
        </div>
    );
};

export default App;
