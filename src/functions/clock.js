
export var today = new Date();
export var day = today.getDate();
export var month = today.getMonth();
export var year = today.getFullYear();
export var hour = today.getHours();
export var minutes = today.getMinutes();
export var sexounds = today.getSeconds();


export function getSec(){ 
    return today.getSeconds().toString()
    
};
