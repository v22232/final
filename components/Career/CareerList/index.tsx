import { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import CareerItem from '../CareerItem';

import style from './CareerList.module.scss';

type Prop = {
    title: string;
    list: CareerItem[];
    index: number;
    isActive: boolean;
    onClickList: (index: number) => void;
};

export default function CareerList({
    title,
    list,
    index,
    isActive,
    onClickList,
}: Prop) {
    const listRef = useRef<HTMLDivElement>();
    const renderCareerItem = (ele: CareerItem, index: number) => (
        <CareerItem key={index} item={ele} />
    );

    return (
        <div
            ref={listRef}
            className={cx([style.CareerList, isActive && style.fold])}
            onClick={() => onClickList(index)}
        >
            <p>{title}</p>
            <ul>{list.map(renderCareerItem)}</ul>
        </div>
    );
}

CareerList.defaultProps = {
    mobileFoldState: false,
};
