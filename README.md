# Django Mail Client 📧

A single-page email client I built with **Python**, **Django**, and **JavaScript** as part of Harvard's **CS50 Web Programming with Python and JavaScript** course.

This project gave me my first deeper experience combining Django with JavaScript to create an application that could update information without constantly reloading the page. I worked with API endpoints, asynchronous requests, DOM manipulation, authentication, and database-backed email data.

---

## Features

* User registration, login, and authentication
* Inbox for received emails
* Sent mailbox
* Archived emails
* Compose and send emails
* Reply to emails
* Mark emails as read
* Track read and unread messages
* Archive and unarchive emails
* Navigate between mailboxes dynamically
* Asynchronous API requests using JavaScript `fetch()`
* Dynamic page updates without full-page reloads
* Responsive interface built with Bootstrap

---

## Tech Stack

### Languages

* Python
* HTML5
* CSS3
* JavaScript
* SQL

### Frameworks & Libraries

* Django
* Bootstrap

### Database

* SQLite

### Tools

* Git
* GitHub
* Visual Studio Code

---

## Project Structure

```text
mail/
│
├── mail/
│   ├── migrations/
│   ├── static/
│   ├── templates/
│   ├── admin.py
│   ├── models.py
│   ├── urls.py
│   └── views.py
│
├── db.sqlite3
├── manage.py
├── requirements.txt
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/EmmanuelAnya807/<Mail-Project>.git
```

### Navigate into the project

```bash
cd <Mail-Project>
```

### Create a virtual environment

```bash
python -m venv venv
```

### Activate the virtual environment

**Windows**

```bash
venv\Scripts\activate
```

**macOS/Linux**

```bash
source venv/bin/activate
```

### Install dependencies

```bash
pip install -r requirements.txt
```

### Apply migrations

```bash
python manage.py migrate
```

### Run the development server

```bash
python manage.py runserver
```

Visit:

```text
http://127.0.0.1:8000/
```

---

## Usage

After launching the application, users can:

1. Register for an account.
2. Log in.
3. View emails in their inbox.
4. Compose and send new emails.
5. View sent emails.
6. Open emails and mark them as read.
7. Reply to received emails.
8. Archive emails.
9. View archived emails.
10. Move between mailboxes without a full page reload.

---

## What I Learned

Building Mail helped me understand how different parts of a web application work together.

I became more comfortable with:

* Django models and ORM
* Django authentication
* Creating and working with API endpoints
* JavaScript event handling
* DOM manipulation
* `fetch()` and asynchronous requests
* Sending and receiving JSON data
* HTTP `GET`, `POST`, and `PUT` requests
* Connecting frontend actions to backend logic
* Updating a page dynamically
* Working with databases
* Building interfaces with Bootstrap

One of the biggest things I took away from this project was a better understanding of the relationship between the **frontend and backend**. Instead of thinking of them as completely separate pieces, I started seeing how JavaScript, Django, APIs, and the database work together to make an application feel interactive.

---

## Challenges

A few parts of the project pushed me the most:

* Connecting JavaScript actions to Django API endpoints.
* Updating the interface dynamically after an API request.
* Managing read, unread, sent, and archived email states.
* Implementing replies while preserving the original email information.
* Debugging frontend and backend issues when something worked on one side but not the other.

Working through these challenges helped me become more comfortable with debugging instead of immediately assuming that something was wrong with the whole application.

---

## Future Improvements

Some things I would like to explore in the future include:

* Email search
* File and image attachments
* Email labels and categories
* Rich-text composition
* Pagination for large inboxes
* Notifications
* More automated testing
* Production deployment
* Improved mobile responsiveness

---

## Screenshots

Examples:

* Login Page
  <img width="1920" height="1048" alt="image" src="https://github.com/user-attachments/assets/9584cae2-b172-4dcf-bdcc-efa7fc183e9d" />

* Inbox
  <img width="1920" height="1048" alt="image" src="https://github.com/user-attachments/assets/c9df6cf9-766f-4daa-86f4-5cb83532dd8e" />

* Compose Email
  <img width="1920" height="1048" alt="image" src="https://github.com/user-attachments/assets/29b89e7e-88b9-40f8-84d5-4371c43d7064" />

* Sent Mail
  <img width="1920" height="1048" alt="image" src="https://github.com/user-attachments/assets/282de01e-ec9e-4aa8-be84-a00fa2611184" />

* Archived Mail
  <img width="1920" height="1048" alt="image" src="https://github.com/user-attachments/assets/35469663-8da9-410c-84b5-3721cf080eac" />

* Email Details
  <img width="1920" height="1048" alt="image" src="https://github.com/user-attachments/assets/306c6266-0476-4291-a231-5fbdbacb49ea" />

* Reply Interface
  <img width="1920" height="1048" alt="image" src="https://github.com/user-attachments/assets/8f03a47d-5be9-47ba-a986-1a56741fcfa5" />


---

## Live Demo

Coming Soon

---

## Author

**Anya Emmanuel Chidiebube**

Computer Science Student
University of Nigeria, Nsukka

* GitHub: https://github.com/EmmanuelAnya807
* LinkedIn: https://linkedin.com/in/anya-emmanuel

---

## License

This project was developed for educational purposes as part of Harvard University's **CS50 Web Programming with Python and JavaScript** course.
