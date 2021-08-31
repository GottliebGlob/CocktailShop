import './App.css';
import Header from "./components/Header";
import CardList from "./components/CardList";
import LuckyButton from "./components/LuckyButton";
import Error from "./components/Error";
import {useState, useEffect} from "react";
import {getRandomCocktails, searchCocktails} from "./components/fetcher/fetcher";
import CartModal from "./components/CartModal";


function App() {


    const [luckyState, setLuckyState] = useState([])
    const [searchState, setSearchState] = useState([])
    const [cartState, setCartState] = useState([])

    const [searchMode, setSearchMode] = useState(false)
    const [searchResult, setSearchResult] = useState("")
    const [error, setError] = useState(false)
    const [showModal, setShowModal] = useState(false)


    useEffect(() => {
        if (searchResult.length === 0) {
            setSearchMode(false)
            setSearchState([])
        }
        else {
            setSearchMode(true)
        }
    }, [searchResult])

    const searchHandler = (searchFor) => {
        setError(false)
        setSearchResult(searchFor)
            searchCocktails(searchFor).then(data =>
                setSearchState(data.splice(0, 9))
            )
    }

    const addHandler = (item) => {
        setCartState(state => [...state, item])
        setLuckyState(mainState => mainState.filter((e) => e.id !== item.id))
    }

    const luckyButtonHandler = () => {
        getRandomCocktails().then(data => {

            if (Array.isArray(data)) {
                setError(false)
                setLuckyState(data.sort((a, b) => {return a.instruction.length - b.instruction.length}).splice(1))
            }
            else {
                setError(true)
                setLuckyState([])
                setSearchState([])
            }

        })

    }

    const cartSubmitHandler = () => {
        setCartState([])
        setShowModal(false)
    }

    const cartBoBackHandler = () => {
        setShowModal(false)
    }

    return (
        <div className="App">
        <Header searchResult={searchResult} setSearchResult={searchHandler} onOrderClick={() => setShowModal(true)}/>
            <div className="title-wrapper">
            <CartModal data={cartState} show={showModal} onGoBack={cartBoBackHandler} onSubmit={cartSubmitHandler}/>
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

            {
                error ? <Error err={error}/> : null

            }
            { searchMode ?
                        <CardList data={searchState} onAdd={addHandler}/> :
                    <CardList data={luckyState} onAdd={addHandler}/>
            }

        </div>
    );
}

export default App;
