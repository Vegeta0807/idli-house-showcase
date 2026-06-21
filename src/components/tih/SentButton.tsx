import { useRef, useState } from "react";

interface SentButtonProps {
  label: string;
}

/** Form submit button that briefly flips to "Sent ✓" on click (demo behavior). */
const SentButton = ({ label }: SentButtonProps) => {
  const [sent, setSent] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const handleClick = () => {
    setSent(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setSent(false), 2500);
  };

  return (
    <button className="fsub" type="button" onClick={handleClick}>
      {sent ? "Sent ✓" : label}
    </button>
  );
};

export default SentButton;
