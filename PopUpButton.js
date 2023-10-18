let timeoutIds = [];
let topPopupDisplayed = false;
let bottomPopupDisplayed = false;

function showTopPopup(){
  if(!topPopupDisplayed){
    topPopupDisplayed = true;
    document.querySelector("#top-popup").style.transform = "translateX(-12px)";
    const timeoutId = setTimeout(() => { hideTopPopup()}, 8000);
    timeoutIds.push(timeoutId);
  }
}

function showBottomPopup(){
  if(!bottomPopupDisplayed){
    bottomPopupDisplayed = true;
    document.querySelector("#bottom-popup").style.transform = "translateX(-12px)";
    const timeoutId = setTimeout(() => { hideBottomPopup()}, 8000);
    timeoutIds.push(timeoutId);
  }
}

function hideTopPopup(){
  document.querySelector("#top-popup").style.transform = "translateX(100%)";
  topPopupDisplayed = false;
}

function hideBottomPopup(){
  document.querySelector("#bottom-popup").style.transform = "translateX(100%)";
  bottomPopupDisplayed = false;
}

function hidePopups(){
  hideTopPopup();
  hideBottomPopup();
}

document.addEventListener("click", (evt) => {
  const elementList = document.querySelectorAll(".mark");
  let clickedInside = false;
  elementList.forEach(elem => {
    if(elem.contains(evt.target)){ //clicked outside
      clickedInside = true;
    }
  })
  
  if(!clickedInside){
    hidePopups();
    clearTimeoutIds();
  }
})

function clearTimeoutIds(){
    for(let i=0; i<timeoutIds.length; i++){
      clearTimeout(timeoutIds[i])
    }
    timeoutIds = []
}
