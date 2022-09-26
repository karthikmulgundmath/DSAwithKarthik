//O(n)

// let example=function(n){
//     for(let i=0;i<n;i++){
//         console.log("i--->",i)
//     }
// }
// let res=example(3)

//O(2n)

// let example2=function(n){
//     for(let i=0;i<n;i++){
//         console.log("i--->",i)
//     }
//     for(let j=0;j<n;j++){
//         console.log("j--->",j)
//     }
// }
// let res2=example2(3)

//O(n^2)

let example3=function(n){
    for(let i=0;i<n;i++){
        console.log("i--->",i)
        for(let j=0;j<n;j++){
            console.log("j--->",j)
        }
    }
}
example3(3)

//Drop non dominants

//The below is also O(n^2)
//becasue O(n^2 + n)
//lets say n=100;
//then O(10000+100);
//

let example4=function(n){
    for(let i=0;i<n;i++){
        console.log("i--->",i)
        for(let j=0;j<n;j++){
            console.log("j--->",j)
        }
    }

    for(let k=0;k<n;k++){
        console.log("k--->",k)
    }
}
example4(3)