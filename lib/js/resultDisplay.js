function resultDisplay(input, id = '#resultDisplay') {
    var resultDiv = document.querySelector(id);
    resultDiv.classList.add("updatedResult")
    // Clear existing content
    resultDiv.innerHTML = '';

    // Create a p element for each line in the array
    var result = document.createElement('p');
    result.textContent = input;

    // Append the p element to the resultDiv
    resultDiv.appendChild(result);
}