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

function EditingDashboard(
  { bgColor }: { bgColor: string },
  { setBgColor }: { setBgColor: (e: React.ChangeEvent<any>) => void }
) {
  return (
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
          // @ts-ignore
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
  );
}

export default EditingDashboard;
