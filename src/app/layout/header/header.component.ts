import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AuthService, User } from 'src/app/core/service/auth.service'; // adjust path
import { CenterSelectionModalComponent } from 'src/app/pages/modals/center-selection-modal/center-selection-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentLanguage: string = 'en';
  isLoggedIn = false;
  currentUser: User | null = null;
  theme: 'light' | 'dark' = 'light';
  constructor(
    private modalService: NgbModal,
    private translate: TranslateService,
    private authService: AuthService,
    private router: Router
  ) {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

ngOnInit(): void {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  this.theme = savedTheme || 'light';
  document.body.setAttribute('data-layout-mode', this.theme);

  this.isLoggedIn = !!this.authService.getUser();
  this.currentUser = this.authService.getUser();
  this.authService.isLoggedIn$.subscribe(status => {
    this.isLoggedIn = status;
    this.currentUser = this.authService.getUser();
  });
}

toggleDarkMode() {
  this.theme = this.theme === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-layout-mode', this.theme);
  localStorage.setItem('theme', this.theme);
}

  public changeLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLanguage = lang;
  }

 protected openCenterSelectionModal() {
  const offcanvasEl = document.getElementById('mobileOffcanvas');

  if (offcanvasEl?.classList.contains('show')) {
    // Use Bootstrap's own event to hide it properly
    offcanvasEl.classList.remove('show');
    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) backdrop.remove();

    // Ensure body scroll is restored
    document.body.classList.remove('offcanvas-backdrop', 'modal-open');
    document.body.style.overflow = ''; // important
  }

  const modalRef = this.modalService.open(CenterSelectionModalComponent, { centered: true, size: 'md' });

  // Ensure scroll is restored after modal closes
  modalRef.result.finally(() => {
    document.body.style.overflow = ''; // remove any scroll lock
  });
}

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  goToProfile() {
    this.router.navigate(['/pages/profile']); 
  }
  goToAppointments() {
    this.router.navigate(['/pages/profile/appointments']); 
  }
}
