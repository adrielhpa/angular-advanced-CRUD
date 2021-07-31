import { Category } from './../shared/category.model';
import { CategoryService } from './../shared/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(
      (responseCategories) => {
        this.categories = responseCategories;
      },
      (error) => console.log(`ERRO AO CARREGAR A LISTA => ${error}`)
    );
  }

  deleteCategory(category: any) {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.categoryService.delete(category.id).subscribe(
        () => {
          this.categories = this.categories.filter(
            (element) => element !== category
          );
        },
        (error) => {
          alert('ERRO AO EXCLUIR CATEGORY');
          console.log(error);
        }
      );
    }
  }

}
