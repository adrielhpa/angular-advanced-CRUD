import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private API: string = 'api/categories';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Category[]> {
    return this.http
      .get<Category>(this.API)
      .pipe(catchError(this.handleError), map(this.jsonDataToCategories));
  }

  getById(id: number): Observable<Category> {
    return this.http
      .get(`${this.API}/${id}`)
      .pipe(catchError(this.handleError), map(this.jsonDataToCategory));
  }

  create(category: Category): Observable<Category> {
    return this.http
      .post<Category>(this.API, category)
      .pipe(catchError(this.handleError), map(this.jsonDataToCategory));
  }

  update(category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.API}/${category.id}`, category).pipe(
      catchError(this.handleError),
      map(() => category)
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.API}/${id}`).pipe(
      catchError(this.handleError),
      map(() => null)
    );
  }




  //PRIVATE METHODS
  private jsonDataToCategories(jsonData: any[]): Category[] {
    const categories: Category[] = [];
    jsonData.forEach((element) => categories.push(element as Category));
    return categories;
  }

  private jsonDataToCategory(jsonData: any): Category {
    return jsonData as Category;
  }

  private handleError(error: any): Observable<any> {
    console.log('ERRO NA REQUISIÇÃO => ', error);
    return throwError(error);
  }
}
