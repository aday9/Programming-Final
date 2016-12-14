/*
Problem Statement:
Write a program that asks the user for many different kinds of words, and then
displays them within a story.

Nouns: User, words, story
verbs: Write, asks, displays

Pseudocode:

BEGIN
  prompt for user's name
  prompt for pastTenseVerb
  prompt for noun
  prompt for charName
  prompt for gender of charName
  loop
    if gender = male, display "he"
    else if gender = female, display "she"
    else, alert user that they did not specify gender and prompt for gender again
  endLoop
  insert words: name + " was hungry." + heOrShe + " " + pastTenseVerb + " a " + noun + "."
  display previously written story with the prompted words
END

Test Plans:

name + " was hungry." + heOrShe + " " + pastTenseVerb + " a " + noun + "."

variables: name, heOrShe, pastTenseVerb, noun

inputs: Amanda, she, walked, bear
expected result: Amanda was hungry. She walked a bear.
actual result: Amanda was hungry. she walked a bear.

inputs: Fred, he, flew, house
expected result: Fred was hungry. He flew a house.
actual result: Fred was hungry. he flew a house.

inputs: Jeff, he, washed, apple
expected result: Jeff was hungry. He washed a apple.
actual result: Jeff was hungry. he washed a apple.

inputs: Mary, she, wore, rose
expected result: Mary was hungry. She wore a rose.
actual result: Mary was hungry. she wore a rose.
*/
