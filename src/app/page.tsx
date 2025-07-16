import { ExternalLink } from "@/components/external-link";
import { SignatureForm } from "@/components/forms/signature";
import { SignatureResult } from "@/components/signature-result";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <main className="grid min-h-svh grid-cols-2">
      <div className="h-full">
        <div className="sticky top-0 mx-auto w-full max-w-3xl px-8 py-20">
          <h1 className="text-foreground flex items-center justify-start gap-4 text-2xl font-semibold">
            move Signatur Generator
            <Badge>v2.0.0</Badge>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-prose text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit odit, hic quod ad, voluptatem maiores laborum nisi
            mollitia deserunt officia cum reiciendis cupiditate qui praesentium
            quam! Iure perspiciatis quisquam ducimus?
          </p>
          <ExternalLink href={"#"} className="mt-8">
            Zur Anleitung
          </ExternalLink>
          <Separator className="mt-8" />
          <SignatureForm className="mt-12" />
          <p className="text-muted-foreground mt-20 text-xs">
            &copy; move - studentische Unternehmensberatung e.V.
          </p>
        </div>
      </div>
      <div className="border-border h-full border-l bg-slate-50">
        <div className="mx-auto w-full max-w-3xl px-8 py-20">
          <p className="text-xl font-semibold">Deine Signatur</p>
          <SignatureResult className="mt-8" />
        </div>
      </div>
    </main>
  );
}
