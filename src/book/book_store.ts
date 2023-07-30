import { IBook } from "./book"

type FetchArg = {
    id: number;
}
type DeleteArg = FetchArg;
type SaveArg = { book: IBook }

export interface IBookStore {
    fetchAll(): IBook[];
    fetch({ id }: FetchArg): IBook | undefined;
    save({ book }: SaveArg): void;
    delete({ id }: DeleteArg): void;
}

export class InMemoryBookStore implements IBookStore {
    data = new Map<number, IBook>();
    constructor() {
        this.data.set(1, { id: 1, title: "Non", author: "Non" })
    }

    fetchAll(): IBook[] {
        let result: IBook[] = []
        for (let book of this.data.values()) {
            result.push(book);
        }
        return result
    };

    fetch({ id }: FetchArg): IBook | undefined {
        return this.data.get(id);
    };

    save({ book }: SaveArg): void {
        this.data.set(book.id, book);
    };

    delete({ id }: DeleteArg): void {
        if (this.data.has(id)) {
            this.data.delete(id);
        }
    }
}
