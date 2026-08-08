const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
function submitForm(e){
  e.preventDefault();
  const msg=document.getElementById('form-msg');
  msg.textContent="Thank you! Your enquiry has been recorded in this demo. Connect the form to email/WhatsApp before publishing.";
  e.target.reset();
  return false;
}