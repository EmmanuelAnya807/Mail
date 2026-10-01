document.addEventListener('DOMContentLoaded', function() {

  // Use buttons to toggle between views
  document.querySelector('#inbox').addEventListener('click', () => load_mailbox('inbox'));
  document.querySelector('#sent').addEventListener('click', () => load_mailbox('sent'));
  document.querySelector('#archived').addEventListener('click', () => load_mailbox('archive'));
  document.querySelector('#compose').addEventListener('click', () => compose_email());
  document.querySelector('#compose-form').addEventListener('submit', submit_form);

  // By default, load the inbox
  load_mailbox('inbox');
});

function compose_email(email) {

  // Show compose view and hide other views
  document.querySelector('#emails-view').style.display = 'none';
  document.querySelector('#compose-view').style.display = 'block';

  if (!email) {
    // Clear out composition fields
    document.querySelector('#compose-recipients').value = '';
    document.querySelector('#compose-subject').value = '';
    document.querySelector('#compose-body').value = '';
  }
  else {
    // Fill in composition fields
    document.querySelector('#compose-recipients').value = email.sender;
    if ((email.subject).startsWith('Re: ')) {
      document.querySelector('#compose-subject').value = email.subject;
    }
    else {
      document.querySelector('#compose-subject').value = `Re: ${email.subject}`;
    }
    document.querySelector('#compose-body').value = `On ${email.timestamp} ${email.sender} wrote:\n\n${email.body}`;
  }

}

function load_mailbox(mailbox) {

  // Show the mailbox and hide other views
  document.querySelector('#emails-view').style.display = 'block';
  document.querySelector('#compose-view').style.display = 'none';

  // Show the mailbox name
  document.querySelector('#emails-view').innerHTML = `<h3>${mailbox.charAt(0).toUpperCase() + mailbox.slice(1)}</h3>`;

  fetch(`/emails/${mailbox}`)
  .then(response => response.json())
  .then(emails => {
    // Print result
    console.log(emails);

    if (emails.length === 0) {
      document.querySelector('#emails-view').innerHTML += '<p>No emails in this mailbox</p>'
    }
    else {
      emails.forEach(email => {
        const emailDiv = document.createElement('div');

        emailDiv.addEventListener('click', () => {
          fetch(`/emails/${email.id}`, {
            method: 'PUT',

            headers: {
              'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                read: true
            })
          })

          fetch(`/emails/${email.id}`)
          .then(response => response.json())
          .then(mailData => {
            mail_content(mailData, mailbox)
            console.log(mailData)
          })

        })

        emailDiv.className = 'list-group-item';
        emailDiv.innerHTML = `<strong>${email.sender}</strong>: ${email.subject}
        <span class='text-muted float-right'>${email.timestamp}</span>
        `;
        document.querySelector('#emails-view').append(emailDiv);

        if (email.read === false) {
          emailDiv.style.backgroundColor = 'white';
        }
        else {
          emailDiv.style.backgroundColor = 'gray';
          emailDiv.style.color = 'white'
          emailDiv.querySelector('span').classList.remove('text-muted')
        }

      });
    }
  })
  .catch(error => {
    console.error('Error loading mailbox: ', error)
  })
}


function submit_form(event) {
  event.preventDefault();

  let recipients = document.querySelector('#compose-recipients').value;
  let subject = document.querySelector('#compose-subject').value;
  let body = document.querySelector('#compose-body').value;

  fetch('/emails', {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
        recipients: recipients,
        subject: subject,
        body: body
      })
    })
  .then(response => response.json())
  .then(result => {
    // Print result
    console.log(result);

    if (result.error) {
      alert(`Error sending email: ${result.error}`)
    }
    else {
      load_mailbox('sent')
    }
  })

  .catch(error => {
    console.error('Error', error);
  });
}


function mail_content(email, mailbox) {
  console.log(email)
  const emailsView = document.querySelector('#emails-view')
  emailsView.style.display = 'block';
  document.querySelector('#compose-view').style.display = 'none';

  emailsView.innerHTML = ''

  const recipientsList = Array.isArray(email.recipients)
  ? email.recipients.join(', ')
  : email.recipients || '';

  const emailBody = document.createElement('div')

  emailBody.innerHTML = `<p><strong>From: </strong>${email.sender}</p>
  <p><strong>To: </strong>${recipientsList}</p>
  <p><strong>Subject: </strong>${email.subject}</p>
  <p><strong>Timestamp: </strong>${email.timestamp}</p>
  <hr id="line-break">
  <p>${email.body}</p>
  `;

  const line_break = emailBody.querySelector('#line-break')
  console.log(line_break)

  if (mailbox !== "sent") {
    const archive_btn = document.createElement('button')
    archive_btn.className = 'btn btn-outline-danger float-right'

    if (email.archived === false) {
      archive_btn.textContent = 'Archive'
      emailBody.append(archive_btn)
      archive_btn.addEventListener('click', () => {
        fetch(`/emails/${email.id}`, {
          method: 'PUT',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
              archived: true
          })
        })
        .then (result => {
          load_mailbox('inbox')
        })

      })
    }
    else {
      archive_btn.textContent = 'Unarchive'
      emailBody.append(archive_btn)
      archive_btn.addEventListener('click', () => {
        fetch(`/emails/${email.id}`, {
          method: 'PUT',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
              archived: false
          })
        })
        .then (result => {
          load_mailbox('inbox')
        })
      })
    }

    const reply_btn = document.createElement('button')
    reply_btn.className = 'btn btn-outline-primary'
    reply_btn.textContent = 'Reply'
    emailBody.insertBefore(reply_btn, line_break)

    reply_btn.addEventListener('click', () => {
        compose_email(email)
    })


  }
  emailsView.append(emailBody)
}



