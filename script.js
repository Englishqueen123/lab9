document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("alertButton");
    const input = document.getElementById("userInput");
    const headline = document.getElementById("outputHeadline");

    button.addEventListener("click", function () {
        const inputValue = input.value;

        alert("Daniel Krieglstein: " + inputValue);

        headline.textContent = inputValue;
    });
});
