export const useBlogEditing = (
  published: boolean,
  setPublished: (published: boolean) => void,
  textToSave: string,
  setTextToSave: (textToSave: string) => void,
  titleToSave: string,
  setTitleToSave: (titleToSave: string) => void,
  editingModeOn: boolean,
  setEditingModeOn: (editingModeOn: boolean) => void,
  prevTitle: string,
  setPrevTitle: (prevTitle: string) => void,
  prevText: string,
  setPrevText: (prevText: string) => void
) => {
  // TO DOs --------------------------------------------------------------------
  // function: saveProgress without closing editing mode (save to local storage)

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
