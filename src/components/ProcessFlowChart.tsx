import { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: '1. Clear Setup & Next Steps' },
    position: { x: 400, y: 0 },
    style: { 
      background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-foreground)))',
      color: 'white',
      border: '2px solid hsl(var(--primary))',
      borderRadius: '12px',
      padding: '15px',
      minWidth: '240px',
      textAlign: 'center',
      fontSize: '16px',
      fontWeight: '700'
    },
  },
  {
    id: '2',
    data: { label: '2. Financial Info Collected' },
    position: { x: 400, y: 120 },
    style: { 
      background: 'hsl(var(--card))',
      border: '2px solid hsl(var(--border))',
      borderRadius: '12px',
      padding: '15px',
      minWidth: '240px',
      textAlign: 'center',
      fontSize: '16px',
      fontWeight: '700'
    },
  },
  {
    id: '3',
    data: { label: '3. Numbers Reviewed' },
    position: { x: 400, y: 240 },
    style: { 
      background: 'hsl(var(--card))',
      border: '2px solid hsl(var(--border))',
      borderRadius: '12px',
      padding: '15px',
      minWidth: '240px',
      textAlign: 'center',
      fontSize: '16px',
      fontWeight: '700'
    },
  },
  {
    id: '4',
    data: { label: '4. Business Interview' },
    position: { x: 400, y: 360 },
    style: { 
      background: 'hsl(var(--card))',
      border: '2px solid hsl(var(--border))',
      borderRadius: '12px',
      padding: '15px',
      minWidth: '240px',
      textAlign: 'center',
      fontSize: '16px',
      fontWeight: '700'
    },
  },
  {
    id: '5',
    data: { label: '5. Supporting Documents' },
    position: { x: 100, y: 480 },
    style: { 
      background: 'hsl(var(--card))',
      border: '2px solid hsl(var(--border))',
      borderRadius: '12px',
      padding: '15px',
      minWidth: '240px',
      textAlign: 'center',
      fontSize: '16px',
      fontWeight: '700'
    },
  },
  {
    id: '6',
    data: { label: '6. Clarifications' },
    position: { x: 700, y: 480 },
    style: { 
      background: 'hsl(var(--card))',
      border: '2px solid hsl(var(--border))',
      borderRadius: '12px',
      padding: '15px',
      minWidth: '240px',
      textAlign: 'center',
      fontSize: '16px',
      fontWeight: '700'
    },
  },
  {
    id: '7',
    data: { label: '7. Best-Method Valuation' },
    position: { x: 400, y: 600 },
    style: { 
      background: 'hsl(var(--secondary))',
      border: '2px solid hsl(var(--secondary))',
      borderRadius: '12px',
      padding: '15px',
      minWidth: '240px',
      textAlign: 'center',
      fontSize: '16px',
      fontWeight: '700'
    },
  },
  {
    id: '8',
    data: { label: '8. Draft Review (Strategic)' },
    position: { x: 400, y: 720 },
    style: { 
      background: 'hsl(var(--card))',
      border: '2px solid hsl(var(--border))',
      borderRadius: '12px',
      padding: '15px',
      minWidth: '240px',
      textAlign: 'center',
      fontSize: '16px',
      fontWeight: '700'
    },
  },
  {
    id: '9',
    type: 'output',
    data: { label: '9. Final Valuation Delivered' },
    position: { x: 400, y: 840 },
    style: { 
      background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-foreground)))',
      color: 'white',
      border: '2px solid hsl(var(--primary))',
      borderRadius: '12px',
      padding: '15px',
      minWidth: '240px',
      textAlign: 'center',
      fontSize: '16px',
      fontWeight: '700'
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--primary))' },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    animated: true,
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--primary))' },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    animated: true,
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--primary))' },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    style: { stroke: 'hsl(var(--muted-foreground))', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--muted-foreground))' },
    label: 'If needed',
  },
  {
    id: 'e4-6',
    source: '4',
    target: '6',
    style: { stroke: 'hsl(var(--muted-foreground))', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--muted-foreground))' },
    label: 'If needed',
  },
  {
    id: 'e5-7',
    source: '5',
    target: '7',
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--primary))' },
  },
  {
    id: 'e6-7',
    source: '6',
    target: '7',
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--primary))' },
  },
  {
    id: 'e4-7',
    source: '4',
    target: '7',
    animated: true,
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--primary))' },
    label: 'Direct path',
  },
  {
    id: 'e7-8',
    source: '7',
    target: '8',
    style: { stroke: 'hsl(var(--muted-foreground))', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--muted-foreground))' },
    label: 'If strategic',
  },
  {
    id: 'e7-9',
    source: '7',
    target: '9',
    animated: true,
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--primary))' },
    label: 'Direct to final',
  },
  {
    id: 'e8-9',
    source: '8',
    target: '9',
    animated: true,
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'hsl(var(--primary))' },
  },
];

export const ProcessFlowChart = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className="w-full h-[800px] bg-background border rounded-lg">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="bottom-left"
        style={{ background: 'hsl(var(--background))' }}
      >
        <Controls />
        <MiniMap 
          style={{
            background: 'hsl(var(--muted))',
            border: '1px solid hsl(var(--border))',
          }}
          maskColor="hsl(var(--muted) / 0.8)"
        />
        <Background variant={"dots" as any} gap={20} size={1} color="hsl(var(--muted-foreground) / 0.3)" />
      </ReactFlow>
    </div>
  );
};