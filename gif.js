// Array of GIFs and messages
const gifs = [
    { src: "./gifs/gif1.gif", message: "HAPPY BIRTHDAY PINO,ENJOY YOUR DAY LIKE YOU NEVER BEFORE." },
    { src: "./gifs/hug.gif", message: "DAILY TUMSE BATTE KRTA HU, TUMHE YAD KRTA HU. AB BAS TUMHE KUSH DEKHNA H  " },
    { src: "./gifs/hands.gif", message: "TUMHRI DESTINY WALI BATTE ,AB ME BHI YHI SOCHTA KY HUMLOG MILENGE?" },
    { src: "./gifs/sad.gif", message: "KAFI PARESHAN HUI TUM MERE WAHAJH SE.SAYAD MUJHE TUMHRI KADRAA NHI THI .BUT AB MERE PASS TUM NHI HO BATE KRNE TOH ME NHI BATA SKTA HOW I FEEL" },
    { src: "./gifs/couple.gif", message: "kabhi udas rho acha na lagge to im whith you,Love You " },
    { src: "./gifs/Dandadan GIF.gif", message: "KHamos kyu ho jo bhi kehna h kaho dil cahhe jitna payar utna mang lo..tumko milega utna payar MEE HUU NA. " },
    { src: "https://media.giphy.com/media/Z5zuypybI5dYc/giphy.gif?cid=ecf05e471fl5grn98urwrd3ukauu59qhw0om7fturvetv41o&ep=v1_gifs_related&rid=giphy.gif&ct=g", message: "AB to tum bas aise hi mujhe bhagti rehti,chlo anshi AB toh tum dil me rehti ho yado me har jagahha,ky pata kal tum call krogi ya nhi." },
    { src: "./images/1.jpg", message: "HAPPY BIRTHDAY TO YOU ANSHIKA.DIL KI BATTE AB CALL PE WO BHI AGAR TUM KI TOH" },
  ];
  
  let currentIndex = 0;
  
  // Get elements
  const gifElement = document.getElementById("gif");
  const messageElement = document.getElementById("message");
  const nextButton = document.getElementById("next-btn");
  
  // Function to update GIF and message
  function updateContent() {
    gifElement.src = gifs[currentIndex].src;
    messageElement.textContent = gifs[currentIndex].message;
  }
  
  // Event listener for the "Next" button
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % gifs.length; // Loop through the array
    updateContent();
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  });
  // Initialize with the first GIF and message
  updateContent();

  