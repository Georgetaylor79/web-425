import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook} from '../book.interface';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books= this.booksService.getBooks();
   }

  ngOnInit(): void {
  }


  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);

    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
    },
    disableClose: true,
    width: '800px'
  })

      console.log(this.book);

      dialogRef.afterClosed().subscribe(result =>{
        if (result === 'confirm') {

        }
    });
  }
}

