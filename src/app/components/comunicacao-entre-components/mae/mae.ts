import { Component, signal } from '@angular/core';
import { InputComponent } from '../inputComponent/inputComponent'
import { OutputComponent } from '../output/outputComponent';

@Component({
  selector: 'app-mae',
  imports: [InputComponent, OutputComponent],
  templateUrl: './mae.html',
  styleUrl: './mae.scss',
})
export class Mae {
  public name = signal("Eugenia Paim");
  public outputName = signal('Output: sem valor')
}
