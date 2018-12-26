# `@rehooks/Clipboard`

> React hook for Clipboard.

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final. This also uses the [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard) which is also experimental; it is a relatively
> recent addition, and the process of implementing it in browsers is not yet complete.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add @rehooks/clipboard
```

## Usage

### Sample

```jsx
import useClipboard from "@rehooks/clipboard";

function MyComponent() {
  let { text, data, writeText, writeData } = useClipboard();
  return (
    <div>
      <h1>This is the content from your clipboard {text}</h1>;
    </div>
  );
}
```

### API

#### `text`

Requests text from the system clipboard; returns a Promise which is resolved with a DOMString containing the clipboard's text once it's available.

#### `data`

Requests arbitrary data (such as images) from the clipboard, returning a Promise. When the data has been retrieved, the promise is resolved with a DataTransfer object that provides the data.

#### `writeText()`

Writes text to the system clipboard, returning a Promise which is resolved once the text is fully copied into the clipboard.

#### `writeData`

Writes arbitrary data to the system clipboard. This asynchronous operation signals that it's finished by resolving the returned Promise.
