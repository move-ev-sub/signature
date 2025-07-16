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

  const handleDownload = React.useCallback(() => {}, [
    name,
    position,
    username,
    phone,
  ]);

  return (
    <Button {...props} onClick={handleDownload}>
      <DownloadIcon />
      Herunterladen
    </Button>
  );
}
