import React from "react"
import axios from "axios"
import { Button, Header, Segment, } from "semantic-ui-react"

class StuffReview extends React.Component {
  state = { stuff: {}, }

  componentDidMount() {
    axios.get(`/api/stuffs/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ stuff: res.data, })
      })
  }

  render() {
    const { name, description, price, department, } = this.state.stuff;

    return (
      <div>
        <Segment>
          <Header as="h1">{ name }</Header>
          <Header as="h3">{ department }</Header>
          <Header as="h5" color="green">${ price }</Header>
          <p>{ description }</p>
        </Segment>
        <br />
        <br />
        <Button 
          color="black" 
          onClick={this.props.history.goBack}
        >
          Back
        </Button>
      </div>

      
    )
  }
}

export default StuffReview;