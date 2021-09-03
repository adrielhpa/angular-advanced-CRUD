import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';
import { Component, OnInit } from '@angular/core';

@Component({ template: '' })
export abstract class BaseResourceListComponent<T extends BaseResourceModel>
  implements OnInit
{
  resources: T[] = [];

  constructor(private baseResourseService: BaseResourceService<T>) {}

  ngOnInit(): void {
    this.baseResourseService.getAll().subscribe(
      (responseEntries) => {
        this.resources = responseEntries.sort((a, b) => b.id - a.id);
      },
      (error) => console.log(`ERRO AO CARREGAR A LISTA => ${error}`)
    );
  }

  deleteResource(resource: any) {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.baseResourseService.delete(resource.id).subscribe(
        () => {
          this.resources = this.resources.filter(
            (element) => element !== resource
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
