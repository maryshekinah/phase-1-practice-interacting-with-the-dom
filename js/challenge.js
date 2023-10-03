//Use setInterval to update the timer every second.
let counter = 0;
const timerElement = document.getElementById("counter");

function incrementTimer() {
  counter++;
  timerElement.textContent = counter;
}

const timerInterval = setInterval(incrementTimer, 1000);

//Add event listeners to the plus and minus buttons to increment and decrement the counter.
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");

plusButton.addEventListener("click", () => {
  counter++;
  timerElement.textContent = counter;
});

minusButton.addEventListener("click", () => {
  counter--;
  timerElement.textContent = counter;
});

//Add an event listener to the like button to track likes for the current number and display them.
const likeButton = document.getElementById("heart");
const likeList = document.querySelector(".likes");
const likeCount = {};

likeButton.addEventListener("click", () => {
  if (!likeCount[counter]) {
    likeCount[counter] = 1;
  } else {
    likeCount[counter]++;
  }

  const existingLike = likeList.querySelector(li[data-num="${counter}"]);
  if (existingLike) {
    existingLike.textContent = ${counter} has been liked ${likeCount[counter]} times;
  } else {
    const likeItem = document.createElement("li");
    likeItem.dataset.num = counter;
    likeItem.textContent = ${counter} has been liked ${likeCount[counter]} times;
    likeList.appendChild(likeItem);
  }
});

//Add an event listener to the pause button to pause the counter and disable other buttons.
const pauseButton = document.getElementById("pause");
let isPaused = false;

pauseButton.addEventListener("click", () => {
  isPaused = !isPaused;

  if (isPaused) {
    clearInterval(timerInterval);
    plusButton.disabled = true;
    minusButton.disabled = true;
    likeButton.disabled = true;
    pauseButton.textContent = "resume";
  } else {
    timerInterval = setInterval(incrementTimer, 1000);
    plusButton.disabled = false;
    minusButton.disabled = false;
    likeButton.disabled = false;
    pauseButton.textContent = "pause";
  }
});

//Add an event listener to the restart button to restart the counter and re-enable buttons.
const restartButton = document.getElementById("restart");

restartButton.addEventListener("click", () => {
  counter = 0;
  timerElement.textContent = counter;
  likeList.innerHTML = ""; // Clear the list of likes
});

//Add an event listener to the comment form to display comments.
const commentForm = document.getElementById("comment-form");
const commentList = document.getElementById("list");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const commentInput = document.getElementById("comment-input");
  const commentText = commentInput.value;

  if (commentText.trim() !== "") {
    const commentItem = document.createElement("li");
    commentItem.textContent = commentText;
    commentList.appendChild(commentItem);
    commentInput.value = "";
  }
});