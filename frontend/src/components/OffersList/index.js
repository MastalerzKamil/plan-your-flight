import "./index.css";
import {
  Image,
  List,
  Card,
  Icon,
  Label,
  Container,
  Segment,
  Grid,
  Header,
  Divider
} from "semantic-ui-react";
import splitArray from "split-array";
const React = require("react");

function OffersList() {
  let items = [
    {
      url: "https://react.semantic-ui.com/images/avatar/small/helen.jpg",
      title: "Kasia"
    },
    {
      url: "https://react.semantic-ui.com/images/avatar/small/christian.jpg",
      title: "Tomasz"
    },
    {
      url: "https://react.semantic-ui.com/images/avatar/small/daniel.jpg",
      title: "Kamil"
    },
    {
      url: "https://react.semantic-ui.com/images/avatar/small/daniel.jpg",
      title: "Kamil"
    },
    {
      url: "https://react.semantic-ui.com/images/avatar/small/daniel.jpg",
      title: "Kamil"
    }
  ];
  return (
    <div className="OffersList">
      <List>
        {splitArray(items, 2).map(arr => (
          <List.Item>
            <List.Content>
              <Segment placeholder>
                <Grid columns={2}>
                  <Divider vertical></Divider>
                  <Grid.Row>
                    {arr.map(e => (
                      <Grid.Column>
                        <Card className="OffersList__card">
                          <Image
                            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
                            className="OffersList__cardImage"
                          />
                          <Card.Content>
                            <Header floated="right">
                              <Label as="a" tag color="blue">
                                <Icon name="dollar" />
                                10.00
                              </Label>
                            </Header>
                            <Card.Header>Gdańsk</Card.Header>
                            <Card.Meta>Joined in 2016</Card.Meta>
                            <Card.Description>
                              Firma pokrywa wszyskie koszty
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      </Grid.Column>
                    ))}
                  </Grid.Row>
                </Grid>
              </Segment>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default OffersList;
