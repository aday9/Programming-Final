/*
  Manda-Libs By Amanda Day

  This code is designed to create a game called Manda-Libs.
  Manda-Libs is very similar to Mad Libs, which is a word game.
  This code will ask the user for a variety of words, like adjectives, nouns,
  verbs, etc. and then insert the prompted words into a previously written
  story. It will then display the final story to be read.
*/

// Begin funtion for the story.
function theProgrammerThatCould(){
  // Ask user for a name of a character in the story.
  var name = prompt("Enter a name");
  // Ask user what the gender of the previously asked name is.
  var gender = prompt("Is the name " + name + " male or female?")
  var i = 0;
  while (i < 1){
    // Did the user type in male?
    if (gender === "male"){
      // Then change the variable to "he".
      var maleOrFemale = "he"
      i++
    }
    // Did the user type in female?
    else if (gender === "female"){
      // Then change the variable to "she".
      var maleOrFemale = "she"
      i++
    }
    // Did the user type in something else?
    else{
      // Tell them that they typed in an incorrect gender and ask for gender again.
      var gender = prompt("You didn't type male or female, please try again.")
    }
  }

  // Ask user for many different kinds of words.
  var adj1 = prompt("Enter an adjective");
  var room1 = prompt("Enter a kind of room");
  var verb1 = prompt("Enter a verb");
  var room2 = prompt("Enter a kind of room");
  var thing = prompt("Enter a thing");
  var verb2 = prompt("Enter a past tense verb");
  var furnature = prompt("Enter a kind of furniture");
  var num = Number(prompt("Enter a number"));
  var negEmotion = prompt("Enter a negative emotion Ex: sadness");
  var posEmotion = prompt("Enter a positive emotion. Ex: happiness, excitement");
  var time = prompt("Enter a unit of time. Ex: seconds, minutes, hours");
  var electronic = prompt("Enter a type of electronic device");

  // Input the correct variables into the story.
  // Display the finished product.
  document.write("A programmer named " + name + " sat in a " + adj1 + " "
  + room1 + " trying to write some code. &quot;Oh man,&quot; " + maleOrFemale +
  " said, &quot;this code has so many bugs, it doesn't even " + verb1 + ".&quot; "
  + name + " decided that it was time for a break. " + name +
  " went to the " + room2 + " to grab a " + thing + ", then " + verb2 + " on the "
  + furnature + " to think about what " + maleOrFemale +
  " could do to make the code " + verb1 +
  ". &quot;I'll never be able to figure this out!&quot; " + maleOrFemale +
  " said with " + negEmotion +
  ". Moments later, a voice came over the " + electronic +
  ". &quot;You can do it, " + name + ", I know you can! &quot; " + name +
  "'s eyes opened wide. &quot;The voice is right!&quot; " + maleOrFemale +
  " said with " + posEmotion + ". " + name + " ran back to the " + adj1 +
  " " + room1 + " and got working on the code, while saying &quot;I know I can, I know I can, I know I can.&quot; Finally, after "
  + num + " " + time + ", " + name + " fixed all of the bugs, and the code worked perfectly. &quot;I knew I could!&quot;");
}


//Extra story to play with

function helpfulFriend(){
  var adj1 = prompt("Enter an adjective");
  var man = prompt("Enter a man's name");
  var place1 = prompt("Enter a place");
  var object = prompt("Enter an object");
  var color = prompt("Enter a color");
  var container = prompt("Enter a kind of container");
  var material = prompt("Enter a kind of material");
  var adj2 = prompt("Enter an adjective");
  var noun1 = prompt("Enter a noun");

  document.write("Once upon a time, there was a " + adj1 +
  " man named " + man + ". He was lost in the forest of " + place1 +
  " because he couldn't find his " + object +
  ". All of a sudden a " + adj2 + " " + noun1 + " came out of a cave. The " + noun1 +
  " asked " + man + ", &quot;Are you lost, " + adj1 + " man?&quot; " + man +
  " said, &quot;Yes, I lost my " + object +
  "!&quot; Then the " + noun1 + " pulled something out of their " + container +
  " and said, &quot;Well you are in luck, because I found a "
  + object + " earlier today in the middle of the " + color + " " + material +
  " road.&quot; The man hugged the " + noun1 + " and continued on with his journey.");
}
