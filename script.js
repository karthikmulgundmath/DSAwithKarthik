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


// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null;
//     }
// }
class LinkedList {
    constructor(value) {
        if (!value) {
            this.length = 0;
            return console.error("Cannot create a linked list without a value");
        }
        const node = new Node(value);
        this.head = node;
        this.tail = this.head;
        this.length = 1;
    }
    push(value) {
        if (!value) {
            this.length = this.length;
            return console.error("Cannot create a linked list without a value");
        }
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop() {
        console.log("Pop called");
        if (!(this.head) || (this.length === 0)) {
            return undefined
        }
        let temp = this.head;
        let prev = this.head;
        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }

        console.log('prev', prev)
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
    unshift(value) {
        if (!value) {
            this.length = this.length;
            return console.error("Cannot create a linked list without a value");
        }
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this
    }
    shift() {
        if (!this.head) return undefined;
        let temp = this.head
        this.head = this.head.next;
        temp.next = null;
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return temp
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return "Not Possible"
        }
        else {
            let temp = this.head;
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
            return temp
        }
    }
    set(index, value) {
        console.log("---->", index, value);
        let temp = this.get(index);
        if (temp) {
            temp.value = value
            return true
        }
        return false
    }
    insert(index, value) {
        if (index === 0) {
            return this.unshift(value)
        }
        if (index > this.length) {
            return this.push(value)
        }
        if (index < 0 || index >= this.length) {
            return undefined
        }
        else {
            const newNode = new Node(value);
            let temp = this.get(index - 1);
            newNode.next = temp.next
            temp.next = newNode
            this.length++;
            return true
        }
    }
    remove(index) {
        console.log("length------>", this.length - 1);
        if (index === 0) {
            return this.shift()
        }
        if (index > this.length) {
            return this.pop()
        }
        if (index < 0 || index >= this.length) {
            return undefined
        }
        else {
            let prev = this.get(index - 1);
            let deleteNode = prev.next
            prev.next = deleteNode.next;
            deleteNode.next = null
            this.length--
            return deleteNode
        }
    }
    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;//reverse the pointer
            prev = temp;
            temp = next;
        }
        return this
    }
}


// const linked = new LinkedList(1)
// linked.push(2)
// linked.push("Karthik")
// linked.push("Lallimaa")
// linked.push("hahaha")
// console.log("Before===>",JSON.stringify(linked));

// linked.unshift("K")
// linked.shift()
// console.log(linked.pop());
// console.log(linked.get(3))
// linked.set(1,"mulagundmath")
// linked.insert(4,"Ann Apple")
// console.log(linked.remove(5))
// linked.reverse()
// console.log("After===>",JSON.stringify(linked));

//testing pop case
// const linked2 = new LinkedList(1)
// linked2.pop();
// console.log(JSON.stringify(linked2));


class Node {
    constructor(value) {
        this.value = value
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.head || this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;
        }
        this.length++;
        return this
    }
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        let temp = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        temp.prev = null;
        this.length--
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        return this
    }
    unshift(value) {
        let newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode
        }
        this.length--
        return this
    }

}
let dll = new DoublyLinkedList(1)
dll.push("lalli")
dll.push(2)
dll.pop();
dll.unshift("Karthik")
console.log('dll', dll)
