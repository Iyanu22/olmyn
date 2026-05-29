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
        <span className="text-lg font-medium text-foreground">
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
        <p className="mt-4 text-base text-muted leading-relaxed max-w-2xl">
          {answer}
        </p>
      )}
    </div>
  );
}