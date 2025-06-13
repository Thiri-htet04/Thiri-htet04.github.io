const pets = [
    {
        "name": "Buddy",
        "type": "Dog",
        "age": 3,
        "img": "petshop-img/dogs/dog01.jpg"
    },
    {
        "name": "Bubbles",
        "type": "Dog",
        "age": 3, 
        "img": "petshop-img/dogs/dog02.jpg"
    },
    {
       "name": "Charlie",
        "type": "Dog",
        "age": 4, 
        "img": "petshop-img/dogs/dog03.jpg"
    },
    {
        "name": "Whiskers",
        "type": "Cat",
        "age": 2,
        "img": "petshop-img/cats/cat01.jpg"
    },
    {
        "name": "Mittens",
        "type": "Cat",
        "age": 2, 
        "img": "petshop-img/cats/cat02.jpg"
    },
    {
        "name": "Coco",
        "type": "Cat",
        "age": 3, 
        "img": "petshop-img/cats/cat03.jpg"
    },
    {
        "name": "Nibbles",
        "type" : "Bird",
        "age": 1,
        "img": "petshop-img/birds/bird01.jpg"
    }
    ,
    {
        "name": "Tweety",
        "type": "Bird",
        "age": 2, 
        "img": "petshop-img/birds/bird02.jpg"
    },
    
    {
        "name" : "Goldie",
        "type": "Capybara",
        "age": 5,
        "img": "petshop-img/capybaras/capybara01.jpg"
    },
    {
        "name": "Cappy",
        "type": "Capybara",
        "age": 4, 
        "img": "petshop-img/capybaras/capybara02.jpg"
    },
    {
        "name": "Fluffy",
        "type": "dog",
        "age": 2,
        "img": "petshop-img/dog.jpg"
    },
    {
        "name": "Snowball",
        "type": "cat",
        "age": 1,
        "img": "petshop-img/cat.webp"
    },
    {
        "name": "Chirpy",
        "type": "bird",
        "age": 1,
        "img": "petshop-img/jumbotron.jpg"
    }


    

]

function adoptPet() { 

    alert("Thank you for your interest in adopting! Our team will contact you soon."); 

} 

function loadPets() {
    console.log('Loading pets...');
    const petList = document.getElementById('pet-list');
    pets.forEach(pet => {
        const petItem = document.createElement('div');
        petItem.className = 'pet';
        petItem.innerHTML = `
	      <img src="${pet.img}" alt="${pet.name}">
	      <h3>${pet.name}</h3>
	      <p>Type: ${pet.type}</p>
	      <p>Age: ${pet.age} years</p>
	      <button onclick="adoptPet()">Adopt Now</button>
	  `;
        petList.appendChild(petItem);
    });
}
document.addEventListener('DOMContentLoaded', loadPets);
console.log('Pets loaded successfully.');