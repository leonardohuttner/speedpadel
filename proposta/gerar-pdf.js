const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();
await p.goto('file://'+process.argv[2]+'/proposta.html',{waitUntil:'load'});await p.evaluate(()=>document.fonts.ready);
await p.pdf({path:process.argv[2]+'/proposta.pdf',format:'A4',printBackground:true,preferCSSPageSize:true});
// overflow check
console.log(await p.$$eval('.page',ps=>ps.map((x,i)=>i+1+':'+(x.scrollHeight>x.clientHeight+2?'OVERFLOW '+(x.scrollHeight-x.clientHeight):'ok')).join(' ')));
await b.close();})();
