export const shortenText = text => {
    if (text.trim().length >= 100 && text.length !== 100) {
      return `${text.substr(0,1000).trim()}...`
    }
    return text
  };
  