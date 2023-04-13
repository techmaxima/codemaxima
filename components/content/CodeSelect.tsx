import type { FC } from 'react';
import React from 'react';

interface Props {
  language: string;
  onChange: (language: string) => void;
}

export const CodeSelect: FC<Props> = ({ language, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };
  
  return (
    <select
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      value={language}
      onChange={handleChange}      
    >            
      {languages
      .map((language) => (
      <option key={language.value} value={language.value}>
      {language.label}
      </option>
      ))}
    </select>
  );
};

const languages = [
        { value: 'Natural Language', label: 'Natural Language' },
        { value: 'C', label: 'C'},
        { value: 'C++', label: 'C++' },
        { value: 'Assembly languages', label: 'Assembly languages' },
        { value: 'C#', label: 'C#' },
        { value: 'HTML', label: 'HTML' },
        { value: 'CSS', label: 'CSS' },
        { value: 'COBOL', label: 'COBOL' },
        { value: 'Fortran', label: 'Fortran' },
        { value: 'Go', label: 'Go' },
        { value: 'Groovy', label: 'Groovy' },
        { value: 'Java', label: 'Java' },
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'Kotlin', label: 'Kotlin' },
        { value: 'MATLAB', label: 'MATLAB' },
        { value: 'Perl', label: 'Perl' },
        { value: 'PHP', label: 'PHP' },
        { value: 'Pascal', label: 'Pascal' },
        { value: 'Python', label: 'Python' },
        { value: 'R', label: 'R' },
        { value: 'SQL', label: 'SQL' },
        { value: 'Swift', label: 'Swift' },
        { value: 'Swift', label: 'Swift' },
        { value: 'Visual Basic', label: 'Visual Basic' },
        { value: 'ABAP', label: 'ABAP' },
        { value: 'ActionScript', label: 'ActionScript' },
        { value: 'Ada', label: 'Ada' },
        { value: 'Alice', label: 'Alice' },
        { value: 'Apex', label: 'Apex' },
        { value: 'APL', label: 'APL' },
        { value: 'AWK', label: 'AWK' },
        { value: 'Ballerina', label: 'Ballerina' },
        { value: 'BCPL', label: 'BCPL' },
        { value: 'Blockly', label: 'Blockly' },
        { value: 'Clojure', label: 'Clojure' },
        { value: 'CoffeeScript', label: 'CoffeeScript' },
        { value: 'COQ', label: 'COQ' },
        { value: 'Crystal', label: 'Crystal' },
        { value: 'D', label: 'D' },
        { value: 'Dart', label: 'Dart' },
        { value: 'Delphi', label: 'Delphi' },
        { value: 'Eiffel', label: 'Eiffel' },
        { value: 'Elixir', label: 'Elixir' },
        { value: 'Elm', label: 'Elm' },
        { value: 'Erlang', label: 'Erlang' },
        { value: 'F#', label: 'F#' },
        { value: 'Fantom', label: 'Fantom' },
        { value: 'Forth', label: 'Forth' },
        { value: 'Hack', label: 'Hack' },
        { value: 'Haskell', label: 'Haskell' },
        { value: 'Haxe', label: 'Haxe' },
        { value: 'Icon', label: 'Icon' },
        { value: 'Io', label: 'Io' },
        { value: 'J', label: 'J' },
        { value: 'JCL', label: 'JCL' },
        { value: 'Julia', label: 'Julia' },
        { value: 'K', label: 'K' },
        { value: 'LabVIEW', label: 'LabVIEW' },
        { value: 'Limbo', label: 'Limbo' },
        { value: 'Lisp', label: 'Lisp' },
        { value: 'LiveCode', label: 'LiveCode' },
        { value: 'Logo', label: 'Logo' },
        { value: 'Lua', label: 'Lua' },
        { value: 'M4', label: 'M4' },
        { value: 'Maple', label: 'Maple' },
        { value: 'Mathematica', label: 'Mathematica' },
        { value: 'Mercury', label: 'Mercury' },
        { value: 'Nim', label: 'Nim' },
        { value: 'Objective-C', label: 'Objective-C' },
        { value: 'OCaml', label: 'OCaml' },
        { value: 'Oz', label: 'Oz' },
        { value: 'Pike', label: 'Pike' },
        { value: 'Pop11', label: 'Pop11' },
        { value: 'PostScript', label: 'PostScript' },
        { value: 'Processing', label: 'Processing' },
        { value: 'Prolog', label: 'Prolog' },
        { value: 'Pure Data', label: 'Pure Data' },
        { value: 'Racket', label: 'Racket' },
        { value: 'REBOL', label: 'REBOL' },
        { value: 'RPG', label: 'RPG' },
        { value: 'Ruby', label: 'Ruby' },
        { value: 'Rust', label: 'Rust' },
        { value: 'SAS', label: 'SAS' },
        { value: 'Scala', label: 'Scala' },
        { value: 'Scheme', label: 'Scheme' },
        { value: 'Scratch', label: 'Scratch' },
        { value: 'Seed7', label: 'Seed7' },
        { value: 'Self', label: 'Self' },
        { value: 'Shell scripting languages', label: 'Shell scripting languages' },
        { value: 'Shen', label: 'Shen' },
        { value: 'Smalltalk', label: 'Smalltalk' },
        { value: 'Snap!', label: 'Snap!' },
        { value: 'Spin', label: 'Spin' },
        { value: 'SuperCollider', label: 'SuperCollider' },
        { value: 'Swift', label: 'Swift' },
        { value: 'SystemVerilog', label: 'SystemVerilog' },
        { value: 'Tcl', label: 'Tcl' },
        { value: 'Tea', label: 'Tea' },
        { value: 'Turbo Pascal', label: 'Turbo Pascal' },
        { value: 'TypeScript', label: 'TypeScript' },
        { value: 'VBA', label: 'VBA' },
        { value: 'Verilog', label: 'Verilog' },
        { value: 'VHDL', label: 'VHDL' },
        { value: 'X10', label: 'X10' },
        { value: 'XC', label: 'XC' },
        { value: 'Yorick', label: 'Yorick' },
        { value: 'Zig', label: 'Zig' },
        { value: 'ZPL', label: 'ZPL' }
        ];
