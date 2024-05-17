function truncateMiddle(str, frontChars = 5, backChars = 5) {
  if (str.length <= frontChars + backChars) {
    return str;
  }
  const frontStr = str.substring(0, frontChars);
  const backStr = str.substring(str.length - backChars);
  return `${frontStr}...${backStr}`;
}

const s = "Lorem ipsum dolor sit amet";
const truncatedString = truncateMiddle(s);
console.log(truncatedString); // Output: "Lorem...amet"
