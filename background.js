chrome.runtime.onInstalled.addListener(() => {
     data = fetchAsync("https://github.com/BorisLeMeec/sutom_solver/blob/main/dico.txt")

     console.log(data.length)
})

async function fetchAsync (url) {
    let response = await fetch(url);

    
    let data = await response.json();
    return data;
  }