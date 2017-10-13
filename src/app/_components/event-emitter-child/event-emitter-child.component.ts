import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-event-emitter-child',
  templateUrl: './event-emitter-child.component.html',
  styleUrls: ['./event-emitter-child.component.css']
})
export class EventEmitterChildComponent implements OnInit {
  @Input() name: string;
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;

  constructor() { }

  ngOnInit() {
  }

  vote(agreed: boolean) {
    this.onVoted.emit(agreed); // emit parameter's value, agreed, as an Event through onVoted
    this.voted = true;
  }

}
