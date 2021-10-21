function encodeAndDecodeMessages() {
  const [encodeBnt, decodeBnt] = Array.from(
    document.querySelectorAll("button")
  );
  const [input, output] = Array.from(document.querySelectorAll("textarea"));
  encodeBnt.addEventListener("click", toEncode);
  decodeBnt.addEventListener("click", toDecode);

  let encodedSentence = "";
  let decodedSentence = "";

  function toEncode(ev) {
    encodedSentence = "";
    for (i = 0; i < input.value.length; i++) {
      encodedSentence += String.fromCharCode(input.value.charCodeAt(i) + 1);
    }
    output.value = encodedSentence;
    input.value = "";
  }

  function toDecode(ev) {
    for (i = 0; i < encodedSentence.length; i++) {
      decodedSentence += String.fromCharCode(encodedSentence.charCodeAt(i) - 1);
    }
    output.value = decodedSentence;
  }
}
