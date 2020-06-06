function cetakPola(angka){
  mid = Math.round(angka/2);
  for(baris=1;baris<=angka;baris++){
    valueBaris = '';
    for(kolom=1;kolom<=angka;kolom++){
      if(kolom ==1 || kolom == angka || baris == mid) valueBaris+='*';
      else valueBaris +='=';
    }
    console.log(valueBaris);
  }
}

cetakPola(5)