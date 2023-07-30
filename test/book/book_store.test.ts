import { InMemoryBookStore } from "../../src/book/book_store"

describe('Test Store', () => {
    let store: InMemoryBookStore;
    beforeEach(() => {
        store = new InMemoryBookStore();
    });
    it('should save', () => {
        store.save({ "id": 2, "title": "no", "author": "on", "description": "de" })
        let result = store.fetch(2)
        expect(result).toEqual({ "id": 2, "title": "no", "author": "on", "description": "de" })
    });
    it('should delete', () => {
        store.save({ "id": 2, "title": "no", "author": "on", "description": "de" })
        store.delete(2)
        let result = store.fetch(2)
        expect(result).toEqual(undefined)
    })
})

