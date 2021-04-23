import { useRouter } from 'next/dist/client/router';

import style from './CareerItem.module.scss';

type Prop = {
    item: CareerItem;
};
export default function CareerItem({ item }: Prop) {
    const { itemTitle, url, imgPath, etc } = item;
    const router = useRouter();
    const _onClickItem = () => {
        if (url) {
            window.open(url, '_ blank');
        } else {
            alert('redux를 이용한 모달 상태관리 작업 중');
        }
    };
    return (
        <>
            <li className={style.CareerItem}>
                <button onClick={_onClickItem}>
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
                </button>
                {etc && <div>{etc}</div>}
            </li>
        </>
    );
}
