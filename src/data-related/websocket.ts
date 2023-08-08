import WebSocket from 'ws';
import { WS_PORT } from '../env';


const PORT = WS_PORT || 8080;
const wss: WebSocket.Server = new WebSocket.Server({ port: PORT });

let ws: WebSocket;

wss.on('connection', (socket) => {
  ws = socket;
});


export function wsSendMsg(message: any) {
  if (ws) {
    ws.send(message);
  }
}

export default wsSendMsg;