

function makeList()
{
  const links = [
    {
      label: "Week1 notes",
      url: "Week01/index.html"
    },
      {
      label: "Week1 notes",
      url: "Week01/index.html"
    }
  ]

var lists = document.getElementsByClassName("WeekList");


 for (var i in links){
   var anchor = document.createElement('a');
   anchor.href = links[i].url;
   anchor.innerText = links[i].label;

   var elem = document.createElement("li");
   elem.appendChild(anchor);
   lists.innerHTML += elem;

 }
}
