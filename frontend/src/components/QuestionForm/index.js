import "./index.css";
import "semantic-ui-css/semantic.min.css";

import React from "react";
import { Divider, Grid, Segment, Image } from "semantic-ui-react";

function QuestionForm() {
  function onImageClicked(){
    // TODO: this is the place where we should ask user another question
    console.log('it just works :)');
  }
  return (
    <div className="QuestionForm">
      <Segment placeholder>
        <Grid columns={2} stackable textAlign="center">
          <Divider vertical>Or</Divider>

          <Grid.Row>
            <Grid.Column>
              <div className="img-hover-zoom" onClick={onImageClicked}>
                <Image 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
                  fluid
                />
              </div>
            </Grid.Column>

            <Grid.Column>
              <div className="img-hover-zoom" onClick={onImageClicked}>
                <Image
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
                  fluid
                />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}

export default QuestionForm;
