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

// let example3=function(n){
//     for(let i=0;i<n;i++){
//         console.log("i--->",i)
//         for(let j=0;j<n;j++){
//             console.log("j--->",j)
//         }
//     }
// }
// example3(3)

//Drop non dominants

//The below is also O(n^2)
//becasue O(n^2 + n)
//lets say n=100;
//then O(10000+100);
//

// let example4=function(n){
//     for(let i=0;i<n;i++){
//         console.log("i--->",i)
//         for(let j=0;j<n;j++){
//             console.log("j--->",j)
//         }
//     }

//     for(let k=0;k<n;k++){
//         console.log("k--->",k)
//     }
// }
// example4(3)

// //Cookie cutter (blueprint)(class)
// class Cookie{
//     constructor(color){
//         this.color=color;
//     }
//     getColor(){
//         return this.color
//     }
//     setcolor(color){
//         this.color=color
//     }
// }

//creating balck cookie from cookie cutter
// let balckCookie=new Cookie('balck')
// console.log(balckCookie)

// let greenCookie=new Cookie('green')
// console.log(greenCookie);

// console.log(greenCookie.getColor())

// greenCookie.setcolor('blue')
// console.log(greenCookie);

//========================Linked List==============================


class Node{
    constructor(value){
        this.value=value
        this.next=null;
    }
}
class LinkedList{
    constructor(value){
        const node=new Node(value);
        this.head=node;
        this.tail=this.head;
        this.length=1;
    }
    push(value){
            const node=new Node(value);
            if(!this.head){
                this.head=node;
                this.tail=this.head;
            }
            else{
                this.tail.next=node;
                this.tail=node;
            }
            this.length++;
            return this;
    }
}


const linked=new LinkedList(4)
linked.push(8)
console.log(linked);
