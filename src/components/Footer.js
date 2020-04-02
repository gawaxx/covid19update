import React, { Component } from 'react'
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Segment className="footer" inverted vertical style={{ padding: '2em 0em' }}>
                    <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='About This Project' />
                                    <List link inverted>
                                        <List.Item as='a' target="_blank" href="https://github.com/gawaxx/mod-5-front-end" >Github Front-end</List.Item>
                                        <List.Item as='a' target="_blank" href="https://github.com/gawaxx/mod-5-back-end" >Github Back-end</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={2}>
                                    <Header inverted as='h4' content='About Me' />
                                    <List link inverted>
                                        <List.Item as='a' target="_blank" href="http://www.linkedin.com/in/jules-blanc-29a36b179" >LinkedIn</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <Header as='h4' inverted>
                                        Footer Header
                                    </Header>
                                    <p>
                                        Tegari | made with <span role="img" aria-label="baguette"> 🥖 </span> by Jules Blanc, 2020.
                                    </p>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Header as='h4' inverted>
                                        Technologies used
                                    </Header>
                                    <p>
                                        React | Ruby on Rails | Semantic ui | CSS | JWT Authentication
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </div>
        )
    }
}
