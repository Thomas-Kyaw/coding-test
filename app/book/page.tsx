import { getAllBooks } from '@/service/bookService';
import Link from 'next/link';
import { Book } from '@/types/book';

export default async function BookPage() {
    const books = await getAllBooks();

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-950 py-10 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Books</h1>
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 uppercase text-xs tracking-wide">
                                <th className="text-left px-5 py-4 font-semibold">Title</th>
                                <th className="text-left px-5 py-4 font-semibold">Author</th>
                                <th className="text-left px-5 py-4 font-semibold">Genre</th>
                                <th className="text-left px-5 py-4 font-semibold max-w-xs">Description</th>
                                <th className="text-left px-5 py-4 font-semibold">ISBN</th>
                                <th className="text-left px-5 py-4 font-semibold whitespace-nowrap">Published</th>
                                <th className="text-left px-5 py-4 font-semibold">Publisher</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {books.map((book: Book) => (
                                <tr key={book.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="px-5 py-4 font-medium text-blue-600 dark:text-blue-400 whitespace-nowrap">
                                        <Link href={`/book/${book.id}`} className="hover:underline">
                                            {book.title}
                                        </Link>
                                    </td>
                                    <td className="px-5 py-4 text-gray-700 dark:text-gray-300 whitespace-nowrap">{book.author}</td>
                                    <td className="px-5 py-4">
                                        <span className="inline-block bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-medium px-2.5 py-1 rounded-full">
                                            {book.genre}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-400 max-w-xs">
                                        <p className="line-clamp-2">{book.description}</p>
                                    </td>
                                    <td className="px-5 py-4 text-gray-500 dark:text-gray-400 font-mono text-xs whitespace-nowrap">{book.isbn}</td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-400 whitespace-nowrap">
                                        {new Date(book.published).toLocaleDateString('en-GB')}
                                    </td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-400 whitespace-nowrap">{book.publisher}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
