import { cn } from "@/lib/utils";
import { CodeIcon, EyeIcon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export function SignatureResult({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <Tabs asChild>
      <div className={cn("w-full", className)} {...props}>
        <div className="flex items-center justify-start">
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
        </div>
      </div>
    </Tabs>
  );
}
