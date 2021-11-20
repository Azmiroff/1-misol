function sumInput() {
    var number = [];
    var addNumber = prompt("Type the number !!!!");
    number.push(addNumber);
    for (var item of number) {
        item = Number(item)
        if(isNaN(item) || item <= 0 ) {
            function numbersAdd(numberContent) {
                var result = "";
                for (var reaction of numberContent) {
                    result = (result)*1 + (reaction)*1;
                }
                return result
            }
            number.pop(addNumber);
        } else if (item >= 0) {
            var addNumber = prompt("Raqam yozing:");
            number.push(addNumber);
        }
        
    }
    alert(numbersAdd(number));
}
var inputSum = sumInput();