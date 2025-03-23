const phoneInput = document.getElementById('phone');
const countryCodeSelector = document.getElementById('country_code');
const form = document.querySelector('form');

for (const country of countryPhoneCode) {
  const option = document.createElement('option');
  option.text = `${country.code}, ${country.country}`;
  option.value = country.code;
  if (country.code === '972') {
    option.selected = true;
  }
  countryCodeSelector.appendChild(option);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let phoneNumber = phoneInput.value.trim();

  if (!phoneNumber) {
    alert('Please enter a phone number!');
    return;
  }

  // Optional: trim leading zero if present
  if (phoneNumber.startsWith('0')) {
    phoneNumber = phoneNumber.slice(1);
  }

  const countryCode = countryCodeSelector.value;
  const waLink = `https://wa.me/${countryCode}${phoneNumber}`;
  window.location.replace(waLink);
});
