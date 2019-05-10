import React, {ReactNode} from 'react';
import './Container.css';

interface IProperties {
    title: string;
    content: ReactNode;
}

/**
 * Page container with title
 * @param props
 */
export default (props: IProperties) => {
    return (
        <div className="page-container__root">
            <h2>{props.title}</h2>
            <div>{props.content}</div>
        </div>
    );
}