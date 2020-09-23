const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQouteBtn = document.getElementById('newQuote');
const loader = document.getElementById('loader');

function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete() {
    if (!loader.hidden) {
        loader.hidden = true;
        quoteContainer.hidden = false;
    }
}
//get API
async function getQuote() {
    loading();
    const proxyUrl = 'https://morning-lowlands-54359.herokuapp.com/'
    const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"; 
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        // if author is unknown
        if (data.quoteAuthor === '') {
            authorText.innerText = 'Unknown';
        } else {
            authorText.innerText = data.quoteAuthor;
        }
        // reduce font for long quotes
        if (data.quoteText.length > 120) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data.quoteText;

        complete();
    } catch (error) {
        getQuote();
        
    }
}

function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
}

newQouteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);


getQuote();