/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Assuming you have arrays defined as follows
  var who = [
    "My llama",
    "A rogue squirrel",
    "An insistent telemarketer",
    "My evil twin",
    "A band of pirates",
    "A lost time traveler",
    "My neighbor's parrot",
    "A conspiracy of lemurs",
    "A ghost in the attic",
    "An army of garden gnomes",
    "A talking plant",
    "A moody AI",
    "A runaway balloon",
    "A mischievous wizard",
    "A gang of clowns",
    "A stubborn software bug",
    "A spell of forgetfulness",
    "A chocolate craving yeti",
    "A rogue vacuum cleaner",
    "An overzealous superhero"
  ];
  var action = [
    "swallowed",
    "abducted",
    "vaporized",
    "transformed",
    "teleported",
    "hijacked",
    "enchanted",
    "buried",
    "hypnotized",
    "jumbled",
    "entangled",
    "imploded",
    "cloned",
    "painted",
    "inflated",
    "short-circuited",
    "misplaced",
    "serenaded",
    "capsized",
    "startled"
  ];
  var what = [
    "my smartphone",
    "my passport",
    "my diary",
    "my laptop",
    "my car keys",
    "my wallet",
    "my sunglasses",
    "my favorite shirt",
    "my concert tickets",
    "my report card",
    "my science project",
    "my birthday cake",
    "my left shoe",
    "my pet frog",
    "my treasure map",
    "my comic book",
    "my puzzle piece",
    "my USB drive",
    "my gym bag",
    "my coffee mug"
  ];
  var when = [
    "just now",
    "last night",
    "this morning",
    "a minute ago",
    "right before I arrived",
    "during my coffee break",
    "while I was asleep",
    "on my way here",
    "the other day",
    "during lunch",
    "right after you called",
    "while I was showering",
    "moments before the meeting",
    "as soon as I stepped out",
    "right before breakfast",
    "when I last checked",
    "at the crack of dawn",
    "during the halftime show",
    "when the clock struck twelve",
    "as the sun was setting"
  ];

  // Generate random indices for each array
  var whoIndex = Math.floor(Math.random() * who.length);
  var actionIndex = Math.floor(Math.random() * action.length);
  var whatIndex = Math.floor(Math.random() * what.length);
  var whenIndex = Math.floor(Math.random() * when.length);

  // Combine the selected elements
  var excuse =
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex];

  // Set the innerHTML of the element with id 'excuse'
  document.querySelector("#excuse").innerHTML = excuse;
};
