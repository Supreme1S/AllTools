"use client";

import { useId, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { Search } from "lucide-react";
import { useTypewriterPlaceholder } from "@/hooks/useTypewriterPlaceholder";
import { cn } from "@/lib/utils";

export const SEARCH_DEMO_PHRASES = [
  "binance",
  "phantom",
  "bybit",
  "uniswap",
  "metamask",
  "bridge",
  "ChatGPT",
  "VPN",
  "DEX",
  "hosting",
] as const;

type SearchFieldProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: (value: string) => void;
  className?: string;
  ariaLabel?: string;
  phrases?: readonly string[];
};

export function SearchField({
  value,
  onChange,
  onSubmit,
  className,
  ariaLabel = "Поиск",
  phrases = SEARCH_DEMO_PHRASES,
}: SearchFieldProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);
  const typewriter = useTypewriterPlaceholder(phrases, !focused && !value);

  const expanded = focused || Boolean(value);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit?.(value.trim());
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit?.(value.trim());
    }
    if (e.key === "Escape") {
      inputRef.current?.blur();
    }
  }

  return (
    <form
      className={cn(
        "search-pill",
        expanded && "search-pill-expanded",
        value && "search-pill-has-value",
        className,
      )}
      onSubmit={handleSubmit}
      role="search"
    >
      <label htmlFor={inputId} className="sr-only">
        {ariaLabel}
      </label>

      <button
        type="button"
        className="search-pill-icon"
        aria-label="Фокус на поиске"
        tabIndex={-1}
        onClick={() => inputRef.current?.focus()}
      >
        <Search size={17} strokeWidth={2.25} aria-hidden />
      </button>

      <div className="search-pill-body">
        {!focused && !value && (
          <span className="search-pill-typewriter" aria-hidden>
            {typewriter}
            <span className="search-pill-caret" />
          </span>
        )}

        <input
          ref={inputRef}
          id={inputId}
          type="search"
          enterKeyHint="search"
          autoComplete="off"
          spellCheck={false}
          className="search-pill-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={handleKeyDown}
        />
      </div>

      {value && (
        <button
          type="button"
          className="search-pill-clear"
          aria-label="Очистить поиск"
          onClick={() => {
            onChange("");
            inputRef.current?.focus();
          }}
        >
          ×
        </button>
      )}
    </form>
  );
}
