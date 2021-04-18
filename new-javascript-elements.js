// We go again...

// Fade in homepages mobile section 

function scrollAppearMobile() {
  var mobileTrio = document.querySelector(".mobile-trio");
  var mobileTrioPosition = mobileTrio.getBoundingClientRect().top; //distance from top of screen
  var screenPosition = window.innerHeight / 1.5; // gets height of screen as each screen height varies - makes sense as to why the pixel thing might not be the best method. Dividing it by 2 gets it on the centre of the screen, rather than at the bottom

  if(mobileTrioPosition < screenPosition){
    mobileTrio.classList.add('active');
  }

}

window.addEventListener('scroll', scrollAppearMobile);

// Left titles slide in

function slideInLeft() {
  var greenBox = document.querySelectorAll('.subtitle-left');

  greenBox.forEach(function(box) {

      var greenPosition = box.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.2;

  if (greenPosition < screenPosition) {
    box.classList.add('slide-in-left');
  }
 
});
} 
window.addEventListener('scroll', slideInLeft);
        

// Right titles slide in

function slideInRight() {
  var greenBox = document.querySelector('.subtitle-right');// make sure that in the CSS you just put the class not the HTML tag beforehand otherwise it won't pick it up
  var greenBoxPosition = greenBox.getBoundingClientRect().top; //distance from top of screen
  var screenPosition = window.innerHeight / 1.2; // gets height of screen as each screen height varies - makes sense as to why the pixel thing might not be the best method. Dividing it by 2 gets it on the centre of the screen, rather than at the bottom

  if(greenBoxPosition < screenPosition){
    greenBox.classList.add('slide-in-right');
  }

}

window.addEventListener('scroll', slideInRight);

// Fade in emails section 

function scrollAppearEmails() {
  var emails = document.querySelectorAll(".email-pics");
	
  emails.forEach(function(email) {

		var emailsPosition = email.getBoundingClientRect().top;
	var screenPosition = window.innerHeight / 1.2;
	
	if (emailsPosition < screenPosition) {
	email.classList.add('email-active');
	}
	
	});
	}

window.addEventListener('scroll', scrollAppearEmails);


// when we scroll the page, make a progress bar that keeps track of the distance

const pixelsTag = document.querySelector("div.pixels")
const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")
const sections = document.querySelectorAll("section")
const headerTag = document.querySelector("header")

document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollableDistance = pageHeight - window.innerHeight

  const percentage = pixels / totalScrollableDistance

  progressTag.style.width = `${100 * percentage}%`
})


// Fade in magazine section

function scrollAppearMagazine() {
	var magazine = document.querySelector('.flipbook');
  var magazinePosition = magazine.getBoundingClientRect().top; //distance from top of screen
  var screenPosition = window.innerHeight / 2; // gets height of screen as each screen height varies - makes sense as to why the pixel thing might not be the best method. Dividing it by 2 gets it on the centre of the screen, rather than at the bottom

  if(magazinePosition < screenPosition){
    magazine.classList.add('on');
  }
}

window.addEventListener('scroll', scrollAppearMagazine);


/*
 * Basic magazine sample
*/

function addPage(page, book) {

	var id, pages = book.turn('pages');

	// Create a new element for this page
	var element = $('<div />', {});

	// Add the page to the flipbook
	if (book.turn('addPage', element, page)) {

		// Add the initial HTML
		// It will contain a loader indicator and a gradient
		element.html('<div class="gradient"></div><div class="loader"></div>');

		// Load the page
		loadPage(page, element);
	}

}

function loadPage(page, pageElement) {

	// Create an image element

	var img = $('<img />');

	img.mousedown(function(e) {
		e.preventDefault();
	});

	img.load(function() {
		
		// Set the size
		$(this).css({width: '100%', height: '100%'});

		// Add the image to the page after loaded

		$(this).appendTo(pageElement);

		// Remove the loader indicator
		
		pageElement.find('.loader').remove();
	});

	// Load the page

	img.attr('src', 'pages/' +  page + '.jpg');

}


function loadLargePage(page, pageElement) {
	
	var img = $('<img />');

	img.load(function() {

		var prevImg = pageElement.find('img');
		$(this).css({width: '100%', height: '100%'});
		$(this).appendTo(pageElement);
		prevImg.remove();
		
	});

	// Loadnew page
	
	img.attr('src', 'pages/' +  page + '-large.jpg');
}


function loadSmallPage(page, pageElement) {
	
	var img = pageElement.find('img');

	img.css({width: '100%', height: '100%'});

	img.unbind('load');
	// Loadnew page

	img.attr('src', 'pages/' +  page + '.jpg');
}



// http://code.google.com/p/chromium/issues/detail?id=128488
function isChrome() {

	return navigator.userAgent.indexOf('Chrome')!=-1;

}

function makeMarquee() {
  const title = 'ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT'
  // an array is a list of things
  // ['lawrence', 'rik', 'milan', 'ryan', 'adam', 'krista']
  // here we make a new empty array with 50 spaces in it
  // then we fill it with the text from our title (50 times)
  // we then join them all together as one text string using a ' — '
  const marqueeText = new Array(50).fill(title).join(' ABOUT ');
  // querySelector and querySelectorAll are the same as $ in jQuery
  const marquee = document.querySelector('.marquee1 span a');
  // using innerHTML lets us set the content inside an element
  marquee.innerHTML = marqueeText;
};
