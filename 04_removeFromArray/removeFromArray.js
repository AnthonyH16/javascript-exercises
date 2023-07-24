/*const removeFromArray = function (array, ...removeThis) {
    const result = [];
    const removeThisList = Array.from(removeThis)
    array.forEach((num) => {
        if (!removeThisList.includes(num)){
        
        }
         else {       
        result.push(num)
        } ;
    });
    return result;
} */


const removeFromArray = function (array, ...removeThis) {
    const result = [];
    
    for (let num of array){                
        if (!removeThis.includes(num)){
            result.push(num); 
        }

    }
    return result;


/*
const removeFromArray = function (array, ...removeThis) {
    //let result = [];
    return array.filter((num) => {

        return !removeThis.includes(num);

    });
*/



    


}





// Do not edit below this line
module.exports = removeFromArray;
