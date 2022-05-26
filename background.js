chrome.runtime.onInstalled.addListener(() => {
     data = fetchAsync("https://raw.githubusercontent.com/BorisLeMeec/sutom_solver/main/dico.json")

     console.log(data.length)
})

async function fetchAsync (url) {
    let response = await fetch(url);


    let data = await response.json();
    return data;
  }