let television = document.getElementsByClassName("tv-input")[0];
let fridge = document.getElementsByClassName("fridge-input")[0];
let blender = document.getElementsByClassName("blender-input")[0];
let toaster = document.getElementsByClassName("toast-input")[0];
let microwave = document.getElementsByClassName("microwave-input")[0];
let gasCooker = document.getElementsByClassName("gas-input")[0];
let amountButtonPlus = document.getElementById("television-add-button");
let amountButtonMinus = document.getElementById("television-minus-button");
let cartItem = document.getElementById("cart-item");
let cartTOtal = document.getElementById("cart-total");

function televisionPurchase() {
getTelevisionValue = television.value;
if (getTelevisionValue > 0) {
  let televisonResult = eval(getTelevisionValue * 700)
  document.getElementById("tv-total").innerHTML = `Total: $${televisonResult}`
  
}else{
document.getElementById("tv-total").innerHTML = "$0"
}
}

function fridgePurchase() {
    getFridgeValue = fridge.value;
    if (getFridgeValue > 0) {
      let fridgeResult = eval(getFridgeValue * 366)
      document.getElementById("fridge-total").innerHTML = `Total: $${fridgeResult}`
      
    }else{
    document.getElementById("fridge-total").innerHTML = "$0"   
    }
}
    function blenderPurchase() {
        getBlenderValue = blender.value;
        if ( getBlenderValue > 0) {
          var blendeResult = eval(getBlenderValue * 47)
          document.getElementById("blender-total").innerHTML = `Total: $${blendeResult}`
          
        }else{
        document.getElementById("blender-total").innerHTML = "$0"
        }
        }
        function toasterPurchase() {
            getToasterValue = toaster.value;
            if (getToasterValue > 0) {
              let toastResult = eval(getToasterValue * 28)
              document.getElementById("toast-total").innerHTML = `Total: $${toastResult}`
              
            }else{
            document.getElementById("toast-total").innerHTML = "$0"
            }
            }
            function microwavePurchase() {
                getMicrowaveValue = microwave.value;
                if (getMicrowaveValue > 0) {
                  let microwaveResult = eval(getMicrowaveValue * 70)
                  document.getElementById("microwave-total").innerHTML = `Total: $${microwaveResult}`
                  
                }else{
                document.getElementById("microwave-total").innerHTML = "$0"
                }
                }
                function gasCookerPurchase() {
                    getGascookerValue = gasCooker.value;
                    if (getGascookerValue > 0) {
                      let gasCookerResult = eval(getGascookerValue * 480)
                      document.getElementById("gas-total").innerHTML = `Total: $${gasCookerResult}`
                      
                    }else{
                    document.getElementById("gas-total").innerHTML = "$0"
                    }
                    }
                    function itemDisplay() {
                        let buttons = document.getElementById("btn")
                        var num = 0;
                        function itemadd() {
                            num ++ 
                            cartItem.textContent = num;
                        }
                        buttons.addEventListener("click", itemadd)
                        
                    }
                                                            

document.getElementsByClassName("favourite-icon")[0].addEventListener("click", function () {
    if (document.getElementsByClassName("icon")[0].style.fill = "gray") {
        document.getElementsByClassName("icon")[0].style.fill = "red"
    }
    
})
document.getElementsByClassName("favourite-icon")[1].addEventListener("click", function () {
    if (document.getElementsByClassName("icon")[1].style.fill = "gray") {
        document.getElementsByClassName("icon")[1].style.fill = "red"
    }
    
})
document.getElementsByClassName("favourite-icon")[2].addEventListener("click", function () {
    if (document.getElementsByClassName("icon")[2].style.fill = "gray") {
        document.getElementsByClassName("icon")[2].style.fill = "red"
    }
    
})
document.getElementsByClassName("favourite-icon")[3].addEventListener("click", function () {
    if (document.getElementsByClassName("icon")[3].style.fill = "gray") {
        document.getElementsByClassName("icon")[3].style.fill = "red"
    }
    
})
document.getElementsByClassName("favourite-icon")[4].addEventListener("click", function () {
    if (document.getElementsByClassName("icon")[4].style.fill = "gray") {
        document.getElementsByClassName("icon")[4].style.fill = "red"
    }
    
})
document.getElementsByClassName("favourite-icon")[5].addEventListener("click", function () {
    if (document.getElementsByClassName("icon")[5].style.fill = "gray") {
        document.getElementsByClassName("icon")[5].style.fill = "red"
    }
    
})
document.getElementsByClassName("favourite-icon")[6].addEventListener("click", function () {
    if (document.getElementsByClassName("icon")[6].style.fill = "gray") {
        document.getElementsByClassName("icon")[6].style.fill = "red"
    }
    
})



