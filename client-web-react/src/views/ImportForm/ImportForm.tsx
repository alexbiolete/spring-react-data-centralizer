import { FC, useEffect, useState } from 'react';
import './ImportForm.scss';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

const ImportForm: FC<any> = ({ importFile }) => {
  const [file, setFile] = useState<any>();
  const [selectedFileFlag, setSelectedFileFlag] = useState<boolean>(false);

  useEffect(() => {
    file ? setSelectedFileFlag(true) : setSelectedFileFlag(false);
    console.log(selectedFileFlag);
  }, [file]);

  const inputOnChange = (event: HTMLInputEvent) => {
    if (
      event !== null &&
      event.target !== null &&
      event.target.files !== null
    ) {
      let files: any = event.target.files[0];
      if (files) {
        setFile(files);
      }
    }
  };

  return (
    <form
      onSubmit={(e) => {
        importFile(e, file);
      }}
    >
      <div className="bg-white px-8 py-6 md:rounded-2xl shadow-sm flex flex-col items-center space-y-6">
        <div className="relative bg-gray-200 hover:bg-gray-100 pl-4 pr-8 py-1 rounded-full transition ease-in-out duration-300 cursor-pointer">
          <div className="relative bg-transparent overflow-hidden">
            <input
              onChange={(event: any) => {
                inputOnChange(event);
              }}
              type="file"
              multiple={false}
              className="input-file font-medium tracking-wider cursor-pointer"
            />
          </div>
          <div className="absolute top-2 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onSubmit={(e) => {
              importFile(e, file);
            }}
            className={`border-2 px-4 py-2 rounded-full transition ease-in-out duration-150 font-medium tracking-wider ${selectedFileFlag ? 'bg-green-700 border-green-700 text-white cursor-pointer' : 'bg-transparent border-gray-700 text-gray-700 cursor-not-allowed' } select-none`}
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ImportForm;
