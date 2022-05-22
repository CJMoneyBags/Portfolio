

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
    },
    {
      label: "Week3 notes",
      url: "Week03/index.html"
    },
    {
      label: "Week4 notes",
      url: "Week04/index.html"
    },
    {
      label: "Week5 notes",
      url: "Week05/index.html"
    }
  ]

var lists = document.getElementById("WeekList");
var paragraphText = "Projects of ";
console.log(lists);

 for (var i in links){
   var anchor = document.createElement('a');
   anchor.href = links[i].url;
   anchor.innerText = links[i].label;

console.log(anchor);
var li  = document.createElement('li');
var paragraph = document.createElement('span');
paragraph.append(paragraphText);
li.appendChild(paragraph);
li.appendChild(anchor);
lists.appendChild(li);

 }
}
