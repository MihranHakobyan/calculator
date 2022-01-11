function calc() {
    let numbersIdArr = ["one", "two", "tree", "four", "five", "six", "seven", "eight", "nine", "zero"]



    let numbersObjArr = [];

    var num1, num2;

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    let eq = false;

    let flag = true;//=====================
    let number1 = "";
    let number2 = "";
    for (let elem of numbersIdArr) {
        numbersObjArr.push(document.getElementById(elem))    
    }
    for (let i = 0; i < numbersObjArr.length; i++) {
        numbersObjArr[i].addEventListener("click", () => {
            let input_area = document.getElementById("inp");
            input_area.innerHTML += numbers[i]
            if (flag) {
                number1 += numbers[i]
            }else if(eq){
                number1 = num1
                number2 += numbers[i]  
            }else{
                number2 += numbers[i]  
            }  
            num1 = Number(number1)
            num2 = Number(number2)
        })
        
    }


    let mFId = ["sum", "min", "pro", "divis", "mod", "div"]
    let mFObj = []
    let mFSym =["+", "-", "*", "/", "mod", "div"]
    for (let elem of mFId) {
        mFObj.push(document.getElementById(elem))    
    }

    let clicked = false///====================
    let sym;
    for (let i = 0; i < mFObj.length; i++) {
        mFObj[i].addEventListener("click", function enterMF(){
            let input_area = document.getElementById("inp");
            if (input_area.innerHTML == "" && mFSym[i] == "-") {
                input_area.innerHTML += mFSym[i]
                sym = mFSym[i]
                number1 += "-"
            }else if(input_area.innerHTML == "" && mFSym[i] != "-"){
                //---------------------
            }else if(!clicked){
                input_area.innerHTML += mFSym[i]
                sym = mFSym[i]
                clicked = true
                flag = false;
            }
        })
    }
    

    let ecual = document.getElementById("ecual")
    ecual.addEventListener("click", calculate)
   
    function calculate() {
        switch (sym) {
            case "+":
                num1 += num2
                break;
            case "-":
                num1 -= num2
                break;
            case "/":
                num1 /= num2
                break;
            case "*":
                num1 *= num2
                break; 
            case "div":
                num1 = Math.floor(num1 / num2)
                break; 
            case "mod":
                num1 %= num2
                break;  
        }
        let input_area = document.getElementById("inp");
        input_area.innerHTML = ""
        input_area.innerHTML += num1
        clicked = false;
        flag = true
        eq = true
        number2 = ""
    }


    let clear = document.getElementById("clear");
    clear.addEventListener("click", Clear )


   function Clear() {
        let input_area = document.getElementById("inp");
        input_area.innerHTML = ""
        number1 = ""
        number2 = ""
        clicked = false;
        flag = true
        eq = false
    }


    function enterMF(symbol){
        let input_area = document.getElementById("inp");
        if (input_area.innerHTML == "" && symbol == "-") {
            input_area.innerHTML += symbol
            sym = symbol
            number1 += "-"
        }else if(input_area.innerHTML == "" && symbol != "-"){
            //---------------------
        }else if(!clicked){
            input_area.innerHTML += symbol
            sym = symbol
            clicked = true
            flag = false;
        }
    }


   
    window.addEventListener('keydown', (e) =>{
        switch (e.key) {
            case "=":
                calculate()    
                break;
            case "Backspace":
                Clear()    
                break;
            case "+":
                enterMF("+")    
                break;
            case "-":
                enterMF("-")    
                break;
            case "*":
                enterMF("*")    
                break;
            case "/":
                enterMF("/")    
                break;
            case "d":
                enterMF("div")    
                break;
            case "m":
                enterMF("mod")    
                break;
        }
        for (let i = 0; i < numbers.length; i++) {
            if (e.key == numbers[i]) {
                let input_area = document.getElementById("inp");
                input_area.innerHTML += numbers[i]
                if (flag) {
                    number1 += numbers[i]
                }else if(eq){
                    number1 = num1
                    number2 += numbers[i]  
                }else{
                    number2 += numbers[i]  
                }  
                num1 = Number(number1)
                num2 = Number(number2)
            }
        }
    })

/* 
    setInterval(function(){ 
        let input_area = document.getElementById("inp");
        input_area.style.backgroundColor = "rgba(" + 0 + "," + 0 + "," + Math.floor(Math.random()*256) + "," + 0.5 + ")"
     }, 1000);
*/

/* 
    function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        console.log(bgColor);
        input_area.style.background = bgColor;
        }
    random_bg_color();
 */
    }


























