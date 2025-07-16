"use client";

import { createSignature } from "@/lib/signature";
import { CopyIcon } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import { useSignatureStore } from "./stores/signature-provider";
import { Button } from "./ui/button";

export function CopyButton({ ...props }: React.ComponentProps<typeof Button>) {
  const { name, position, username, phone } = useSignatureStore(
    (store) => store,
  );

  const handleCopy = React.useCallback(async () => {
    const code = createSignature({ name, position, username, phone });

    await navigator.clipboard.writeText(code);

    toast("Signatur wurde als HTML kopiert");
  }, [name, position, username, phone]);

  return (
    <Button variant={"outline"} {...props} onClick={handleCopy}>
      <CopyIcon />
      Kopieren
    </Button>
  );
}
