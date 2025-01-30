import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.svg";

export default function HomePage() {
  return (
    <main className="container mx-auto flex flex-1 flex-col justify-center text-center">
      <div className="flex items-center justify-center">
        <Image
          src={Logo}
          alt="Create Express Appp Logo"
          width={100}
          height={100}
        />
      </div>
      <h1 className="my-4 text-2xl font-bold">Create Express App</h1>
      <p className="text-fd-muted-foreground mb-4">
        Project Under Development. Stay Tuned!
      </p>
      <p className="text-fd-muted-foreground">
        You can open{" "}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{" "}
        and see the documentation.
      </p>
    </main>
  );
}
