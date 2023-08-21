

function wordCounter(sentence){
    const mp=new Map();
    const sp = sentence.split(/\s+/);
    for(let i=0;i<sp.length;i++){
       if(mp[sp[i]]){
        mp[sp[i]]++;
       }
       else mp[sp[i]]=1;
    }
    return mp;
}

const sentence = "please please submit your assignment on time your assignments are important";

// const sp = sentence.split(/\s+/);
// console.log(sp[0]);
console.log(wordCounter(sentence));