// Get the modal
var modal = document.getElementById("imageModal");

// Get the modal image and caption
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

// Get all thumbnail images
var thumbnails = document.querySelectorAll(".thumbnail");

// Loop through all thumbnails
thumbnails.forEach(function(thumbnail) {
    thumbnail.onclick = function() {
        // Get the full-size image from the thumbnail's data-full attribute
        var fullImageSrc = thumbnail.getAttribute("data-full");
        
        // Set the modal image source to the full-size image
        modalImg.src = fullImageSrc;
        
        // Set the caption (using alt text)
        captionText.innerHTML = thumbnail.alt;
        
        // Show the modal
        modal.style.display = "block";
    };
});

// Get the close button
var closeBtn = document.getElementsByClassName("close")[0];

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Close the modal when clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
