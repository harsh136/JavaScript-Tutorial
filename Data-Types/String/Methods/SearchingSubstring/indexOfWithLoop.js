// if we want to find all the index where a string is appeared we can put indexOf in a loop

let str = "as good as new, as strong as ever";

let target = "as"; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log(`Found at ${foundPos}`);
  pos = foundPos + 1; // continue the search from the next position
}
