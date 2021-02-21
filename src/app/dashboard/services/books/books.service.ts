import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBook } from '../../interfaces/IBook';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(environment.path + 'books');
  }
}
