const submitButton = document.querySelector("#submitbutton");
const quotationForm = document.querySelector("#quotation-form");
const quoteText = document.querySelector("#quotation");
const quoteAuthor = document.querySelector("#author");

quotationForm.addEventListener('submit', submitAQuote)

function submitAQuote(event){
    event.preventDefault();
    let quote = quoteText.value;
    let author = quoteAuthor.value;
    addQuote(quote,author);
}

function addQuote(quote, author){
    const textParagraph = document.createElement('p');
    textParagraph.innerHTML = quote;
    textParagraph.classList.add("text");

    const authorParagraph = document.createElement('p');
    authorParagraph.innerHTML = author;
    authorParagraph.classList.add("author");

    const quoteZone = document.createElement('div');
    quoteZone.classList.add("quote");
    quoteZone.appendChild(textParagraph);
    quoteZone.appendChild(authorParagraph);

    const quoteList = document.querySelector("#quote-list");
    quoteList.appendChild(quoteZone);
}