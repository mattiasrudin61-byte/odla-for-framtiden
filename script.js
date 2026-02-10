// Självgående växtdata (start med några exempel, kan byggas upp till 300)
const plants = [
  {name:"Tomat", category:"Grönsak", care:"Sol, jämn vattning, stöd.", cost:25, yield:"3–5 kg/plant", revenue:60},
  {name:"Potatis", category:"Grönsak", care:"Kupas, vattnas vid torka.", cost:20, yield:"2–4 kg/satt", revenue:40},
  {name:"Morot", category:"Grönsak", care:"Lucker jord, jämn fukt.", cost:10, yield:"1–2 kg/rad", revenue:25},
  {name:"Äpple", category:"Frukt", care:"Beskär vinter.", cost:50, yield:"20–40 kg/träd", revenue:400},
  {name:"Jordgubbe", category:"Bär", care:"Sol, täck med halm.", cost:30, yield:"0.5–1 kg/plant", revenue:60},
  {name:"Basilika", category:"Ört", care:"Varmt, skörda ofta.", cost:15, yield:"0.2–0.4 kg", revenue:40},
  // ... fortsätt upp till alla växter du vill ha
];

// Hitta listan i DOM
const plantList = document.getElementById("plantList");

// Rendera alla växter
function renderPlants(filter="") {
  plantList.innerHTML = "";
  let totalCost = 0;
  plants.forEach(p => {
    if(p.name.toLowerCase().includes(filter.toLowerCase())){
      const li = document.createElement("li");
      li.innerHTML = `
        <h3>${p.name}</h3>
        <p><strong>Kategori:</strong> ${p.category}</p>
        <p><strong>Skötsel:</strong> ${p.care}</p>
        <p><strong>Kostnad:</strong> ${p.cost} kr</p>
        <p><strong>Skörd:</strong> ${p.yield}</p>
        <p><strong>Intäkt/år:</strong> ${p.revenue} kr</p>
      `;
      plantList.appendChild(li);
      totalCost += p.cost;
    }
  });
}

// Sökfunktion
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
  renderPlants(searchInput.value);
});

// Initial render
renderPlants();
