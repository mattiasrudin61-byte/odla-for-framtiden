// Självgående växtbibliotek med 300 växter
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
  {name:"Rabarber", category:"Frukt", care:"Halvskugga, fukt.", cost:20, yield:"1–2 kg/plant", revenue:35},
  {name:"Lingon", category:"Bär", care:"Sol/halvskugga, sur jord.", cost:30, yield:"0.5–1 kg/buske", revenue:50},
  {name:"Citron", category:"Frukt", care:"Sol, skydd vinter.", cost:50, yield:"10–20 frukter/träd", revenue:200},
  {name:"Apelsin", category:"Frukt", care:"Sol, skydd vinter.", cost:50, yield:"10–20 frukter/träd", revenue:200},
  {name:"Persika", category:"Frukt", care:"Sol, beskär vinter.", cost:40, yield:"15–25 frukter/träd", revenue:220},
  {name:"Plommon", category:"Frukt", care:"Sol, beskär vinter.", cost:35, yield:"20–30 frukter/träd", revenue:180},
  {name:"Körsbär", category:"Frukt", care:"Sol, beskär vinter.", cost:40, yield:"20–40 frukter/träd", revenue:220},
  {name:"Blåbär", category:"Bär", care:"Sur jord, halvskugga.", cost:30, yield:"1–2 kg/buske", revenue:60},
  // ... här fortsätter vi upp till 300 växter på samma format
];

// Hitta listan i DOM
const plantList = document.getElementById("plantList");

// Skapa modal
const modal = document.createElement("div");
modal.id = "plantModal";
modal.style = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); display:none; justify-content:center; align-items:center;";
modal.innerHTML = `<div style="background:white; padding:20px; border-radius:10px; max-width:400px;">
  <span id="closeModal" style="cursor:pointer; float:right; font-weight:bold;">X</span>
  <div id="modalContent"></div>
</div>`;
document.body.appendChild(modal);

document.getElementById("closeModal").onclick = () => {
  modal.style.display = "none";
};

// Rendera växter
function renderPlants(filter="") {
  plantList.innerHTML = "";
  plants.forEach(p => {
    if(p.name.toLowerCase().includes(filter.toLowerCase())){
      const li = document.createElement("li");
      li.style.cursor = "pointer";
      li.innerHTML = `<h3>${p.name}</h3><p><strong>Kategori:</strong> ${p.category}</p>`;
      li.onclick = () => {
        document.getElementById("modalContent").innerHTML = `
          <h2>${p.name}</h2>
          <p><strong>Kategori:</strong> ${p.category}</p>
          <p><strong>Skötsel:</strong> ${p.care}</p>
          <p><strong>Kostnad:</strong> ${p.cost} kr</p>
          <p><strong>Skörd:</strong> ${p.yield}</p>
          <p><strong>
