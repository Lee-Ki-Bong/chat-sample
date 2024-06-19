import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

/**
[Public & Private & Broadcasting]
socket io에서 이벤트를 송수신하는 방식을 말한다.

public : 이벤트를 송신하게 되면 송신한 자와 수신받는 자 모두 이벤트를 수신받음
broadcasting : 이벤트 송신자는 제외하고 수신자만 이벤트를 수신받음
private : 특정 client에게만 이벤트를 전송함
 */

@WebSocketGateway() // 안에 port와 namespace 설정 가능.
export class ChatGateway {
  @WebSocketServer()
  server: Server; // public 송수신하는 서버.

  @SubscribeMessage('message')
  // handleMessage(client: any, payload: any): void {} // 이렇게도 가능.
  handleMessage(@MessageBody() message: string): void {
    // console.log(`ChatGateway`, message);
    this.server.emit('message', message);
  }
}
