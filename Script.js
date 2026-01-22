window.onload = () => {
  const btn = document.getElementById('evil-btn');
  const scoreDisplay = document.getElementById('score');
  let score = 0;

  const insults = ["TOO SLOW!", "NOPE!", "TRY HARDER", "LOL", "MISSY!"];
  const PANIC_ZONE = 150;

  document.addEventListener('mousemove', (e) => {
    const btnRect = btn.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    const distance = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);

    if (distance < PANIC_ZONE) {
      moveButton();
    }
  });

  function moveButton() {
    // Keeps button inside the screen view
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);

    // We remove the centering transform once it starts moving
    btn.style.transform = "none";
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
    
    btn.innerText = insults[Math.floor(Math.random() * insults.length)];
  }

  btn.addEventListener('click', () => {
    score++;
    scoreDisplay.innerText = score;
    alert("I let you win because I felt bad for you. Don't let it go to your head.");
    moveButton();
  });
};
