// Function to open the pop-up form
function openPopup() {
    document.getElementById("popup-form").style.display = "flex";
}

// Function to close the pop-up form
function closePopup() {
    document.getElementById("popup-form").style.display = "none";
}

// Function to update profile details
function updateProfile() {
    let newFirstName = document.getElementById("new-firstname").value;
    let newLastName = document.getElementById("new-lastname").value;
    let newAddress = document.getElementById("new-address").value;
    let newPhone = document.getElementById("new-phone").value;

    // Send AJAX request to update session
    fetch('/Account/UpdateProfile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            FirstName: newFirstName,
            LastName: newLastName,
            Address: newAddress,
            Phone: newPhone
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Update Profile Information on Page
            document.getElementById("profile-firstname").textContent = newFirstName;
            document.getElementById("profile-lastname").textContent = newLastName;
            document.getElementById("profile-address").textContent = newAddress;
            document.getElementById("profile-phone").textContent = newPhone;

            // Close the pop-up form
            closePopup();
        } else {
            alert("Failed to update profile.");
        }
    })
    .catch(error => console.error("Error updating profile:", error));
}
