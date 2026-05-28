type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqItemProps) {
  return (
    <div className="border-t border-primary/15 py-5">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-foreground">
          {question}
        </span>
        <span
          className={`text-xl text-primary transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {isOpen && (
        <p className="mt-4 text-sm text-muted leading-relaxed max-w-2xl">
          {answer}
        </p>
      )}
    </div>
  );
}