import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating-modal',
  templateUrl: './rating-modal.component.html',
  styleUrls: ['./rating-modal.component.scss']
})
export class RatingModalComponent implements OnInit {
  @Input() serviceName: string;
  @Input() initialRating: number = 0;
  @Input() initialComment: string = '';

  @Output() ratingSubmitted = new EventEmitter<{ rating: number, comment: string }>();

  rating: number = 0;
  hoverRating: number = 0;
  comment: string = '';

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.rating = this.initialRating;
    this.comment = this.initialComment;
  }

  // Method to set the rating on click
  setRating(star: number, event: MouseEvent): void {
    this.rating = this.calculateRating(event, star);
  }

  // Method to calculate the rating based on mouse position
  calculateRating(event: MouseEvent, star: number): number {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const isHalf = x <= rect.width / 2;
    return star - (isHalf ? 0.5 : 0);
  }

  // New method to calculate the star fill percentage
  getStarFillPercentage(star: number): number {
    const effectiveRating = this.hoverRating || this.rating;
    if (effectiveRating >= star) {
      return 100;
    } else if (effectiveRating >= star - 0.5) {
      return 50;
    }
    return 0;
  }

  getEmojiClass(rating: number): string {
    if (rating >= 4.5) return 'far fa-face-awesome';
    if (rating >= 3.5) return 'far fa-face-smile';
    if (rating >= 2.5) return 'far fa-face-meh';
    if (rating > 0) return 'far fa-face-frown';
    return 'far fa-face-thinking';
  }

  submitRating(): void {
    this.ratingSubmitted.emit({ rating: this.rating, comment: this.comment });
    this.activeModal.close();
  }

  close(): void {
    this.activeModal.dismiss();
  }
}