import React from "react";
import "./Player.css";

// Display the Player on the Map and get the movment from Map component

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assetHeight: 32,
      assetWidth: 32,
      asset: "link/linkFront/linkFront-Step4.png",
      mouvementAnimation: true,
      canAttack: true
    };
  }
  assetAnimation(direction) {
    for (let i = 1, delay = 0; i <= 4; i++, delay = delay + 30) {
      setTimeout(() => {
        this.setState({
          asset: `link/link${direction}/link${direction}-Step${i}.png`
        });
      }, delay);
    }
  }

  attackAnimation() {
    if (this.state.canAttack === true) {
      let oldprop = this.state.asset;
      switch (this.props.direction) {
        case "down":
          this.setState({
            asset: `link/linkFront/attackFront.png`,
            canAttack: false
          });
          break;
        case "up":
          this.setState({
            asset: `link/linkBack/attackBack.png`,
            canAttack: false
          });
          break;
        case "right":
          this.setState({
            asset: `link/linkFront/attackFront.png`,
            canAttack: false
          });
          break;
        case "left":
          this.setState({
            asset: `link/linkFront/attackFront.png`,
            canAttack: false
          });
          break;
      }

      setTimeout(
        () =>
          this.setState({
            asset: oldprop,
            canAttack: true
          }),
        300
      );
    }
  }
  //  Method which get inputs from ComponentDidMount (Game component) and send the correct asset to do on the Player
  getAsset() {
    let newKey = this.props.keyName;

    if (this.props.attackAction === true) {
      this.attackAnimation();
    } else if (this.props.keyName === newKey) {
      switch (newKey) {
        case "ArrowLeft":
          this.assetAnimation("Left");

          break;

        case "ArrowUp":
          this.assetAnimation("Back");
          break;

        case "ArrowRight":
          this.assetAnimation("Right");
          break;

        case "ArrowDown":
          this.assetAnimation("Front");
          break;
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pressKey !== this.props.pressKey) {
      this.getAsset();
    }
  }

  render() {
    return (
      <div
        className="player"
        style={{
          top: `${this.props.y * this.state.assetHeight}px`,
          left: `${this.props.x * this.state.assetWidth}px`
        }}
      >
        <img src={this.state.asset} alt={"Player"} />
      </div>
    );
  }
}

export default Player;
