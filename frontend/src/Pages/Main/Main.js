import './Main.css';
import ScrollableList from '../../components/ScrollableList/ScrollableList';
import SearchBar from '../../components/SearchBar/SearchBar';

function Main() {
    return (
        <div className = "Main">
            <div className="Logo">Meet</div>
            <div className="Blurb">Choose a few universities to find when you can meet!</div>
            <div className="Search">
                <div><SearchBar /></div>
                <div className="Universities"><ScrollableList /></div>
            </div>
        </div>
    );
}

export default Main;
