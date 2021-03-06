
// DECLARE VARIABLES//

		// Wins + Guesses Left that increase or decrease incrementally//
		var wins = 0 
		var guessesRemaining = 10;
		var celebList = ["Prince", "Sade", "Bono", "Cher", "Beyonce", "Sting", "Rihanna"];
		var lettersGuessed = [];
		var underScore = "";
		var wordSplit = [];
		var hiddenWord = [];
		var compWord = "";

		// FUNCTIONS

		function compWordPicker (array) {
			console.log(array);
			var randomIndex = Math.floor(Math.random() * array.length); 
			console.log(randomIndex);
			return array[randomIndex];
		}

		// Every word selected from Celeb List is represented by underscores
		function hideWord(word) {
			for(var i=0; i < word.length; i++) {
				underScore =  underScore + "_ ";
				
			}
			console.log(underScore);
			return underScore;
		} 
		
		// Underscores representing selected word are printed to HTML
		function renderHiddenWord(word){
			document.querySelector("#underscores").innerHTML= word;
		}
		// When the game starts, computer picks a random word, turns that word into dashes, renders those dashes to the page and splits the string into an array so letters can be compared and matched.
		function startGame (){
			compWord = compWordPicker(celebList); //at this point my assumption is that we have a celeb
			console.log({compWord});
			hiddenWord = hideWord(compWord);
			renderHiddenWord(hiddenWord);
			 wordSplit = compWord.split('');

			 console.log({wordSplit});

		}

		function updateHiddenWord (userSelection){
			for (var i=0; i < wordSplit.length; i++ ) {
				console.log({userSelection});
				console.log(wordSplit[i]);
				if (userSelection === wordSplit[i]) {
					hiddenWord[i] = userSelection;	
				}				 			 
			}
		}



		startGame();

		document.onkeyup = function() {
		userLetter = event.key;

		}
		

		// FUNCTIONS NEEDED (PSEUDO-CODE)

		// a working letter checker that checks if the letter typed by the user matches one or more of the letters in the word (most likely will return a true or false value)

		//if the letter matches, a function deletes the guessfield and replaces it with the new one that shows the matched letters but leaves the other dashes 

		// if the letter does not match, it gets pushed to an array of letters guessed and turns decreases incrementally by 1

		// A condition that prevents any guessed words to be used again by the user

		// A checker (for loop) to see if all the letters have been guessed

		// If all letters have been guessed, alert user that they won and increments value of "won" by 1

		//If all 10 guesses have been used up and all the letters in the word have not been guessed, alert user that they lost that game

		// A reset Function (outside of the onkeyup function) that is called in a win or lose situation. This resets guesses, chooses a random word and empties out the array of letters already guessed.