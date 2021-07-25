Task 5 (23/07/2021)

1)Do the below programs in anonymous function & IIFE
a)Print odd numbers in an array ?
var arr = [1, 2, 3];
let ans = [];
// anonymus function
var odd = function (x) {
  for (var i = 0; i < x.length; i++) {
    if (x[i] % 2 != 0) {
      ans.push(x[i]);
    }
  }

  return ans;
};
console.log(odd(arr));

// iffe
var arr = [1, 2, 3];
(function (x, ans = []) {
  for (var i = 0; i < x.length; i++) {
    if (x[i] % 2 != 0) {
      ans.push(x[i]);
    }
  }
  console.log(ans);
})(arr);


b) Convert all the strings to title caps in a string array
 
 // anonymous function
 
 let str = " i am a string";

var titleCaps = function (str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};
console.log(titleCaps(str));

// iffe

let str = " i am a string";

(function (str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(str.join(" "));
})(str);

c) Sum of all numbers in an array
 // anonymous function
var num = [1, 2, 3, 4, 5];

var sumOfArray = function (add, sum = 0) {
  for (i = 0; i < add.length; i++) {
    sum = sum + add[i];
  }
  return sum;
};
console.log(sumOfArray(num));

//iffe
var num = [1, 2, 3, 4, 5];

(function (add, sum = 0) {
  for (i = 0; i < add.length; i++) {
    sum = sum + add[i];
  }
  console.log(sum);
})(num);



d)Return all the prime numbers in an array?
 
 // anonymous function
var val = [2, 3, 4, 5];
var primeNum = function (num) {
  num.map((number) => {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        let index = num.indexOf(number);
        return num.splice(index, 1);
      }
    }
  });

  return num;
};
console.log(primeNum(val));


//iffe
var val = [2, 3, 4, 5];

(function (num) {
  num.map((number) => {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        let index = num.indexOf(number);
        return num.splice(index, 1);
      }
    }
  });
console.log(num);
})(val);



e)Return all the palindromes in an array


//ananymous function
const arr = ["carecar", 1344, 12321, "mom", "did", "cannot"];
const palindrome = function (el) {
  const str = String(el);
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};
const findPalindrome = function (arr)  {
  return arr.filter((el) => palindrome(el));
};
console.log(findPalindrome(arr));


f)Return median of two sorted arrays of same size ??


g)Remove duplicates from an array?

// anonymous function

var data = [1, 2, 2, 3, 4, 4, 5, 5];

var uniqueArr = function (data) {
  return [...new Set(data)];
};

console.log(uniqueArr(data));

//iffe
(function (data) {
  data = [...new Set(data)];
  console.log(data);
})(data);

h)Rotate an array by k times

// anonymous function
var data = [1, 2, 3, 4, 5, 6];

var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
};
console.log(rotate(data, 2));


??IFFE
(function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  console.log(nums);
})(data, 2);

----------------------------------
2)https://medium.com/@reach2arunprakash/guvi-zen-class-javascript-warm-up-programming-problems-15973c74b87f

-----------------------------------------------------------
3)Do the below programs in arrow functions

a) Print odd numbers in an array ?

var arr = [1, 2, 3, 4, 5, 6];
var ans = new Array();
var odd = (x) => {
  for (var i = 0; i < x.length; i++) {
    if (x[i] % 2 != 0) {
      ans.push(x[i]);
    }
  }

  return ans;
};
console.log(odd(arr));

b)Convert all the strings to title caps in a string array ?

let str = " i am a string";

var titleCaps = (str) => {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};
console.log(titleCaps(str));

c)Sum of all numbers in an array?

var num = [1, 2, 3, 4, 5];

var sumOfArray = (add, sum = 0) => {
  for (i = 0; i < add.length; i++) {
    sum = sum + add[i];
  }
  return sum;
};
console.log(sumOfArray(num));

d) Return all the prime numbers in an array ?


var val = [2, 3, 4, 5];
var primeNum =  (num)=> {
  num.map((number) => {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        let index = num.indexOf(number);
        return num.splice(index, 1);
      }
    }
  });

  return num;
};
console.log(primeNum(val));

e) Return all the palindromes in an array

 const arr = ["carecar", 1344, 12321, "mom", "did", "cannot"];
const palindrome = (el) => {
  const str = String(el);
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};
const findPalindrome = function (arr)  {
  return arr.filter((el) => palindrome(el));
};
console.log(findPalindrome(arr));





