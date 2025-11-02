import {
  Directive,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Directive({
  selector: '[appTableSearch]',
})
export class TableSearchDirective implements OnInit, OnDestroy, OnChanges {
  @Input() searchData!: any[]; // Original data to filter
  @Output() filteredData = new EventEmitter<any[]>(); // Emits filtered data to the parent

  private subscription!: Subscription;
  private originalData: any[] = [];
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // On initialization, copy searchData to originalData
    this.originalData = JSON.parse(JSON.stringify(this.searchData));

    this.subscription = fromEvent(this.el.nativeElement, 'input')
      .pipe(
        map((event: Event) =>
          (event.target as HTMLInputElement).value.trim().toLowerCase()
        ),
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((searchTerm) => {
        this.performSearch(searchTerm);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Ensure that we only copy data to originalData the first time `searchData` is set
    if (changes['searchData'] && !this.originalData.length) {
      this.originalData = JSON.parse(JSON.stringify(this.searchData));
    }
  }

  private performSearch(searchTerm: string): void {
    if (!this.originalData || this.originalData.length === 0) {
      this.filteredData.emit([]); // Emit empty array if no data exists
      return;
    }

    if (searchTerm === '' || searchTerm == null) {
      // When the search term is empty, restore and emit the original data
      this.filteredData.emit(this.originalData);
    } else {
      // Filter data based on the search term
      const filtered = this.originalData.filter((item) =>
        Object.keys(item).some((key) => {
          const value = item[key];
          return value && value.toString().toLowerCase().includes(searchTerm);
        })
      );
      this.filteredData.emit(filtered);
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
