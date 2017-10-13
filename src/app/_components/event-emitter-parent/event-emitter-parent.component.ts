import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-emitter-parent',
  templateUrl: './event-emitter-parent.component.html',
  styleUrls: ['./event-emitter-parent.component.css']
})
export class EventEmitterParentComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];

  constructor() { }

  ngOnInit() {
  }

  onVoted(agreed: boolean) {
    // 这里的agreed，由子组件中的事件发射器onVoted发射过来
    console.log(agreed);
    agreed ? this.agreed++ : this.disagreed++;
  }

}
