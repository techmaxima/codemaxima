import { StreamLanguage } from '@codemirror/language';
import { go } from '@codemirror/legacy-modes/mode/go';
import CodeMirror from '@uiw/react-codemirror';
import { FC, useEffect, useState } from 'react';
import { abcdef, abcdefInit } from '@uiw/codemirror-theme-abcdef';


interface Props {
  code: string;
  editable?: boolean;
  onChange?: (value: string) => void;
}

export const WriteCode: FC<Props> = ({
  code,
  editable = false,
  onChange = () => {},
}) => 
{
  const [copyText, setCopyText] = useState<string>('Copy');
  const initialCode = Array(31).fill('\n').join('');

  useEffect(() => {
    const timeout = setTimeout(() => {
    setCopyText('Copy');
    }, 2000);

    return () => clearTimeout(timeout);
    }, [copyText]);

    const copyCode = () => {
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    setCopyText('Copied!');
  };

  return (
    <div className="relative">
      <button
      className="absolute right-0 top-0 z-10 rounded bg-[#1A1B26] p-1 text-xs text-white hover:bg-[#2D2E3A] active:bg-[#2D2E3A]"
      onClick={copyCode}
      >
      {copyText}
      </button>

      <CodeMirror      
      editable={editable}
      value={code || initialCode}        
      minHeight="600px"
      maxHeight="600px"
      maxWidth="800px"
      extensions={[StreamLanguage.define(go)]}
      theme={abcdef}
      onChange={(value) => onChange(value)}
      style={{ overflowWrap: 'break-word' }}
      />
    </div>
  );
};