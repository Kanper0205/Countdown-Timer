//9 the december ,2025,23:45:34

console.log("check")
let targetdate = null;
let intervalId = null; // so multiple intervals don't stack
function settimer(){
    if (!targetdate) return; // don’t run if user hasn’t set time
    const days = document.querySelector(".days .time");
    const hours = document.querySelector(".hours .time");
    const mins = document.querySelector(".mins .time");
    const secs = document.querySelector(".secs .time");

    
    const now = new Date().getTime();
    const diff = targetdate - now;


    if (diff <= 0) {
        // If time is up
        days.innerText = "00";
        hours.innerText = "00";
        mins.innerText = "00";
        secs.innerText = "00";
        return;
    }
    else{
        const daysf = Math.floor(diff/(1000*60*60*24));
        const hoursf = Math.floor(diff%(1000*60*60*24)/(1000*60*60));
        const minsf = Math.floor((diff % (1000*60*60)) / (1000*60));
        const secsf = Math.floor((diff % (1000 * 60)) / 1000);;

        days.innerText = String(daysf).padStart(2, "0");
        hours.innerText = String(hoursf).padStart(2, "0");
        mins.innerText = String(minsf).padStart(2, "0");
        secs.innerText = String(secsf).padStart(2, "0");

    }


}

function main(){
    //updating the text 
    document.getElementById("button").addEventListener("click",() => {
        const type =document.getElementById("Type").value
        const userDate = document.getElementById("userDate").value;// new

        if (!userDate) {
            alert("Please select a date and time!");
            return;
        }//new

        
        document.querySelector(".uptext").innerText = `Countdown For ${type || "Something Special"}`;
        document.querySelector(".uptext").style.fontSize = "4rem";


        // set target date from user input
        targetdate = new Date(userDate).getTime();

       // clear any existing interval before starting new
        if (intervalId) clearInterval(intervalId);

        // run timer every second
        intervalId = setInterval(settimer, 1000);

        // run immediately without waiting 1s
        settimer();
        document.getElementById("Type").innerText = "";  // clears input
        document.getElementById("box").innerHTML = ""; // clears button text
        document.querySelector(".lowertext").innerText = ""; // clears text
        document.getElementById("calender").innerHTML = ""; // clears date input



        
    })
}

main();