import React from 'react';
import careers from '../../resources/careers.json';
import './Careers.css';

/**
 * Careers page
 */
export default class Careers extends React.Component {
    public render() {
        const items = careers.data.map((item) => {
            return (
                <div key={item.key}>
                    <div className="flexBox alignItemsBaseline">
                        <h3 className="">{item.title}</h3>
                        <div className="">{item.post}</div>
                    </div>
                    <div className="">{item.description}</div>
                    <div className="">{item.tools}</div>
                </div>
            );
        });

        return (
            <div className="app-page__root">
                <h2>Careers</h2>
                <div className="flexBox flexColumn">
                    {items}
                </div>
            </div>
        );
    }
}