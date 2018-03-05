module.exports = function getZerosCount(number, base) {
  // your implementation
    var arr = [];
    var arrs = [];
    var temp2 = 0;
    var tempBase = base;
    var tempNumber = number;

    for(var i = 2, j = 0;i<=tempBase;) {
        if(base % i === 0) {
            temp2++;
            base /= i;
        }
        else {
            if(temp2) {
                arr[j] = i;
                arrs[j] = temp2;
                temp2 = 0;
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

    temp = array[0]/arrs[0];

    for(var i = 1; i<arr.length;i++)
        temp = Math.min(temp,array[i]/arrs[i]);

  return parseInt(temp);

}