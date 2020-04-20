// Kerjakan dahulu lalu bahas dengan buddy..
// note pastikan sudah kerjain soal den anchor ⚓️ duahulu ya!

function replayPlaylist(minutes) {
  var totmenit;
  var lagu = [];
  var menit;
  var temp = [];
  var tamp = [];
  var listSong = [
    ["No Time To Die", 4],
    ["Dance Monkey", 3],
    ["Stupid Love", 4],
    ["Adore You", 2],
    ["Don't Start Now", 3],
    ["Intentions", 2]
  ];
  // your code here
  totmenit = 0
 ulangloop:
  while (true) {
    //perulangan array listSong
    for (var a in listSong) {
      temp = listSong[a];
      //perulangan cek lagu dan menit masing2 array
      for (var i=0; i<temp.length;i++) {
        lagu = temp[0];
        menit = temp[1];
      }
      tamp.push(lagu)
      //cek total menit sesuai menit input
      totmenit = totmenit + menit;
      if (totmenit >= minutes) {
        //jika  lebih atau sama dengan maka perulangan berhenti
        break;
      }
    }
    //cek total menit listSong
    if (totmenit < minutes) {
      //jika kurang dari menit input maka perulangan diulang kembali
      continue ulangloop;
    }
    return tamp
  }
}

console.log(replayPlaylist(10));
  /**
[
  'No Time To Die',
  'Dance Monkey',
  'Stupid Love',
  'Adore You',
  "Don't Start Now",
  'Intentions',
  'No Time To Die',
  'Dance Monkey',
  'Stupid Love'
]


 */