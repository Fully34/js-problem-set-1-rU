
//===========================================================================//
                        /* ~~~ LETTER CAPITALIZE ~~~ */ 
//===========================================================================//

function letterCapitalize(string) {

    var arr = string.split(' ');

    console.log(arr);

    for (var i = 0; i < arr.length; i ++) {

        // Tried arr[i][0] = arr[i][0].toUpperCase();
            //Doesn't work because .toUpperCase(); is a pussy

        arr[i] = capitalize(arr[i]);
    }

    return arr.join(' ');
}

// NEED THE BELOW FUNCITON B/C .toUpperCase() doesn't return the capitalized letter.
    // Need something to actually return that value + the rest of the word to effectively capitalize. 

function capitalize(string) {

    // taking the value of string[0] as upperCase and then adding the rest of the word to the upperCased letter.

    return string[0].toUpperCase() + string.slice(1);
}


//===========================================================================//
                        /* ~~~ WORD COUNT ~~~ */ 
//===========================================================================//

//EASY WAY

function wordCounter(string) {

    var arr = string.split(' ');
    var length = arr.length;

    return "There are " + length + " words present.  And this was the easy way.";
}


// A little harder, but more robust: 
    //Accounts for assholes like me that use two spaces after periods.

function wordCounter(string) {

    var wordCount = 1;

    for (var i = 0; i < string.length; i ++) {

        // If we encounter two spaces next to each other, we increment wordCount by 1 word and skip the next iteration of i.
        if ( (string[i] === " ") && (string[i+1] === " ") ){

            wordCount ++; 
            i ++;

        // If we encounter only one space, we increment the wordwordCount by 1
        } else if (string[i] === " ") {

            wordCount ++;
        }
    }

    return "there are " + wordCount + " words present. And this was the hard way.";
}


