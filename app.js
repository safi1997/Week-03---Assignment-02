const personlArr = [
    "Liam",
    "Olivia",
    "Emma",
    "Noah",
    "Oliver",
    "Charlotte",
    "Elijah",
    "Amelia",
    "Mary",
    "Noah",
    "Robert",
    "Liam",
    "Liam",
    "James",
    "Charlotte",
    "Olivia",
    "Amelia",
];

const uniquePersonlArr = [];
const nums = [16, true, "8", 4, 9, "6", 36, false, 49, 9, "HiCoders", "false", 1, 4, "true"]

for (let i = 0; i < personlArr.length; i++) {
    if (!uniquePersonlArr.includes(personlArr[i])) {
        uniquePersonlArr.push(personlArr[i]);

    }
}
// 01:I have here 2 arrys one have item an second is empty
// 02: i will find the unique Numes and put in empty array
// 03: i have a array with string and concated with the empty array
// 04: i used join to change the Contain in string and also break tag
// 05: and the last i have to change again the string to array with split(

//console.log(uniquePersonlArr.concat(nums).join("\n")/* .split() */);


// Driver code
let arr = [2, 4, 5, 6];
let n = arr.length;
// Function to return the required sum
function getSum(arr, n) {
    let i, sum = 0;

    // Initialization of hash map
    let hashSet = new Set();

    // Store each element in the hash map
    for (i = 0; i < n; i++)
        hashSet.add(arr[i]);

    for (i = 0; i < n; i++) {
        let sqrtCurrent = Math.sqrt(arr[i]);

        // If sqrtCurrent is a decimal number
        if (Math.floor(sqrtCurrent) !=
            Math.ceil(sqrtCurrent))
            continue;

        // If hash set contains sqrtCurrent
        if (hashSet.has(sqrtCurrent)) {
            sum += (sqrtCurrent * sqrtCurrent);
        }
    }
    return sum;
}
//console.log(getSum(arr, n));

// we check here every index and find Which index Largst or Smallst is
const arrNum = [4, 2, 3, 6, 7, 3, 1, 2, 49, 10, 20, 30, 40]
const smalNun = arrNum.reduce((a, b) => Math.min(a, b))
console.log(smalNun, "This is the samllst Number in our array")
console.log(Math.max(...arrNum), "This is the largset Number with Math Max fuction")

const largstNum = (values) => {
    let highest = 0;
    for (let i = 0; i < values.length; i++) {
        if (values[i] > highest) {
            highest = values[i]
        }

    }
    return highest;
}
console.log(largstNum(arrNum), "This is the largset Number from our function")
console.log(largstNum("" + arrNum), " sum of the items of the new array ")

// Here is the Average arry, it maks 16 in this array 
const arrAverage = [70, 2, 1, 3, 4];
const average = arrAverage.reduce((a, b) => a + b, 0) / arrAverage.length;

console.log(average, " The average of the items of the new array looks like taht");