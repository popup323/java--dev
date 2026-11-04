
function sonucYaz(basari, harf, durum, aciklama){
  document.getElementById("basari").innerText = basari;
  document.getElementById("harf").innerText = harf;
  document.getElementById("durum").innerText = durum;
  document.getElementById("aciklama").innerText = aciklama;
}


function hataGoster(mesaj){
  document.getElementById("uyari").style.color = "red";
  document.getElementById("uyari").innerText = mesaj;
  sonucYaz("-", "-", "-", "-");
}


function gecerliMi(not){
  if(not >= 0 && not <= 100){
    return true;
  }
  else{
    return false;
  }
}




function harfBul(basari){
  var harf = "C";
  if(basari >= 90){
    harf = "A1";
  }
  else if(basari >= 80){
    harf = "A2";
  }
  else if(basari >= 70){
    harf = "B1";
  }
  else if(basari >= 65){
    harf = "B2";
  }
  return harf;
}


function finalDurumu(){
  if(document.getElementById("but").value != ""){
    document.getElementById("final").style.backgroundColor = "lightgray";
  }
  else{
    document.getElementById("final").style.backgroundColor = "white";
  }
}

function hesapla(){
  document.getElementById("uyari").innerText = "";

  var yilici = document.getElementById("vize").value;
  var finalNotu = document.getElementById("final").value;
  var butunleme = document.getElementById("but").value;


  if(document.getElementById("devamsiz").checked == true){
    sonucYaz("-", "F1", "Kaldı (F1)", "Devamsız olduğun için F1.");
    return;
  }

  if(document.getElementById("girdi").value == "hayir"){
    sonucYaz("-", "F2", "Kaldı (F2)", "Genel/bütünleme sınavına girmediğin için F2.");
    return;
  }

  if(yilici == ""){
    hataGoster("Vize notu gerekli.");
    return;
  }
  if(finalNotu == "" && butunleme == ""){
    hataGoster("Final notu gerekli.");
    return;
  }

  if(gecerliMi(yilici) == false){
    hataGoster("Vize notu 0-100 arasında olmalı.");
    return;
  }
  if(finalNotu != "" && gecerliMi(finalNotu) == false){
    hataGoster("Final notu 0-100 arasında olmalı.");
    return;
  }
  if(butunleme != "" && gecerliMi(butunleme) == false){
    hataGoster("Bütünleme notu 0-100 arasında olmalı.");
    return;
  }


  var sinav = finalNotu;
  var sinavAdi = "Final";
  if(butunleme != ""){
    sinav = butunleme;
    sinavAdi = "Bütünleme";
  }

  var basari = (40 * yilici + 60 * sinav) / 100;


  if(sinav < 50){
    sonucYaz(basari, "F3", "Kaldı (F3)", sinavAdi + " < 50 olduğu için F3.");
  }
  else if(basari < 60){
    sonucYaz(basari, "F3", "Kaldı (F3)", "Başarı notu < 60 olduğu için F3.");
  }
  else{
    var harf = harfBul(basari);
    sonucYaz(basari, harf, "Geçti", "Şartlar sağlandı, harf notun " + harf + ".");
  }
}

function sifirla(){
  document.getElementById("vize").value = "";
  document.getElementById("final").value = "";
  document.getElementById("but").value = "";
  document.getElementById("devamsiz").checked = false;
  document.getElementById("girdi").value = "evet";
  document.getElementById("uyari").innerText = "";
  finalDurumu();
  sonucYaz("-", "-", "-", "-");
}

document.getElementById("hesaplaBtn").addEventListener("click", hesapla);
document.getElementById("sifirlaBtn").addEventListener("click", sifirla);
document.getElementById("but").addEventListener("input", finalDurumu);