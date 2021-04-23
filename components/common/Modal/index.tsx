import cx from 'classnames';
import style from './Modal.module.scss';

type Prop = {
    url?: string;
    imgPath?: string;
    isActve: boolean;
};

export default function Modal({ url, imgPath, isActve }: Prop) {
    return (
        <div className={cx([style.Modal, isActve ? style.show : style.hide])}>
            <button>링크이동</button>
            <button>닫기</button>
        </div>
    );
}

Modal.defaultProps = {
    isActve: false,
};
