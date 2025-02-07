import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { CharactersService } from './shared/services/characters.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { InterceptorService } from './shared/interceptor/interceptor.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  providers: [CharactersService, {provide:HTTP_INTERCEPTORS,useClass:InterceptorService, multi:true}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'marvelAngular';
}
