import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from './model/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  url : string;
  Event : Event;
  EventArr : Event[];
 
  constructor(private http : HttpClient) {
    this.url="http://localhost:3004/Event";
    this.Event = new Event();
    this.EventArr =[];
   }
   insertEvent(Event:Event){
    this.http.post<Event>(this.url,Event).subscribe();
    return "Event Details Added";
  }

  updateEvent(Event:Event){
    this.http.put<Event>(this.url+"/"+Event.id,Event).subscribe();
    return "Event Details Update";
  }

  
  deleteEvent(id : number){
    this.http.delete<Event>(this.url+"/"+id).subscribe();
    return "Event Details Deleted";
  }

  findEvent(id :number){
    this.http.get<Event>(this.url+"/"+id).subscribe(data =>this.Event=data);
    return this.Event;
  }

  findAllEvent(){
    this.http.get<Event[]>(this.url).subscribe(data =>this.EventArr = data);
    return this.EventArr
  }
}
