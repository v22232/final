declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement>
    >;

    const src: string;
    export default src;
}

declare type CareerItem = {
    itemTitle: string;
    url?: string;
    imgPath?: string;
    etc?: HTMLAttributes<HTMLDivElement>;
};

declare type CareerList = {
    listTitle: string;
    list: CareerItem[];
};
