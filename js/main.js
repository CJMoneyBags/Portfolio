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

function makeList()
{
 var listItems = document.createElement('ol');
 for (var i in links){
   var anchor = document.createElement('a');
   anchor.href = links[i].url;
   anchor.innerText = links[i].label;

   var elem = document.createElement("li");
   elem.appendChild(anchor);
   list.appendChild(elem);
 }
}
