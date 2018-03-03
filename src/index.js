module.exports = function getZerosCount(number, base) {
  // your implementation
    var arr = [];
    var fl = 0;
    var tempBase = base;
    var tempNumber = number;

    for(var i = 2, j = 0;i<=tempBase;) {
        if(base % i === 0) {
            fl++;
            arr[j] = i;
            base /= i;
        }
        
        else {
            if(fl) {
                fl = 0;
                j++;
            }
            i++;
            if(base == 1)
                break;
        }
    }

  var temp;
  var array = [];

    for(var i =0;i<arr.length;i++) {
        array[i] = 0;
    }

    for(var j=0;j<arr.length;j++) {
        while(number > 1) {
            number /=arr[j];
            number = parseInt(number);
            array[j]  += number;
        }
        number = tempNumber;
    }

    temp = array[0];

    for(var i = 1; i<arr.length;i++)
        temp = Math.min(temp,array[i]);

  return temp;

}