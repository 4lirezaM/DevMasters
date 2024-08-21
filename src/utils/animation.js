// type animation
export function typingAnimation(text, startIndex, element, timeoutIdRef) {
  if (startIndex < text.length) {
    element.innerHTML += text[startIndex];
    startIndex++;
    timeoutIdRef.current = setTimeout(() => {
      typingAnimation(text, startIndex, element, timeoutIdRef);
    }, 100);
  }
}

export function countingAnimation(endIndex, element) {
  for (let i = 0; i < endIndex + 1; i++) {
    element.innerHTML = i;
  }
}
