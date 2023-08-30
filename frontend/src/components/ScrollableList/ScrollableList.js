import './ScrollableList.css';

function ScrollableList() {

    var items = ["Purdue University", "Babson College"];

    return (
        <div className = "scroller">
            {items.map((university) => {
            return (
                <button className="item">
                    {university}
                </button>
                );
            })}
        </div>
    );
}

export default ScrollableList;