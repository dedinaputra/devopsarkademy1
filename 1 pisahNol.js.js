function pisahNol(angka){
  strAngka = angka.toString();
  strPisah = [];
  for(i=0;i<strAngka.length;i++){
    if(strAngka[i]=='0') continue;
    else strPisah.push(strAngka[i]);
  }
  strUrut = strPisah.sort();
  strGabung = '';
  for(i=0;i<strUrut.length;i++){
    strGabung += strUrut[i];
  }
  numGabung = Number(strGabung);
  console.log(numGabung)
}

pisahNol(5443011)