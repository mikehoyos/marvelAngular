import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-character',
  imports: [CommonModule],
  templateUrl: './bitacora.component.html',
  styleUrl: './bitacora.component.scss'
})
export class BitacoraComponent {
  constructor() {
    console.log("BIT STORAGE ",sessionStorage)
    const jsonString = sessionStorage.getItem("bitacora");
    this.select = JSON.parse(jsonString ? jsonString : "");
    this.bitacora = this.select.character;
  }

  public select: any;
  public bitacora: string;
}
