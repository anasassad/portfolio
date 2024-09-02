//  const readTextBtn = document.getElementById('readTextBtn');
//  const textToSpeak = document.getElementById('text-to-speak');
const header = document.getElementsByTagName('header');
const headerToggler = document.getElementById('toggle__header');
const display_status = ['none', 'flex', false]

//  function splitTextIntoSpans(text) {
//      return text.split(' ').map(word => `<span>${word}</span>`).join(' ');
//  }

//  function speakText() {
//      if ('speechSynthesis' in window) {
//          const text = textToSpeak.textContent;
//          const words = text.split(' ');
//          textToSpeak.innerHTML = splitTextIntoSpans(text);

//          const speech = new SpeechSynthesisUtterance();
//          speech.text = text;

//          speech.volume = 1;
//          speech.rate = 1;
//          speech.pitch = 1;

//          window.speechSynthesis.speak(speech);
//      } else {
//          alert('Sorry, your browser does not support the Web Speech API.');
//      }
//  }

//  readTextBtn.addEventListener('click', speakText);

headerToggler.onclick = () => {
    display_status[2] = !display_status[2];
    header[0].style.display = display_status[2] ? display_status[0] : display_status[1];
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});
