import { Routes } from '@angular/router';
import { BitacoraComponent } from './shared/atoms/bitacora/bitacora.component';
import { CharacterComponent } from './shared/atoms/character/character.component';

export const routes: Routes = [
    { path: 'bitacora', component: BitacoraComponent },
    { path: 'character', component: CharacterComponent }
];
