import CareerItem from '../CareerItem';

import style from './CareerList.module.scss';

type Prop = {
    title: string;
    list: CareerItem[];
};

export default function CareerList({ title, list }: Prop) {
    const renderCareerItem = (ele: CareerItem, index: number) => (
        <CareerItem key={index} item={ele} />
    );

    return (
        <div className={style.CareerList}>
            <p>{title}</p>
            <ul>{list.map(renderCareerItem)}</ul>
        </div>
    );
}
