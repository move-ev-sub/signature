"use client";

import { createSignature } from "@/lib/signature";
import { DownloadIcon } from "lucide-react";
import React from "react";
import { useSignatureStore } from "./stores/signature-provider";
import { Button } from "./ui/button";

export function DownloadButton({
  ...props
}: React.ComponentProps<typeof Button>) {
  const { name, position, username, phone } = useSignatureStore(
    (store) => store,
  );

  const handleDownload = React.useCallback(() => {
    const code = createSignature({ name, position, username, phone });

    const blob = new Blob([code], { type: "text/html" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "signature.html";
    a.click();

    URL.revokeObjectURL(url);
  }, [name, position, username, phone]);

  return (
    <Button {...props} onClick={handleDownload}>
      <DownloadIcon />
      Herunterladen
    </Button>
  );
}
