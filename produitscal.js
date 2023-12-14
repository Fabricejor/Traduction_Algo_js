function dot_product(X,Y) {
    let ps =0;
    for (let index = 0; index < X.length-1; index++) {
        ps = ps + X[index]*Y[index];
    }
    if (ps==0) {
        console.log("les deux vecteurs sont orthogonaux");
    }
    return console.log("le produit scalaire est ",ps);
}

function main(){
    //on remplis les tableaux arbitrairement
    const U=[2,3,4],V=[1,4,5];
    dot_product(U,V);
}

main();