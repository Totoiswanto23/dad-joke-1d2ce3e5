// Dad Joke Showdown — one dad joke, written to /output/entry.txt.
// The joke is the whole entry: at most 200 characters, told out loud.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I asked my Wi-Fi why it went to therapy. It said it had trouble connecting with others.";

// The gate only accepts 1 to 200 characters of UTF-8 text, so check first.
if (joke.length < 1 || joke.length > 200) {
  throw new Error(`joke must be 1-200 characters, got ${joke.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke + "\n", "utf8");
console.log(joke);
