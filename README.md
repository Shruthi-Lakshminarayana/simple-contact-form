# Contact Form with Admin Authentication and Data Management

## Overview

This project is an Angular application that provides a contact form for users to submit their contact information and messages. It includes an admin authentication system that allows an admin to log in, view the submitted contact information in a tabular format, and perform actions such as deleting entries and generating a PDF of the contact list.

## Features

- **Contact Form**: Users can submit their name, email, and message through a contact form with validation.
- **Admin Authentication**: Admin can log in to view and manage submitted contacts.
- **Contact List Management**: Admin can view, delete, and generate PDFs of the contact list.
- **Data Persistence**: Uses `json-server` to simulate a backend server and store contact data in a JSON file (`db.json`).

## Technologies Used

- **Angular**: Frontend framework for building the application.
- **json-server**: Mock backend server to store and manage contact data.
- **jsPDF**: Library to generate PDFs from the contact list.
- **HTML/CSS**: Markup and styling for the application.

## Project Structure

- **`src/app/contact-form/contact-form.component.ts`**: TypeScript file containing the logic for the contact form, admin authentication, and data management.
- **`src/app/contact-form/contact-form.component.html`**: HTML template for the contact form and contact list.
- **`src/app/contact-form/contact-form.component.css`**: CSS file for styling the contact form and contact list.
- **`db.json`**: JSON file used by `json-server` to store contact data.

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
