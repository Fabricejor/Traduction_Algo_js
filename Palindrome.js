function estPalindrome(mot,i,j) {

    let s= j-i;
    console.log(s);
    if (i==j && mot[i]==mot[j]) {
        return true;
    }
    // Comparaison des caractères situés aux extrémités du mot
    if (i!=j && mot[i] === mot[j]) {
        // Appel 
        return estPalindrome(mot,i+1,j-1);
    } else if (i!=j && mot[i] != mot[j]) {
                return false;
    }
    
}

let mot= "php";
i=0;
j=mot.length-1;
// Exemples d'utilisation
console.log(estPalindrome(mot,i,j)); 
