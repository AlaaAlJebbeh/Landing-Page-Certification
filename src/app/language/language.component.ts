import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './language.component.html',
  styleUrl: './language.component.css'
})
export class LanguageComponent {

  constructor(private router: Router) { }

  switchLanguage(event: any) {
    const lang = event.target.value;
    this.router.navigate([`/${lang}`]);
  }

}
