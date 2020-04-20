// Hitung jumlah dari setiap huruf yang muncul di dalam array!

function hitungSaya(arrayNama) {
  // Write your code here...
  
  var output = []
  var tamp
  for (var i = 0, ii = arrayNama.length ; i < ii ; i++){
      tamp = false
      for (var j = 0, jj = output.length ; j < jj ; j++){
      // untuk tampungan output hasil looping i :,
        if (arrayNama[i] < output[j]){
          tamp = true;
          output.splice(j, 0, arrayNama[i])
          break;
        }
      }
      if (!tamp) {
          output.push(arrayNama[i])
      }
  }
  
  return output
}

  console.log(hitungSaya(['fadhil', 'ismail', 'budi', 'untung']));
 /**
    { 
        a: 2,
        b: 1,
        d: 2,
        f: 2,
        g: 1,
        h: 1,
        i: 4,
        l: 2,
        m: 1,
        n: 2,
        s: 1,
        t: 1,
        u: 3 
    }
  */