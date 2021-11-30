const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const facebookBtn = document.getElementById("facebook");
const newQuoteBtn = document.getElementById("new-quote");
// const loader = document.getElementById("loader");

let apiQuotes = [];

// // show we are loading
// function loading(){
//     loader.hidden = false;
//     quoteContainer.hidden = true;
// }

//   // hide loading

// function complete(){
//     quoteContainer.hidden = false;
//     loader.hidden = true;
// }
// show new quote
function newQuote() {
    // loading();
    // pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // check if author field is blank and replace with unknown.
    if(!quote.author){
        authorText.textContent = "Unknown";
    }else{
        authorText.textContent = quote.author;
    }
    // check quote length determine styling
    if(quote.text.length > 50) {
        quoteText.classList.add("long-quote");
    }else{
        quoteText.classList.remove("long-quote");
    }
    // set quote,hide loader
    quoteText.textContent = quote.text;
    // complete();
}
// get quotes from api
async function getQuotes() {
    // loading();
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
       newQuote();
    }catch(error) {
        // catch error here
    }

    // post
    function facebookQuote(){
       const facebookUrl = `http://www.facebook.com/sharer.php?s=100&p[title]=YOURTITLE&p[url]=http://www.yourdomain.com&p[summary]=shortandsweetok&p[images][0]=http://www.image.to/appearwithlinkaftersharing.jpg?text=${quoteText.textContent} - ${authorText.textContent}` 
       window.open(facebookUrl, '_blank')
    }

// eventlisteners
newQuoteBtn.addEventListener('click', newQuote);
facebookBtn.addEventListener('click', facebookQuote);
}
// call
getQuotes();
