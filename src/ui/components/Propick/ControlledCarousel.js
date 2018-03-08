import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'

export default class ControlledCarousel extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null
      };
    }
  
    handleSelect(selectedIndex, e) {
      // alert(`selected=${selectedIndex}, direction=${e.direction}`);
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }
  
    render() {
      const { index, direction } = this.state;
      let tagImage = [];
      if(this.props.item){
        this.props.item.forEach((value, i) => {
        tagImage.push(
          <Carousel.Item>
            <img width={200} height={100} alt="image" src={value.image} />
            <Carousel.Caption>
              {/* <h3>{value.title}</h3> */}
              {/* <p>{value.title}</p> */}
            </Carousel.Caption>
          </Carousel.Item>)
      });
    }
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          interval={1000}>
         {tagImage}
        </Carousel>
      );
    }
  }