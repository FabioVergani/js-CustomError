//#customError.js - usage: useCustomErrorIn(targetWindow);
const useCustomErrorIn=w=>{
	const E=w.Error,
	t=E.captureStackTrace,
	p=w.Object.defineProperty,
	n=(e,i)=>p(e,'name',{value:i}),
	f=(e,i)=>w[i]=n(e,i),
	C=f(class extends E{constructor(s){super(s);const e=this,c=e.constructor;t(n(e,c.name),c)}},'CustomError');
	w.defineCustomError=i=>{f(class extends C{constructor(s,i=s,x=null){super(s);p(p(p(this,'value',{value:i}),'valueOf',{value:()=>i}),'data',{value:x})}},i)};
}