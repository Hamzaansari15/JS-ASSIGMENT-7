// var firstName = prompt("Enter your frst name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// alert("Welcome " + fullName);
// var mobileModel = prompt("Enter your favorite mobile model");
// document.write("<h1> Your favorite mobile model is " + mobileModel + "</h1>");
// document.write("<h1> The length of string is " + mobileModel.length + "</h1>");
// var countryName = "Pakistan";
// var indexOfN = "pakistan".indexOf("n")
// console.log(indexOfN);
// document.write("<h1> String is: " + countryName + "</h1>");
// document.write("<h2> Index of 'n' is: " + indexOfN + "</h2>");
// var a = "Hello World";
// var lastIndexOfL = a.lastIndexOf("l");
// document.write("<h1> String is: " + a + "</h1>");
// document.write("<h1> Last Index of 'l' is: " + lastIndexOfL + "</h1>");
// var a = "Pakistan";
// var b = a.charAt(3);
// document.write("<h1> String is: " + a + "</h1>");
// document.write("<h1> Character at Index 3 is: " + b + "</h1>");
// var firstName = prompt("Enter your frst name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(lastName);
// document.write("<h1>" + fullName + "</h1>");
// var a = "Hyderabad";
// var b = "Islamabad";
// var c = a.replace("Hyder","Islam");
// document.write("<h1> City Name: " + a + "</h1>");
// document.write("<h1> After Replacement:" + c + "</h1>");
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("<h2> var message " + message + "</h2>");
// var replacement = message.replace(/and/g,"&");
// document.write("<h2> After Replacement " + replacement + "</h2>");
// var string = "472";
// document.write("<h1> Value :" + string + "</h1>");
// document.write("<h1> Type : " + typeof(string) + "</h1>");
// var number = Number(string);
// document.write("<h1> Value : " + number + "</h1>");
// document.write("<h1> Type : " + typeof(number) + "</h1>");
// var input = prompt("Enter any fruits name");
// var conversion = input.toUpperCase();
// document.write("<h1> " + conversion + "</h1>");
// var a = prompt("Enter any words");
// var b = a.slice(0,1);
// var c = a.slice(1);
// var upperCase = b.toUpperCase();
// var lowerCase = c.toLowerCase();
// var titleCase = b.concat(c)
// document.write("<h1> User Input : " + a + "</h1>");
// // document.write("<h1> Title Case : " + titleCase + "</h1>");
// var items = ["applepie","cake","cookie","chips","patties"];
// var order = prompt("Enter the dish name");
// var flag = false
// for(i = 0; i < items.length; i++){
//     if(items[i] === order.toLowerCase()){
//         document.write("<h1>" + order.toUpperCase() + " is Available at Index" + [i] + "</h1>");
//         flag = true
//     }
// }if(flag === false){
//     document.write("<h1>" + order + " is not available </h1>");
// }
// var a = "University Of Karachi";
// var b = a.split("");
// document.write("<h1>" + b + "</h1>");
var input = prompt("Enter any words");
var b = input.charAt(input.length - 1);
document.write("<h1> User input :" + input + "</h1>");
document.write("<h1> Last Character : " + b + "</h1>");
