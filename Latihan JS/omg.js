// Buatlah sebuah kalkulator sederhana yang dapat melakukan perhitungan dua buah
// variabel.
// • Jumlah
// • Kurang
// • Kali
// • Bagi

function tambah(a, b) {
    return a + b;
}
function kurang(a, b) {
    return a - b;
}
function kali(a, b) {
    return a * b;
}
function bagi(a, b) {
    return a / b;
}
console.log("Tambah: " + tambah(10, 5));
console.log("Kurang: " + kurang(10, 5));
console.log("Kali: " + kali(10, 5));
console.log("Bagi: " + bagi(10, 5));
input1 = prompt("Masukkan angka pertama:");
input2 = prompt("Masukkan angka kedua:");
alert("Hasil Tambah: " + tambah(parseFloat(input1), parseFloat(input2)));
alert("Hasil Kurang: " + kurang(parseFloat(input1), parseFloat(input2)));
alert("Hasil Kali: " + kali(parseFloat(input1), parseFloat(input2)));
alert("Hasil Bagi: " + bagi(parseFloat(input1), parseFloat(input2)));
