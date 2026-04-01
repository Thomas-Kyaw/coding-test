export interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    description: string;
    image: string; // api returns http://placeimg.com/480/640/any which is a dead link. the domain was changed to placeimg.dev not placeimg.com
    isbn: string;
    published: string;
    publisher: string;
}
