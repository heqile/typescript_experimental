import express, { Request, Response } from "express";
import { InMemoryBookStore } from "../book/book_store"

export const router = express.Router()

const bookStore = new InMemoryBookStore()

router.get("/", (req: Request, res: Response) => {
    let result = bookStore.fetchAll()
    res.json(result)
});

router.get("/:bookId", (req: Request, res: Response) => {
    let result = bookStore.fetch({ id: parseInt(req.params["bookId"]) })
    res.json(result)
});


router.post("/", (req: Request, res: Response) => {
    bookStore.save({ book: req.body })
    let result = bookStore.fetch({ id: req.body.id })
    res.json(result)
});


router.delete("/:bookId", (req: Request, res: Response) => {
    bookStore.delete({ id: parseInt(req.params["bookId"]) })
    res.status(204).send()
});
