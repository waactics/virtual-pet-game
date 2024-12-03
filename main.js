// BASE PET STATS, range 1-5
const hunger = 5;
const energy = 5;
const happiness = 5;


// OUTPUT: INTRODUCE PET & CURRENT STATS


// INPUT: ASK A NAME FOR THE PET


// INPUT: PROMPT USER FOR ACTION
// feed, play, or rest
// if user enters "QUIT", terminate the program
// if user enters invalid input, request another input


// VERIFY STATS ARE AT MINIMUM REQUIREMENT
// if hunger is too low -> cannot rest
// if energy is too low -> cannot play
// if happiness is too low -> cannot feed


// OUTPUT: DISPLAY STAT RESULTS
// if stat reqs are fulfilled -> continue w calculations
  // feed -> decrease hunger, increase energy
  // play -> decrease energy, increase happiness
  // rest -> decrease happiness, increase hunger
// else -> block action and output another prompt


// DISPLAY CONSEQUENCES OF ACTION


// LOOP TO ASK FOR PROMPT AGAIN
  // if any base stats reach 0 or below, output print that pet is taken away bc you are a bad owner
  // if user enters "QUIT", terminate the program

