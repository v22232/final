import CareerList from '../components/Career/CareerList';
import style from '../styles/indexPage.module.scss';

const CareerListData: CareerList[] = [
    {
        listTitle: 'Public agency',
        list: [
            {
                itemTitle: '한국 원자력 환경 공단',
                url: 'https://www.korad.or.kr/korad/index.do',
                imgPath: '/images/korad-01.png',
            },
            {
                itemTitle: '한국 원자력 환경 공단(영문)',
                url: 'https://www.korad.or.kr/korad-eng/index.do',
                imgPath: '/images/korad-02.png',
            },

            {
                itemTitle: '사용후핵연료 관리정책 재검토 위원회',
                url: 'https://www.hlwpolicy.go.kr/hlwp/index.do',
                imgPath: '/images/korad-03.png',
                etc: (
                    <>
                        <h3>한국 원자력 환경 공단</h3> <br />
                        Web publishing, Front-end, Maintenance
                        <br />
                        Responsive web, Cross browsing
                        <br />
                        웹 접근성 인증 마크 획득 및 갱신,
                        <br />
                        HTML, JSP, Css, JS, jQuery
                    </>
                ),
            },
            {
                itemTitle: '서울 정독 도서관',
                url: 'https://jdlib.sen.go.kr/gnlib/index.do',
                imgPath: '/images/lib-00.png',
            },
            {
                itemTitle: '서울 강남 도서관',
                url: 'https://gnlib.sen.go.kr/gnlib/index.do',
                imgPath: '/images/lib-01.png',
            },
            {
                itemTitle: '서울 구로 도서관',
                url: 'https://grlib.sen.go.kr/grlib/index.do',
                imgPath: '/images/lib-02.png',
            },
            {
                itemTitle: '서울 마포평생학습관',
                url: 'https://ahyon.sen.go.kr/ahyon/index.do',
                imgPath: '/images/lib-03.png',
            },
            {
                itemTitle: '서울 강서 도서관',
                url: 'https://gslib.sen.go.kr/gslib/index.do',
                imgPath: '/images/lib-05.png',
                etc: (
                    <>
                        <h3>서울특별시 교육청 도서관</h3>
                        <br />
                        Web publishing, guide coding, Maintenance
                        <br />
                        Responsive web, Cross browsing
                        <br />
                        웹 접근성 인증 마크 획득 및 갱신,
                        <br /> 하위 28개 사이트 유지보수
                        <br />
                        HTML, JSP, Css, JS, jQuery
                    </>
                ),
            },
            {
                itemTitle: '인천 서구도서관',
                url: 'https://ahyon.sen.go.kr/ahyon/index.do',
                imgPath: '/images/lib-ic-01.png',
            },
            {
                itemTitle: '인천 연수도서관',
                url: 'https://ahyon.sen.go.kr/ahyon/index.do',
                imgPath: '/images/lib-ic-02.png',
            },
            {
                itemTitle: '인천 통합공공도서관',
                url: 'https://ahyon.sen.go.kr/ahyon/index.do',
                imgPath: '/images/lib-ic-03.png',
                etc: (
                    <>
                        <h3>인천광역시 교육청 도서관</h3>
                        <br />
                        Web publishing, guide coding, Maintenance
                        <br />
                        Responsive web, Cross browsing
                        <br />
                        웹 접근성 인증 마크 획득 및 갱신,
                        <br /> 하위 12개 사이트 유지보수
                        <br />
                        HTML, JSP, Css, JS, jQuery
                    </>
                ),
            },
            {
                itemTitle: '경상북도 교육청 정보센터',
                url: 'http://www.gbelib.kr/geic/index.do',
                imgPath: '/images/lib-ks-01.png',
            },
            {
                itemTitle: '경상북도 교육청 통합 공공 도서관',
                url: 'http://www.gbelib.kr/gbelib/index.do',
                imgPath: '/images/lib-ks-02.png',
                etc: (
                    <>
                        <h3>경상북도 교육청 도서관</h3>
                        <br />
                        Maintenance
                        <br />
                        Responsive web, Cross browsing
                        <br />
                        웹 접근성 인증 마크 갱신,
                        <br /> 하위 25개 사이트 유지보수
                        <br />
                        HTML, JSP, Css, JS, jQuery
                        <br />
                        <br />
                        *한국전력공사 비인가 사이트 퍼블리싱, 교육넷 설문조사 및
                        sms 등등 공공기관 위주의 대규모 퍼블리싱 작업
                    </>
                ),
            },
        ],
    },
    {
        listTitle: 'Academy',
        list: [
            {
                itemTitle: '영플립(손샘영어)',
                url: 'http://www.engflip.com',
                imgPath: '/images/academy-01.png',
                etc: (
                    <>
                        <h3>영플립</h3>
                        <br />
                        Web publishing, Maintenance
                        <br />
                        Responsive web, Cross browsing
                        <br />
                        React, Scss, Ts, Js
                    </>
                ),
            },
            {
                itemTitle: '<CMS> 영플립 브랜드 및 지점 관리',
                url: '',
                imgPath: '/images/academy-03.png',
                etc: (
                    <>
                        <h3>영플립 CMS</h3>
                        <br />
                        Web publishing, Front-end, Maintenance
                        <br />
                        Responsive web, Cross browsing
                        <br />
                        React, Scss, Ts, Js, Next.js
                    </>
                ),
            },
            {
                itemTitle: '영플립 학생 교육',
                url: '',
                imgPath: '/images/academy-04.png',
                etc: (
                    <>
                        <h3>손샘 영어/ 영플립</h3>
                        <br />
                        Web publishing, Front-end, Maintenance
                        <br />
                        Responsive web, Cross browsing
                        <br />
                        React, Scss, Ts, Js, Next.js
                    </>
                ),
            },
            {
                itemTitle: '<LMS> 영플립 학생 관리 ',
                url: '',
                imgPath: '/images/academy-05.png',
                etc: (
                    <>
                        <h3>영플립 LMS</h3>
                        <br />
                        Web publishing, Front-end, Maintenance
                        <br />
                        Responsive web, Cross browsing
                        <br />
                        React, Scss, Ts, Js, Next.js
                        <br />
                        <br />
                        **개발 단계
                    </>
                ),
            },
        ],
    },
    {
        listTitle: 'Advertisement',
        list: [
            {
                itemTitle: '머니트레이너',
                url: 'http://moneytrainer.com',
                imgPath: '/images/money-01.png',
                etc: (
                    <>
                        <h3>머니 트레이너</h3>
                        <br />
                        Full Stack(Design, Publishing, front-end, back-end)
                        <br />
                        Responsive web, Cross browsing
                        <br />
                        Node-Express.js, MySQL, Rest API, JQuery, ejs, css,
                        <br />
                        <br />
                    </>
                ),
            },
            {
                itemTitle: '머니트레이너 관리자',
                url: 'http://moneytrainer.com',
                imgPath: '/images/money-02.png',
                etc: (
                    <>
                        <h3>머니 트레이너 관리자 페이지</h3>
                        <br />
                        Full Stack(Publishing, front-end, back-end)
                        <br />
                        Responsive web, Cross browsing
                        <br />
                        Node-Express.js, MySQL, Rest API, JQuery, ejs, css,
                        <br />
                        <br />
                    </>
                ),
            },
        ],
    },
];

const renderCareerList = (ele: CareerList) => (
    <CareerList key={ele.listTitle} title={ele.listTitle} list={ele.list} />
);

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
                <div className='group'>
                    {CareerListData.map(renderCareerList)}
                </div>
            </div>
        </div>
    );
}
