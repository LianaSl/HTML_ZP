const openBtn      = document.getElementById('open-modal-btn');
const modalOverlay = document.getElementById('modal');
const closeBtn     = document.getElementById('modal-close-btn');
const form         = document.getElementById('contact-form');
const successMsg   = document.getElementById('success-msg');

const fieldName    = document.getElementById('iname');
const fieldEmail   = document.getElementById('iemail');
const fieldMessage = document.getElementById('imessage');

const fields = [
  { el: fieldName,    key: 'contact_name',    minLen: 2, label: 'Jméno' },
  { el: fieldEmail,   key: 'contact_email',   minLen: 0, label: 'E-mail' },
  { el: fieldMessage, key: 'contact_message', minLen: 5, label: 'Zpráva' },
];


fields.forEach(({ el, key }) => {
  const saved = localStorage.getItem(key);
  if (saved) el.value = saved;
});


function validateField({ el, label, minLen }) {
  const val = el.value.trim();
  let error = '';

  if (!val) {
    error = `${label} je povinné pole.`;
  } else if (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
    error = 'Zadejte platný e-mail.';
  } else if (minLen && val.length < minLen) {
    error = `${label} musí mít alespoň ${minLen} znaky.`;
  }

  showError(el, error);
  return error === '';
}

function showError(el, message) {
  const wrapper = el.parentElement;
  let span = wrapper.querySelector('.field-error');
  if (!span) {
    span = document.createElement('span');
    span.className = 'field-error';
    wrapper.appendChild(span);
  }
  span.textContent = message;
  el.classList.toggle('input-error', !!message);
  el.classList.toggle('input-ok', !message && el.value.trim() !== '');
}


fields.forEach(({ el, key, ...rest }) => {
  el.addEventListener('input', () => {
    localStorage.setItem(key, el.value);
    if (el.classList.contains('input-error')) {
      validateField({ el, key, ...rest });
    }
  });
});


fields.forEach((field) => {
  field.el.addEventListener('blur', () => validateField(field));
});


function openModal() {
  modalOverlay.classList.add('modal-open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('modal-open');
  document.body.style.overflow = '';
}


openBtn.addEventListener('click', openModal);


closeBtn.addEventListener('click', closeModal);


modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});


form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const allValid = fields.map(validateField).every(Boolean);
  if (!allValid) return;

  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' },
  });

  if (response.ok) {
    form.style.display = 'none';
    successMsg.style.display = 'block';
    fields.forEach(({ key }) => localStorage.removeItem(key));
  }
});
