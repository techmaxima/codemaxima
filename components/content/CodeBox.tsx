import { Textarea } from "@nextui-org/react";

interface Props {
  text: string;
  editable?: boolean;
  onChange?: (value: string) => void;
}

export const CodeBox: React.FC<Props> = ({
  text,
  editable = false,
  onChange = () => {},
}) => {
  return (
    <Textarea
      className="min-h-[500px] w-full bg-[#ffffff] p-4 text-[20px] text-neutral-200 focus:outline-none"
      style={{ resize: 'none',overflowWrap: 'break-word'  }}
      value={text}    
      onChange={(e) => onChange(e.target.value)}
      disabled={!editable}
  />
  );
};