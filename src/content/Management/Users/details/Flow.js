import { useCallback, useState } from 'react';
import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  MiniMap,
  Controls,
  Background,
  Handle
} from 'reactflow';
import 'reactflow/dist/style.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Tabs, Tab } from '@mui/material';

import initialNodes from './nodes.js';
import initialEdges from './edges.js';
import { Icon } from '@mui/icons-material';

const Flow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (x) => setNodes((newNode) => applyNodeChanges(x, newNode)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (x) => setEdges((eds) => applyEdgeChanges(x, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (x) => setEdges((eds) => addEdge({ ...x, animated: true }, eds)),
    [setEdges]
  );

  //Icons

  return (
    <>
     
          <div style={{ height: '900px' }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              // connectionMode="straight"
              // animated={edge.animated}
              smooth={false}
              type="straight"
            >
              <MiniMap />
              <Controls />
              <Background />
            </ReactFlow>
          </div>
   
    </>
  );
};

export default Flow;
