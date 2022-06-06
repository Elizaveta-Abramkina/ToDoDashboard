import React, {CSSProperties, FC, ReactNode} from 'react';
import {useDrag} from "react-dnd";
import './DraggableBox.scss'
import {ItemTypes} from "../../pages/Dashbourd/dragAndDrop/dragAndDrop";


interface IDraggableBox {
  id: string,
  left: number,
  top: number,
  children: ReactNode
}

const DraggableBox: FC<IDraggableBox> = ({id, left, top, children}: IDraggableBox) => {

  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: {id, left, top},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  }), [id, left, top])

  const getStylesDrag = (left: number | undefined, top: number | undefined): CSSProperties => {
    return {
      position: 'absolute',
      transform: `translate(${left}px, ${top}px)`,
      display: isDragging ? 'none' : '',
    }
  }

  return (

    <div ref={drag} className='box' style={getStylesDrag(left, top)}>
      {children}
    </div>

  );
};

export default DraggableBox;
