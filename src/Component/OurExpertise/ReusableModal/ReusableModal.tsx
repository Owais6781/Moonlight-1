
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import React, { useEffect } from "react";

type ReusableModalProps = {
  isOpen: boolean;
  onClose: () => void;
  tag: string;
  title: string;
  description: string;
  image?: string;
  fallbackImage?: string;
};

const ReusableModal: React.FC<ReusableModalProps> = ({
  isOpen,
  onClose,
  tag,
  title,
  description,
  image,
  fallbackImage = "/images/default.jpg",
}) => {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement>
  ) => {
    const img = e.currentTarget;

    if (img.src !== new URL(fallbackImage, window.location.href).href) {
      img.src = fallbackImage;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#06294D]/60 px-3 backdrop-blur-sm sm:px-4"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="reusable-modal-title"
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl sm:rounded-3xl sm:p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#06294D] shadow transition-colors hover:bg-[#015399] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015399] sm:right-4 sm:top-4"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            {image && (
              <div className="mb-5 h-44 overflow-hidden rounded-2xl bg-[#06294D] sm:mb-6 sm:h-52 md:h-56">
                <img
                  src={image}
                  alt={`${tag}`}
                  onError={handleImageError}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <span className="text-sm font-semibold text-[#015399]">
              {tag}
            </span>

            <h3
              id="reusable-modal-title"
              className="mt-2 font-heading text-2xl font-semibold leading-snug text-[#06294D] sm:text-3xl"
            >
              {title}
            </h3>

            <div className="mt-4 h-[3px] w-12 rounded-full bg-[#015399]" />

            <p className="mt-4 text-sm leading-relaxed text-[#6A6868] sm:text-base">
              {description}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReusableModal;
