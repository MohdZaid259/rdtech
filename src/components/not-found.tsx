import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

interface NotFoundPageProps {
  code: string;
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export default function NotFoundPage({
  code,
  title,
  description,
  buttonLabel = "Back to Home",
  buttonHref = "/",
}: NotFoundPageProps) {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-primary/5">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="p-10 max-w-lg text-center">
        <h1 className="text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-sm">
          {code}
        </h1>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-muted-foreground">
          {title}
        </h2>
        <p className="mt-4 text-muted-foreground">{description}</p>

        {/* Button */}
        {buttonHref && (
          <Link href={buttonHref} className="inline-block mt-8">
            <Button
              size="lg"
              className="rounded-full px-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              {buttonLabel}
            </Button>
          </Link>
        )}
      </div>
    </main>
  );
}
