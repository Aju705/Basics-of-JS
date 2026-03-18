/* 
Javascript- 
                synchronus >> line by line code execution
                single threaded >> everthing will be run on single thread
*/


/* 
Execution Context >>
                        > execute one line of code at at timeout
                        > each operation waits for previous operation to complete
*/


/*
Blocking code  >> blocks the flow of program  >>  read file synchronusly
non blocking code  >> do not block the flow of program  >>  read file asynchronusly
*/


/*
call stack gets created when program runs
global execution context
function gets loaded - and unloaded once the function gets completed

>>Task Queue -> 
when there is an asyn call then task is assigned to 'register call back' and it is 
responsible for the adding async tasks to 'Task Queue' and once the time come 
tasl queue push this task to 'call stack' and it gets executed immidiately 


>> High Priority queue (promise queue) -> it is similar to task queue it just the task handled here are high priority
*/




