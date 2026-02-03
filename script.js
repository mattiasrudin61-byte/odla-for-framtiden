const plants = [
  { name: "Tomat", care: "Soligt läge, jämn vattning, näring varje vecka." },
  { name: "Potatis", care: "Kupas, vattnas vid torka, skördas sensommar." },
  { name: "Jordgubbar", care: "Sol, täck med halm, byt plantor vart 3–4 år." },
  { name: "Äpple", care: "Beskär vinter, vattna unga träd." },
  { name: "Morot", care: "Djup lucker jord, jämn fukt." },
  { name: "Lök", care: "Soligt, lätt jord, vattna sparsamt." },
  { name: "Sallad", care: "Snabbväxande, håll jorden fuktig." },
  { name: "Broccoli", care: "Näringsrik jord, jämn vattning." },
  { name: "Paprika", care: "Varmt och skyddat läge." },
  { name: "Zucchini", care: "Mycket vatten och näring." }
  // ← här kan du lägga 300 växter, samma struktur
];

const library = document.getElementById("library");
const openLibrary = document.getElementById("openLibrary");

openLibrary.onclick = () => {
  library.classList.toggle("hidden");
};

plants.forEach(plant => {
  const div = document.createElement("div");
  div.className = "plant";
  div.textContent = plant.name;
  div.onclick = () => openModal(plant);
  library.appendChild(div);
});

// MODAL
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

function openModal(plant) {
  modalTitle.textContent = plant.name;
  modalText.textContent = plant.care;
  modal.classList.remove("hidden");
}

document.getElementById("closeModal").onclick = () => {
  modal.classList.add("hidden");
};
