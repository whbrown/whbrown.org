import React from 'react';
import Name from '../styled-components/Name.styled';

// interface WHBrownProps {
//   text: string,
//   setText: (text: string) => void;
// }

interface WHBrownState {
  mouseOver: boolean;
  progressionIndex: number;
  progression: string[];
}

class WHBrown extends React.Component {
  state: WHBrownState = {
    mouseOver: false,
    progressionIndex: 0,
    progression: ['whbrown', 'w hbrown', 'wi hbrown', 'wil hbrown', 'will hbrown', 'willi hbrown', 'willia hbrown', 'william hbrown', 'william h brown']
  }
  handleMouseOut: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void = (e) => {
    this.setState({ mouseOver: false });
  }
  handleMouseOver: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void = (e) => {
    setTimeout(() => {
      this.setState({ mouseOver: true });
    }, 300)
    // setTimeout(() => {
    //   if (this.state.progressionIndex === this.state.progression.length - 1)
    //     this.setState({ mouseOver: false })
    // }, 10000)
  }

  toggleGlow = (method: 'add' | 'remove', el: HTMLHeadingElement): void => {
    if (method === 'add') {
      el.classList.add('glow');
    }
    else if (method === 'remove') {
      el.classList.remove('glow');
    }
  }

  componentDidMount = () => {
    const typing = setInterval(() => {
      if (this.state.progressionIndex === 2) {
        const whbrown = document.querySelector('.whbrown') as HTMLHeadingElement;
        if (whbrown && this.state.mouseOver) {
          this.toggleGlow('add', whbrown);
        } else if (whbrown) {
          this.toggleGlow('remove', whbrown);
        }
      }
      if (this.state.mouseOver && this.state.progressionIndex < this.state.progression.length - 1) {
        this.setState({
          progressionIndex: this.state.progressionIndex + 1
        })
      }
      else if (!this.state.mouseOver && this.state.progressionIndex > 0) {
        this.setState({
          progressionIndex: this.state.progressionIndex - 1
        })
      }
    }, 150);
  }
  render() {
    const { progression, progressionIndex } = this.state;
    return (<a href="https://github.com/whbrown/"><Name className="whbrown" onChange={() => null} onMouseOut={this.handleMouseOut} onMouseOver={this.handleMouseOver}>{progression[progressionIndex]}</Name></a>)
  }
}

export default WHBrown;