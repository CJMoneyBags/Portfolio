const links = [
  {
    label: "Week1 notes",
    url: "Week01/index.html"
  }
]

function makeList()
{
  var listContainer = document.createElement('div');
  var listElement = document.createElement('ol');
  var numListItems = links.length;
  var listItem;
  var i;

  document.getElementsByTagName('body')[0].appendChild(listContainer);
  listContainer.appendChild(listElement);

  for(i = 0; i < numListItems; i++)
  {
    // create line items, populate them, and add list item to list element
    listItem = document.createElement('li');
    listItem.innerHTML = links[i];
    listElement.appendChild(listItem);
  }
}

var li = document.createElement('li'),
         anchor = document.createElement('a');
         anchor.href = links.url;
         anchor.text = links.label;
         li.appendChild(anchor);
         ul.appendChild(li);
