const addBtn = document.getElementById("add-button")
const inputField = document.getElementById("input-field")

let inputValue = inputField.value
addBtn.addEventListener("click", function() {
  console.log(inputValue)
})
