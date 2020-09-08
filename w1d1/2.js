function sum(arr) {
    let sum = 0;
    for (n of arr) {
        sum += n;
    }
    return sum;

}
const ar1=[1,2,3,4];
alert(sum(ar1));

function multiply(arr){
    let pro= 1;
    for(n of arr){
        pro = pro*n;
    }
    return pro;
}
const ar2=[1,2,3,4];
alert(multiply(ar2));
