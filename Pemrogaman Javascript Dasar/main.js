// alert('Ini Adalah Alert');
// console.log("Ini Adalah Console.log");
// prompt("Masukan Something : ")

// Variabel
/* 
let usia = 21;
const nama = "Irnanda";
console.log(`Haloo Usia Kamu adalah ${usia} Dan Nama kamu adalah ${nama}`)
*/

// Tipe Data
let usia = 20; 
const nama = "Irnanda";
let tinggiBadan = 169.5;
let beratBadan;
let pekerjaan = null;

beratBadan = 45

//Pengkondisian
if (pekerjaan == null) {
    pekerjaan = "Tidak Punya"
} else {
    pekerjaan = "Sudah Punya"
}

//Operator
let saldoAwal = 50000;
let saldoTambahan = 80000;
let hutang = 30000
const saldoAkhir = saldoAwal + saldoTambahan - hutang;

alert(`Saldo awal saya adalah Rp${saldoAwal} dan saldo tambahan saya Rp${saldoTambahan} saya memiliki hutang sebesar Rp${hutang} jadi saldo yang akan saya miliki adalah sebesar Rp${saldoAkhir}`)
alert(`Haloo nama saya adalah ${nama} dan tinggi badan saya ${tinggiBadan}cm serta memiliki berat badan ${beratBadan}kg dan pekerjaan saya ${pekerjaan}`);

// For Loop
for ( i = 0; i <= 5; i = i + 1 ) {
    console.log(`perulangan Ke ${i}`)
}

// For loop of array
let student = ["Yamal", "Budi", "Ari"]
for ( i = 0; i < student.length; i++ ) {
    console.table(student[i])
}