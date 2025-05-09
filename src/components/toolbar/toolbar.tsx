import { Component } from 'solid-js';
import { Button } from '@suid/material';
import { Stack, Grid } from '@suid/material';
import { hasUndo, hasRedo, commandManager } from '../../state/state';

import styles from './toolbar.module.scss';

const Toolbar: Component = () => {
    const increment = () => {
        commandManager.increment();
    };

    const decrement = () => {
        commandManager.decrement();
    };

    const incrementByTen = () => {
        commandManager.incrementByTen();
    };

    const decrementByTen = () => {
        commandManager.decrementByTen();
    };

    const undo = () => {
        commandManager.undo();
    };

    const redo = () => {
        commandManager.redo();
    };

    return (
        <div class={styles.container}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Button variant="contained" fullWidth onClick={increment}>+1</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" fullWidth onClick={incrementByTen}>+10</Button>
                </Grid>
                <Grid item xs={4}>
                    <Stack direction="row" justifyContent="flex-end">
                        <Button variant="outlined" onClick={undo} disabled={!hasUndo()}>Undo</Button>
                    </Stack>
                </Grid>
                
                <Grid item xs={4}>
                    <Button variant="contained" fullWidth onClick={decrement}>-1</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" fullWidth onClick={decrementByTen}>-10</Button>
                </Grid>
                <Grid item xs={4}>
                    <Stack direction="row" justifyContent="flex-end">
                        <Button variant="outlined" onClick={redo} disabled={!hasRedo()}>Redo</Button>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    );
}

export default Toolbar;