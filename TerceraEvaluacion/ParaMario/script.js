function updateTitle() {
  const list = document.getElementById("list");
  const title = document.getElementById("title");
  const listBox = document.getElementById("listBox");
  const hasItems = list.children.length > 0;
  title.style.display = hasItems ? "block" : "none";
  listBox.style.display = hasItems ? "block" : "none";
}

function addStart() {
  const input = document.getElementById("itemInput");
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    const list = document.getElementById("list");
    list.insertBefore(li, list.firstChild);
    input.value = "";
    updateTitle();
  }
}

function addEnd() {
  const input = document.getElementById("itemInput");
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    document.getElementById("list").appendChild(li);
    input.value = "";
    updateTitle();
  }
}

function removeStart() {
  const list = document.getElementById("list");
  if (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  updateTitle();
}

function removeEnd() {
  const list = document.getElementById("list");
  if (list.lastChild) {
    list.removeChild(list.lastChild);
  }
  updateTitle();
}

function resetList() {
  document.getElementById("list").innerHTML = "";
  document.getElementById("itemInput").value = "";
  updateTitle();
}