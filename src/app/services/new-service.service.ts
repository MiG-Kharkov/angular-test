import { Inject, Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  private _names = ['name1', 'name2', 'name3'];

  get count(): number {
    return this._count;
  }

  get names(): string[] {
    return this._names;
  }

  constructor(
    @Inject('_count') @Optional() public _count?: number,
  ) {
    this._count = (_count) ? _count : 10;
  }

  add_sq(x: number) {
    return x * x;
  }

  update_count(x: number = 1) {
    this._count += x;
  }
}
