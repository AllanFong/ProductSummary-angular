using Summaries.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Summaries.Data.Services
{
    public interface IBookService
    {
        List<Book> GetAllBook();
        Book GetBookById(int id);

        void UpdateBook(int id, Book newBook);

        void DeleteBook(int id);

        void AddBook(Book newBook);
    }
}
