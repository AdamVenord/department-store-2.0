import React from "react"
import { Segment, Header, } from "semantic-ui-react"

const Review = ({ body, rating }) => (
  <Segment>
    <Header as="h1">{ rating }</Header>
    <span>{ body }</span>
  </Segment>
)

export default Review