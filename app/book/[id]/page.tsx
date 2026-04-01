import { getBookById } from '../../../service/bookService';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function BookDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const book = await getBookById(id);

    if (!book) return notFound();

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-950 py-10 px-6">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/book"
                    className="bg-gray-900 rounded-2xl p-4 inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white mb-8 transition-colors"
                >
                    Back to Books
                </Link>
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
                    <div className="flex gap-8 p-8">
                        <div className="flex flex-col gap-4">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{book.title}</h1>
                                <p className="text-gray-500 dark:text-gray-400 mt-1">{book.author}</p>
                            </div>
                            <span className="inline-block w-fit bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-medium px-3 py-1 rounded-full">
                                {book.genre}
                            </span>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{book.description}</p>
                            <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm mt-2">
                                <div>
                                    <dt className="text-gray-400 dark:text-gray-500 text-xs uppercase tracking-wide font-semibold">ISBN</dt>
                                    <dd className="text-gray-700 dark:text-gray-300 font-mono mt-0.5">{book.isbn}</dd>
                                </div>
                                <div>
                                    <dt className="text-gray-400 dark:text-gray-500 text-xs uppercase tracking-wide font-semibold">Published</dt>
                                    <dd className="text-gray-700 dark:text-gray-300 mt-0.5">{new Date(book.published).toLocaleDateString('en-GB')}</dd>
                                </div>
                                <div>
                                    <dt className="text-gray-400 dark:text-gray-500 text-xs uppercase tracking-wide font-semibold">Publisher</dt>
                                    <dd className="text-gray-700 dark:text-gray-300 mt-0.5">{book.publisher}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
