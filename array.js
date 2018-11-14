// comment in js

//creat an array
//creat an empty array

var myarr = new Array()

// recomended way
var myarr2 = []

// creat different sizes
var mybig = new Array(100)

var mybig2 = [,,,]
var mybig3 = [1,2,3,4]

var array = []
array.length = 8

// position of items in array
//index
var superArr = ['rock', 'paper','scissers']
// 0 base, starts at 0

// get a value in the index
superArr[1]

// insert into array
var supArr = []

supArr.push('smitty','weben','jager','man','jenson')

// will add items to begining of array
supArr.unshift(1,2,3,4,5)

// remove

//mutable v inmutable
// mutable= can be changes
// inmutable = cannot be changed
var sArr = [1,2,3]

//removes end
sArr.pop
// removes begining
sArr.shift

// puts hole in array
delete sArr[2]

// imutable
sArr.slice(2)

// iterators going through array, loops
var nums = [1,2,3,4,5,]

// forEach
nums.forEach(function(nums, index){
    console.log("index of: " + index + "values: " + nums)
})

// map
nums.map(function(num, index) {
    console.log(++nums)
})

//filter


// type checking
//checks for what data type is something
typeof []
typeof 0
typeof true

// misc functions
var lastArr = ['rock','paper','scissors']

// return a string of what the array looks like
lastArr.toString

//brings two values together
lastArr.join

// reverses array
lastArr.reverse

//