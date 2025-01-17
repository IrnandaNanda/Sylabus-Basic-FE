// Function 
function SayHello() {
    return("Hello World");
}

SayHello()

// Function dengan parameter
function AddTwoNumbers(first, second) {
    let nilai = first + second;
    console.log(nilai);
}

AddTwoNumbers(5,5);

//Coba
function getTax(subTotal) {
    let nilaiAkhir = subTotal * (10 / 100);
    console.log(nilaiAkhir)
  }

  getTax(100000)

  let hasilAkhir = getTax(50000);
  console.log(hasilAkhir)

// Function Tanpa Menggunakan Return
  function hitungDiskon(harga, diskon) {
    const hargaSetelahDiskon = harga - (harga * diskon / 100);
    console.log(`Harga setelah diskon adalah: ${hargaSetelahDiskon}`);
}

// Memanggil fungsi
hitungDiskon(100000, 20); // Output: Harga setelah diskon adalah: 80000

// Tidak bisa menggunakan hasil fungsi di tempat lain
const hasil1 = hitungDiskon(100000, 20);
console.log(hasil1); // Output: undefined


// Function dengan menggunakan Return
function hitungDiskon(harga, diskon) {
    const hargaSetelahDiskon = harga - (harga * diskon / 100);
    return hargaSetelahDiskon; // Mengembalikan nilai
}

// Memanggil fungsi
const hasil = hitungDiskon(100000, 20);
console.log(`Harga setelah diskon adalah: ${hasil}`); // Output: Harga setelah diskon adalah: 80000

// Bisa menggunakan hasilnya untuk operasi lain
const total = hasil * 2; // Misalnya membeli 2 barang
console.log(`Total harga untuk 2 barang adalah: ${total}`); // Output: Total harga untuk 2 barang adalah: 160000
