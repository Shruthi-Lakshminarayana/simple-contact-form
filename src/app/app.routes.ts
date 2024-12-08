import { Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';

export const routes: Routes = [
  { path: 'contact', component: ContactFormComponent },
  { path: '', redirectTo: '/contact', pathMatch: 'full' }, // Redirect to contact form by default
  // Add other routes here if needed
];
