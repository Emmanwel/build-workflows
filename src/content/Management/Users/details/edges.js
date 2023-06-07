export default [
  // { id: 'el0-1', source: 'start', target: '1' },
  // { id: 'el1-2', source: '1', target: '2' },
  // { id: 'el2-3', source: '2', target: '3', animated: true },
  // { id: 'el2-4', source: '2', target: '4', animated: true },

  // { id: 'el2-5', source: '4', target: '5', animated: true },
  // {id: 'el2-6',    source: '5',    target: '6',    animated: true,    arrowHeadType: 'arrow'  },
  // { id: 'el2-7', source: '5', target: '7', animated: true },
  // { id: 'el6-1', source: '1', target: '6', label: 'Back to Input' },
  // { id: 'el8-finish', source: '8', target: 'finish' }

  { id: 'e1', source: 'start', target: '1', animated: false },
  { id: 'e2', source: '1', target: '2', animated: false },
  { id: 'e3', source: '2', target: '5', animated: false },
  { id: 'e4', source: '2', target: '4', animated: false },
  { id: 'e5', source: '5', target: '3', animated: false },
  { id: 'e6', source: '3', target: '6', animated: false },
  { id: 'e7', source: '6', target: '7', animated: false },
  { id: 'e8', source: '3', target: '7', animated: false },

  { id: 'e8', source: '8', target: 'finish' }
];
