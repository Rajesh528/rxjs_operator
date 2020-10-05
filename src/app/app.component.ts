import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { from } from 'rxjs/observable/from';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { interval } from 'rxjs/observable/interval';
import { mapTo } from 'rxjs/operator/mapTo';
import { merge } from 'rxjs/operator/merge';
import { pluck } from 'rxjs/operator/pluck';
import { switchMap } from 'rxjs/operator/switchMap';
import { observable } from 'rxjs/symbol/observable';
// import {switchMap} from 'rxjs/operators';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
 constructor() {
// High order function
  //example 1  
//  var newone = Observable.interval(1000).take(4);  
// var two = newone.map(x=>x +"123");
// two.subscribe(x=>{
//   console.log(x);
// });
// var three = Observable.of(1,2,3);
// three.subscribe(x=>console.log(x));

// var higher = Observable.interval(1000).take(4);
// var order = higher.map(x=>Observable.of(1,2));
// order.subscribe(c=>c.subscribe(y=>console.log(y)));
var click= Observable.fromEvent(document, "click");

// var clock_map =  click.map(r=>Observable.interval(1000).take(10));
// clock_map.subscribe(out=>out.subscribe(ine=>console.log(ine)));

// var clock_switchMap =  click.switchMap(r=>Observable.interval(1000));
// clock_switchMap.subscribe((c:any)=>console.log(c));


// var clock_switchMap =  click.switchMap(r=>Observable.interval(1000));
// clock_switchMap.subscribe((c:any)=>console.log(c));


// var clock_exhaustMap =  click.exhaustMap(r=>Observable.interval(1000).take(10));
// clock_exhaustMap.subscribe((c:any)=>console.log(c));

 
// var clock_concatMap=  click.concatMap(r=>Observable.interval(1000).take(10));
// clock_concatMap.subscribe((c:any)=>console.log(c));
// var clock_concatMap=  click.flatMap(r=>Observable.interval(1000).take(10));
// clock_concatMap.subscribe((c:any)=>console.log(c));
// .......................................

var newone = Observable.create(observer=>{
  observer.next(5);
  observer.next(6);
  observer.error(new Error ("don't do over") );
  observer.next(56);
  observer.complete();
})

newone.subscribe(v=>{
  console.log(v);
},e=>{
  console.log(e);
},c=>{
  console.log("am done");
});

//..................



// const arr1 = Observable.of(1,2,3,4,5)
// const arr2 = Observable.of("a","b","c");
// var concat_Timer = arr1.concat(arr2);
// console.log("......"); concat_Timer.subscribe(y=>{
//   console.log(y +"concat");
// });

//.............
// const source = from([
//   { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
//   //will return undefined when no job is found
//   { name: 'Sarah', age: 35,job: { title: 'Developer1', language: 'JavaScript' } }
// ]);
// const example = source.pipe(pluck( 'name'));
// const subscribe = example.subscribe(val => console.log(val));

}
}