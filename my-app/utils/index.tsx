export const handleRandom = ({ headlines }: { headlines: string[] }) => {
  if (!headlines || headlines.length === 0) {
    console.log("No headlines available");
    return;
  }
  const random = Math.floor(Math.random() * headlines.length);
  const randomHeadline = headlines[random];
  //setRandomHeadline(randomHeadline);
  return randomHeadline;
};
