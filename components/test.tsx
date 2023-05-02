import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBold,
  faItalic,
  faUnderline,
  faStrikethrough,
  faPaintBrush,
  faFillDrip,
} from '@fortawesome/free-solid-svg-icons';
import { ColorPicker } from '@mantine/core';

function Test() {
  const [selectedText, setSelectedText] = useState<string>('');
  const [bgColor, setBgColor] = useState<string>('rgba(255, 255, 255, 0.7)');

  useEffect(() => {
    const onSelect = () => {
      if (typeof window !== 'undefined') {
        //@ts-ignore
        setSelectedText(() => window.getSelection().toString());
      }
    };

    window.addEventListener('select', onSelect);
  }, []);

  // useEffect(() => {
  //   //@ts-ignore
  //   console.log('===SELECTED TEXT ==== ', selectedText);
  // }, [selectedText]);

  return (
    <div>
      <span className="flex flex-col md:flex-row">
        <section className="h-screen rounded-md w-2/3">
          <form action="submit" className="flex flex-col">
            <span className="w-full flex flex-col md:flex-row justify-start">
              {' '}
              {/* to do: transition colour */}
              <button className="text-xl mr-28 md:w-1/4 my-10 bg-indigo-200 p-2 font-pathwayExtreme font-semibold rounded-md hover:bg-indigo-300">
                Save changes
              </button>
              <button className="text-xl md:w-1/4 my-10 bg-indigo-200 p-2 font-pathwayExtreme font-semibold rounded-md hover:bg-indigo-300">
                Publish
              </button>
            </span>

            {/* TO DO: max. character limit */}
            <input
              type="text"
              placeholder="Title"
              defaultValue={'My first post on Bloggo'}
              className="my-10 h-10 bg-indigo-100 font-semibold text-xl outline-0"
            />
            <textarea
              className={`bg-${bgColor} w-full h-80 border-2 border-indigo-500 rounded-md outline-0 text-xl`}
            />
          </form>
        </section>
        {/* DASHBOARD WITH COLOUR, FONTS, STYLES ETC */}
        <section className="w-1/3 pl-14">
          <h2 className="font-semibold font-pathwayExtreme text-xl">
            Customise text
          </h2>
          <span className="flex w-full justify-between mt-10">
            {' '}
            <button className="hover:shadow-md shadow-lg shadow-indigo-400 rounded-md p-2">
              <FontAwesomeIcon icon={faBold} />
            </button>
            <button className="hover:shadow-md shadow-lg shadow-indigo-400 rounded-md p-2">
              <FontAwesomeIcon icon={faItalic} />
            </button>
            <button className="hover:shadow-md shadow-lg shadow-indigo-400 rounded-md p-2">
              <FontAwesomeIcon icon={faUnderline} />
            </button>
            <button className="hover:shadow-md shadow-lg shadow-indigo-400 rounded-md p-2">
              <FontAwesomeIcon icon={faStrikethrough} />
            </button>
            <button className="hover:shadow-md shadow-lg shadow-indigo-400 rounded-md p-2">
              <FontAwesomeIcon icon={faPaintBrush} />
            </button>
          </span>
          <h2 className="font-semibold font-pathwayExtreme text-xl mt-20 mb-10">
            Customise background
          </h2>
          {/* <button className="hover:shadow-md shadow-lg shadow-indigo-400 rounded-md p-2">
              <FontAwesomeIcon icon={faFillDrip} />
            </button> */}
          {
            <ColorPicker
              format="hex"
              value={bgColor}
              onChange={(e) => setBgColor(e)}
              swatches={[
                '#25262b',
                '#868e96',
                '#fa5252',
                '#e64980',
                '#be4bdb',
                '#7950f2',
                '#4c6ef5',
                '#228be6',
                '#15aabf',
                '#12b886',
                '#40c057',
                '#82c91e',
                '#fab005',
                '#fd7e14',
              ]}
            />
          }
        </section>
      </span>
    </div>
  );
}

export default Test;
