import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-character',
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent {
  constructor() {
    const jsonString = sessionStorage.getItem("character");
    this.select = JSON.parse(jsonString ? jsonString : "");
    this.description = this.select.description ? this.select.description : this.select.name;
  }

  public select: any;
  public description: string;
}
