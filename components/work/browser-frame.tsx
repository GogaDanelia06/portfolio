import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  address: string;
  priority?: boolean;
  sizes?: string;
};

/** Screenshot inside a minimal browser window. */
export default function BrowserFrame({
  src,
  alt,
  address,
  priority = false,
  sizes = "(min-width: 1024px) 55vw, 100vw",
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d17] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 flex-1 truncate rounded-md bg-white/[0.06] px-3 py-1 text-center font-mono text-[11px] text-slate-400">
          {address}
        </span>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}
