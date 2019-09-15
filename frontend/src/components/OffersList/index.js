import "./index.css";
import {
  Image,
  List,
  Card,
  Icon,
  Label,
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
      id: 0,
      title:'Grecja',
      price: 1800,
      url:
        "https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 1,
      title:'Szczecin',
      price: 150,
      url:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
    },
    {
      id: 2,
      title:'Tokyo',
      price: 3800,
      url:
        "https://images.unsplash.com/photo-1492428750937-c93ff58fe46c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title:'Bankok',
      price: 4200,
      url:
        "https://images.unsplash.com/photo-1501333899216-493b82f53fc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 4,
      title:'Google Earth',
      price: 10,
      url:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 5,
      title:'Google Maps',
      price: 2.5,
      url:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
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
                            src={e.url}
                            className="OffersList__cardImage"
                          />
                          <Card.Content>
                            <Header floated="right">
                              <Label as="a" tag color="blue">
                                <Icon name="dollar" />
                                {e.price}
                              </Label>
                            </Header>
                            <Card.Header>{e.title}</Card.Header>
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
