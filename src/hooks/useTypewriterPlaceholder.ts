"use client";

import { useEffect, useState } from "react";

const TYPE_SPEED = 68;
const DELETE_SPEED = 32;
const PAUSE_AFTER_TYPE = 3200;
const PAUSE_AFTER_DELETE = 700;

export function useTypewriterPlaceholder(
  phrases: readonly string[],
  active: boolean,
) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (!active || phrases.length === 0) {
      setText("");
      return;
    }

    let phraseIdx = 0;
    let timeout: ReturnType<typeof setTimeout>;

    function typePhrase(phrase: string, idx: number) {
      if (idx < phrase.length) {
        setText(phrase.slice(0, idx + 1));
        timeout = setTimeout(() => typePhrase(phrase, idx + 1), TYPE_SPEED);
      } else {
        timeout = setTimeout(
          () => deletePhrase(phrase, phrase.length),
          PAUSE_AFTER_TYPE,
        );
      }
    }

    function deletePhrase(phrase: string, idx: number) {
      if (idx > 0) {
        setText(phrase.slice(0, idx - 1));
        timeout = setTimeout(() => deletePhrase(phrase, idx - 1), DELETE_SPEED);
      } else {
        phraseIdx = (phraseIdx + 1) % phrases.length;
        timeout = setTimeout(
          () => typePhrase(phrases[phraseIdx], 0),
          PAUSE_AFTER_DELETE,
        );
      }
    }

    timeout = setTimeout(() => typePhrase(phrases[0], 0), 500);

    return () => clearTimeout(timeout);
  }, [active, phrases]);

  return text;
}
