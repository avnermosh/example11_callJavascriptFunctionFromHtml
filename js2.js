
class Es6Module2 {
    static myFunction2 = function(val2) {
        console.log('BEG myFunction2');
        console.log('val2'); 
        console.log(val2); 
        return 3;
    };
};

document.querySelector('#button2').addEventListener('click', Es6Module2.myFunction2);

export { Es6Module2 };

