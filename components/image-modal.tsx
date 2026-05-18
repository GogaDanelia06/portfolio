import Image from "next/image";
import { X } from "lucide-react";

type Props = {
  image: string | null;
  onClose: () => void;
};

export default function ImageModal({ image, onClose }: Props) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6">
      <button
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/10 p-3 text-white transition hover:bg-white/20"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="max-h-[95vh] max-w-7xl overflow-hidden rounded-3xl border border-white/10">
        <Image
          src={image}
          alt="Project screenshot preview"
          width={1800}
          height={1200}
          className="max-h-[95vh] w-auto object-contain"
        />
      </div>
    </div>
  );
}