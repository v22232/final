import style from '../styles/indexPage.module.scss';

export default function indexPage() {
    return (
        <div className={style.indexPage}>
            <div className={style.Main}>
                <div className='group'>
                    <div className={style.layer__top}>
                        <div>
                            <p>Info</p>
                            <ul>
                                <li>bu hee kim</li>
                                <li>Publisher</li>
                                <li>Font-end developer</li>
                                <li>bettykim3771@gmail.com</li>
                            </ul>
                        </div>
                        <div>
                            <p>Skills</p>
                            <ul>
                                <li>CSS, SASS, SCSS</li>
                                <li>HTML, HTML, JSP, Css, EJS</li>
                                <li>Node.js-Express, React</li>
                                <li>JavaScript, TypeScript, jQuery</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.layer__middle}>
                        <p>PORTFOLIO</p>
                    </div>
                </div>
            </div>
            <div className={style.Career}>
                <div className='group'></div>
            </div>
        </div>
    );
}
