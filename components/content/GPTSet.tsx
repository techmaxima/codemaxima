import { OpenAIModel } from '@/styles/types/types';
import { FC } from 'react';

interface Props {
  model: OpenAIModel;
  onChange: (model: OpenAIModel) => void;
}

export const GPTSet: FC<Props> = ({ model, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as OpenAIModel);
  };

  return (    
    <div className="relative inline-block w-64">
      <select className="form-select block w-ful text-white bg-gradient-to-r ml-10 mr-10 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-1  py-3 px-7 pr-9 leading-tight focus:outline-none focus:bg-blue focus:border-blue-300 border-blue-200 border-4 rounded-full bg-blue-400">
      <option value="gpt-3.5-turbo" className="bg-white text-blue-800 font-bold " >GPT-3.5</option>
      <option value="gpt-4" className="bg-white text-blue-800 font-bold">GPT-4</option>
      </select>
    </div>   
  );
};
