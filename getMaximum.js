
// // Kerjakan dahulu lalu bahas dengan buddy..
// // note pastikan sudah kerjain soal den anchor ⚓️ duahulu ya!

// function getMaximum(nums) {
//     var tamp = []
//     for (var i = 0; i < nums.length; i++) {
//         if (nums[i]>tamp) {
//             tamp = nums[i]
//         }
//     }
//     return tamp
// }

// console.log(getMaximum([120, 50, 9, 98, 110, 5, 3])); // 110
// console.log(getMaximum([0, 0, 9, -8, 22, 15, 32])); // 32
// console.log(getMaximum([1, 1, 1, -1, 11, 111, -11])); // 111


// // Apa perbedaan dari console.log(sebuahFunction(input)) 
// // dengan sebuahFunction(input)  ??
//	:perbedaaan kalau function (input) tidak memiliki nilai input yang akan dihitung sebuah console.log(function(input)) atau output sebuah fungsi (function) tidak bernilai jika tidak ada 
//	 console.log(function(input))

function sortManualAscending(numbers) {
    var output = []
    var tamp
    for (var i = 0, ii = numbers.length ; i < ii ; i++){
         tamp = false
        for (var j = 0, jj = output.length ; j < jj ; j++){
        // untuk tampungan output hasil looping i :,
          if (numbers[i] < output[j]){
            tamp = true;
            output.splice(j, 0, numbers[i])
            break;
            
          }
        }
        if (!tamp) {
            output.push(numbers[i])
        }
    }
    
    return output
}
    

console.log(sortManualAscending([1, 2, 3, 4, 0, 7, 6, 5, 1])) // [0, 1, 1, 2, 3, 4, 5, 6, 7]
console.log(sortManualAscending([100, 2, -90])) // [-90, 2, 100]
