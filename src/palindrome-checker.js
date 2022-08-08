function palindrome(str) {
 let compareStr = str.toLowerCase().match(/[a-z0-9]/g);
 if(compareStr.join('') === compareStr.reverse().join('')){
   return true;
 }
 else{
   return false;
 }


}

palindrome("eye");
