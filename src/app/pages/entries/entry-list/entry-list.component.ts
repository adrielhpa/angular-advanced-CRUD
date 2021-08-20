import { Entry } from './../shared/entry.model';
import { EntryService } from './../shared/entry.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss'],
})
export class EntryListComponent implements OnInit {
  entries: Entry[] = [];

  constructor(private entryService: EntryService) {}

  ngOnInit(): void {
    this.entryService.getAll().subscribe(
      (responseEntries) => {
        this.entries = responseEntries.sort((a, b) => b.id - a.id);
      },
      (error) => console.log(`ERRO AO CARREGAR A LISTA => ${error}`)
    );
  }

  deleteEntry(entry: any) {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.entryService.delete(entry.id).subscribe(
        () => {
          this.entries = this.entries.filter((element) => element !== entry);
        },
        (error) => {
          alert('ERRO AO EXCLUIR CATEGORY');
          console.log(error);
        }
      );
    }
  }
}
