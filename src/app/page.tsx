import { ExternalLink } from "@/components/external-link";
import { SignatureForm } from "@/components/forms/signature";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <main className="grid min-h-svh grid-cols-2">
      <div className="h-full">
        <div className="mx-auto w-full max-w-3xl px-8 py-20">
          <p className="text-foreground text-2xl font-semibold">
            move Signatur Generator
          </p>
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
        </div>
      </div>
    </main>
  );
}
