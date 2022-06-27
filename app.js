const chart = document.querySelector(".chart-box");

let chart_html = "";
let max_index = 0;

data.forEach(function(eachData, index){
    if(eachData.amount > data[max_index].amount) {
        max_index=index;
    }
});

function calculateHeight(amount) {
    return (amount * 120) / data[max_index].amount;
}

data.forEach(function(eachData,index){


    chart_html+='<div class="each-col-box">'
    chart_html+='<div class="column">'
    chart_html+='<span class="title">$'+eachData.amount+'</span>'

    chart_html+='<span class="col-bar '

    if(index==max_index)
    chart_html+="max"

    chart_html+='"style = "height:'+ calculateHeight(eachData.amount)+'px"></span>"'


    chart_html+='</div>'

    chart_html+='<span class="day">'+eachData.day+'</span>'

    chart_html+='</div>'

    

})

//renderinf chart


chart.innerHTML= chart_html;