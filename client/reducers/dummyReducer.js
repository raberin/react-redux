
export default function dummyReducer(state = {}, action) {
  switch (action.type) {
    case 'DUMMY_ACTION':
      return action.value;

    default:
      return state;

  }
}
