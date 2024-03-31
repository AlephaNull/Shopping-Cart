import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const addBtn = document.getElementById("add-button")
const inputField = document.getElementById("input-field")
const shoppingListEl = document.getElementById("shopping-list")

const appSettings = {
  databaseURL: "https://shopping-cart-ebc11-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDb = ref(database, "shoppingList")

addBtn.addEventListener("click", function() {
  let inputValue = inputField.value
  push(shoppingListInDb, inputValue)
  clearInput()
  // renderList(inputValue)
})

onValue(shoppingListInDb, function(snapshot) {
  let itemsArr = Object.entries(snapshot.val())
  clearShoppingListEl()
  for (const item of itemsArr) {
    let currentItem = item
    let currentItemID = itemsArr[0]
    let currentItemValue = currentItem[1]
    renderList(currentItemValue)
  }
})

function clearShoppingListEl() {
  shoppingListEl.innerHTML = ""
}
function clearInput() {
  inputField.value = ""
}

function renderList(item) {
  let itemID = item[0]
  let itemValue = item[1]

  let newEl = document.createElement("li")
  newEl.textContent = itemValue
  shoppingListEl.append(newEl)

}
