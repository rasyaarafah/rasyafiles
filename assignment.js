let hargaAwal = 500000;
let diskonPersen = 20;

// Soal pertama
let potongHarga = hargaAwal * (diskonPersen / 100);

// Soal kedua
let hargaSetelahDiskon = hargaAwal - potongHarga;

console.log("Harga awal: " + hargaAwal);
console.log("Jumlah diskon: " + diskonPersen + "%");
console.log("Potongan harga sebesar: " + potongHarga);
console.log("Harga setelah diskon: " + hargaSetelahDiskon);