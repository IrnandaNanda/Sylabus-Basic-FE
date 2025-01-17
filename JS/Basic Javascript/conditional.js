//Pengkondisian
const nilai = 70;

if (nilai <= 75) {
    console.log("Coba Lagi Tahun Depan");
} else {
    console.log("Selamat Anda Lulus");
}

// Operator OR
console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false

// Operator AND
let hours = 12;
let minute = 20;

if (hours == 12 && minute == 30) {
    console.log("Sekarang Adalah jam 12:30")
} else {
    console.log("Sekarang tidak mungkin Pukul 12:30")
}

// Pengulangan dengan FOR
let x;

for(x=0;x<=5;x++) {
    console.log("Ini nilai X dengan nomor : " + x);
}

// Perulangan dengan menggunakan FOREACH
// let warna = new Array('merah','jingga','kuning');
// warna.forEach(function(value, index)
// {
//     console.log('Indeks ke-' + index + ' berwarna ' + value);
// });

