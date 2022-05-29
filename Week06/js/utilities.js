export function setOnClick(id, callbBack) {
    var elem = document.getElementById(id);
    if (elem && typeof(callbBack) === 'function')
      elem.addEventListener('mouseup', callbBack);
  }
  
  export function setClassOnClick(Class, callbBack) {
    if (typeof(callbBack) === 'function') {
      var elemList = document.getElementsByClassName(Class);
      for (var i = 0; i < elemList.length; i++) {
        elemList[i].addEventListener('mouseup', callbBack);
      }
    }
  }
  
  export function setClassOnInput(Class, callbBack) {
    if (typeof(callbBack) === 'function') {
      var elemList = document.getElementsByClassName(Class);
      for (var i = 0; i < elemList.length; i++) {
        elemList[i].addEventListener('input', callbBack);
      }
    }
  }