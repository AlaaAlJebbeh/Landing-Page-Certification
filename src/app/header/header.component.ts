import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageComponent } from "../language/language.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, LanguageComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
