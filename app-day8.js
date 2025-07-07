function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const emojis = ["🐶", "🐱", "🐰", "🦊", "🐼", "🐵", "🐸", "🐷"];

let newArray = shuffle([...emojis,...emojis]);

console.log(newArray);

// Select the box

let div = document.querySelector("#game-board");

newArray.forEach((val,idx)=>{
    // console.log(val,idx);
    // Creat a new box
    let card = document.createElement('div');
    // Add class for styling
    card.setAttribute("class","card");

    // storing additional info
    card.dataset.emoji = val;
    card.dataset.index = idx;
    card.addEventListener("click",handleclick);
    // Append the class
    div.appendChild(card);
    console.log(card);
});




let first= null;
let second= null;
// 3rd card bhi open ho
let lock = false;

function handleclick(evt){

  if(lock) return;
  let trigercard = evt.target;
  if(!first){
    // if first card is empty
    first = trigercard;
    first.textContent = first.dataset.emoji;
    first.classList.add("revealed");

  }
  else{
    second = trigercard;
    second.textContent = second.dataset.emoji;
    second.classList.add("revealed");
    lock = true;


    if(first.dataset.emoji === second.dataset.emoji){
      lock = false;
      first= null;
      second= null;
      // current variable ko empty krh

    }
    else{
      // condition of flip
      setTimeout(()=>{
        first.textContent = "";
        second.textContent = "";
        lock = false;
        first.classList.remove("revealed");
        second.classList.remove("revealed");
        first= null;
        second= null;
    
      },1000);
    }
  }
  // let trigercard = evt.target;
  // // console.log(trigercard);

  // trigercard.textContent = trigercard.dataset.emoji;
  // console.log("clicked");

} 