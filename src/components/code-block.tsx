"use client";
import { highlight } from "@/lib/utils";
import { useLayoutEffect, useState } from "react";

export function CodeBlock({ code }: { code: string }) {
  const initial = <p>Loading...</p>;

  const [nodes, setNodes] = useState(initial);

  useLayoutEffect(() => {
    void highlight(code, "html").then(setNodes);
  }, [code]);

  return nodes ?? initial;
}
