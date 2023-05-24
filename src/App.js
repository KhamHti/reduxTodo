import React from "react";
import { Grid, Header, Button } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, increaseByAmount } from "./features/counter/counterSlice";

const App = () => {
  const { count } = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <Grid columns={4} centered padded>
      <Grid.Row verticalAlign="middle">
        <Grid.Column textAlign="center">
          <Header size="huge">{count}</Header>
          <Button onClick={() => dispatch(increment())}>Increase +</Button>
          <Button onClick={() => dispatch(decrement())}>Decrease -</Button>
          <Button onClick={() => dispatch(reset())}>Reset</Button>
          <Button onClick={() => dispatch(increaseByAmount('double '))}>multi</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default App;
