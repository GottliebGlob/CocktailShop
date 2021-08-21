import './App.css';
import Header from "./components/Header";
import CardList from "./components/CardList";
import LuckyButton from "./components/LuckyButton";
import {useState, useEffect} from "react";
import {getRandomCocktails, searchCocktails} from "./components/fetcher/fetcher";


function App() {


    const [luckyState, setLuckyState] = useState([])
    const [searchState, setSearchState] = useState([])

    const [searchMode, setSearchMode] = useState(false)
    const [searchResult, setSearchResult] = useState("")

    const searchHandler = (searchFor) => {
        setSearchResult(searchFor)
        console.log(searchFor)
            searchCocktails(searchFor).then(data =>
                setSearchState(data.splice(0, 9))
            )
    }

    useEffect(() => {
        if (searchResult.length === 0) {
            setSearchMode(false)
            setSearchState([])
        }
        else {
            setSearchMode(true)
        }
    }, [searchResult])


    const addHandler = (id) => {
        setLuckyState(mainState => mainState.filter((e) => e.id !== id))
    }

    const luckyButtonHandler = () => {
        getRandomCocktails().then(data => {
            setLuckyState(data.splice(1))
        })

    }

    return (
        <div className="App">
        <Header searchResult={searchResult} setSearchResult={searchHandler}/>
            <div className="title-wrapper">

                { searchMode ? <>
                        <h2 className="main-title">
                            Here is what we have found...
                        </h2>
                    </> :
                        <>
                            <h2 className="main-title">
                                Best drinks anywhere!
                            </h2>
                            <LuckyButton onLuckyButtonClick={luckyButtonHandler}/>
                        </>
                }
            </div>

            { searchMode ?
                        <CardList data={searchState} onAdd={addHandler}/> :
                    <CardList data={luckyState} onAdd={addHandler}/>
            }

        </div>
    );
}

export default App;
