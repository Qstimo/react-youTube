import React from 'react';
import s from './select.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { SortItems, selectSort, setForm, setSort } from '../../redux/slices/filterSlice';



const list = [
  { name: 'популярности', sortProperty: 'relevance' },
  { name: 'дате', sortProperty: 'date' },
];

const Select:React.FC=() =>{
  const [open, setOpen] = React.useState(false);
  const [openForm, setOpenForm] = React.useState(true);
  const sort = useSelector(selectSort);
  const dispatch = useDispatch();
  const popupRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClick = (event:MouseEvent) => {
      const _event = event as MouseEvent & {
        path:Node[];
      }; 
      if (popupRef.current && !_event.composedPath().includes(popupRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', handleClick);
    return () => document.body.removeEventListener('click', handleClick);
  }, []);

  const onClickSort = (item:SortItems) => {
    dispatch(setSort(item));
    setOpen(false);
  };

  const onClickFormVideo = (i:boolean) => {
    dispatch(setForm(i));
    setOpenForm(i);
  };

  return (
    <div className={s.wrapper}>
      <div ref={popupRef} className={s.root}>
        <div className={s.label}>
          <b>Сортировка по:</b>
          <span onClick={() => setOpen(!open)}> {sort.name}</span>
        </div>
        {open && (
          <div className={s.sortPopup}>
            <ul>
              {list.map((obj, i) => (
                <li
                  onClick={() => onClickSort(obj)}
                  key={i}
                  className={obj.sortProperty === sort.sortProperty ? s.active : ''}>
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="">
        <span className={!openForm ? s.active : ''}>
          <svg
            onClick={() => onClickFormVideo(false)}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="var(--text-color)">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M8 6.00067L21 6.00139M8 12.0007L21 12.0015M8 18.0007L21 18.0015M3.5 6H3.51M3.5 12H3.51M3.5 18H3.51M4 6C4 6.27614 3.77614 6.5 3.5 6.5C3.22386 6.5 3 6.27614 3 6C3 5.72386 3.22386 5.5 3.5 5.5C3.77614 5.5 4 5.72386 4 6ZM4 12C4 12.2761 3.77614 12.5 3.5 12.5C3.22386 12.5 3 12.2761 3 12C3 11.7239 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.7239 4 12ZM4 18C4 18.2761 3.77614 18.5 3.5 18.5C3.22386 18.5 3 18.2761 3 18C3 17.7239 3.22386 17.5 3.5 17.5C3.77614 17.5 4 17.7239 4 18Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"></path>{' '}
            </g>
          </svg>
        </span>
        <span className={openForm ? s.active : ''}>
          <svg
            onClick={() => onClickFormVideo(true)}
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 278 278"
            stroke="#808080">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="1.668"></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <rect x="0" y="0" width="119.054" height="119.054"></rect>{' '}
                <rect x="158.946" y="0" width="119.054" height="119.054"></rect>{' '}
                <rect x="158.946" y="158.946" width="119.054" height="119.054"></rect>{' '}
                <rect x="0" y="158.946" width="119.054" height="119.054"></rect>{' '}
              </g>
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Select;
