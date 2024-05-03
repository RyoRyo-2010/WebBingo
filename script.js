var numberList = [];
var useSpeech = false;
const uttr = new SpeechSynthesisUtterance();
uttr.lang = "en-US";

const zyuu = ["","zyu","ni zyu","san zyu","yon zyu","go zyu","roku zyu","nana zyu","hachi zyu","ku zyu"];
const iti = ["","ichi","ni","san","yon","go","roku","nana","hachi","kyu"];

function furu() {
    const hanni = { min: Number(document.querySelector("#saisyou").value), max: Number(document.querySelector("#saidai").value) };
    if(hanni.max < hanni.min) {
        alert("最大値と最小値がおかしいっす");
        return;
    }
    if(hanni.min < 0 || hanni.min > 99) {
        alert("最小値がおかしいっす");
        return;
    }
    if(hanni.max < 0 || hanni.max > 99) {
        alert("最大値がおかしいっす");
        return;
    }
    let ok = false;
    if (hanni.max - hanni.min + 1 == numberList.length) {
        const dasita = "もう番号はすべて出したっす";
        uttr.text = "mo u ba nn go u wa su be te da shi ta su";
        // 発言を再生 (発言キューに発言を追加)
        speechSynthesis.speak(uttr);
        alert(dasita);
        let button = document.querySelector("#furu");
        button.disabled = true;
        button.innerHTML = dasita;
        return;
    }
    while (!ok) {
        let rand = (Math.random() * (hanni.max + 1 - hanni.min) / 1.0) + hanni.min;
        rand = Math.floor(rand);
        if (numberList.indexOf(rand) == -1) {
            ok = true;
            numberList.push(rand);
            showNumbers();
            document.querySelector("#now").innerHTML = rand;
            //しゃべる
            if (useSpeech) {
                //ローマ字を作る
                let msg = "";
                msg = zyuu[Math.floor(rand / 10)];
                msg += " ";
                msg += iti[rand % 10];
                // 発言を作成
                uttr.text = msg;
                // 発言を再生 (発言キューに発言を追加)
                speechSynthesis.speak(uttr);
            }
        }
    }


}

window.onload = (event) => {
    document.querySelector("#furu").addEventListener("click", furu);
    document.querySelector("#search").addEventListener("click",search);
    //音声合成使える？
    useSpeech = ('speechSynthesis' in window);
};

function showNumbers() {
    const numbers = numberList.join(", ");
    document.querySelector("#numbers").innerHTML = numbers;
}

function search() {
    let s = prompt("検索する数字を打ってくれっす");
    if(numberList.indexOf(Number(s)) != -1) {
        // 発言を作成
        uttr.text = "mi tsu ka ta su";
        // 発言を再生 (発言キューに発言を追加)
        speechSynthesis.speak(uttr);
        alert("見つかったっす！");
    }else{
        // 発言を作成
        uttr.text = "mi tsu ka ra na ka ta su";
        // 発言を再生 (発言キューに発言を追加)
        speechSynthesis.speak(uttr);
        alert("見つからなかったっす...");
    }
}