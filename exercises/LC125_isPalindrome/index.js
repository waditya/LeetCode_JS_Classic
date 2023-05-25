// O[1] space complexity
// O[N] time complexity  -- Right and Left pointers take constant space

function isPalindrome(s) {
    s=s.toLowerCase().replace(/[^a-z0-9]/g,'');
    left_ptr = 0;
    right_ptr = s.length - 1;

    while (left_ptr < right_ptr){
       if (s[left_ptr] != s[right_ptr]){
        return false;
       }

       left_ptr++;
       right_ptr--;
    }

    return true;
    
    
}

// O[n] comlexity

// function isPalindrome(s) {
//     s=s.toLowerCase();
//     s=s.replace(/[^a-z0-9]/gi,'');
//     let s2="";
//     for (let i=s.length-1; i >= 0; i--) {
//     s2 = s2+s[i];
//     }

//     // console.log(s1);
//     // console.log(s2);
//     return(s!=s2 ?  false :  true);
// }

module.exports = isPalindrome;
