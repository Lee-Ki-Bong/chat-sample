## step 1

### 필요 패키지 설치

```
yarn add @nestjs/websockets @nestjs/platform-socket.io
```

```
yarn add -D @types/socket.io
```

## step 2

### Websocket Gateway 생성

```
nest g gateway chat --no-spec
```

## step 3

### 통신 클라이언트

```
mkdir socket-client
```

- index.html 생성
- chat-socket.js 생성
- be 에 main.ts cors 처리
- gateway 에 this.server.emit('message', message); 수정
