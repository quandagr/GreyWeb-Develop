let url = "https://skogfghrpsiaibzbjgne.supabase.co/rest/v1/leads";
let apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2dmZ2hycHNpYWliemJqZ25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTk1MDEsImV4cCI6MjA4MDM3NTUwMX0.Oli4Picy3nPZlxj0KUycXEyI2fu4AXiYJoKzg9TUh0Q";

async function CreateLeads() {

    event.preventDefault();

    let email = document.getElementById("ContactEmail").value;
    let text = document.getElementById("EnterText").value;
    let name = document.getElementById("FullName").value;
    

    let leads = {
        "Contact_Email": email,
        "Enter_Text": text,
        "Full_Name": name
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

let products = document.getElementById("Products");
const supabaseUrl = "https://skogfghrpsiaibzbjgne.supabase.co/rest/v1/Products";
async function getProducts() {
   let response = await fetch(supabaseUrl,{
    method: "GET",
    headers: {
            "Content-Type": "application/json",
            "apikey": apiKey,
        },
    })
    let data = await response.json();
    console.log(data);
    for(let i = 0; i < data.length; i++){
        products.innerHTML += `
       <div class= "col-md-6 col-lg-4 border p-3">
                    <div class="card" style="width: 18rem;">
                    <img src="${data [i].img_url}"
                    class="card-img-top" alt="${data[i].Name}" width="100%" height="150px"/>  
                    <div class="card-body">
                    <h3 class="card-title">${data[i].Name}</h3>
                    <p class="card-text">$${data[i].Price} - ${data[i].Description}</p>

                </div>
        </div>`}
    }