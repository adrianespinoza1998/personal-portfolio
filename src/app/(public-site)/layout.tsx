import Link from "next/link";

export default function PublicSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex justify-between p-8">
        <p>Web Development</p>
        <Link href="/contact">Contact</Link>
        <Link href="/projects">Projects</Link>
      </nav>
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
