import { Component } from '@angular/core';
/* import { TemplateControlFlow } from '../template-control-flow/template-control-flow'; */
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
/* import { AsyncPipe } from '@angular/common'; */

@Component({
  standalone: true,
  selector: 'app-template-deferrable-views',
  imports: [/* TemplateControlFlow, AsyncPipe */],
  templateUrl: './template-deferrable-views.html',
  styleUrls: ['./template-deferrable-views.scss'],
})
export class TemplateDeferrableViews {
  public isTrue = false;

  public loadingData$: Observable<string[]> = of([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5'
  ]).pipe(
    delay(2000)
  );

}
