import { Component } from '@angular/core';
import { CommonModule,AsyncPipe } from '@angular/common';
import { Observable, of, delay } from 'rxjs';


@Component({
  selector: 'app-template-control-flow',
  imports: [CommonModule],
  templateUrl: './template-control-flow.html',
  styleUrl: './template-control-flow.scss',
})
export class TemplateControlFlow {
parseInt(arg0: string): number {
throw new Error('Method not implemented.');
}

  public isTrue: boolean = false;


  public loadingData$: Observable<string[]> = of ([
    'Item 1',
    'Item 2',
    'Item 3',

  ]).pipe(delay(2000)
  );

  public itens: Array<{name:string}> = [];

  public TrackByFn(index:number) {
    return index;
  }

  public addNewName(name: string) {
    this.itens.push({ name: name});
  }

  // switch case
  public switchCondition: string = 'A';

}
