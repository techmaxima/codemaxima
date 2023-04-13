import { Input } from "@nextui-org/react";

interface Props 
{
  apiKey: string;
  onChange: (apiKey: string) => void;
}

export const APICall: React.FC<Props> = ({ apiKey, onChange }) => {
  return (
    <Input
      rounded
      bordered              
      color="primary"
      clearable    
      className=" ml-10 mr-2"
      size="lg"
      type="password"
      placeholder="Enter API Key"
      value={apiKey}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
