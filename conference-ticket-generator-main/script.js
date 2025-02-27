
const firstSection = document.querySelector(".first-section");
const secondSection = document.querySelector(".second-section");

const form = document.querySelector("#form");
const fullName = document.querySelector("#full-name");
const email = document.querySelector("#email");
const githubUsername = document.querySelector("#github-username");
const btn = document.querySelector("#submit-btn");
const btnContainer = document.querySelector(".btn-container");
const removeBtn = document.querySelector(".remove-btn");
const changeBtn = document.querySelector(".change-btn");
const dragText = document.querySelector(".drag-text");
const sizeWarning = document.querySelector(".size-warning");
const errorWarning = document.querySelectorAll(".error-warning");
const fileError = document.querySelector(".error");
const label = document.querySelector("#label");
const photoPreview = document.querySelector(".img-container");
const uploadedImg = document.querySelector("#uploaded-img");
const uploadIcon = document.querySelector("#upload-icon");
const uploadLabel = document.querySelector("#upload-label");

// Ticket Section Selector
const nameVal = document.querySelector(".nameValue");
const emailVal = document.querySelector(".emailValue");
const timeValue = document.querySelector(".dot");
const avatar = document.querySelector(".avatar");
const username = document.querySelector(".name");
const githubUsernameValue = document.querySelector(".githubUsernameValue");
const ticketNumber = document.querySelector(".ticket-number");



// File size limit (500 KB)
const FILE_SIZE_LIMIT = 500 * 1024;

// Function to check file size and display the image
function checkFileSize(file) {
  if (!file) return;

  if (file.size > FILE_SIZE_LIMIT) {
    // Show error if file size exceeds limit
    sizeWarning.style.display = "none";
    fileError.style.display = "block";
    btnContainer.style.display = "none";
    dragText.style.display = "block";
    return;
  }

  // Preview the uploaded image
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    uploadedImg.src = reader.result;
    avatar.src = reader.result;
    uploadedImg.style.display = "block";
    uploadIcon.style.display = "none";
    btnContainer.style.display = "block";
    dragText.style.display = "none";
  };
}

// Handle drag and drop events
label.addEventListener("dragover", (e) => {
  e.preventDefault();
  label.classList.add("dragOver");
});

label.addEventListener("dragleave", (e) => {
  e.preventDefault();
  label.classList.remove("dragOver");
});

label.addEventListener("drop", (e) => {
  e.preventDefault();
  label.classList.remove("dragOver");
  const file = e.dataTransfer.files[0];
  checkFileSize(file); // Validate file size
});

// Handle file selection via upload input
uploadLabel.addEventListener("change", () => {
  const file = uploadLabel.files[0];
  checkFileSize(file); // Validate file size
});

// Handle remove button functionality
removeBtn.addEventListener("click", () => {
  uploadedImg.style.display = "none";
  uploadIcon.style.display = "block";
  uploadedImg.src = "";
  btnContainer.style.display = "none";
  dragText.style.display = "block";
});

// Handle change button functionality
changeBtn.addEventListener("click", () => {
  btnContainer.style.display = "none";
  dragText.style.display = "block";
  uploadLabel.click(); // Trigger file input
});

// Validate the form on submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  let isValid = true;

  // Validate Full Name
  if (fullName.value.trim() === "") {
    errorWarning[0].style.display = "block"; // Show error
    fullName.style.border = "2px solid var(--Orange-500)";
    isValid = false;
  } else {
    errorWarning[0].style.display = "none"; // Hide error
    fullName.style.border = "2px solid var(--Neutral-700)";
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    errorWarning[1].style.display = "block"; // Show error
    email.style.border = "2px solid var(--Orange-500)";
    isValid = false;
  } else {
    errorWarning[1].style.display = "none"; // Hide error
    email.style.border = "2px solid var(--Neutral-700)";
  }

  // Validate GitHub Username
  if (githubUsername.value.trim() === "") {
    errorWarning[2].style.display = "block"; // Show error
    githubUsername.style.border = "2px solid var(--Orange-500)";
    isValid = false;
  } else {
    errorWarning[2].style.display = "none"; // Hide error
    githubUsername.style.border = "2px solid var(--Neutral-700)";
  }

  // If all fields are valid, switch sections
  if (isValid) {
    firstSection.style.display = "none";
    secondSection.style.display = "block";
  }
});

// Real-time validation for Full Name
fullName.addEventListener("input", () => {
  if (fullName.value.trim() !== "") {
    errorWarning[0].style.display = "none";
    fullName.style.border = "2px solid var(--Neutral-700)";
    username.textContent = fullName.value;
    nameVal.textContent = fullName.value;
  }
});

// Real-time validation for Email
email.addEventListener("input", () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email.value.trim())) {
    errorWarning[1].style.display = "none";
    email.style.border = "2px solid var(--Neutral-700)";
    emailVal.textContent = email.value;
  }
});

// Real-time validation for GitHub Username
githubUsername.addEventListener("input", () => {
  if (githubUsername.value.trim() !== "") {
    errorWarning[2].style.display = "none";
    githubUsername.style.border = "2px solid var(--Neutral-700)";
    githubUsernameValue.textContent = githubUsername.value;
  }
});

ticketNumber.textContent = "#" + Math.floor(Math.random() * 100000);

const currentDate = new Date();
const options = { month: 'short', day: 'numeric', year: 'numeric' };
timeValue.textContent = currentDate.toLocaleDateString('en-IN', options);