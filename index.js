"use strict";
const clipboardPolyfill = require("clipboard-polyfill");
const { useState, useEffect } = require("react");

// ~
// Utils
// ~
const noop = () => {};

const clipboard = navigator.clipboard ? navigator.clipboard : clipboardPolyfill;

const readText = () => clipboard.readText();

const read = () =>
  clipboard.read ? clipboard.read() : clipboardPolyfill.read();

const writeText = text => clipboard.writeText(text);

const writeData = data => clipboard.writeData(data);

// ~
// Hook
// ~
function useClipboard(onError) {
  const [readClipboard, setClipboard] = useState({
    text: null,
    data: null
  });

  useEffect(
    () => {
      const onChange = () => {
        read()
          .then(clipboardData =>
            setClipboard({ ...readClipboard, data: clipboardData })
          )
          .catch(onError ? onError : noop);
        readText()
          .then(clipboardText =>
            setClipboard({ ...readClipboard, text: clipboardText })
          )
          .catch(onError ? onError : noop);
      };

      window.addEventListener("copy", onChange);
      onChange();

      return () => {
        window.removeEventListener("copy", onChange);
      };
    },
    [0]
  );

  return {
    text: readClipboard.text,
    data: readClipboard.data,
    writeText,
    writeData
  };
}

module.exports = useClipboard;
