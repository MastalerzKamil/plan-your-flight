import "./index.css";
import "semantic-ui-css/semantic.min.css";

import React from "react";
import { Divider, Grid, Segment, Image, Header, Icon } from "semantic-ui-react";

let availableStates = [
  [
    {
      id: 0,
      url:
        "https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 1,
      url:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
    }
  ],
  [
    {
      id: 2,
      url:
        "https://images.unsplash.com/photo-1492428750937-c93ff58fe46c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      url:
        "https://images.unsplash.com/photo-1501333899216-493b82f53fc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    }
  ],
  [
    {
      id: 4,
      url:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 5,
      url:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    }
  ]
];

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: this.props.counter };
  }

  isFinished = () => this.state.counter >= availableStates.length;

  onImageClicked() {
    // TODO: this is the place where we should ask user another question
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div className="QuestionForm">
        <div className='QuestionForm__title'>Spróbujmy wybrać razem kierunek</div>
        <div className='QuestionForm__subtitle'>Aby nic nie sugerować wybierz zdjęcie miejsca które bardziej Ci się podoba</div>
        <Segment placeholder>
          {this.isFinished() ? (
            <Header as="h2" icon textAlign="center">
              <Icon name="code" circular />
              <Header.Content>Done! get more suggestions ;)</Header.Content>
            </Header>
          ) : (
            <Grid columns={2} stackable textAlign="center">
              <Divider vertical>Or</Divider>

              <Grid.Row>
                <Grid.Column>
                  <div
                    className="img-hover-zoom"
                    onClick={() => this.onImageClicked()}
                  >
                    <Image
                      src={availableStates[this.state.counter][0].url}
                      fluid
                    />
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div
                    className="img-hover-zoom"
                    onClick={() => this.onImageClicked()}
                  >
                    <Image
                      src={availableStates[this.state.counter][1].url}
                      fluid
                    />
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          )}
        </Segment>
      </div>
    );
  }
}

QuestionForm.defaultProps = {
  counter: 0
};

export default QuestionForm;
