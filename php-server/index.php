<?php
require_once('./websockets.php');
require_once('./users.php');

class RoomMateServer extends WebSocketServer
{
    function __construct($addr, $port, $bufferLength = 2048) 
    {
        parent::__construct($addr, $port, $bufferLength);
        $this->userClass = 'MyUser';
    }

    protected function process($user, $message) 
    {
        $this->send($user,$message);
    }

    protected function connected($user) 
    {
    }

    protected function closed($user) 
    {
    }
}


$server = new RoomMateServer("0.0.0.0","9000");
try {
    $server->run();
}


catch (Exception $e) {
    $server->stdout($e->getMessage());
}