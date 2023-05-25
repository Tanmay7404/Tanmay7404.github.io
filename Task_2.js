
const getTodos = async() =>{
    const response = await fetch("https://www.coursehubiitg.in/api/codingweek/contributions");
    if(response.status!=200){
        throw new Error('Couldnt Fetch data');
    }
    const data = await response.json();
    return data;
}
getTodos().then(data => {
    const obj=data;
    found_data(obj);
    }).catch(err => console.log('rejected', err.message));

function found_data (obj){
    obj = obj.sort((a, b) => {
        if (a.points > b.points) {
          return -1;
        }
      });

    var size= Object.keys(obj).length;
    $("#Rank_1 img" ).attr("src",obj[0].avatar);
    $("#Name_1").text(obj[0].name) ;
    $("#Value_1").text(obj[0].points);

    $("#Rank_2 img" ).attr("src",obj[1].avatar);
    $("#Name_2").text(obj[1].name) ;
    $("#Value_2").text(obj[1].points);

    $("#Rank_3 img" ).attr("src",obj[2].avatar);
    $("#Name_3").text(obj[2].name) ;
    $("#Value_3").text(obj[2].points);

    var top=470;
    for (let i=0;i<(size-3);i++){

        var element=document.createElement("div");
        element.setAttribute("class","Rectangles");
        element.setAttribute("id","Rectangle_"+(i+4));
        element.setAttribute("style","top:"+top+"px")
        top=top+114;
        element.innerHTML += '<p class="S_Nos">' + (i+4) + '</p>'
        element.innerHTML +='<svg class="Double_Circles"><ellipse cx="40" cy="40"  rx="40" ry="40" style="fill:#FFFFFF" /><ellipse cx="40" cy="40"  rx="37.21" ry="37.21" style="fill:#BABEFF" /></svg>'
        element.innerHTML +='<img src="' + obj[i+3].avatar + '" class="Images">'
        element.innerHTML += '<p class="Names">' + obj[i+3].name + '</p><p class="Scores">' + obj[i+3].points+ '</p>'
        document.getElementById("Desktop_1").appendChild(element);
    }
}