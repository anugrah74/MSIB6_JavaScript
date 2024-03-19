class Pegawai {
  constructor(nama, jabatan, gaji, status) {
    this.nama = nama;
    this.jabatan = jabatan;
    this.gaji = gaji;
    this.status = status;
  }

  tunjanganJabatan() {
    return this.gaji * 0.15;
  }

  bpjs() {
    return this.gaji * 0.1;
  }

  tunjanganKeluarga() {
    return this.status === "menikah" ? this.gaji * 0.2 : 0;
  }

  totalGaji() {
    return this.gaji + this.tunjanganJabatan() + this.tunjanganKeluarga() - this.bpjs();
  }
}

function submitForm() {
  // Mendapatkan nilai input dari form
  var nama = document.getElementById("nama").value;
  var jabatan = document.getElementById("jabatan").value;
  var status = document.getElementById("status").value;

  // Menghitung gaji berdasarkan jabatan
  var gaji;
  switch (jabatan) {
    case "Manager":
      gaji = 15000000;
      break;
    case "Asisten Manager":
      gaji = 10000000;
      break;
    case "Staff":
      gaji = 5000000;
      break;
    default:
      gaji = 0;
      break;
  }

  // Membuat objek pegawai
  var pegawai = new Pegawai(nama, jabatan, gaji, status);

  // Menambahkan pegawai baru ke dalam tabel
  var tbody = document.getElementById("pegawaiBody");
  var row = tbody.insertRow();

  // Menambahkan sel-sel ke dalam baris
  var namaCell = row.insertCell(0);
  var jabatanCell = row.insertCell(1);
  var statusCell = row.insertCell(2);
  var gajiPokokCell = row.insertCell(3);
  var tunjanganJabatanCell = row.insertCell(4);
  var bpjsCell = row.insertCell(5);
  var tunjanganKeluargaCell = row.insertCell(6);
  var totalGajiCell = row.insertCell(7);

  // Mengisi nilai dari setiap sel
  namaCell.innerHTML = pegawai.nama;
  jabatanCell.innerHTML = pegawai.jabatan;
  statusCell.innerHTML = pegawai.status;
  gajiPokokCell.innerHTML = pegawai.gaji;
  tunjanganJabatanCell.innerHTML = pegawai.tunjanganJabatan();
  bpjsCell.innerHTML = pegawai.bpjs();
  tunjanganKeluargaCell.innerHTML = pegawai.tunjanganKeluarga();
  totalGajiCell.innerHTML = pegawai.totalGaji();

  // Menghitung dan menampilkan total gaji
  var totalGajiElement = document.getElementById("totalGaji");
  var totalGajiSemua = parseInt(pegawai.totalGaji());
  totalGajiElement.textContent = totalGajiSemua;

  // Menampilkan tabel pada halaman
  document.getElementById("pegawaiTable").style.display = "table";
}
