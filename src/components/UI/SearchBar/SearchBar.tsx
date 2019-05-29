import React from 'react';
import './SearchBar.scss';

export interface IProps {
    searchProducts: (substring: string) => void,
    setCurrentPage: (num: number) => void
}

class SearchBar extends React.Component<IProps> {
    state = {searchValue: ""};

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<{}>, snapshot?: any): void {
        this.props.searchProducts(this.state.searchValue);
    }

    render() {
        return (
            <div className="search">
                <input type="text" className="searchTerm" placeholder="Search..."
                       value={this.state.searchValue}
                       onChange={event => {
                           this.setState({searchValue: event.target.value});
                           this.props.setCurrentPage(1);
                       }}/>
                <button type="submit" className="searchButton">
                    <i className="fa fa-search"/>
                </button>
            </div>
        );
    }
}

export default SearchBar;