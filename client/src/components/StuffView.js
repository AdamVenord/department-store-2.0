import React from "react"
import axios from "axios"
import Reviews from "./Reviews"
import { Link, } from "react-router-dom"
import { Button, Header, Segment, } from "semantic-ui-react"

class StuffReview extends React.Component {
  state = { stuff: {}, reviews: [], }

  componentDidMount() {
    const { id, } = this.props.match.params

    axios.get(`/api/stuffs/${id}`)
      .then( res => {
        this.setState({ stuff: res.data, })
      })

      axios.get(`/api/stuffs/${id}/reviews`)
      .then( res => {
        this.setState({ reviews: res.data, })
      })
  }

  render() {
    const { stuff: { name, description, price, department, }, reviews } = this.state
    const { id, } = this.props.match.params
    return (
      <div>
        <Segment>
          <Header as="h1">{ name }</Header>
          <Header as="h3">{ department }</Header>
          <Header as="h5" color="green">${ price }</Header>
          <p>{ description }</p>
        </Segment>
        <br />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", }}>
          <Header as="h2">Reviews:</Header>
          <Button 
          as={Link}
          color="purple"
          to={`/stuffs/${id}/new-review`}
          >
            Add Review
          </Button>
        </div>
        <hr />
        <Reviews reviews={reviews} />
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