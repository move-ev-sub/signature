import { CopyIcon } from "lucide-react";
import React from "react";
import { useSignatureStore } from "./stores/signature-provider";
import { Button } from "./ui/button";

export function CopyButton({ ...props }: React.ComponentProps<typeof Button>) {
  const { name, position, username, phone } = useSignatureStore(
    (store) => store,
  );

  const handleCopy = React.useCallback(() => {}, [
    name,
    position,
    username,
    phone,
  ]);

  return (
    <Button {...props} onClick={handleCopy}>
      <CopyIcon />
      Kopieren
    </Button>
  );
}
