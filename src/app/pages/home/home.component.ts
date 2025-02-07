import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../shared/services/characters.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CharacterComponent } from '../../shared/atoms/character/character.component';
import { MatButtonModule } from '@angular/material/button';
import { map } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [HttpClientModule, CommonModule, RouterModule],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class 
HomeComponent {
  mostrarContenedor = false;
  mostrarContenedorCha = false;
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

    this._charactersServices.getBitacora()
    .pipe(
      map((result) => {
        return result
      })
    )
    .subscribe((data) => {
      this.result = data;
    });
    
  }
  abrirBitacora() {
    this.mostrarContenedor = true;
    window.open('/bitacora', '_blank'); 
  }
  abrirCharacter() {
    this.mostrarContenedorCha = true;
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
    this._charactersServices.getCharactersById(event.id, event.name).subscribe((data) => {
      const select = data.data.results[0];
      console.log("DATOS CLICK ", select);
      sessionStorage.setItem("character", JSON.stringify(select));

      this._snackBar.openFromComponent(CharacterComponent, {
        duration: 6000,
      });
    });
  }
  /**
   * Listado de Bitacora
   * 
   * @public
   * @type {any}
   * @memberof HomeComponent
   */

  public onClickBit(event: any) {
    this._charactersServices.getBitacora().subscribe((dataBit => {
      const selectBit = dataBit;
      console.log("BITACORA: ",selectBit);
      sessionStorage.setItem("bitacora", JSON.stringify(selectBit));
    }))
  }
}
