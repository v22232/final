import Link from 'next/link';

import style from './CareerItem.module.scss';

type Prop = {
    item: CareerItem;
};
export default function CareerItem({ item }: Prop) {
    const { itemTitle, url, imgPath, etc } = item;
    return (
        <li className={style.CareerItem}>
            <Link href={url} as={process.env.BACKEND_URL + url}>
                <a target='_blank' title='새창열림'>
                    <span>{itemTitle}</span>
                    {imgPath && (
                        <>
                            <img
                                src={imgPath}
                                alt={itemTitle + '사이트'}
                                className={style.item__gray}
                            />
                            <img
                                src={imgPath}
                                alt={itemTitle + '사이트'}
                                className={style.item__gray_hover}
                            />
                        </>
                    )}
                </a>
            </Link>
            {etc && <div>{etc}</div>}
        </li>
    );
}
