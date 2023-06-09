/** @format */

const List = document.querySelector('[role="list"]');
const list = List.querySelectorAll('[role="listitem"]');
const listLength = list.length;
let currentListIndex = 0;

function hideListItems() {
  list.forEach((item) => {
    item.style.display = 'none';
  });
}

function showListItems() {
  hideListItems();
  list[currentListIndex].style.display = 'inline-block';
  list[(currentListIndex + 1) % listLength].style.display = 'inline-block';
}

function update() {
  currentListIndex = (currentListIndex + 1) % listLength;
  showListItems();
}

showListItems();

setInterval(update, 3000);
