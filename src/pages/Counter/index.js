import { connect } from 'react-redux';

const Counter = (props) => {
  return (
    <div>
      <button onClick={props.minus}>minus</button>
      <span style={{ margin: '0 10px' }}>{props.count}</span>
      <button onClick={props.plus}>plus</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch) => ({
  plus: dispatch.counter.plus,
  minus: dispatch.counter.minus,
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
