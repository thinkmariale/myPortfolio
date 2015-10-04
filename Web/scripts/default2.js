// JavaScript Document

	var newGray = 255;
	var newRed = 255;
	var newGreen = 255;
	var newBlue = 255;
	var changeRate = null;
	var theDelay= 0;
	var fadeNow = 0;
	var fadeDelay = 0;
	var fadeTo = 0;
	
	

var theSlideDelay= 0;
var fadeSlideNow = 0;
var fadeSlideTo = 0;

	function fadeToGray() {
	if ((fadeNow>=fadeTo)||(fadeSlideNow>=fadeSlideTo)) {
		document.body.style.backgroundColor = 'rgb('+newRed+','+newGreen+','+newBlue+')';
		newRed=newRed + (changeRate * 2);
		newGreen=newGreen + (changeRate * 2);
		newBlue=newBlue + changeRate;
		newGray=newGray + changeRate;
		if ((newGray<=50) && (changeRate == -1)) startFade(50,1);
		else if ((newGray>=235) && (changeRate == 1)) startFade(235,-1);
		else setTimeout('fadeToGray()',fadeDelay);
	}
	}
	
	function startFade (finalDestination,changeMe) {
		document.getElementById('pageBody').style.backgroundImage = 'url(images/bg-test.png)';
		newGray = finalDestination;
		changeRate = changeMe;
		fadeToGray();
	}
	
	function firstPage(objectID2) {
		if (fadeNow!=fadeTo)return;
		else {

			var firstPageName = 'about.php';
 			document.getElementById(objectID2).innerHTML='<div id="loaderMessage"></div>';
 			fetchData(firstPageName,null,objectID2);
			document.getElementById('movieScreen').style.opacity = 0;
 		}
	}
	
	function changePage(pageName,objectID) {
		if (fadeNow!=fadeTo)return;
		else {				
			document.getElementById('movieScreen').style.opacity = 0;
 			document.getElementById(objectID).innerHTML='<div id="loaderMessage"></div>';
 			fetchData(pageName,null,objectID);
 		}
	}


	function filterData(pageRequest,objectID){
		if (pageRequest.readyState == 4 && (pageRequest.status==200 || window.location.href.indexOf("http")==-1)) {
			document.getElementById('movieScreen').style.opacity = 0;
			fadeNow = 0;
			fadeLayer(1);
			document.getElementById(objectID).innerHTML=pageRequest.responseText;
		}
	}


function findLivePageWidth() {
	if (window.innerWidth)
		return window.innerWidth;
	if (document.body.clientWidth)
		return document.body.clientWidth;
	return (null);
}

function initSlides() {/*

	objectSlide=document.getElementById('popSlide');
*/
	objectCover=document.getElementById('cover');
	objectPhotoSlide=document.getElementById('displaySlide');
}

function remove(s,t) {
  /*
  **  Remove all occurrences of a token in a string
  **    s  string to be processed
  **    t  token to be removed
  **  returns new string
  */
  i = s.indexOf(t);
  r = "";
  if (i == -1) return s;
  r += s.substring(0,i) + remove(s.substring(i + t.length), t);
  return r;
  }


var objectSlide = null;
var newTop = 50;
var newLeft = 125;
var theDelay= 0;
var fadeNow = 0;
var fadeDelay = 125;
var fadeTo = 0;

function changeSlide(evt) {
	var slideToShow = 'popSlide' + evt.id;
	objectSlide=document.getElementById('popSlide');
	objectSlideToShow=document.getElementById(slideToShow);
	livePageWidth = findLivePageWidth();
	if (livePageWidth) newLeft = ((livePageWidth/2)-8) - (400);
	objectSlide.style.left = newLeft + 'px';
	objectSlideToShow.style.display = 'block';	
	objectSlide.style.display = 'block';	
	objectCover.style.display = 'block';
	fadeSlide(1);
	return;
}


function hideSlide() {
	objectSlideToShow.style.display = 'none';
	objectSlide.style.display = 'none';	
	objectCover.style.display = 'none';
}

 function doClear(theText) {
     if (theText.value == theText.defaultValue) {
         theText.value = ""
     }
 }

function fadeSlide(fadeSlideTo) {
	objectSlide.style.opacity = fadeSlideNow;
	if (fadeSlideNow<=fadeSlideTo) {
		fadeSlideNow = fadeSlideNow + .08;
		setTimeout ('fadeSlide(' + fadeSlideTo + ')',0);
	}
	else {
		fadeSlideNow = 0;
		return;
	}
}

function fadeLayer(fadeTo) {
	document.getElementById('movieScreen').style.opacity = fadeNow;
	if (fadeNow<=fadeTo) {
		fadeNow = fadeNow + .05;
		setTimeout ('fadeLayer(' + fadeTo + ')',0);
	}
	else {
		fadeNow = 0;
		return;
	}
}


function initPage(pageType) {
	initSlides();
}
