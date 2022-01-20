const main = document.querySelector("main");
const paragraph = document.querySelector(".js-para");
const paraBtn = document.getElementById("para-btn");
const clearBtn = document.getElementById("clear-btn");

// create an array from the paragraph element
paragraphArray = paragraph.innerText.split(" ");
// shorten the array to the first 10 elements
paragraphArray = paragraphArray.splice(0, 10);
// join the first 10 elements into a sentence
let sent = paragraphArray.join(" ");

paraBtn.addEventListener("click", () => {
  let firstWordsDiv = document.createElement("div");
  firstWordsDiv.classList.add("word-div");

  firstWordsDiv.innerHTML = `
    <p>${sent}<p>
  `;
  main.appendChild(firstWordsDiv);
});

clearBtn.addEventListener("click", () => {
  main.removeChild(main.lastChild);
});
