// ///1)  Выведите столбец четных чисел в промежутке от 0 до 20.
// for (var i = 1; i <= 20; i++) {
//     if(i % 2 === 0) {
//         console.log("четное число:"+ i )
//     }else {
//         console.log("нечетное число:"+ i )
//     }
// }
//
///////////////////////////////////////////////////////
var nam = 0 ;
var imput = Number(prompt("Введите число : "));
if (imput >0 ){
    while (imput > 0 ){
       nam = nam + imput;
        console.log(nam );
        imput = Number(prompt("Введите число : "));
        if (imput <=0 ){
            console.log(imput)

        }
    }
}else if (imput <=0){
    console.log(imput)

}