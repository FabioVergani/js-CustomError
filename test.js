//#test.js
(w=>{
	useCustomErrorIn(w);
	const console=w.console, O=w.Object;
	let test=0;
	const f=e=>{
		console.groupCollapsed(++test);
		let label='try → throw';
		try{
			console.group(label);
			console.log(
				[
					'name',
					'type',
					'constructor.name',
					'valueOf',
					"'-'+obj+'-'",
					"1000+obj",
					'toString',
					"'-'+String(e)+'-'",
				'\n'].join(':\u0020%o\n'),
				e.name,
				typeof e,
				e.constructor.name,
				e.valueOf(),
				'-'+e+'-',
				1000+e,
				e.toString(),
				'-'+String(e)+'-',
			);
			console.dir(e);
			console.groupEnd(label);
			throw e
		}catch(error){
			label='catch';
			console.group(label);
			console.error(error);
			const o=error.data;
			if(o){
				for(const [a,b] of O.entries(o)){
					console.log(a+':%O',b)
				}
			};
			console.groupEnd(label);
		};
		console.groupEnd(test)
	};
	//#1
	console.log('Error:%O',Error);
	f(new Error('oops!'));
	//#2
	console.log('CustomError:%O',CustomError);
	f(new CustomError('oops!'));
	//#3
	defineCustomError('MyError');
	console.log('MyError:%O',MyError);
	f(new MyError('oops!'));
	//#4
	f(new MyError(
		'she devil',
		666,
		{
			detail:'very bad'
		}
	));
	//#5
	defineCustomError('MyError2');
	console.log('MyError2:%O',MyError2);
	//#6
	const MyErrorInstance=new MyError2(
		'pippo',
		456,
		{
			detail:'disney'
		}
	);
	console.log('MyErrorInstance instanceof MyError2 ?',MyErrorInstance instanceof MyError2);
	f(MyErrorInstance);
	console.log('%cMyErrorInstance.value=999//not overwrite, good!','color:#aeaeae;font-size:.72rem;');
	MyErrorInstance.value=999;
	f(MyErrorInstance);
})(window);