import React from "react"
import axios from "axios"
import { Link, } from "react-router-dom"
import { Button, Card, Header, } from "semantic-ui-react"


class Stuffs extends React.Component {
  state = { stuffs: [], }

  componentDidMount() {
    axios.get("/api/stuffs")
      .then( res => {
        this.setState({ stuffs: res.data, });
      })
  }

  renderStuffs = () => {
    const { stuffs, } = this.state

    if (stuffs.length <= 0)
      return <h2>No Stuffs</h2>
    return stuffs.map( stuff => (
      <Card>
        <Card.Content>
          <Card.Header>{ stuff.name }</Card.Header>
          <Card.Meta>{ stuff.department }</Card.Meta>
          <Card.Description>
            { stuff.description }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`/stuffs/${stuff.id}`} color='blue'>
            View
          </Button>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
    <Header as="h1">Stuffs</Header>
    <br />
    <Button as={Link} color="blue" to="/stuffs/new">
      Add Stuff
    </Button>
    <br />
    <br />
    <Card.Group>
      { this.renderStuffs() }
    </Card.Group>
  </div>

    )
  }
}

export default Stuffs