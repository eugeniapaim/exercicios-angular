import { CommonModule } from '@angular/common';
import { Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Components
/* import { NewComponent } from './components/new-component/new-component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding';
import { TemplateVariables } from './components/template/template-variables/template-variables'; */
import { TemplateDeferrableViews } from "./components/template/template-deferrable-views/template-deferrable-views";
import { TemplateSignals } from './components/template/template-signals/template-signals';
import { Mae } from './components/comunicacao-entre-components/mae/mae';
import { ReactiveForms } from './components/forms/reactive-forms/reactive-forms';
import { TemplateDrivenForms } from './components/forms/template-driven-forms/template-driven-forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    ReactiveForms,
    TemplateDrivenForms
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('primeiro-projeto-latest');
}
