const ratingButtons = document.querySelectorAll(".rating button");
const submitButton = document.getElementById('submit'); // Corrected name
const activeCard = document.querySelector(".active");
const thankCard = document.querySelector(".thank");
const ratingText = document.querySelector("#p1 span");

let selectedRating = null;

ratingButtons.forEach((button) => {
    button.addEventListener("click", function () {
        ratingButtons.forEach(btn => {
            btn.classList.remove("selected");
            btn.style.color = ""; // Reset to default
            btn.style.backgroundColor = ""; // Reset to default
        });
        selectedRating = this.textContent;
        this.style.color = "white"; 
        this.style.backgroundColor = "hsl(25, 97%, 53%)";
        ratingButtons.forEach(btn => btn.classList.remove("selected")); 
        this.classList.add("selected"); 
    });
});

submitButton.addEventListener("click", function () { 
    if (selectedRating) {
        ratingText.textContent = selectedRating; 
        activeCard.style.display = "none"; 
        thankCard.style.display = "flex";
    } else {
        alert("Please select a rating before submitting.");
    }
});

