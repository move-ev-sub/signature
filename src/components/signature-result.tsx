"use client";

import { cn } from "@/lib/utils";
import { TabsContent } from "@radix-ui/react-tabs";
import { CodeIcon, EyeIcon } from "lucide-react";
import { CopyButton } from "./copy-button";
import { DownloadButton } from "./download-button";
import { SignatureCode } from "./signature-code";
import { SignaturePreview } from "./signature-preview";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export function SignatureResult({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <Tabs defaultValue="preview" asChild>
      <div className={cn("w-full", className)} {...props}>
        <div className="mb-8 flex items-center justify-start gap-2.5">
          <TabsList>
            <TabsTrigger value="preview">
              <EyeIcon />
              Vorschau
            </TabsTrigger>
            <TabsTrigger value="code">
              <CodeIcon />
              Code
            </TabsTrigger>
          </TabsList>
          <CopyButton className="ml-auto" />
          <DownloadButton />
        </div>
        <TabsContent asChild value="preview">
          <Card>
            <CardContent>
              <SignaturePreview />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent asChild value="code">
          <SignatureCode />
        </TabsContent>
      </div>
    </Tabs>
  );
}
