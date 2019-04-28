import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Menu from './Navigation/Menu';
import Contacts from './Page/Contacts';
import Main from './Page/Main';

const PAGES = new Map([
    ['main', (<Main/>)],
    // ['bio', (<Main/>)],
    // ['careers', (<Main/>)],
    ['contacts', (<Contacts/>)]
]);

/**
 * Main application
 */
export default class App extends React.Component {
    private menu: Menu | null = null;
    private menuNode: Element | Text | null = null;
    private currentPage: JSX.Element | undefined = (<Main/>);

    constructor(params: object) {
        super(params);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
    }

    public componentDidMount() {
        this.menuNode = ReactDOM.findDOMNode(this.menu);
        if (this.menuNode) {
            this.menuNode.addEventListener('menuItemClick', this.onMenuItemClick);
        }
    }

    public componentWillUnmount(): void {
        if (this.menuNode) {
            this.menuNode.removeEventListener('menuItemClick', this.onMenuItemClick);
        }
    }

    public render() {

        return (
            <div className="flexBox flexColumn">
                <Menu ref={elem => this.menu = elem}/>
                {this.currentPage}
            </div>
        );
    }

    private onMenuItemClick(event: CustomEventInit): void {
        const item = PAGES.get(event.detail);
        if (item) {
            this.currentPage = item;
            this.forceUpdate();
        }
    };
}