// JavaScript Document

var PrintButton1 = new Image ();

	var PrintButton2 = new Image ();

	var	logo1 = new Image();

	var	logo2 = new Image();

if (document.images) {

	PrintButton1.src = "images/Hello1.gif";

	PrintButton2.src = "images/Hello2.jpg";

	logo1.src = "images/logo1.jpg";

	logo2.src = "images/logo2.jpg";

}



function swapMe(thisImage,newImage){

	document.Images[thisImage].src= eval(newImage + ".src");

}





		var imgArray = new Array(

			'CatandDogLg.jpg',

			'DogTrick2Lg.jpg',

			'HuntingDogsLg.jpg',

			'BirdDogLg.jpg'

			



		);





		var titleArray = new Array(

			'Cuddling Pet',

			'Dog Performing a Trick',

			'Super Dog',

			'Pet Friendship'

			

		);

			

		var imgPath = "Images/Fullsize/";

		

		function swapImage(imgID) {



			var theImage = document.getElementById('theImage');

			var textDiv = document.getElementById('bottomText');



			var newImg;

			var textTitle;



			newImg = imgArray[imgID];

			theImage.src = imgPath + newImg;



			textTitle=titleArray[imgID];



      			textDiv.innerHTML = textTitle;

		}

			

		function preloadImages() {		

			for(var i = 0; i < imgArray.length; i++) {

				var tmpImg = new Image;

				tmpImg.src = imgPath + imgArray[i];

			}

		}// JavaScript Document