let Nilai = [
  { Nama: "Aldien", grade: "A" },
  { Nama: "Raffa", grade: "B" },
  { Nama: "Mahansa", grade: "C" },
  { Nama: "Rasya", grade: "F" }
];

Nilai.forEach(function(item) {
  switch (item.grade.toUpperCase()) {
    case "A":
      console.log(`Grade A: Nilai Sangat Baik (${item.Nama})`);
      break;
    case "B":
      console.log(`Grade B: Nilai Baik (${item.Nama})`);
      break;
    case "C":
      console.log(`Grade C: Nilai Kurang Baik (${item.Nama})`);
      break;
    default:
      console.log(`Grade ${item.grade}: Nilai Buruk (${item.Nama})`);
      break;
  }
});
