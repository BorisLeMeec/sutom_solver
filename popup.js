// const initSqlJs = window.initSqlJs;
// const SQL = await initSqlJs({
//     // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
//     // You can omit locateFile completely when running in node
//     locateFile: file => `.wasm`
//   });

// const DB = new SQL.Database(data)

let resolver = document.getElementById("resolve")

resolver.addEventListener("click", async () => {
    chrome.scripting.executeScript({
        target: { tabId: getCurrentTab() },
        function: injectedFunction
      });
  })

  function injectedFunction() {
    let gr = document.getElementById("grille")

    var nbLetter = gr.firstChild.firstChild.childElementCount
    var firstLetter = gr.firstChild.firstChild.firstChild.textContent


  }

  async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

