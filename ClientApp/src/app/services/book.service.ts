import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BookService {
  _baseUrl: string = "api/books";

  constructor(private http: HttpClient) {}

  getAllBook() {
    return this.http.get<Book[]>(this._baseUrl + "/GetBooks");
  }

  addBook(book: Book) {
    return this.http.post(this._baseUrl + "/addbook", book);
  }

  getBookById(id: number) {
    return this.http.get<Book>(this._baseUrl + "/singlebook/" + id);
  }
}
