import { createSignal } from 'solid-js';
import CommandManager from '../commands/command-manager';

const [count, setCount] = createSignal<number>(0);
const [hasUndo, setHasUndo] = createSignal<boolean>(false);
const [hasRedo, setHasRedo] = createSignal<boolean>(false);

const commandManager = new CommandManager(
    setCount,
    setHasUndo,
    setHasRedo,
);

export {
    count,
    hasUndo,
    hasRedo,
    commandManager
};