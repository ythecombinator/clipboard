import {read, readText, write, writeText} from 'clipboard-polyfill';
import {PromiseType} from 'utility-types';

interface Clipboard {
  text: PromiseType<ReturnType<typeof readText>>;
  data: PromiseType<ReturnType<typeof read>>;
  writeText: typeof writeText;
  writeData: typeof write;
}

export default function useClipboard(): Clipboard;
