				$(document).ready(function(){


				$('aside ul').addClass('nav');
				var currentURL = document.URL;

				var lengthOfLocation = currentURL.length;

				
				for(var i = 0; i < lengthOfLocation; i++ ){


				// var currentPageNumber = currentURL.charAt(i);

				if(currentURL.slice(i, i + 2) == 1) {

					document.getElementById('homepage').className = 'activeLink';
				}

				if(currentURL.slice(i, i + 2) == 2) {

					document.getElementById('page2').className = 'activeLink';
				}


				if(currentURL.slice(i, i + 2) == 3) {

					document.getElementById('page3').className = 'activeLink';


				}



				if(currentURL.slice(i, i + 2) == 4) {

					document.getElementById('page4').className = 'activeLink';

					
				}



				if(currentURL.slice(i, i + 2) == 5) {

					document.getElementById('page5').className = 'activeLink';

					
				}


				if(currentURL.slice(i, i + 2) == 6) {

					document.getElementById('page6').className = 'activeLink';

					
				}

				if(currentURL.slice(i, i + 2) == 7) {

					document.getElementById('page7').className = 'activeLink';

					
				}


				if(currentURL.slice(i, i + 2) == 8) {

					document.getElementById('page8').className = 'activeLink';

					
				}

				if(currentURL.slice(i, i + 2) == 9) {

					document.getElementById('page9').className = 'activeLink';

					
				}

					if(currentURL.slice(i, i + 2) == 10) {

					document.getElementById('page10').className = 'activeLink';
				}


					if(currentURL.slice(i, i + 3) == 20) {

					document.getElementById('page11').className = 'activeLink';
				}


					if(currentURL.slice(i, i + 2) == 30) {

					document.getElementById('page12').className = 'activeLink';
				}



			

			}


						});






