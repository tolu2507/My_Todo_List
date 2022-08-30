let arr = [1,2,3,4,5,6,7,8,9];
arr[2]= 9
console.log(arr);
// for(var i = 0; i < items.length; i++){
            
//     items[i].onclick = function(){
        
//         liIndex = tab.indexOf(this.innerHTML);
//         console.log(this.innerHTML + " INDEX = " + liIndex);
//     };
    
// }
    
//     function removeLI(){
       
//         items[liIndex].parentNode.removeChild(items[liIndex]);

//     }

function create(params) {
    const obj = {
        name: params,
        age:23
    }
    arr.push(obj.name);   
}
create("tolu")
create("bolu")
console.log(arr);