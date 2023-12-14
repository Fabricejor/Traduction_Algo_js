function tri_tablau(tab) {
    let elt_trie;
    let j;

    for (let i = 0; i < tab.length; i++) {
        elt_trie=tab[i];
        j = i-1;
        
        while (j>=0 && tab[j] > elt_trie) {
            tab[j+1]=tab[j];
            j--;
            tab[j+1]=elt_trie;
        }
    }
    return   console.log("lol", tab);
}

function main() {
    const tab=[4,5,6,12,5,0,13,15,26,150,12];
    tri_tablau(tab);
}

main();