import Link from "next/link";
import { NessoDigitalLogo } from "../icons/nesso-digital-logo";
import GooglePlusIcon from "../icons/google-plus-icon";
import FacebookIcon from "../icons/facbook-icon";
import TwitterIcon from "../icons/twitter-icon.";
import InstagramIcon from "../icons/instagram-icon";

export default function FooterContent() {
  return (
    <div className="p-4 md:px-12 md:py-[52px] border-t border-slate/30 flex flex-col md:flex-row gap-[100px]">
      <div className="md:w-2/5">
        <NessoDigitalLogo />
        <div className="mt-2.5 text-lg leading-6 text-slate/70">
          Costruiamo soluzioni digitali che semplificano il lavoro, un progetto
          alla volta.
        </div>
        <div className="mt-7 flex items-center gap-6 ">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://plus.google.com"
            className="text-slate/40 hover:text-slate"
          >
            <GooglePlusIcon />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://facebook.com"
            className="text-slate/40 hover:text-slate"
          >
            <FacebookIcon />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com"
            className="text-slate/40 hover:text-slate"
          >
            <TwitterIcon />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com"
            className="text-slate/40 hover:text-slate"
          >
            <InstagramIcon />
          </Link>
        </div>
      </div>
      <div className="md:w-3/5 grid grid-cols-2">
        <div>COL 2</div>
        <div>COL 3</div>
      </div>
    </div>
  );
}
