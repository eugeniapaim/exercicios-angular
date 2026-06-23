import { CommonModule } from '@angular/common';
import { Component, input, Input, signal } from '@angular/core';

function toUpperCase(value: string) {
  return value.toUpperCase();
}

@Component({
  selector: 'app-inputComponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inputComponent.html',
  styleUrl: './inputComponent.scss',
})
export class InputComponent {

  public name = signal("Sem dados")

  @Input({
    required: true,
    transform: toUpperCase
  }) set inputName(value: string) {
    this.name.set(value)
  }
}

