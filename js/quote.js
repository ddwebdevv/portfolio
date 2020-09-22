//get API
async function getQuote() {
    const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"; 
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('no quote', error);
    }
}



getQuote();