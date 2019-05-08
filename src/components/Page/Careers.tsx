import React from 'react';
import careers from '../../resources/careers.json';
import DateUtil from '../../util/Date';
import './Careers.css';

/**
 * Careers page
 */
export default class Careers extends React.Component {
    public render() {
        const items = careers.data.map((item) => {
            return (
                <div key={item.key} className="page-careers__item">
                    <div className="flexBox alignItemsBaseline">
                        <h3 className="">{item.title}</h3>
                        <div className="page-careers__dates">&nbsp;{formatDates(item.dates)}</div>
                    </div>
                    <div className="">{item.post}</div>
                    <div className="">{item.description}</div>
                    <div className="">{item.tools}</div>
                </div>
            );
        });

        return (
            <div className="app-page__root">
                <h2>Careers</h2>
                <div className="flexBox flexColumn">{items}</div>
            </div>
        );
    }
}

function formatDates(dateStr: string[]): string {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date1 = DateUtil.parseDateFromString(dateStr[0]);
    const date2 = DateUtil.parseDateFromString(dateStr[1]);
    return `${date1.toLocaleDateString('en-US', options)} - ${date2.toLocaleDateString('en-US', options)}`;
}