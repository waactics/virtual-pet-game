// RANDMOMIZE BASE PET STATS
function getRandomStat() {
  return Math.floor(Math.random() * 5) + 1;
}

let pet = {
  hunger: getRandomStat(),
  energy: getRandomStat(),
  happiness: getRandomStat()
};

console.log(pet);


// RANDOMIZE END GOAL
// if hunger -> feed until stat reaches 5
// if energy -> sleep until stat reaches 5
// if happiness -> play until stat reaches 5


// INPUT: ASK A NAME FOR THE PET


// OUTPUT: INTRODUCE PET, CURRENT STATS, AND END GOAL


// LOOP BEGINS HERE//

// INPUT: PROMPT USER FOR ACTION
// feed, play, or sleep
// if user enters "QUIT", terminate loop
// if user enters invalid input, request another input

// VERIFY STATS ARE AT MINIMUM REQUIREMENT
// if hunger is too low -> cannot sleep
// if energy is too low -> cannot play
// if happiness is too low -> cannot eat

// OUTPUT: DISPLAY STAT RESULTS
// if stat reqs are fulfilled -> continue w calculations
  // feed -> decrease hunger, increase energy
  // play -> decrease energy, increase happiness
  // rest -> decrease happiness, increase hunger
// else -> block action and output another prompt

// DISPLAY CONSEQUENCES OF ACTION
  // if any base stats reach 0 or below, output print that pet is taken away bc you are a bad owner
  // if user enters "QUIT", terminate the program
  // if base stats are fine AND they type anything other than "QUIT", continue with loop

// LOOP ENDS HERE //


// DISPLAY "TY FOR PLAYING" MESSAGE 

