import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  // The root path ('') will also be managed by a redirect within the PagesRoutingModule
  // to ensure a clean URL structure. We can add a redirect here, or in the PagesRoutingModule.
  // This approach is more explicit.
  { path: '', redirectTo: 'pages', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
