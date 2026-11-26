
import React from "react";
import { ArrowRight } from "lucide-react";

export type ReusableCardProps = {
  tag: string;
  title: string;
  description: string;
  image: string;
  onReadMore: () => void;
  fallbackImage?: string;
};

const ReusableCard: React.FC<ReusableCardProps> = ({
  tag,
  title,
  description,
  image,
  onReadMore,
  fallbackImage = "/images/default.jpg",
}) => {
  const [imageSrc, setImageSrc] = React.useState(image);

  return (
    <article className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-2xl border border-[#6A6868]/20 bg-white shadow-[0_8px_24px_-14px_rgba(6,41,77,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#015399] hover:shadow-[0_20px_40px_-18px_rgba(6,41,77,0.35)] sm:min-h-[380px] lg:min-h-[420px]">

      <div className="relative h-44 shrink-0 overflow-hidden bg-[#06294D] lg:h-52">
        <img
          src={imageSrc}
          alt={`${tag} department`}
          loading="lazy"
          onError={() => setImageSrc(fallbackImage)}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#06294D]/70 via-[#06294D]/10 to-transparent" />

        <span className="absolute bottom-3 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#015399] shadow-sm">
          {tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-heading text-xl font-semibold leading-snug text-[#06294D] sm:text-[22px]">
          {title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#6A6868] sm:text-[15px]">
          {description}
        </p>

        <button
          type="button"
          onClick={onReadMore}
          aria-label={`Read more about ${tag}`}
          className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-[#015399] outline-none after:absolute after:inset-0 after:content-[''] sm:text-base"
        >
          Read more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#015399] transition-all duration-500 ease-out group-hover:w-full" />
    </article>
  );
};

export default ReusableCard;
