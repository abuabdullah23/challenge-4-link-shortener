const shortUrl = (inputUrl) => {
    const url = `https://api.shrtco.de/v2/shorten?url=${inputUrl}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayShortUrl(data))
}

const displayShortUrl = newUrl => {

    const outputContainer = document.getElementById('output-div');
    outputContainer.innerHTML = '';
    const outputDiv = document.createElement('p');
    outputDiv.innerHTML = `
    <p><strong>Shortened Link 1 : </strong> <span>${newUrl.result.short_link}</span></p>
    <p><strong>Shortened Link 2 : </strong> <span>${newUrl.result.short_link2}</span></p>
    <p><strong>Shortened Link 3 : </strong> <span>${newUrl.result.short_link3}</span></p>
    `;
    outputContainer.appendChild(outputDiv);

//  console.log(newUrl.result.short_link);
}

// get and send user input url
const shortenUrl = () => {
    const inputUrlText = document.getElementById('input-url-field');
    const inputUrl = inputUrlText.value;
    inputUrlText.value = '';
    shortUrl(inputUrl);
}


shortUrl();



// https://api.shrtco.de/v2/shorten?url=