/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from 'react';
import {AcmeLogo} from './logo';
import { APICall } from '../content/APICall';
import { WriteCode } from '../content/WriteCode';
import { CodeSelect } from '../content/CodeSelect';
import { GPTSet } from '../content/GPTSet';
import { CodeBox } from '../content/CodeBox';
import { OpenAIModel, TranslateBody } from '@/styles/types/types';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

const navigation = [
  { name: '', href: '#', current: true }  
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [inputLanguage, setInputLanguage] = useState<string>('Natural Language');
  const [outputLanguage, setOutputLanguage] = useState<string>('Python');
  const [inputCode, setInputCode] = useState<string>('');
  const [outputCode, setOutputCode] = useState<string>('');
  const [model, setModel] = useState<OpenAIModel>('gpt-3.5-turbo');
  const [loading, setLoading] = useState<boolean>(false);
  const [hasTranslated, setHasTranslated] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string>('');

  const handleTranslate = async () => {
    const maxCodeLength = model === 'gpt-3.5-turbo' ? 60000 : 120000;

    if (!apiKey) {
      alert('Please enter an API key.');
      return;
    }

    if (inputLanguage === outputLanguage) {
      alert('Select different languages');
      return;
    }

    if (!inputCode) {
      alert('Enter some code .');<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
      return;
    }

    if (inputCode.length > maxCodeLength) {
      alert(
        `Please enter code less than ${maxCodeLength} characters. You are currently at ${inputCode.length} characters.`,
      );
      return;
    }

    setLoading(true);
    setOutputCode('');

    const controller = new AbortController();

    const body: TranslateBody = {
      inputLanguage,
      outputLanguage,
      inputCode,
      model,
      apiKey,
    };

    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      setLoading(false);
      alert('Something went wrong.');
      return;
    }

    const data = response.body;

    if (!data) {
      setLoading(false);
      alert('Something went wrong.');
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;
    let code = '';

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);

      code += chunkValue;

      setOutputCode((prevCode) => prevCode + chunkValue);
    }

    setLoading(false);
    setHasTranslated(true);
    copyToClipboard(code);
  };

  const copyToClipboard = (text: string) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  const handleApiKeyChange = (value: string) => {
    setApiKey(value);

    localStorage.setItem('apiKey', value);
  };

  useEffect(() => {
    if (hasTranslated) {
      handleTranslate();
    }
  }, [outputLanguage]);

  useEffect(() => {
    const apiKey = localStorage.getItem('apiKey');

    if (apiKey) {
      setApiKey(apiKey);
    }
  }, []);

  return (
    <>
        <nav className="bg-white " style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999 }}>
          <div className="min-w-7xl mx-auto border-b border-gray-50 bg-white px-2 sm:px-6 lg:px-8">
            <div className="relative mx-0 flex h-16 items-center justify-between md:mx-20">
              <div className="flex-shrink-0 items-center ">
              <AcmeLogo />
              </div>

              <div className="hidden sm:flex items-center ml-auto pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0" >
                <div className="mr-6">
                <APICall apiKey={apiKey} onChange={handleApiKeyChange} />
                </div>
                <div className="mr-6">
                <GPTSet model={model} onChange={(value) => setModel(value)} />
                </div>
              </div>

              <div className="sm:hidden flex items-center">
                <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900 transition duration-150 ease-in-out"
                aria-label="Toggle menu"
                >
                  <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  >
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                  />
                  </svg>
                  <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  >
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                  />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className={`${ isOpen ? 'block' : 'hidden'} sm:hidden bg-white px-4 pt-2 pb-3`} >
            <div className="flex flex-col ml-auto relative inset-y-0 left-0 items-center ">
              <div className="mr-6">
                <APICall apiKey={apiKey} onChange={handleApiKeyChange} />
              </div>
              <div className="mr-6">
                <GPTSet model={model} onChange={(value) => setModel(value)} />
              </div>
            </div>
          </div>
        </nav>  

        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1 " />
        <link rel="icon" href="/pro.ico" />
       
        <div >
          <Flex css={{
          gap: '$3',
          px: '$6',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          '@sm': {
          flexDirection: 'row',
          mt: '$20',
          },
          marginTop: '$6', // add a margin between the input and output code blocks
          }}
          justify={'center'}
          >
          <Box
          css={{
          pt: '$13',
          display: 'flex',
          flexDirection: 'column',
          gap: '$5',
          }}
          >

            <div className=" my-12" style={{ position: "relative", marginTop:"8rem", bottom: 0}}>

              <h1 className="my-5 text-center text-5xl font-bold text-gray-800 md:text-4xl">
              Make Code Generation and Translation Simple
              </h1>
              <p className="text-base text-gray-500 md:text-2xl text-center">
              The Revolutionary Open Source Tool for Maximum Code Efficiency
              </p>           

            </div>
          </Box>          
          </Flex>           
          <div style={{ position: "relative", top:-50}}>

            <Flex justify={'center'} >
              <div className="mt-6 my-5 flex w-full max-w-[1600px] flex-col justify-between sm:flex-row sm:space-x-4" style={{position:"relative", bottom: -20}}>

                <div className="h-100 flex flex-col justify-center space-y-2 sm:w-2/4">
                  <div className="text-xl font-bold">Input</div>
                    <CodeSelect
                    language={inputLanguage}
                    onChange={(value) => {
                      setInputLanguage(value);
                      setHasTranslated(false);
                      setInputCode('');
                      setOutputCode('');
                    }}
                    />
                </div>
                <div className="h-100 flex flex-col justify-center space-y-2 sm:w-2/4">
                  <div className="text-xl font-bold">Output</div>
                    <CodeSelect
                    language={outputLanguage}
                    onChange={(value) => {
                    setOutputLanguage(value);
                    setOutputCode('');
                    }}
                    />
                </div>
                <div className="h-100 flex flex-col justify-center " style={{position:"relative", bottom:-17}}>
                  <button
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-lg px-10 py-2 text-center mr-2 mb-2"
                  onClick={() => handleTranslate()}
                  disabled={loading}
                  >
                  {loading ? 'Generating...' : 'Generate'}
                  </button>
                </div>
              </div>
            </Flex>
            <Flex justify={'center'} >
              <div className="mt-6 flex w-full max-w-[1600px] flex-col justify-between sm:flex-row sm:space-x-4">
                <div className="h-100 flex flex-col justify-center space-y-2 sm:w-3/4">
                  {inputLanguage === 'Natural  Language' ? (
                  <CodeBox
                  text={inputCode}
                  editable={!loading}
                  onChange={(value) => {
                  setInputCode(value);
                  setHasTranslated(false);
                  }}
                  />
                  ) : (
                  <WriteCode
                  code={inputCode}
                  editable={!loading}
                  onChange={(value) => {
                  setInputCode(value);
                  setHasTranslated(false);
                  }}
                  />
                  )}
                </div>

                <div className="mt-8 flex h-full flex-col justify-center space-y-2 sm:mt-0 sm:w-3/4"> 

                  {outputLanguage === 'Natural  Language' ? (
                  <CodeBox text={outputCode} />
                  ) : (
                  <WriteCode code={outputCode} />
                  )}
                </div>

              </div>
            </Flex>      

          </div>    
          <Flex  css={{
          gap: '$3',
          px: '$6',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          '@sm': {
          flexDirection: 'row',
          mt: '$20',
          },
          marginTop: '$6', // add a margin between the input and output code blocks
          }}
          justify={'center'}
          >
            <Box>
              <div className="mt-2 flex items-center space-x-2" style={{ position: "relative", paddingBottom: "100px"  }} >
              </div>
            </Box>
          </Flex>    
        </div>
     
          </>
  )
}
