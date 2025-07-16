import { createSignature } from "@/lib/signature";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { CodeBlock } from "./code-block";
import { useSignatureStore } from "./stores/signature-provider";
import { Card, CardContent } from "./ui/card";

export function SignatureCode({
  className,
  ...props
}: React.ComponentProps<typeof Card>) {
  const [code, setCode] = useState<string | null>(null);

  const store = useSignatureStore((store) => store);

  React.useEffect(() => {
    const generated = createSignature({ ...store });

    setCode(generated);
  }, []);

  if (!code) return null;

  return (
    <Card className={cn(className)} {...props}>
      <CardContent className="max-w-full overflow-auto text-sm">
        <CodeBlock code={code} />
      </CardContent>
    </Card>
  );
}
