document.getElementById("biodataForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var nama = document.getElementById("nama").value;
  var umur = document.getElementById("umur").value;
  var alamat = document.getElementById("alamat").value;

  document.getElementById("namaOutput").textContent = "Nama: " + nama;
  document.getElementById("umurOutput").textContent = "Umur: " + umur + " tahun";
  document.getElementById("alamatOutput").textContent = "Alamat: " + alamat;

  document.getElementById("hasilBiodata").style.display = "block";
});
