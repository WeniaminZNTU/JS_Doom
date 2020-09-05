"use strict";

const database = [{
    src:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    desr: "man",
  },
  {
    src:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    desr: "man",
  },
  {
    src:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    desr: "man",
  },
];





const slider = new Slider([
  new Slide(
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    "man"
  ),
  new Slide(
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    "demo"
  ),
  new Slide(
    "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg",
    "grass"
  ),
]);

const img = document.getElementById("image");
const [prevBtn, nextBtn] = document.querySelectorAll(
  "#sliderContainer> div > button"
);

const createButtonHandler = (direction = "next") => {
  return (event) => {
    const newIndex = slider[direction === "next" ? "nextIndex" : "prevIndex"];
    slider.currentIndex = newIndex;
    updateView();
  };
};

nextBtn.addEventListener("click", createButtonHandler("next"));
prevBtn.addEventListener("click", createButtonHandler("prev"));

img.addEventListener('mouseenter', function(event){
  const nextIndex = slider.nextIndex;
  slider.currentIndex = nextIndex;
  updateView();
})

img.addEventListener('mouseleave', function(){
  const prevIndex = slider.prevIndex;
  slider.currentIndex = prevIndex;
  updateView();
})

updateView();

function updateView() {
  const {
    currentSlide: { src, description },
  } = slider;

  img.setAttribute("src", src);
  img.setAttribute("title", description);
}


// Task 2
const button = document.getElementById("butn");

button.addEventListener("click", function (event) {
  button.textContent = "New change name";
  // console.log(button.name);
});


// Task 1
const form = document.getElementById("form");
const input = document.getElementById("input");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();
});

input.addEventListener("keyup", function inputHandler(event) {
  let x = event.key;

  if (x === "Enter") {
    input.value.log;
    console.log(input.value);
  }
});
