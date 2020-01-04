console.log(1);

const {
            Observable,
            Subject,
            ReplaySubject,
            from,
            of ,
            range,
            fromEvent,
            timer,
} = rxjs;

const {
        map,
        filter,
        switchMap,
        scan,
        groupBy
} = rxjs.operators;


export function start(){
    
    //console.log("1");
    // console.log(twees);
    // console.log(trends);
    // trends = from(tweets[0].trends);
    // trendCloud(trends);
}
        
// Data from twiiter API trends
function trendCloud(observable){
          // timer(0, 500).subscribe(
    observable.pipe(
        map(({name}) => name)
    ).subscribe(val => console.log(val));
}

        // 搜索框得到id的值进行rxjs 的及时更替

        //merge ?? 哪些