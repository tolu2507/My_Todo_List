const input = document.querySelector("#second");
const button = document.querySelector("#btn");
const list = document.querySelector("#list");
const search = document.querySelector("#spn");

let arr = [];
function create(params) {
  let obj = {
    name: params,
    contentEditable: false,
    done: false,
    color: "rgba(28, 41, 44, 0.089)",
  };
  arr.unshift(obj);
}
function renderViews(arr) {
  list.innerHTML = "";
  arr.forEach((item, i) => {
    list.innerHTML += `        
            <li id="${i}">
                <span contenteditable="${item.contentEditable}" style = "background-color: ${item.color}">${item.name}</span>
                <button onclick="edit(${i})" type="button">edit</button>
                <button onclick="del(${i})" type="button">delete</button>
                <button onclick="mar(${i})" type="button">mark</button>
            </li>
        `;
  });
}
button.addEventListener("click", () => {
  if (!input.value) {
    alert("the input element cant be empty");
  } else {
    create(input.value);
    renderViews(arr);
    console.log(arr);
    input.value = "";
  }
});
function del(n) {
  if (
    window.confirm(`You are about to delete ${n}. 
    Are you sure ?`)
  ) {
    arr.splice(n, 1);
    renderViews(arr);
    console.log("clicked");
  }
}
function edit(n) {
  console.log(`"edited + ${n}"`);
  if (
    arr[n].contentEditable === "false" ||
    arr[n].contentEditable === "inherit"
  ) {
    arr[n].contentEditable = "true";
    arr[n].name = prompt("put in your new value: ");
    renderViews(arr);
    console.log(arr);
  } else {
    arr[n].contentEditable = "false";
    renderViews(arr);
    console.log(arr);
  }
}
function mar(n) {
  if (arr[n].done === false) {
    arr[n].done = true;
    arr[n].color = "green";
    renderViews(arr);
    console.log(arr);
  } else {
    arr[n].done = false;
    arr[n].color = "rgba(28, 41, 44, 0.089)";
    renderViews(arr);
    console.log(arr);
  }
}

search.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    if (e.target.value === "early" || e.target.value === "latest") {
      arr.reverse();
      renderViews(arr);
      return;
    }
    if (e.target.value == "done") {
      const anotherRender = arr.filter(function (item) {
        return item.done;
      });
      renderViews(anotherRender);
      return;
    }
    const newRender = arr.filter(function (store) {
      return store.name == e.target.value;
    });
    renderViews(newRender);
    return;
  }
  renderViews(arr);
});
const locStorage = localStorage.getItem("TO-DO");
if (locStorage) {
  const storageView = JSON.parse(locStorage);
  if (storageView && Array.isArray(storageView) && storageView.length) {
    theShop = storageView;
    renderViews(storageView);
  }
}
