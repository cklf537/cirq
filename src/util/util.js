export const ConvertToSentanceCase = (dtStr) => {
  let firstChar = dtStr.slice(0, 1 - dtStr.length).toUpperCase();
  let remainingString = dtStr.slice(1, dtStr.length);
  return firstChar.concat(remainingString);
};

export const getUniqueTags = (tags) => {
  let typeTags = [];
  tags.forEach((tag) => typeTags.push(tag.type));
  return [...new Set(typeTags)];
};
