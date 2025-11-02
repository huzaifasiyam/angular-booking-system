import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-center-selection-modal',
  templateUrl: './center-selection-modal.component.html',
  styleUrls: ['./center-selection-modal.component.scss']
})
export class CenterSelectionModalComponent implements OnInit {
  centers = [
    { id: 1, name: 'Main Street Spa', address: '123 Main St, Anytown', openingTime: '9:00 AM', closingTime: '6:00 PM' },
    { id: 2, name: 'Downtown Wellness', address: '456 Oak Ave, Anytown', openingTime: '10:00 AM', closingTime: '8:00 PM' },
    { id: 3, name: 'Uptown Beauty', address: '789 Pine Ln, Anytown', openingTime: '11:00 AM', closingTime: '7:00 PM' },
    { id: 3, name: 'Uptown Beauty', address: '789 Pine Ln, Anytown', openingTime: '11:00 AM', closingTime: '7:00 PM' },
    { id: 3, name: 'Uptown Beauty', address: '789 Pine Ln, Anytown', openingTime: '11:00 AM', closingTime: '7:00 PM' },
    { id: 3, name: 'Uptown Beauty', address: '789 Pine Ln, Anytown', openingTime: '11:00 AM', closingTime: '7:00 PM' },
    { id: 3, name: 'Uptown Beauty', address: '789 Pine Ln, Anytown', openingTime: '11:00 AM', closingTime: '7:00 PM' },
    { id: 3, name: 'Uptown Beauty', address: '789 Pine Ln, Anytown', openingTime: '11:00 AM', closingTime: '7:00 PM' },
  ];
  filteredCenters = this.centers;
  searchTerm = '';
  protected loading: boolean = true;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void { 
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  searchCenters() {
    this.filteredCenters = this.centers.filter(center =>
      center.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectCenter(center: any) {
    this.activeModal.close(center);
  }
}