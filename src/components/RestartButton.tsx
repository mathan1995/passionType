import { useRef } from "react";
import { MdRefresh } from "react-icons/md";

const RestartButton = ({
  onRestart: handleRestart,
  className = "",
}: {
  onRestart: () => void;
  className?: string;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    buttonRef.current?.blur();
    handleRestart();
  };

  return (
    <button
      tabIndex={-1} // to prevent focus
      ref={buttonRef}
      className={`inline-block align-middle rounded px-8 py-2 hover:bg-slate-700/50   ${className}`}
      onClick={handleClick}
    >
      <MdRefresh className="w-12 h-12 rounded-xl text-yellow-300" />
    </button>
  );
};

export default RestartButton;
