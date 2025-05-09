import { Component } from 'solid-js';
import { Typography, Paper, Box } from '@suid/material';
import styles from './display.module.scss';

import { count } from '../../state/state';

const Display: Component = () => {
    return (
        <div class={styles.container}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                <Typography variant="h6" component="div">
                    Count
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <Typography variant="h4" component="div" fontWeight="bold">
                        {count()}
                    </Typography>
                </Box>
            </Paper>
        </div>
    );
};

export default Display;