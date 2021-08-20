import { CategoryService } from './../../categories/shared/category.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Entry } from './entry.model';

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  private API: string = 'api/entries';

  constructor(
    private http: HttpClient,
    private categoryService: CategoryService
  ) {}

  getAll(): Observable<Entry[]> {
    return this.http
      .get<Entry>(this.API)
      .pipe(catchError(this.handleError), map(this.jsonDataToEntries));
  }

  getById(id: number): Observable<Entry> {
    return this.http
      .get(`${this.API}/${id}`)
      .pipe(catchError(this.handleError), map(this.jsonDataToEntry));
  }

  create(entry: Entry): Observable<Entry> {
    return this.categoryService.getById(entry.categoryId).pipe(
      mergeMap((category) => {
        entry.category = category;

        return this.http
          .post<Entry>(this.API, entry)
          .pipe(catchError(this.handleError), map(this.jsonDataToEntry));
      })
    );
  }

  update(entry: Entry): Observable<Entry> {
    return this.categoryService.getById(entry.categoryId).pipe(
      mergeMap((category) => {
        entry.category = category;

        return this.http.put<Entry>(`${this.API}/${entry.id}`, entry).pipe(
          catchError(this.handleError),
          map(() => entry)
        );
      })
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.API}/${id}`).pipe(
      catchError(this.handleError),
      map(() => null)
    );
  }

  //PRIVATE METHODS
  private jsonDataToEntries(jsonData: any[]): Entry[] {
    const entries: Entry[] = [];
    jsonData.forEach((element) => {
      const entry = Object.assign(new Entry(), element);
      entries.push(entry);
    });
    return entries;
  }

  private jsonDataToEntry(jsonData: any): Entry {
    return Object.assign(new Entry(), jsonData);
  }

  private handleError(error: any): Observable<any> {
    console.log('ERRO NA REQUISIÇÃO => ', error);
    return throwError(error);
  }
}
