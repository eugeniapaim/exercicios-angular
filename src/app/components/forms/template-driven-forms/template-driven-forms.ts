import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  imports: [FormsModule],
  templateUrl: './template-driven-forms.html',
  styleUrl: './template-driven-forms.scss',
})
export class TemplateDrivenForms {

  public listaComidas = signal<Array<{comida:string; preco: string}>>([
    {
      comida:'X-salada',
      preco: 'R$ 10',
    },
    {
      comida:'X-salada+',
      preco: 'R$ 15',
    },
    {
      comida:'X-salada+ plus',
      preco: 'R$ 20',
    },
  ])

  public submitForm(form: NgForm) {
    console.log(form.valid);
  }

}
