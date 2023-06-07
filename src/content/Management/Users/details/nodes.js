import FunctionIcon from './FunctionIcon';
export default [
  {
    id: 'start',
    type: 'input',
    data: { label: 'Start' },
    position: { x: 360, y: 30 },
    style: {
      width: 80,
      height: 80,
      borderRadius: '50%',
      border: '1px solid #999999',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      color: 'black'
    }
  },
  {
    id: '1',
    type: 'default',
    data: {
      label: '/*\nComment\n*/ x={List:[{name;"Emmanuel"}]}',
      icon: 'search'
    },
    position: { x: 360, y: 120 },
    style: {
      width: 250,
      height: 70,
      background: 'linear-gradient(to right, #6495ED 15%, #708090 15%)',
      border: '1px solid #999999',
      borderRadius: '8px',
      padding: '10px',

      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      color: 'white'
    }
  },
  {
    id: '2',
    type: 'default',
    data: { label: '/*\nComment\n*/*\n If Condition then \n*/' },
    position: { x: 330, y: 250 },
    style: {
      width: 150,
      height: 40,
      background: 'linear-gradient(to right, #E97451 15%, #708090 15%)',
      border: '1px solid #999999',
      borderRadius: '8px',
      padding: '10px',

      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      color: 'white'
    }
  },
  {
    id: '3',
    type: 'default',
    data: { label: 'Recognize Text Google ' },
    position: { x: 520, y: 250 },
    style: {
      width: 250,
      height: 28,
      background: 'linear-gradient(to right,  #D2042D  15%, #708090 15%)',
      border: '1px solid #999999',
      borderRadius: '8px',
      padding: '10px',

      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      color: 'white'
    }
  },

  {
    id: '4',
    type: 'default',
    data: { label: 'Execute  js code' },
    position: { x: 290, y: 330 },
    style: {
      width: 130,
      height: 33,
      background: 'linear-gradient(to right, #6495ED 15%, #708090 15%)',
      border: '1px solid #999999',
      borderRadius: '8px',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      color: 'white'
    }
  },
  {
    id: '5',
    type: 'default',
    data: { label: 'Delay' },
    position: { x: 550, y: 330 },
    style: {
      width: 150,
      height: 50,
      background: 'linear-gradient(to right,  #FFD700   15%, #708090 15%)',
      border: '1px solid #999999',
      borderRadius: '8px',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      color: 'white'
    }
  },

  {
    id: '6',
    type: 'default',
    data: { label: 'Execute  js code ' },
    position: { x: 550, y: 460 },
    style: {
      width: 150,
      height: 40,
      background: 'linear-gradient(to right, #FFD700 15%, #708090 15%)',
      border: '1px solid #999999',
      borderRadius: '8px',
      padding: '10px',

      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      color: 'white'
    }
  },

  {
    id: '7',
    type: 'default',
    data: { label: 'Log' },
    position: { x: 800, y: 460 },
    style: {
      width: 100,
      height: 40,
      background: 'linear-gradient(to right, #40826D   15%, #708090 15%)',
      border: '1px solid #999999',
      borderRadius: '8px',
      padding: '10px',

      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      color: 'white'
    }
  },

  {
    id: '8',
    type: 'output',
    data: { icon: <FunctionIcon />, label: '(X) Assign Value to variable' },
    position: { x: 290, y: 440 },
    style: {
      width: 220,
      height: 40,
      background: 'gray',
      border: '1px solid #999999',
      borderRadius: '8px',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      text: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      color: 'white'
    }
  },
  {
    id: 'finish',
    type: 'output',
    data: { label: 'Finish' },
    position: { x: 370, y: 650 },
    style: {
      width: 80,
      height: 80,
      borderRadius: '50%',
      border: '1px solid #999999',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      color: 'black'
    }
  }
];
