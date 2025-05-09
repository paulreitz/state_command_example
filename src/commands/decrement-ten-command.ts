import Command from './command';
import { Setter } from 'solid-js';
import { count } from '../state/state';

export default class DecrementByTenCommand implements Command {
    private prevCount: number;
    private setCount: Setter<number>;

    constructor(setCount: Setter<number>) {
        this.prevCount = count();
        this.setCount = setCount;
    }

    execute(): void {
        this.setCount(this.prevCount - 10);
    }

    undo(): void {
        this.setCount(this.prevCount);
    }
}