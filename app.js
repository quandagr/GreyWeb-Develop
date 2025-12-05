let url = https://skogfghrpsiaibzbjgne.supabase.co/rest/v1/leads
let apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2dmZ2hycHNpYWliemJqZ25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTk1MDEsImV4cCI6MjA4MDM3NTUwMX0.Oli4Picy3nPZlxj0KUycXEyI2fu4AXiYJoKzg9TUh0Q";

async function CreateLeads() {

    event.preventDefault();

    let email = document.getElementById("ContactEmail").value;
    let text = document.getElementById("EnterText").value;

    let leads = {
        "Contact_Email": email,
        "Enter_Text": text
    };

    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "apikey": apiKey,
        },
        body: JSON.stringify(leads)
    });
    console.log(response);
}