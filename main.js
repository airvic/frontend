// DATA STRUCTURE AND ALGORITHM

// STACKS

// stack =  function(a,b){
//     const collection = []
//     returning_users = []
// this.has_element = function(f){
//  return (collection.indexOf(f) !== -1)


// }
// this.add_to_stack = function(c){
//     if(this.has_element(c)){
//         console.log("element already exist :" + c)
//        returning_users.push(c)
       
//     }else{
//         collection.push(c)
//         console.log(collection)
//     }
  
// }
// this.get_stack_length = function(){
//     return collection.length
// }
// this.remove_top_element = function(){
//     return collection.pop()

// }
// this.display_top_element = function(){
//   const peek = (collection.indexOf(collection.length))
//   return peek+1
// }
// this.get_stack = function(){
//     console.log(collection)
//     console.log(returning_users)

// }
// }
// const mystack = new stack
// mystack.add_to_stack(1)
// mystack.add_to_stack(2)
// mystack.add_to_stack(3)
// mystack.add_to_stack(4)
// mystack.add_to_stack(5)
// mystack.add_to_stack(6)
// mystack.add_to_stack(6)
// mystack.add_to_stack(7)
// mystack.add_to_stack(5)
// mystack.add_to_stack(4)
// mystack.add_to_stack(3)
// mystack.add_to_stack(2)
// // mystack.has_element(7)
// console.log("length:  "+mystack.get_stack_length())
// console.log("removing top element: "+mystack.remove_top_element())
// console.log("displaying top element: "+mystack.display_top_element())
// console.log("stack new length:  "+mystack.get_stack_length())
// mystack.get_stack()







// BINARY SEARCH TREE

class node{
    constructor(data,left = null,right = null){
        this.data =  data;
        this.left = left;
        this.right = right;
    }
}

class Binarysearchtree {
    constructor(){
        this.root = null
    }
    add(data){
       const node =  this.root;
       if(node.data === null){
        this.node = new node(data)
        return;
       }else{
        searchtree = function(data){
            if(node.data < this.data){
             if(node.left === null){
                node.left =  new node(data)
                return;
             }else{
                return searchtree(node.left)
             }
            }else{
                if(node.data > this.data){
                    if(node.right === null){
                        node.right =  new node(data)
                        return;
                    }else{
                        return searchtree(node.right)
                    }
                }
            }

        }
        return searchtree(node);
       }
    }

    find(data){
        this.current = this.root;
        if(data < this.current){
        this.current =  node.left;
           while(this.current === data){
            return true;
           }
        }else{
            this.current =  node.right;
            while(this.current === data){
                return false;
            }
        }
    }
}

























