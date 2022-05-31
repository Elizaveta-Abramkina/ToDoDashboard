import React, {CSSProperties, FC, ReactNode} from 'react';
import {useDrag, useDragLayer} from "react-dnd";
import './DraggableBox.scss'
import {ItemTypes} from "../Dashbourd/dragAndDrop/dragAndDrop";


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

    // const {itemType, item, initialOffset, currentOffset} =
    //     useDragLayer((monitor) => ({
    //         item: monitor.getItem(),
    //         itemType: monitor.getItemType(),
    //         initialOffset: monitor.getInitialSourceClientOffset(),
    //         currentOffset: monitor.getSourceClientOffset(),
    //     }))
    //
    // function getItemStyles(
    //     initialOffset: { x: number; y: number; } | null,
    //     currentOffset: { x: number; y: number; } | null,
    // ) {
    //     if (!initialOffset || !currentOffset) {
    //         return {display: 'none',}
    //     }
    //
    //     const {x, y} = currentOffset
    //     const transform = `translate(${x}px, ${y}px)`
    //
    //     return {transform}
    // }

    // return isDragging ?
    //     (
    //         <div className='prevBox'>
    //             <div style={getItemStyles(initialOffset, currentOffset)}>
    //                 {children}
    //             </div>
    //         </div>
    //     ) :
      return (
            <div ref={drag} className='box' style={getStylesDrag(left, top)}>
                {children}
            </div>
        );
};

export default DraggableBox;
