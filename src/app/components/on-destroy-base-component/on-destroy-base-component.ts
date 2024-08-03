import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-on-destroy-base',
  template: '',
})
export class OnDestroyBaseComponent implements OnDestroy {
  protected destroy = new Subject<void>();

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
