function filterNumbersFromArray(arr) {

    arr.forEach(element => {

        if (typeof element != 'number') {
            arr.filter(element)
        }

    });

}

var arr = [1, 'a', 'b', 2];

arr = filterNumbersFromArray(arr);

console.log(arr);


