// Bahas bersama buddy / atau kerjakan dahulu lalu bahas dengan buddy okeey?
// note pastikan sudah kerjain soal den anchor ⚓️ duahulu ya!

function getUnique(votes) {
    // your code here
    var result = []
    for(i=0;i < votes.length;i++){
        var check=false
        //  console.log(votes[i])
        for(var j=0;j<result.length;j++){
            if(result[j] === votes[i]){
                check=true
            }            
        }
        
        // console.log(check)
        if(check === false){
            result.push(votes[i])
        }


    }
    return result
}

var femaleArtists = [
    "Billie Eilish",
    "Billie Eilish",
    "Selena Gomez",
    "Taylor Swift",
    "Taylor Swift",
    "Lady Gaga",
    "Taylor Swift",
    "Billie Eilish",
    "Selena Gomez"
]
console.log(getUnique(femaleArtists))
/*
[
    "Billie Eilish",
    "Selena Gomez",
    "Taylor Swift",
    "Lady Gaga",
]
*/