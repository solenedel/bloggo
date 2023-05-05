import { useState } from 'react';

export const useBlogEditing = () => {
  const [textToSave, setTextToSave] = useState<string>('');
  const [titleToSave, setTitleToSave] = useState<string>('');
  const [published, setPublished] = useState<boolean>(false);
  const [editingModeOn, setEditingModeOn] = useState<boolean>(false);
  const [prevTitle, setPrevTitle] = useState<string>('');
  const [prevText, setPrevText] = useState<string>('');

  const startEditing = () => {
    setPrevTitle(titleToSave);
    setPrevText(textToSave);
    setEditingModeOn(true);
  };

  const onPublish = () => {
    setTitleToSave(titleToSave);
    setPublished(true);
    setEditingModeOn(false);
  };

  const cancelEditing = () => {
    setTitleToSave(prevTitle);
    setTextToSave(prevText);
    setEditingModeOn(false);
  };

  return {
    startEditing,
    onPublish,
    cancelEditing,
    textToSave,
    setTextToSave,
    titleToSave,
    setTitleToSave,
    editingModeOn,
    prevTitle,
    prevText,
    published,
    setPublished,
  };
};
