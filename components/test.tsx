import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBold,
  faItalic,
  faUnderline,
  faStrikethrough,
  faPaintBrush,
  faFillDrip,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';
import { ColorPicker } from '@mantine/core';
import { useBlogEditing } from '../hooks/useBlogEditing';

function Test() {
  const [selectedText, setSelectedText] = useState<string>('');
  const [bgColor, setBgColor] = useState<string>('rgba(255, 255, 255, 0.7)');
  const [textToSave, setTextToSave] = useState<string>('');
  const [titleToSave, setTitleToSave] = useState<string>('');
  const [published, setPublished] = useState<boolean>(false);
  const [editingModeOn, setEditingModeOn] = useState<boolean>(false);
  const [prevTitle, setPrevTitle] = useState<string>('');
  const [prevText, setPrevText] = useState<string>('');
  const { startEditing, cancelEditing, onPublish } = useBlogEditing(
    published,
    setPublished,
    textToSave,
    setTextToSave,
    titleToSave,
    setTitleToSave,
    editingModeOn,
    setEditingModeOn,
    prevTitle,
    prevText,
    setPrevText,
    setPrevTitle
  );

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
  //   console.log('TITLE TO SAVE -----', titleToSave);
  // }, [titleToSave]);

  const handleChange = (e: React.ChangeEvent<any>) => {
    setTextToSave(e.target.value);
  };

  // const startEditing = () => {
  //   setPrevTitle(titleToSave);
  //   setPrevText(textToSave);
  //   setEditingModeOn(true);
  // };

  // const onPublish = () => {
  //   setTitleToSave(titleToSave);
  //   setPublished(true);
  //   setEditingModeOn(false);
  // };

  // const cancelEditing = () => {
  //   setTitleToSave(prevTitle);
  //   setTextToSave(prevText);
  //   setEditingModeOn(false);
  // };

  const saveChanges = () => {
    // this does not close editing mode but should save the state
    // and save it to local storage
  };

  return (
    <div>
      <span className="flex flex-col md:flex-row">
        <section className="h-screen rounded-md w-2/3">
          <form
            action="submit"
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col">
            <span className="w-full flex flex-col md:flex-row justify-start">
              {/* to do: transition colour */}
              {editingModeOn === true ? (
                <>
                  <button
                    className="text-xl mr-28 md:w-1/4 my-10 bg-indigo-200 p-2 font-pathwayExtreme font-semibold rounded-md hover:bg-indigo-300"
                    onClick={cancelEditing}>
                    Cancel editing
                  </button>
                  <button
                    className="text-xl mr-28 md:w-1/4 my-10 bg-indigo-200 p-2 font-pathwayExtreme font-semibold rounded-md hover:bg-indigo-300"
                    onClick={cancelEditing}>
                    Save changes
                  </button>
                  <button
                    onClick={onPublish}
                    className="text-xl md:w-1/4 my-10 bg-indigo-200 p-2 font-pathwayExtreme font-semibold rounded-md hover:bg-indigo-300">
                    Publish
                  </button>
                </>
              ) : (
                ''
              )}
            </span>

            {/* TO DO: max. character limit */}

            <span className="flex w-full items-baseline justify-between pr-10">
              {editingModeOn === true ? (
                <input
                  type="text"
                  onChange={(e) => setTitleToSave(e.target.value)}
                  placeholder={'Title of your blog post'}
                  defaultValue={titleToSave ? titleToSave : ''}
                  className="my-10 h-10 bg-indigo-100 font-semibold text-xl outline-0 border-2 border-indigo-400 rounded-md p-1"
                />
              ) : (
                <h2 className="font-semibold text-xl my-12">
                  {titleToSave ? titleToSave : 'My Blog title'}
                </h2>
              )}

              {/* EDIT BUTTON */}
              {editingModeOn === false ? (
                <button
                  className="ml-10 text-xl hover:underline"
                  onClick={startEditing}>
                  <FontAwesomeIcon icon={faPencil} className="mr-2" />
                  Edit
                </button>
              ) : (
                ''
              )}
            </span>

            {published === true && editingModeOn === false ? (
              <p>{textToSave}</p>
            ) : (
              <textarea
                value={textToSave}
                onChange={handleChange}
                className={`bg-${bgColor} w-full h-80 border-2 border-indigo-500 rounded-md outline-0 text-xl`}
              />
            )}
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
