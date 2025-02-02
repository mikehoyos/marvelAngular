import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../shared/services/characters.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CharacterComponent } from '../../shared/atoms/character/character.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [HttpClientModule, CommonModule],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private _charactersServices: CharactersService,
    private _snackBar: MatSnackBar
  ) {
    this._charactersServices.getCharacters().subscribe((data) => {
      this.result = data.data.results;
      console.log("LOS DATOS SON ", data.data.results);
    });
  }

  public result: any[] = [];

  public select: any;


  public onClickData(event: any) {
    this._charactersServices.getCharactersById(event.id).subscribe((data) => {
      const select = data.data.results[0];
      sessionStorage.setItem("character", JSON.stringify(select));

      this._snackBar.openFromComponent(CharacterComponent, {
        duration: 5000,
      });
    });
  }

}
