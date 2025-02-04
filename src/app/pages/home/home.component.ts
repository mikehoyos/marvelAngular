import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../shared/services/characters.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CharacterComponent } from '../../shared/atoms/character/character.component';
import { map } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [HttpClientModule, CommonModule],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  /**
   * Constructor HomeComponent
   * 
   * @param {CharactersService} _charactersServices 
   * @param {MatSnackBar} _snackBar
   * @memberof HomeComponent
   */
  constructor(
    private _charactersServices: CharactersService,
    private _snackBar: MatSnackBar
  ) {
    this._charactersServices.getCharacters()
    .pipe(
      map((result) => {
        return result.data.results
      })
    )
    .subscribe((data) => {
      this.result = data;
      console.log("LOS DATOS SON ", data);
    });
  }

  /**
   * Listado del servicio getCharactersById
   * 
   * @public
   * @type {any[]}
   * @memberof HomeComponent
   */
  public result: any[] = [];

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
