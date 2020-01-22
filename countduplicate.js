/*var str="abccbdeea";
//length
str=str.split('').sort();
count=0;
//var str1=str.split('');
 for (var i=0; i<str.length; i+=count) {
   count = str.lastIndexOf(str[i]) - str.indexOf(str[i])+1;
   console.log(str[i]+'='+count)
      }
    */


      var str="abccbdeea";
      //length
       str=str.split('').sort();
      
          var current = null,count=0;
          
          for (var i = 0; i < str.length; i++) {
              if (str[i] != current) {
                  if (count > 0) {
                      console.log(current + '=' + count);
                  }
                  current = str[i];
                  count = 1;
              } else {
                  count++;
              }
          }
          if (count > 0) {
              console.log(current + '=' + count);
          }
      
      
  