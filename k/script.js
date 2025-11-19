const titre = document.getElementById("titre");
const date = document.
const image = document.getElementById("image");
const qrCode = document.getElementById("qr-code");
const form = document.getElementById("rsvp-form");
const messageDiv = document.getElementById("message");

// Animation de texte
const texte = "Vous êtes invité à notre mariage religieux !";
let index = 0;
function animerTexte() {
  titre.innerHTML = texte.slice(0, index);
  index++;
  if (index <= texte.length) {
    setTimeout(animerTexte, 100);
  }
}
animerTexte();

// Récupérer les informations de la page web
const classe = document.querySelector('.classe').textContent;
const url = window.location.href;

// Créer un objet QR code
const qrCode = new QRCode({
  text: Classe : ${classe}\nURL : ${url},
  width: 200,
  height: 200,
  colorDark: '#000000',
  colorLight: '#ffffff',
});

// Générer le QR code
qrCode.makeCode();

// Ajouter le QR code à la page
document.getElementById('qr-code').innerHTML = qrCode;

// Ajouter un événement pour télécharger le QR code
document.getElementById('download-btn').addEventListener('click', () => {
  const canvas = document.createElement('canvas');
  canvas.width = 200;
  canvas.height = 200;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(qrCode, 0, 0);
  const dataURL = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'qr-code.png';
  link.click();
});