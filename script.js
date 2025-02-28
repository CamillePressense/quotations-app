const submitButton = document.querySelector("#submitbutton");
const quotationForm = document.querySelector("#quotation-form");
const quoteText = document.querySelector("#quotation");
const quoteAuthor = document.querySelector("#author");

quotationForm.addEventListener('submit', submitAQuote)

function submitAQuote(event){
    event.preventDefault();
    let text = quoteText.value;
    let author = quoteAuthor.value;
    console.log(text + " " + author);
}



    