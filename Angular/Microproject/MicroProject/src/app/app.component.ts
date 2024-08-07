import { Component } from '@angular/core';
import { EventService } from './event.service';
import { Event } from './model/Event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Event : Event;
  result : string;
  EventArr : Event[];
  flag :boolean;

  constructor(private service: EventService) {
    this.Event = new Event();
    this.result = "";  
    this.EventArr =[];
    this.flag=false;
  }
  insertEvent(data:any){
    this.Event.id = data.id;
    this.Event.EventName = data.EventName;
    this.Event.EventContact=data.EventContact;
    this.Event.EventPlace = data.EventPlace;
    this.Event.EventType = data.EventType;
    this.Event.EventStart = data.EventStart;
    this.Event.EventEnd = data.EventEnd;
    this.result = this.service.insertEvent(this.Event);
  }

  updateEvent(data:any){
    this.Event.id = data.id;
    this.Event.EventName = data.EventName;
    this.Event.EventContact=data.EventContact;
    this.Event.EventPlace = data.EventPlace;
    this.Event.EventType = data.EventType;
    this.Event.EventStart = data.EventStart;
    this.Event.EventEnd = data.EventEnd;
    this.result = this.service.updateEvent(this.Event);
  }

  deleteEvent(data : any){
    this.result = this.service.deleteEvent(data.id);
  }
  findEvent(data : any){
    this.Event = this.service.findEvent(data.id);
    this.result = this.Event.id+" "+this.Event.EventName+" "+this.Event.EventContact+" "+this.Event.EventPlace+" "+
    this.Event.EventType+" "+this.Event.EventStart+" "+this.Event.EventEnd;
  }

  findAllEvent(){
    this.EventArr = this.service.findAllEvent();
    this.flag=true;
  }
  
}
