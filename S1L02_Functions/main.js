const double = function (number) {
  let sumNum=number*2
    return sumNum
  };
//-------------------------------------------------
  const fullName = function (firstNumber, Lname) {
    return firstNumber + Lname;
  };
//-------------------------------------
const average = function (num1, num2) {
  let avg= num1+num2/2
  return avg;
  
};
//-------------------------------------
const square = function (number) {
  return number * number;
};
const cube = function (number) {
  return number * number * number;
};
//-------------------------------------------
/*1-15654
2-108
3-33
4-31
5-nan
*/
//------------------------------------
const totalBill = function (total, taxPercentage, tip) {
  let sum=total*taxPercentage
  let total1=total+sum+tip
  return total1;
};
//--------------------------------------
const ageInHours = function (ageInYears) {
  let houerAge= ageInYears*365*24
  return houerAge
};
//-------------------------------------
const calculateProfit = function (unitsSold, unitCost, unitPrice) {
  let sum=unitsSold*(unitPrice-unitCost)
  return sum;
};
//--------------------------------
const floor = function (number) {
  let intNum=Math.floor(number)
  return intNum
};
//-----------------------------------
const toThePowerOf = function (base, exponent) {
  let intNum=Math.pow(base,exponent)
  return intNum
};
//-----------------------------------------
const upperCase = function (string) {
  let userName=string.toUpperCase()
  return userName
};