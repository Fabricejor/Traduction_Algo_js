const { log } = require("console");

const ensemble1= [1,2,3,4,5,6,7,8]
const ensemble2= [6,7,8,94];
const ensemble=[];
let eltcourant,sum=0;
let present=false;
//! On compare les deux ensemble
    for (let index = 0; index < ensemble1.length-1; index++) {
        eltcourant = ensemble1[index];
            for (let j = 0; j < ensemble2.length; j++) {
                if (eltcourant=== ensemble2[j]) {
                    present = true;
                    break;
                }
                
            }
        if (present==false) {
            sum += eltcourant;
            ensemble.push(eltcourant);
        }
    }
    // for (let k = 0; k < ensemble2.length-1; k++) {
    //     eltcourant=ensemble[k];
    //     present=false;
    //     for (let l = 0; l < ensemble1.length; l++) {
    //         if (eltcourant==ensemble1[l]) {
    //             present=true;
    //             break;
    //         }
    //     }
    //     if (present==false) {
    //         sum+=eltcourant;
    //         ensemble.push(eltcourant);
    //     }
    // }

    console.log("le tablau n1 ", ensemble1);
    console.log("\nle tablau n2 ", ensemble2);
    console.log("\nles element commun ", ensemble, "\nla somme des elements:",sum);

