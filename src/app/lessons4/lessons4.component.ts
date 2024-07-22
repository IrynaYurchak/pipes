import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'app-lessons4',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe, SortPipe],
  templateUrl: './lessons4.component.html',
  styleUrls: ['./lessons4.component.scss']
})
export class Lessons4Component {
  public text = '';
  public addContactVisible = false;
  public editContactVisible = false;
  public firstNameSortDirection: 'asc' | 'desc' | null = null;
  public lastNameSortDirection: 'asc' | 'desc' | null = null;
  public numberSortDirection: 'asc' | 'desc' | null = null;
  public editStatus: boolean = false;
  public firstName = '';
  public lastName = '';
  public number = '';
  private editIndex: number | null = null;
  public lists: IList[] = [
    {
      firstName: 'Petya',
      lastName: 'Zhuk',
      number: '0631111111'
    },
    {
      firstName: 'Petro',
      lastName: 'Petriv',
      number: '0631222222'
    },
    {
      firstName: 'Alejandro',
      lastName: 'Del Rio Albrechet',
      number: '0633333333'
    },
    {
      firstName: 'Vasylyna',
      lastName: 'Vrublevska',
      number: '0635555555'
    },
    {
      firstName: 'Ira',
      lastName: 'Tytar',
      number: '0636666666'
    },
    {
      firstName: 'Sofia',
      lastName: 'Zhuk',
      number: '0637777777'
    }
  ];

  deleteContact(index: number): void {
    if (index >= 0 && index < this.lists.length) {
      this.lists.splice(index, 1);
    }
  }

  sortFirstName(): void {
    this.firstNameSortDirection = this.firstNameSortDirection === 'asc' ? 'desc' : 'asc';
    this.lastNameSortDirection = null;
    this.numberSortDirection = null;
  }

  sortLastName(): void {
    this.lastNameSortDirection = this.lastNameSortDirection === 'asc' ? 'desc' : 'asc';
    this.firstNameSortDirection = null;
    this.numberSortDirection = null;
  }

  sortNumber(): void {
    this.numberSortDirection = this.numberSortDirection === 'asc' ? 'desc' : 'asc';
    this.firstNameSortDirection = null;
    this.lastNameSortDirection = null;
  }

  toggleAddContact(): void {
    this.addContactVisible = !this.addContactVisible;
  }

  saveContact(): void {
    if (this.firstName && this.lastName && this.number) {
      this.lists.push({
        firstName: this.firstName,
        lastName: this.lastName,
        number: this.number
      });
      this.addContactVisible = false; // Закриваємо форму після збереження контакту
      // Скидаємо значення полів після збереження
      this.firstName = '';
      this.lastName = '';
      this.number = '';
    }
  }

  editContact(index: number): void {
    const contact = this.lists[index];
    if (contact) {
      this.firstName = contact.firstName;
      this.lastName = contact.lastName;
      this.number = contact.number;
      this.editIndex = index;
      this.editContactVisible = true;
    }
  }

  updateContact(): void {
    if (this.editIndex !== null && this.editIndex >= 0 && this.editIndex < this.lists.length) {
      this.lists[this.editIndex].firstName = this.firstName;
      this.lists[this.editIndex].lastName = this.lastName;
      this.lists[this.editIndex].number = this.number;
      this.editContactVisible = false; // Закриваємо форму після збереження контакту
      // Скидаємо значення полів після збереження
      this.firstName = '';
      this.lastName = '';
      this.number = '';
      this.editIndex = null;
    }
  }
}

export interface IList {
  firstName: string;
  lastName: string;
  number: string;
}
