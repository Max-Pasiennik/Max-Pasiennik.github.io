const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = "It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day."
const insertX = ["Looney tooney", "Flo Willy", "Tankity Tank"];
const insertY = ["Puerto Vallerta", "the dog hotel", "Grandview"];
const insertZ = ["rolled in the dirt", "doordashed Birdcall", "made a TikTok with Charlie Demilio"];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
let newStory = storyText;

let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

newStory = newStory.replace(":insertX:", xItem);
newStory = newStory.replace(":insertY:", yItem);
newStory = newStory.replace(":insertZ:", zItem);
newStory = newStory.replace(":insertX:", xItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300/14);
    weight = weight + "stone";
    let temperature =  Math.round(94-32)*(5/9);
    temperature = temperature + "centigrade";
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 fahrenheit", temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}