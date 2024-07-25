import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-description-arabic',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './description-arabic.component.html',
  styleUrl: './description-arabic.component.css'
})
export class DescriptionArabicComponent {
  ngAfterViewInit() {
    this.loadCalendlyScript();
    this.adjustIframeHeight();
    window.addEventListener('resize', this.adjustIframeHeight);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.adjustIframeHeight);
  }

  private loadCalendlyScript() {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
  }

  private adjustIframeHeight = () => {
    const container = document.getElementById('calendly-container');
    const newHeight = window.innerHeight + 200;
    if (container) {
      container.style.height = `${newHeight}px`;
      container.style.marginBottom = `-250px`;
  }
  }
}
