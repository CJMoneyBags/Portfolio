

function makeList()
{
  const links = [
    {
      label: "Week1 notes",
      url: "Week01/index.html"
    },
      {
      label: "Week2 notes",
      url: "Week02/index.html"
    }
  ]

var lists = document.getElementById("WeekList");
console.log(lists);

 for (var i in links){
   var anchor = document.createElement('a');
   anchor.href = links[i].url;
   anchor.innerText = links[i].label;

console.log(anchor);
   lists.innerHTML += "<li>";
   list.append(anchor);
   list.innerHTML +="</li>";

 }
}
