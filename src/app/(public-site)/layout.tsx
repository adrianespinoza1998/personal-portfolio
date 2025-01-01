import { ButtonWithLink } from "@/components";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function PublicSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex justify-between p-8">
        <Link href="/">
          <FaHome size={24} />
        </Link>
        <p className="text-xl">Web Development</p>
        <div className="flex gap-4">
          <ButtonWithLink href="/contact" text="Contact" variant="outlined" />
          <ButtonWithLink
            href="/projects"
            text="Projects"
            color="purple"
            variant="outlined"
          />
          <ButtonWithLink
            href="/about"
            text="About"
            color="sky"
            variant="outlined"
          />
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
