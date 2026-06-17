import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-template-signals',
  imports: [],
  templateUrl: './template-signals.html',
  styleUrl: './template-signals.scss',
})
export class TemplateSignals {

  //Signal
  //Declarado dessa forma, o Angular entende que é um sinal e não uma variável comum. O Angular irá monitorar as mudanças nesse sinal e atualizar a interface do usuário automaticamente quando o valor do sinal mudar.
  public firstName = signal('Rogeria');
  public lastName = signal('Metz');

  public fullName = computed(() => this.firstName() + ' ' + this.lastName());

  public array = signal([1]);

// Computed
// O computed é uma função que depende de um ou mais sinais e é recalculada automaticamente sempre que qualquer um dos sinais dos quais depende for atualizado. Ele é usado para criar valores derivados que são automaticamente mantidos atualizados com base nos sinais subjacentes.

// Effect
// O effect é uma função que é executada automaticamente sempre que um ou mais sinais dos quais depende forem atualizados. Ele é usado para realizar ações secundárias, como registrar eventos ou atualizar outras partes da aplicação.

  constructor() {
    effect(() => {
      console.log('Full Name:', this.fullName());
      console.log('Array:', this.array());
    })
  }

  public updateName() {
    return this.firstName.set('Carlos')
  }

  public updateArray() {
    this.array.update((oldValue: Array<number>) => {
      return [...oldValue, oldValue.length + 1];
    });
  }

}
