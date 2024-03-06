function loadPhon(searchText) {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(res => displayPhone(res.data))
}


function displayPhone(phones) {
    //step-1 
    const phonecontainer=document.getElementById('phone-container')
    phonecontainer.textContent=''
    phones.forEach(phone => {
        
        //step-2 create div
        const phonecard = document.createElement('div')
        phonecard.classList = `card p-4 bg-base-100 shadow-xl`
         //step-3 create innerhtml
        phonecard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>${phone.slug}</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
        
        `;
         //step-4 append
        phonecontainer.appendChild(phonecard)

    });
}

//handle search function
function handleSearch(){
const searchField=document.getElementById('searchField')
const searchText=searchField.value;
console.log(searchText)
loadPhon(searchText)
}