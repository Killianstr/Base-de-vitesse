import './style';
import { Component } from 'preact';
import Pusher from 'pusher-js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computerPick: null,
      result: null,
      leaderboard: [],
    } 

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const pusher = new Pusher('d4356f5c1936907bf65c', {
      cluster: 'eu',
      encrypted: true,
    });

    const channel = pusher.subscribe('leaderboard');
    channel.bind('update', data => {
      const { leaderboard } = this.state;
      const userIndex = leaderboard.findIndex(e => e.name === 'Player 1');
      leaderboard[userIndex].score += data.points;

      this.setState({
        result: data.points,
        leaderboard,
      });
    });

    fetch('http://localhost:7777/leaderboard')
      .then(response => response.json())
      .then(data => {
        this.setState({
          leaderboard: [...data.players],
        });
      })
      .catch(error => console.log(error));
  }

  handleClick(event) {
    const { value } = event.target;

    fetch(`http://localhost:7777/play?userPick=${value}`)
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  render() {
    const { leaderboard, result } = this.state;
    const sortedLeaderboard = leaderboard.sort((a, b) => b.score > a.score);
    const tableBody = sortedLeaderboard.map((player, index) => (
      <tr>
        <td>{index + 1}</td>
        <td>{player.name}</td>
        <td>{player.score}</td>
      </tr>
    ));

    let message;
    if (result !== null) {
      message = result === 3 ?
      <span class="message-content success">Points ajoutés !</span>:
      <span class="message-content fail">Points enlevés !</span>;
    } else {
      message = null;
    }

    return (
      <div class="App">
        <h1>Leaderboard</h1>

        <div class="button-row">
          <button onClick={this.handleClick} value="more" class="more">Ajouter points</button>
          <button onClick={this.handleClick} value="less" class="less">Enlever points</button>
        </div>

        <div class="message">
          {message}
        </div>

        <div class="leaderboard">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {tableBody}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
