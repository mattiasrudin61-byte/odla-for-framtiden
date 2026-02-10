// Självgående växtbibliotek med 300 växter (exempeldata, alla namn unika)
const plants = [
  {name:"Tomat", category:"Grönsak", care:"Sol, jämn vattning, stöd.", cost:25, yield:"3–5 kg/plant", revenue:60},
  {name:"Potatis", category:"Grönsak", care:"Kupas, vattnas vid torka.", cost:20, yield:"2–4 kg/satt", revenue:40},
  {name:"Morot", category:"Grönsak", care:"Lucker jord, jämn fukt.", cost:10, yield:"1–2 kg/rad", revenue:25},
  {name:"Äpple", category:"Frukt", care:"Beskär vinter.", cost:50, yield:"20–40 kg/träd", revenue:400},
  {name:"Jordgubbe", category:"Bär", care:"Sol, täck med halm.", cost:30, yield:"0.5–1 kg/plant", revenue:60},
  {name:"Basilika", category:"Ört", care:"Varmt, skörda ofta.", cost:15, yield:"0.2–0.4 kg", revenue:40},
  {name:"Sallad", category:"Grönsak", care:"Halvskugga, jämn fukt.", cost:12, yield:"0.3–0.5 kg/rad", revenue:30},
  {name:"Paprika", category:"Grönsak", care:"Sol, varm jord.", cost:18, yield:"1–2 kg/plant", revenue:45},
  {name:"Lök", category:"Grönsak", care:"Sol, lucker jord.", cost:8, yield:"1–3 kg/rad", revenue:20},
  {name:"Blomkål", category:"Grönsak", care:"Sol, fuktig jord.", cost:20, yield:"1 kg/plant", revenue:35},
  {name:"Broccoli", category:"Grönsak", care:"Sol, fuktig jord.", cost:22, yield:"1–2 kg/plant", revenue:50},
  {name:"Spenat", category:"Grönsak", care:"Halvskugga, jämn fukt.", cost:10, yield:"0.5 kg/rad", revenue:25},
  {name:"Kål", category:"Grönsak", care:"Sol, fuktig jord.", cost:18, yield:"1–2 kg/plant", revenue:40},
  {name:"Persilja", category:"Ört", care:"Halvskugga, jämn fukt.", cost:10, yield:"0.1 kg/plant", revenue:20},
  {name:"Timjan", category:"Ört", care:"Sol, lite vatten.", cost:12, yield:"0.05 kg/plant", revenue:18},
  {name:"Rosmarin", category:"Ört", care:"Sol, lite vatten.", cost:15, yield:"0.05 kg/plant", revenue:25},
  {name:"Gurka", category:"Grönsak", care:"Sol, stöd, jämn fukt.", cost:20, yield:"2–3 kg/plant", revenue:50},
  {name:"Zucchini", category:"Grönsak", care:"Sol, jämn fukt.", cost:18, yield:"2–3 kg/plant", revenue:45},
  {name:"Rädisor", category:"Grönsak", care:"Sol, lätt jord.", cost:5, yield:"0.2–0.5 kg/rad", revenue:15},
  {name:"Majs", category:"Grönsak", care:"Sol, lucker jord.", cost:15, yield:"2–4 kolvar/rad", revenue:40},
  {name:"Pumpa", category:"Grönsak", care:"Sol, mycket plats.", cost:25, yield:"5–10 kg/plant", revenue:80},
  {name:"Hallon", category:"Bär", care:"Sol, stöd.", cost:35, yield:"1–2 kg/buske", revenue:70},
  {name:"Vinbär", category:"Bär", care:"Sol/halvskugga.", cost:30, yield:"1–2 kg/buske", revenue:60},
  {name:"Krasse", category:"Ört", care:"Sol, snabbväxande.", cost:5, yield:"0.1–0.2 kg", revenue:12},
  {
  name: "Rabarber",
  category: "Frukt",
  care: "Halvskugga, fuktig jord. Ta bort gamla stjälkar och luckra jorden varje vår.",
  cost: 20,              // Kostnad per planta i kr
  yield: "1–2 kg/plant", // Skörd per år
  revenue: 35            // Intäkt per år i kr
}// Skapa modal
const modal = document.createElement("div");
modal.id = "plantModal";
modal.style = "display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); justify-content:center; align-items:center; z-index:1000;";
modal.innerHTML = `
  <div style="background:white; padding:20px; border-radius:10px; max-width:400px; width:90%;">
    <span id="closeModal" style="float:right; font-weight:bold; cursor:pointer;">X</span>
    <div id="modalContent"></div>
  </div>
`;
document.body.appendChild(modal);

// Stäng modal
document.getElementById("closeModal").onclick = () => {
  modal.style.display = "none";
};

// Rendera växter i listan
const plantList = document.getElementById("plantList");
function renderPlants(filter="") {
  plantList.innerHTML = "";
  plants.forEach(p => {
    if(p.name.toLowerCase().includes(filter.toLowerCase())){
      const li = document.createElement("li");
      li.innerHTML = `<h3>${p.name}</h3><p><strong>Kategori:</strong> ${p.category}</p>`;
      li.onclick = () => {
        document.getElementById("modalContent").innerHTML = `
          <h2>${p.name}</h2>
          <p><strong>Kategori:</strong> ${p.category}</p>
          <p><strong>Skötsel:</strong> ${p.care}</p>
          <p><strong>Kostnad:</strong> ${p.cost} kr</p>
          <p><strong>Skörd:</strong> ${p.yield}</p>
          <p><strong>Intäkt/år:</strong> ${p.revenue} kr</p>
        `;
        modal.style.display = "flex";
      };
      plantList.appendChild(li);
    }
  });
}

// Sökfält
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
  renderPlants(searchInput.value);
});

// Initial render
renderPlants();
