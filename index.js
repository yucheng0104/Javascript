
//  產生亂數
// for (let i = 0; i < 10; i++) {
//     let r = Math.floor(Math.random() * 49) + 1;
//     console.log(r)
// }

// while (true) {
//     let r = getRandomInt(1, 49);
//     console.log(r);
//     if (r == 49) {
//         break;
//     }
// }
function getRandomInt(start, end) {
    let x = Math.floor(Math.random() * end) + start;
    return x;
}

function getNumbers(num, length) {
    let rows = [];
    for (let j = 0; j < num; j++) {
        let numbers = [];

        while (true) {
            let x = getRandomInt(1, 49);
            if (!numbers.includes(x)) {
                numbers.push(x);
            }
            if (numbers.length == length) {
                break;
            }
        }
        numbers.sort(compare)
        rows.push(numbers);
    }
    return rows;
}

function getLottroy() {
    // alert('click!');

    const lottoryEl = document.querySelector('#lottroy');
    let num = prompt("組數")
    let length = prompt("幾個號碼")
    rows = getNumbers(num, length);
    lottoryEl.innerHTML = "";
    for (let i = 0; i < rows.length; i++) {
        result = rows[i].join(" , ");
        // console.log(result);
        lottoryEl.innerHTML += `<h3>第${i + 1}組號碼：${result}</h3><hr>`
        // document.write(`<h3>第${i + 1}組號碼：${result}</h3><hr>`)
    }
}

const dateEl = document.querySelector(".date");
dateEl.innerText = Date()


// console.log(dateEl)

// document.write(Date() + '<hr>');

// 升續 
function compare(a, b) {
    return a - b;
}





// let rows = [];
// for (let j = 0; j < 5; j++) {
//     let numbers = [];

//     for (let i = 0; i < 6; i++) {
//         let r = getRandomInt(1, 49);
//         // document.write(`<h2>第${i + 1}組號碼為: ${r}</h2>`);
//         numbers.push(r)
//     }
//     // console.log(numbers);
//     rows.push(numbers);
//     document.write(`<ol>第${j + 1}組 產生的號碼為 ${numbers}</ol>`)
// }
// console.log(rows);


// x = "3.5";

// document.write(parseInt(x));
// document.write(Number(x));

let user = {
    name: "Jerry",
    height: 177.3,
    weight: 77.8,

}

console.log(user, typeof (user));
console.log(user.name, user["name"])
console.log(getBmi(user.height, user.weight))
console.log(getBmi('180', '78'))
//計算ＢＭＩ
function getBmi(height, weight) {
    let bmi = weight / (height / 100) ** 2;
    if (isNaN(bmi)) {
        return "數值錯誤!";
    }
    return bmi.toFixed(2);
}


const h1 = document.querySelector("h1");
// console.log(lottoryEl)
console.log(h1)
h1.innerHTML = "<u>大樂透</u>";
h1.style.color = 'red';