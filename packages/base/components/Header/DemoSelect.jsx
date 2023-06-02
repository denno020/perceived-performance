import { useAppContext } from '../../contexts/AppContext.jsx';
import { useStore } from '../../store';
import classes from './DemoSelect.module.css';

const DemoSelect = () => {
  const { sectionId } = useAppContext();
  const { presentationStep } = useStore();

  const onChange = (e) => {
    const nextPath = e.target.value === '0' ? '' : e.target.value;
    console.log({ nextPath });
    window.location.href = `/${nextPath}`;
  };

  return (
    <select className={classes.select} name="demo" id="demo" onChange={onChange} value={sectionId}>
      <option value="0">Base</option>
      <option value="1" disabled={presentationStep < 1}>
        Demo 1
      </option>
      <option value="2" disabled={presentationStep < 2}>
        Demo 2
      </option>
      <option value="3" disabled={presentationStep < 3}>
        Demo 3
      </option>
      <option value="4" disabled={presentationStep < 4}>
        Demo 4
      </option>
      <option value="5" disabled={presentationStep < 5}>
        Demo 5
      </option>
      <option value="6" disabled={presentationStep < 6}>
        Demo 6
      </option>
      <option value="7" disabled={presentationStep < 7}>
        Demo 7
      </option>
    </select>
  );
};

export default DemoSelect;
