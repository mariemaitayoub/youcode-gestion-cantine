const open = document.querySelector("#openPopup");
const modal = document.querySelector("#popup");
const clos = document.querySelectorAll(".closePopup");
const compteur=document.getElementById('compteur-recettes')
const form = document.querySelector('.form');
const reserve = document.getElementById('reserve');
let recettes = [];
open.addEventListener("click", function () {
    modal.showModal();
});


for (const btn of clos) {
    btn.addEventListener("click", function () {
        modal.close();
    });
}

const titleIn = document.querySelector("#titre");
const categoriesIn = document.querySelector("#categorie");
const tagsIn = document.querySelector("#tag");
const photoIn = document.querySelector("#photo");
const prixIn = document.querySelector("#prix");

form.addEventListener("submit", function (event) {
    event.preventDefault();



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
    reserve.innerHTML = ``;
    if (compteur)compteur.textContent=recettes.length;
    menu();
    recettes.forEach(recette => {
        const carte = document.createElement('div');
        carte.className = 'recet bg-white p-4 rounded-xl shadow-md border border-slate-100 flex flex-col gap-2 transition-transform hover:shadow-md hover:-translate-y-1';
        carte.innerHTML = `
                   ${recette.image ? `<img src="${recette.image}" alt="${recette.titre}" class="w-full h-32 object-cover rounded-md mb-2">` : ''}
            
            <h3 class="font-bold text-lg text-slate-800 capitalize">${recette.titre}</h3> 
            <p class="text-sm text-slate-600 flex justify-between">
                <span>Catégorie:</span> <strong>${recette.categorie}</strong>
            </p>
            <p class="text-sm text-slate-600 flex justify-between">
                <span>Prix:</span> <strong class="text-blue-600">${recette.prix} DH</strong>
            </p>
            
            <div class="mt-2">
                <span class="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs border border-blue-100">${recette.tag}</span>
            </div>
            
            <div class='flex gap-2 mt-4 pt-3 border-t border-slate-100'>
                <button onclick="modRecette(${recette.id})" class="flex-1 text-sm bg-slate-50 hover:bg-slate-100 text-slate-700 py-1.5 rounded-md">Modifier</button>
                <button onclick='supprimer(${recette.id})' class="flex-1 text-sm bg-red-50 hover:bg-red-100 text-red-600 py-1.5 rounded-md">Supprimer</button>
            </div>
                        `;
        reserve.appendChild(carte);
    });
}
function supprimer(id) {
    const confirmat = confirm('hhh jdsjdosv');
    if (confirmat) {
        recettes = recettes.filter(recette => recette.id !== id)
        afficheRecettes();
    }
}

function menu(){
   let selectEntree=`<option value=''>choisir une entree</option>`
   let selectPlat=`<option value=''>choisir un plat</option>`
   let selectDessert=`<option value=''>choisir un dessert</option>`

   
recettes.forEach(recette =>{
const option=`<option value='${recette.id}'>${recette.titre}(${recette.prix}DH)</option>`
 
if(recette.categorie ==='entree')selectEntree+=option;
else if(recette.categorie==='plat')selectPlat+=option;
else if (recette.categorie==='dessert')selectDessert+=option;


});
document.querySelectorAll(".select-entree").forEach(s=>s.innerHTML=selectEntree);
document.querySelectorAll(".select-plat").forEach(s=>s.innerHTML=selectPlat);
document.querySelectorAll(".select-dessert").forEach(s=>s.innerHTML=selectDessert);



document.querySelectorAll('.total-jour').forEach(t=>t.textContent='0dh');
}

function trouverPrix(idString){
    if(idString===''){
        return 0;
    }
    let idNum=Number(idString);

    for(let i=0;i<recette.length;i++){
        if(recettes[i].id===idNum){
            return recettes[i].prix;
        }
    }
    return 0 ;
}
function totalcalcul(){
    let jours=document.querySelectorAll('.jour-carte');
    for(let i=0;i<jours.length;i++){
        let jour=jours[i];
        let selects=jour.querySelectorAll('select');
        let afficheTotal=jour.querySelector('.total-jour');


        let selectEntree=selects[0];
        let selectPlat=selects[1];
        let selectDessert=selects[2];


        for(let j=0;j<selects.length;j++){
            selects[j].addEventListener('change',function(){
                let prixEntree=trouverPrix(selectEntree.value);


                                let prixPlat=trouverPrix(selectPlat.value);
                let prixDessert=trouverPrix(selectDessert.value);
                let total = prixEntree + prixPlat + prixDessert;
afficheTotal.textContent=total+'DH';
            })
        }
    }
}
totalcalcul()



