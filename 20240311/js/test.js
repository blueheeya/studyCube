import car from "car.js"


let text = "<tr><td>이름</td><td>색상</td><td>스피드</td></tr>"
for(let i=0; i<car.length;i++){
    text = text + "<tr>";
    text = text + "<td>" + car[i].name + "</td>";
    text = text + "<td>" + car[i].color + "</td>";
    text = text + "<td>" + car[i].speed + "</td>";
    text = text + "</tr>";
}
document.querySelector(".table").innerHTML = text;