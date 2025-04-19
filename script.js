const startBtn = document.getElementById('startBtn');
const introText = document.getElementById('introText');
const startScreen = document.getElementById('startScreen');
const loadingScreen = document.getElementById('loadingScreen');
const loadingText = document.getElementById('loadingText');
const loadingBar = document.getElementById('loadingBar');
const mainContent = document.getElementById('mainContent');
const bioName = document.getElementById('bioName');
const bioDetails = document.getElementById('bioDetails');
const bioNick = document.getElementById('bioNick');
const bioLocation = document.getElementById('bioLocation');
const bioHobbies = document.getElementById('bioHobbies');
const bgMusic = document.getElementById('bgMusic');

startBtn.addEventListener('click', () => {
  introText.style.display = 'none';
  startScreen.style.display = 'none';
  loadingScreen.style.display = 'flex';

  let progress = 0;
  const interval = setInterval(() => {
    loadingText.innerText = `Loading... ${progress}%`;
    progress++;

    if (progress > 100) {
      clearInterval(interval);
      loadingScreen.style.display = 'none';
      mainContent.style.display = 'block';
      bgMusic.play();

      // Animasi muncul bio satu per satu
      setTimeout(() => {
        bioName.style.animation = "fadeIn 1s forwards";
      }, 500);

      setTimeout(() => {
        bioDetails.style.animation = "fadeInDelayed 1s forwards";
        bioDetails.style.display = 'block';
      }, 1500);

      setTimeout(() => {
        bioNick.style.animation = "fadeInDelayed 1s forwards";
        bioNick.style.display = 'block';
      }, 2500);

      setTimeout(() => {
        bioLocation.style.animation = "fadeInDelayed 1s forwards";
        bioLocation.style.display = 'block';
      }, 3500);

      setTimeout(() => {
        bioHobbies.style.animation = "fadeInDelayed 1s forwards";
        bioHobbies.style.display = 'block';
      }, 4500);
    }
  }, 30);
});