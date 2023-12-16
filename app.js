class FruitApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            fruitData: null,
            error: null,
        };
    }

    searchFruit = () => {
        const {searchTerm} = this.state;

        if (searchTerm.trim() !== '') {
            fetch(`https://www.fruityvice.com/api/fruit/${searchTerm}`)
                .then(response => response.json())
                .then(fruitData => {
                    if (fruitData.id) {
                        this.setState({fruitData, error: null});
                    } else {
                        this.setState({fruitData: null, error: `No information found for ${searchTerm}. Please enter another fruit.`});
                    }
                })
                .catch(error => this.setState({fruitData: null, error: `Error fetching data: ${error.message}`}));
        } else {
            alert('Please enter a fruit name.');
        }
    }

    render() {
        const {searchTerm, fruitData, error} = this.state;

        return (
            <div>
                
                <form onSubmit={(e) => {e.preventDefault(); this.searchFruit();}}>
                    <input type="text" autocomplete="off" id="searchInput" placeholder="Enter fruit name" value={searchTerm} onChange={(e) => this.setState({searchTerm: e.target.value})}/>
                    <button type="submit">Lookup this fruit!</button>
                </form>
                {fruitData && (
                    <div id="fruitInfo">
                        <h2>{fruitData.name}</h2>
                        <p className="label">Genus: <span>{fruitData.genus }</span></p>
                        <p className="label">Family: <span>{fruitData.family}</span></p>
                        <p className="label">Order: <span>{fruitData.order }</span></p>
                        <p className="label">Calories: <span>{fruitData.nutritions.calories }</span></p>
                        <p className="label">Fat: <span>{fruitData.nutritions.fat } grams</span></p>
                        <p className="label">Sugar: <span>{fruitData.nutritions.sugar } grams</span></p>
                        <p className="label">Carbohydrates: <span>{fruitData.nutritions.carbohydrates } grams</span></p>
                        <p className="label">Protein: <span>{fruitData.nutritions.protein } grams</span></p>
                    </div>
                )}
                {error && <p className="no-info">{error}</p>}
            </div>
        );
    }
}

ReactDOM.render(<FruitApp />, document.getElementById('content-div'));