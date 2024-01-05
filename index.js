const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Creating random values 

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Making array
const insertX = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas']

const inserty = [    
    'the soup kitchen',
    'Disneyland',
    'the White House']
 
const insertz = [    
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away'
    ]

    // Generating Story

function generateStory() {
  // Taking Random values
  const randonX = randomValueFromArray(insertX);
  const randony = randomValueFromArray(inserty);
  const randonz = randomValueFromArray(insertz);

  // Replacing the word with randoom word where needed.

  let generatedStory = `It was 94 fahrenheit outside, so ${randonX} went for a walk. When they got to ${randony}, they stared in horror for a few moments, then ${randonz}. Bob saw the whole thing, but was not surprised — ${randonX} weighs 300 pounds, and it was a hot day.`;

  if (customName.value !== '') {
    const name = customName.value;
    generatedStory = generatedStory.replace("Bob", name);
  }

  if (document.getElementById("uk").checked) {

    // Maths
    const weight = Math.round(300 / 14);
    const temperature = Math.round(5 * (94 - 32) / 9);

    // Replacing all the things that are necessary

    generatedStory = generatedStory.replace("94", temperature);
    generatedStory = generatedStory.replace("fahrenheit", "centigrade");
    generatedStory = generatedStory.replace("300", weight);
    generatedStory = generatedStory.replace("pounds", "stone");
  }
   else if (document.getElementById('us').checked) {
    const weight = Math.round(300);
    const temperature = Math.round(300);
    generatedStory = generatedStory.replace(temperature, "94");
    generatedStory = generatedStory.replace("centigrade", "fahrenheit");
    generatedStory = generatedStory.replace(weight, "300");
    generatedStory = generatedStory.replace("stone", "pounds");
  }

  return generatedStory;
}

randomize.addEventListener("click", result);

function result() {
  // Calling generateStory function once the button is pressed. 
  const generatedStory = generateStory();

  customName.value = '';
  story.textContent = generatedStory;
  story.style.visibility = 'visible';
}
