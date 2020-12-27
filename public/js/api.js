const leadName = document.getElementById('name');
const leadCompany = document.getElementById('company');
const leadTitle = document.getElementById('title');
const leadDate = document.getElementById('date');
const leadUser = document.getElementById('user');
const leadSource = document.getElementById('source');
const leadEmail = document.getElementById('email');
const leadPhone = document.getElementById('phone');
const leadContainer = document.getElementById('lead-container');
const renderLeads = document.getElementById('fetch-all-leads');

const leadText = document.querySelector('.lead');
const attributionText = document.querySelector('.attribution');

// Define a variable that equals a function that will reference the 'random-lead' id and empty the content
const resetLeads = () => {
  leadContainer.innerHTML = '';
}

// Create an inital error function to handle invalid responses
const renderError = response => {
  leadContainer.innerHTML = `<p>Your request returned an error from the server: </p>
<p>Code: ${response.status}</p>
<p>${response.statusText}</p>`;
}

// Fetch All Quotes (Reference Server.js GET Route Handler)
allLeads.addEventListener('click', () => {
  fetch('/api/leads')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      renderError(response);
    }
  })
  .then(response => {
    renderQuotes(response.leads);
  });
});

// Create New Quote (DIV) within the referenced array data
const renderLeads = (leads = []) => {
    resetLeads();
    if (leads.length > 0) {
      leads.forEach(lead => {
        const newLead = document.createElement('td');
        newLead.innerHTML =`<td>
                                        <td id="name">${lead.name}</td>
                                        <td id="company">${lead.company}</td>
                                        <td id="title">${lead.title}</td>
                                        <td id="date">${lead.date}</td>
                                        <td id="user">${lead.user}</td>
                                        <td id="source">${lead.source}</td>
                                        <td id="email">${lead.email}</td>
                                        <td id="phone">${lead.phone}</td>
                                    </tr>`
        leadContainer.appendChild(newLead);
    });
  } else {
    leadContainer.innerHTML = '<p>Your request returned no leads.</p>';
  }
}