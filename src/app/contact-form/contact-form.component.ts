import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClient and HttpClientModule
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule], // Add HttpClientModule here
})
export class ContactFormComponent implements OnInit {
  contact = {
    name: '',
    email: '',
    message: '',
  };
  contacts: any[] = [];
  showLoginModal = false;
  isLoggedIn = false;
  username = '';
  password = '';

  constructor(private http: HttpClient) {} // Inject HttpClient

  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.isLoggedIn = true;
      this.fetchContacts();
    }
  }

  openLoginModal() {
    this.showLoginModal = true;
  }

  closeLoginModal() {
    this.showLoginModal = false;
  }

  onLogin() {
    if (this.username === 'admin' && this.password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      this.isLoggedIn = true;
      this.showLoginModal = false;
      this.fetchContacts();
    } else {
      alert('Invalid credentials');
    }
  }
  onLogout() {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
    this.contacts = [];
  }

  fetchContacts() {
    this.http.get<any[]>('http://localhost:3000/contacts').subscribe(
      (data) => {
        this.contacts = data;
      },
      (error) => {
        console.error('Error fetching contacts', error);
      }
    );
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.http.post('http://localhost:3000/contacts', this.contact).subscribe(
        (response) => {
          console.log('Form submitted successfully', response);
          form.reset();
        },
        (error) => {
          console.error('Error submitting form', error);
        }
      );
    }
  }

  generatePDF() {
    const doc = new jsPDF();
    let y = 10;
    doc.text('Contact List', 10, y);
    y += 10;
    this.contacts.forEach((contact) => {
      doc.text(`Name: ${contact.name}`, 10, y);
      y += 10;
      doc.text(`Email: ${contact.email}`, 10, y);
      y += 10;
      doc.text(`Message: ${contact.message}`, 10, y);
      y += 20; // Add extra space between contacts
    });
    doc.save('contacts.pdf');
  }
  deleteContact(contact: { id: number }) {
    if (contact && contact.id) {
      this.http
        .delete(`http://localhost:3000/contacts/${contact.id}`)
        .subscribe(
          (response) => {
            console.log('Contact deleted successfully', response);
            this.fetchContacts();
          },
          (error) => {
            console.error('Error deleting contact', error);
          }
        );
    } else {
      console.error('Contact not found');
    }
  }
}
