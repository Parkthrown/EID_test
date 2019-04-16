import React, { Component } from "react";
import FlatList from "./components/FlatList/";
import UserEntry from "./components/UserEntry/";
import Paginator from "./components/Paginator";
import logo from "./EIDlogo.gif";
import "./styles/App.css";

const ENDPOINT =
  "http://ec2-18-203-238-131.eu-west-1.compute.amazonaws.com:8000/api/verifications";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: undefined,
      loading: false,
      error: undefined,
      offset: 0,
      fetch: 3
    };
  }

  fetchData = () => {
    this.setState({ loading: true });
    fetch(ENDPOINT)
      .then(response => {
        response.json().then(res => this.setState({ res, loading: false }));
      })
      .catch(error => {
        console.log("FAILURE ---------->\n", error);
        this.setState({ error, loading: false });
      });
  };

  keyExtractor = item => item.userEnvironment.ipAdress;

  render() {
    const { fetchData, keyExtractor } = this;
    const { res, loading, offset, fetch } = this.state;
    return (
      <div className="App">
        <div class="App-body">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div class="App-main-text">
            {loading ? (
              <p>Loading</p>
            ) : res ? (
              <p>Ready</p>
            ) : (
              <p>
                Press <code> Fetch </code> to fetch your data.
              </p>
            )}
          </div>
          <button onClick={fetchData} class="input element" name="fetch">
            Fetch
          </button>
          {res !== undefined ? (
            <div>
              <FlatList
                class="App-List"
                items={res.filter((e, i) => i > offset && i <= offset + fetch)}
                renderItem={UserEntry}
                keyExtractor={keyExtractor}
              />
              <p class="element">
                {offset / fetch + 1}/{Math.floor(res.length / fetch)}
              </p>
              <Paginator
                class="App-paginator"
                offset={offset}
                fetch={fetch}
                size={res.length}
                onMore={() => this.setState({ offset: offset + fetch })}
                onLess={() => this.setState({ offset: offset - fetch })}
              />
              <p class="element">
                podría seguir accediendo al json una y otra vez para sacar mas
                cosas pero tampoco creo que sirva de mucho
              </p>
            </div>
          ) : (
            undefined
          )}
        </div>
      </div>
    );
  }
}

export default App;
