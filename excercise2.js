//Exercise 2/ A

var str = "interesting";
var upper = str.toUpperCase();

console.log(str, "In uppercase is: ", upper);

//Exercise 2/ B

var str1 = "constellation";
var sub = str1.substring (0,5);

console.log("The substring of ", str1, " is ", sub);

//Exercise 2/ C

var str3 = "Northern Lights";
var fSub = str3.substring(str3.length - 3, str3.length);

console.log ("The last substring of ", str3, " is ", fSub);

//Exercise 2/ D

var str4 = "milky way";
var result = str4.substring(0,1).toUpperCase() + str4.substring(1).toLowerCase();

console.log("The new string changes to: ",result);

//Exercise 2/ E

var str5 = "united kingdom";
var blank = str5.indexOf(" ");

console.log ("The position of the blank space in: ", str5, "is ", blank);

//Exercise 2/ F

var str6 = "goodbye world";
var blank1 = str6.indexOf(" ");
var newWord = str6.substring(0,1).toUpperCase() + str6.substring(1,blank1).toLowerCase() + str6.substring(blank1, blank1+1) + str6.substring(blank1+1, blank1+2).toUpperCase() + str6.substring(blank1+2).toLowerCase();

console.log("The new string is: ", newWord);