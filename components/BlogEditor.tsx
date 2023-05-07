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
import EditingDashboard from './editing/EditingDashboard';

// code from: https://dev.to/eons/detect-page-refresh-tab-close-and-route-change-with-react-router-v5-3pd
window.onbeforeunload = (event) => {
  const e = event || window.event;
  // Cancel the event
  e.preventDefault();
  if (e) {
    e.returnValue = ''; // Legacy method for cross browser support
  }
  return ''; // Legacy method for cross browser support
};

function BlogEditor() {
  const localStorageText: any = localStorage.getItem('CURRENT-TEXT');
  const localStorageTitle: any = localStorage.getItem('CURRENT-TITLE');
  const [selectedText, setSelectedText] = useState<string>('');
  const [bgColor, setBgColor] = useState<string>('#7950f2');
  const [textToSave, setTextToSave] = useState<string>(
    JSON.parse(localStorageText) || ''
  );
  const [titleToSave, setTitleToSave] = useState<string>(
    JSON.parse(localStorageTitle) || ''
  );
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
    setPrevText,
    prevText,
    setPrevTitle
  );

  // user makes a text selection
  useEffect(() => {
    const onSelect = () => {
      if (typeof window !== 'undefined') {
        // used non-null assertion operator - is it okay?
        setSelectedText(() => window.getSelection()!.toString());
      }
    };

    window.addEventListener('select', onSelect);
  }, []);

  const saveChanges = () => {
    localStorage.setItem('CURRENT-TEXT', JSON.stringify(textToSave));
    localStorage.setItem('CURRENT-TITLE', JSON.stringify(titleToSave));
  };

  useEffect(() => {
    setTextToSave(JSON.parse(localStorageText));
    setTextToSave(JSON.parse(localStorageTitle));
  }, [localStorageText, localStorageTitle]);

  const handleChange = (e: React.ChangeEvent<any>) => {
    setTextToSave(e.target.value);
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
                    onClick={saveChanges}>
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

            {editingModeOn === false ? (
              <p>
                {textToSave || 'Click on the edit button to start writing.'}
              </p>
            ) : (
              <textarea
                value={textToSave}
                onChange={handleChange}
                style={{ backgroundColor: bgColor }}
                className={`w-full h-80 border-2 border-indigo-500 rounded-md outline-0 text-xl`}
              />
            )}
          </form>
        </section>

        {/* DASHBOARD WITH COLOUR, FONTS, STYLES ETC */}
        {editingModeOn === true ? (
          <EditingDashboard bgColor={bgColor} setBgColor={setBgColor} />
        ) : (
          ''
        )}
      </span>
    </div>
  );
}

export default BlogEditor;
