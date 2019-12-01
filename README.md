# js-CustomError
Reusable, extensible, detailed custom error class.
Create custom errors with stack trace (v8)
### Usage
First, create once the error type:
```
defineCustomError('MyError');
```
then, use
```
throw new MyError('oops!');
```
or
```
throw new MyError('evil',666,{detail:'very bad'});
```
