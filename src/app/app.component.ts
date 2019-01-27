import { Component } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { RingbellService } from './services/ringbell.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ WebsocketService, RingbellService ]
})
export class AppComponent {
  private message = {
    ping: true
  };

  public audio = null;

  constructor(private ringbellService: RingbellService) {
    ringbellService.messages.subscribe(msg => {
      if (this.audio == null) {
        this.audio = new Audio();
        this.audio.src = 'assets/sound/bell.mp3';
        this.audio.load();
        this.audio.play();
      }
    });
  }

  public ringBell() {
    this.ringbellService.messages.next(this.message);
  }

  public stopBell() {
    if (this.audio != null) {
      this.audio.pause();
      this.audio = null;
    }
  }
}
