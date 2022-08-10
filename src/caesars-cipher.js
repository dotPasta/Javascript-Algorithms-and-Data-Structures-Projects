function rot13(str) {
    let shift=13;
    let newStr="";

    for(let i=0;i<str.length;i++){
        let decodeStr =str[i];

        //If current element is a letter
        if(decodeStr.charCodeAt(0)>= 65 && decodeStr.charCodeAt(0)<=90){
            decodeStr=str.charCodeAt([i])+shift;
            if(decodeStr>90){
                decodeStr= decodeStr-26;
            }
            newStr += String.fromCharCode(decodeStr);
        }
        //if element is not a letter
        else{
            newStr += decodeStr;
        }
    }
    return newStr;
}


rot13("SERR PBQR PNZC");
