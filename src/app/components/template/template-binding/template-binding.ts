import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './template-binding.html',
  styleUrl: './template-binding.scss',
})
export class TemplateBindingComponent {
  public name: string = 'Fernanda';
  public age: number = 33;

  //properety exemple
  public isDisabled: boolean = false;

  //class & style exemple
  public isTextDecoration: string = this.age >= 32 ? 'underline' : 'none';
  
  //event exemple
  public sum() {
    return this.age++;
  }

  public sub() {
    return this.age--;
  }

  public onKeyDown(event: Event) {
    console.log(event);
  }

  public onMouseEvent (event: MouseEvent) {
    console.log(event);
  }
}