const Mahasiswa = {
  nama: "Bagas Rizky",
  nim: "02042111012",
  email: "bagasrizki700@gmail.com",
};

let { nama, nim, email } = Mahasiswa;

console.log(nama);
console.log(nim);
console.log(email);

let arr1 = ["Bagas", "Kurniawan"];
let arr2 = ["Riyan", "Fadli"];
let arr3 = ["Dede", "Agus"];

const hasil = [...arr1, ...arr2, ...arr3];

console.log(hasil);
