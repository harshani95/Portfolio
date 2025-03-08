//hamburger menu
$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });
});

//project display and hide

function toggleProjectContent(index) {
  const imageContainer = document.querySelectorAll(".image-container")[index];
  const content = document.querySelectorAll(".content")[index];

  imageContainer.style.display = "none";
  content.style.display = "block";
}

function showImageAgain(index) {
  const imageContainer = document.querySelectorAll(".image-container")[index];
  const content = document.querySelectorAll(".content")[index];

  imageContainer.style.display = "block";
  content.style.display = "none";
}

// Add click event listeners to each image to toggle the content
const projectImages = document.querySelectorAll(".project-image");
projectImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    toggleProjectContent(index);
  });

  const showButton = document.querySelectorAll(".btn-show")[index];
  showButton.addEventListener("click", () => {
    toggleProjectContent(index);
  });

  const contentContainer = document.querySelectorAll(".box")[index];
  contentContainer.addEventListener("mouseleave", () => {
    showImageAgain(index);
  });
});

// JavaScript code for modal functionality with close button functionality
let buttons = document.querySelectorAll(".btn-show");
let closeButtons = document.querySelectorAll(".close");
let modals = document.querySelectorAll(".modal");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let modalId = this.id.replace("btn-show-", "");
    let modal = document.getElementById("my-modal-" + modalId);
    modal.style.display = "block";
  });
}

for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function () {
    let modal = this.closest(".modal");
    modal.style.display = "none";
  });
}
