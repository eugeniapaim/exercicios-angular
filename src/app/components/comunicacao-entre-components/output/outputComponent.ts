import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-outputComponent',
  imports: [],
  templateUrl: './outputComponent.html',
  styleUrl: './outputComponent.scss',
})
export class OutputComponent {
  @Output() public outputName = new EventEmitter<string>()

  public sendOutPutName() {
    return this.outputName.emit("Eugenia Paim")
  }
}
