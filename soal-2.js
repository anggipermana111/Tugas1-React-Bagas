const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

const arrow = (buas, jinak) => {
  return [...buas, ...jinak];
};

const makanan = (jinak) => {
  let kucing, kelinci, ayam;
  [kucing, kelinci, ayam] = hewanJinak;

  return "Ikan : " + kucing + "\nWortel :" + kelinci + "\nBeras " + ayam;
};

console.log(arrow(hewanBuas, hewanJinak));
setTimeout(() => {
  console.log(makanan(hewanJinak));
}, 5000);
