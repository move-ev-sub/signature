import { clsx, type ClassValue } from "clsx";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import type { JSX } from "react";
import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { BundledLanguage } from "shiki/bundle/web";
import { codeToHast } from "shiki/bundle/web";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function highlight(code: string, lang: BundledLanguage) {
  const out = await codeToHast(code, {
    lang,
    theme: "github-light",
  });

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
  }) as JSX.Element;
}
