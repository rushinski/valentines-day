let envelopeOpened = false;
let msgClicked = false;

function openEnvelope() {
  const msg = document.querySelector('.msg'); // Using msg instead of topPart
  const envelope = document.querySelector('.envelope'); // Selecting the envelope

  if (!envelopeOpened) {
    envelope.classList.add('open'); // Open envelope flap
    envelopeOpened = true;
  }
}

function showFullMessage() {
  const msg = document.querySelector('.msg');
  const topPart = document.querySelector('.top-part');
  const leftPart = document.querySelector('.left-part');
  const rightPart = document.querySelector('.right-part');

  if (!msgClicked) {
    // Animate the envelope parts out of view
    [topPart, leftPart, rightPart].forEach(part => {
      part.style.transition = "transform 0.8s ease-in-out, opacity 0.5s ease-in-out";
      part.style.opacity = "0";
    });

    topPart.style.transform = "translateY(-120%) rotateX(-30deg)";
    leftPart.style.transform = "translateX(-120%) rotate(-30deg)";
    rightPart.style.transform = "translateX(120%) rotate(30deg)";

    setTimeout(() => {
      [topPart, leftPart, rightPart].forEach(part => part.style.display = "none");
    }, 800);

    // Ensure message is centered and fully visible
    msg.style.transition = "transform 0.6s ease-in-out, opacity 0.5s ease-in-out";
    msg.style.position = "fixed"; // Ensures message stays in view
    msg.style.top = "50%"; // Centers vertically
    msg.style.left = "50%"; // Centers horizontally
    msg.style.transform = "translate(-50%, -50%)"; // Perfect centering
    msg.style.width = "85vw"; // Adjust width for mobile
    msg.style.height = "55vh"; // Adjust height for mobile
    msg.style.fontSize = "1rem"; // Readable text size
    msg.style.fontFamily = "Arial, sans-serif";
    msg.style.background = "rgba(255, 255, 255, 0.98)";
    msg.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.2)";
    msg.style.padding = "15px";
    msg.style.borderRadius = "12px";
    msg.style.display = "flex";
    msg.style.flexDirection = "column";
    msg.style.justifyContent = "center";
    msg.style.alignItems = "center";
    msg.style.textAlign = "center";
    msg.style.overflowY = "auto"; // Allows scrolling if needed

    // Add content to the message
    msg.innerHTML = `
      <p style="opacity: 0; transition: opacity 0.8s ease-in-out;">
        Dear Makenna,<br><br>

        I know this is late,<br>
        And I'm sorry for making you wait,<br>
        I know this gift may not be great,<br>
        Or the way I give it to you, you might hate.<br><br>

        I haven't been making you feel great,<br> 
        Or like someone you would even want to date.<br>
        Sometimes I lie, sometimes I make you break,<br>
        Or sometimes I take and I take.<br><br>

        But through all this, you have stuck with me, and that isn't a mistake.<br>
        I know what is at stake,<br>
        And we know what we can make.<br>
        So I want to retake and remake,<br>
        What is at stake,<br>
        For our sake.<br><br>

        Would you do me the honors of being my Valentine's Day date?
      </p>
      <div class="btn-container" style="opacity: 0; transition: opacity 0.8s ease-in-out 0.3s;">
        <button class="btn yes" onclick="respondYes()">Yes</button>
        <button class="btn no" onclick="respondNo()">No</button>
      </div>
    `;

    // After content is added, fade in the text
    setTimeout(() => {
      document.querySelector('p').style.opacity = '1'; // Fade in the text
      document.querySelector('.btn-container').style.opacity = "1"; // Fade in the buttons
    }, 100);

    msgClicked = true; // Flag to prevent running again
  }
}

function respondYes() {
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popupMessage");
  popupMessage.innerHTML = "February 14th @ Texas Roadhouse";
  popup.style.display = "block"; // Show the pop-up
  
  // Trigger the falling hearts animation
  createFallingHearts();
}

function respondNo() {
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popupMessage");
  popupMessage.innerHTML = "Wrong answer! 😂"; // Display wrong answer with laughing emoji
  popup.style.display = "block"; // Show the pop-up
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none"; // Hide the pop-up
}

// Function to create falling hearts
function createFallingHearts() {
  const container = document.getElementById("hearts-container");

  // Check if the container exists
  if (!container) {
    console.error("Hearts container not found!");
    return;
  }

  // Number of hearts to create (e.g., 50 hearts at once)
  const numHearts = 50;

  for (let i = 0; i < numHearts; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    
    // Set a random horizontal position for each heart (across the whole screen)
    heart.style.left = `${Math.random() * 100}vw`;
    // Randomize the fall delay for a more natural effect
    heart.style.animationDelay = `${Math.random() * 2}s`;
    
    // Append the heart to the container
    container.appendChild(heart);

    // Remove the heart after the animation ends (prevents DOM buildup)
    setTimeout(() => {
      heart.remove();
    }, 3000); // Same duration as falling animation
  }
}

// Function to handle the 'Yes' button click
function respondYes() {
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popupMessage");
  popupMessage.innerHTML = "February 14th @ Texas Roadhouse";
  popup.style.display = "block"; // Show the pop-up

  // Trigger the falling hearts animation
  createFallingHearts();
}
