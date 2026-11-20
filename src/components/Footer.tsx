import { profile } from "@/data/profile";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted-foreground">
        <p>
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
