const phone = document.getElementById('phone');
const countryCodeSelector = document.getElementById('country_code');
const btn = document.querySelector('button');

for (const country of countryPhoneCode){
    let option = document.createElement('option')
    option.text = country.code + ', ' + country.country
    option.value = country.code
    if(country.code === '972'){
        option.selected = 'selected'
    }
    countryCodeSelector.appendChild(option)
}
btn.addEventListener('click', (event)=>{
    event.preventDefault();
    window.location.replace(`https://wa.me/${countryCodeSelector.value + phone.value}`)
})