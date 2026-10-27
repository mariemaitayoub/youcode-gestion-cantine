const open = document.querySelector("#openPopup");
const modal = document.querySelector("#popup");
const clos = document.querySelectorAll(".closePopup");
const compteur=document.getElementById('reserve')
const form = document.querySelector('.form');
const reserve = document.getElementById('reserve');
let recettes = [];
open.addEventListener("click", function () {
    modal.showModal();
});



const titleIn = document.querySelector("#titre");
const categoriesIn = document.querySelector("#categorie");
const tagsIn = document.querySelector("#tag");
const photoIn = document.querySelector("#photo");
const prixIn = document.querySelector("#prix");

form.addEventListener("submit", function (event) {
    event.preventDefault();
});

for (const btn of clos) {
    btn.addEventListener("click", function () {
        modal.close();
    });
}

const nom = titleIn.value.trim();
const cat = categoriesIn.value;
const tagg = tagsIn.value;
const photoPlat = photoIn.files[0];
const prix = Number(prixIn.value);

let photoUrl = '';
if (photoPlat) {
    photoUrl = URL.createObjectURL(photoPlat);
}
const newrecet = {
    id: Date.now(),
    titre: nom,
    categorie: cat,
    prix: prix,
    tag: tagg,
    image: photoUrl
}
recettes.push(newrecet);
form.reset();
afficheRecettes();
modal.close();
});       

function afficheRecettes() {
    reserve.innerHTML = ``
    recettes.forEach(recette => {
        const carte = document.createElement('div');
        carte.className = 'recet bg-white p-4 rounded-xl shadow-md border border-slate-100 flex flex-col gap-2';
        carte.innerHTML = `

                    ${recette.image ? `<img src="${recette.image}" alt="${recette.titre}" class="w-full h-32 object-cover rounded-md mb-2">` : ''}
                    <h3>${recette.titre}</h3> 
                    <p>categorie :${recette.categorie}</p>
                    <p>prix :${recette.prix}</p>
                    <p>Tags :${recette.tag}</p>
                    <div class='action'>
                        <button onclick="modRecette(${recette.id})">Modifier</button>
                        <button onclick='supprimer(${recette.id})'>Supprimer</button>
                    </div>
                        `;
        reserve.appendChild(carte);
    })
}
function supprimer(id) {
    const confirmat = confirm('hhh jdsjdosv');
    if (confirmat) {
        recettes = recettes.filter(recette => recette.id !== id)
        afficheRecettes();
    }
}







