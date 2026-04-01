import { Book } from '@/types/book';

export async function getAllBooks(): Promise<Book[]> {
    const res = await fetch('https://fakerapi.it/api/v1/books');
    const json = await res.json();
    return json.data;
}

export async function getBookById(id: string): Promise<Book | undefined> {
    const books = await getAllBooks();
    return books.find((b) => String(b.id) === id);
}
