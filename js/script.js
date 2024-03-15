function dataPerson(){
  let forms =document.getElementById('frm');
  let nama =forms.nama.value;
  let pekerjaan = forms.pekerjaan.value;
  let hobby = forms.hobby.value;


  let output="Nama: " + nama + "<br>Pekerjaan: " + pekerjaan + "<br>Hobby: " + hobby; 
  let no_input ='<h4>Maaf nama atau kelas anda belum terisi </h4>';
  let hasil = (nama && pekerjaan && hobby != '') ? output : no_input;

  document.getElementById("hasil").innerHTML= hasil;
}