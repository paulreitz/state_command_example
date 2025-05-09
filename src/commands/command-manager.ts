import Command from './command';
import IncrementCommand from './increment-command';
import DecrementCommand from './decrement-command';
import IncrementByTenCommand from './increment-ten-command';
import DecrementByTenCommand from './decrement-ten-command';
import { Setter } from 'solid-js';

export default class CommandManager {
    private undoStack: Command[] = [];
    private redoStack: Command[] = [];

    constructor(
        private setCount: Setter<number>,
        private hasUndo: Setter<boolean>,
        private hasRedo: Setter<boolean>,
    ) {}

    private updateUndoRedoState() {
        this.hasUndo(!!this.undoStack.length);
        this.hasRedo(!!this.redoStack.length);
    }

    public undo() {
        if (this.undoStack.length) {
            const command = this.undoStack.pop()!;
            command.undo();
            this.redoStack.push(command);
            this.updateUndoRedoState();
        }
    }

    public redo() {
        if (this.redoStack.length) {
            const command = this.redoStack.pop()!;
            command.execute();
            this.undoStack.push(command);
            this.updateUndoRedoState();
        }
    }

    private executeCommand(command: Command) {
        command.execute();
        this.undoStack.push(command);
        this.redoStack = [];
        this.updateUndoRedoState();
    }

    public increment() {
        const command = new IncrementCommand(this.setCount);
        this.executeCommand(command);
    }

    public decrement() {
        const command = new DecrementCommand(this.setCount);
        this.executeCommand(command);
    }

    public incrementByTen() {
        const command = new IncrementByTenCommand(this.setCount);
        this.executeCommand(command);
    }

    public decrementByTen() {
        const command = new DecrementByTenCommand(this.setCount);
        this.executeCommand(command);
    }
}