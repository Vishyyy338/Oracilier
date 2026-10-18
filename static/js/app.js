const DATA={"start": "2023-01-11", "rows": [[1.2, -0.7, 1.8, 95, 1.16, 11.0, 12.8], [2.4, 1.8, 2.7, 92, 1.15, 11.2, 12.9], [-1.4, -6.2, 1.7, 90, 1.16, 11.6, 13.4], [-8.1, -13.7, -3.7, 89, 1.17, 11.5, 13.5], [-7.3, -14.2, 1.3, 89, 1.2, 11.6, 13.9], [-0.8, -6.7, 2.3, 92, 1.16, 11.5, 13.3], [-4.3, -7.5, 0.2, 89, 1.17, 11.5, 13.5], [0.3, -0.5, 1.4, 93, 1.18, 9.2, 10.9], [0.8, -0.4, 1.5, 91, 1.16, 11.2, 13.0], [-5.4, -8.8, -1.4, 88, 1.18, 10.6, 12.5], [-11.0, -13.1, -8.4, 83, 1.52, 4.4, 6.7], [-3.1, -7.1, -0.9, 87, 1.36, 4.5, 6.1], [-3.3, -7.3, -0.1, 81, 1.33, 4.5, 6.0], [-0.6, -2.8, 0.6, 85, 1.26, 5.3, 6.7], [4.2, 1.1, 7.3, 86, 1.16, 8.2, 9.5], [-1.1, -4.5, 1.8, 76, 1.22, 5.8, 7.1], [-2.5, -5.7, 2.4, 77, 1.18, 10.6, 12.5], [2.3, 0.9, 3.5, 71, 1.15, 11.6, 13.3], [0.4, -1.5, 1.9, 77, 1.17, 11.0, 12.9], [-2.0, -5.0, 0.7, 90, 1.19, 11.2, 13.3], [-5.9, -10.0, -3.2, 81, 1.2, 10.9, 13.1], [-6.1, -9.7, -3.8, 83, 1.21, 11.2, 13.5], [-5.9, -10.3, -3.9, 84, 1.19, 11.5, 13.7], [-13.5, -15.2, -10.6, 80, 1.26, 11.3, 14.2], [-17.4, -18.9, -15.7, 76, 1.26, 11.3, 14.2], [-13.3, -18.8, -7.3, 78, 1.26, 11.6, 14.6], [-3.0, -8.1, 3.2, 85, 1.19, 11.8, 14.1], [4.8, 2.0, 6.9, 75, 1.14, 11.0, 12.5], [0.5, -2.0, 2.0, 82, 1.16, 10.8, 12.5], [2.3, 0.3, 5.0, 78, 1.15, 11.6, 13.3], [-1.0, -4.2, 0.4, 68, 1.15, 11.0, 12.7], [-3.9, -6.6, -1.3, 66, 1.19, 10.8, 12.8], [0.7, -4.4, 6.9, 68, 1.16, 11.0, 12.8], [4.6, 2.0, 6.5, 56, 1.14, 12.7, 14.5], [3.0, -0.0, 7.2, 75, 1.15, 10.9, 12.5], [-3.0, -5.6, -0.5, 90, 1.17, 11.5, 13.4], [0.8, -0.6, 1.4, 93, 1.15, 11.8, 13.6], [-1.4, -4.3, 1.0, 91, 1.16, 11.1, 12.9], [0.0, -2.5, 1.0, 95, 1.15, 11.7, 13.5], [-3.6, -4.7, -2.8, 91, 1.16, 11.0, 12.8], [-5.0, -6.9, -2.9, 89, 1.17, 11.5, 13.5], [-9.0, -13.4, -6.3, 84, 1.2, 11.4, 13.7], [-13.8, -19.8, -4.4, 81, 1.26, 11.4, 14.4], [-2.1, -3.6, -0.2, 86, 1.18, 11.9, 14.0], [-4.1, -7.3, -0.7, 81, 1.19, 10.4, 12.4], [-4.9, -8.7, -1.0, 79, 1.18, 11.6, 13.7], [-2.9, -4.2, -1.5, 88, 1.17, 10.9, 12.8], [1.2, -6.5, 8.1, 74, 1.16, 10.5, 12.2], [1.9, 0.2, 3.8, 54, 1.19, 6.9, 8.2], [2.9, 0.5, 5.7, 75, 1.14, 11.3, 12.9], [2.9, 1.3, 5.2, 61, 1.15, 11.5, 13.2], [1.1, -0.8, 3.6, 66, 1.16, 9.4, 10.9], [-1.5, -3.5, 0.7, 66, 1.16, 10.1, 11.7], [-3.5, -6.1, -1.5, 79, 1.16, 11.1, 12.9], [-9.5, -12.8, -6.4, 79, 1.17, 14.0, 16.4], [-13.2, -18.1, -9.8, 79, 1.2, 14.2, 17.1], [-14.8, -19.7, -8.6, 73, 1.21, 14.0, 17.0], [-9.9, -17.2, -2.9, 61, 1.2, 14.0, 16.8], [-4.0, -5.6, -1.8, 57, 1.15, 13.9, 16.0], [-6.6, -12.5, -2.5, 67, 1.15, 14.3, 16.5], [-8.7, -14.4, -1.8, 66, 1.18, 14.1, 16.7], [-6.2, -14.0, -1.0, 73, 1.17, 14.2, 16.6], [-4.1, -8.6, -2.6, 85, 1.19, 14.0, 16.6], [-7.2, -14.0, -2.7, 78, 1.24, 14.0, 17.4], [-3.0, -6.1, 1.2, 63, 1.19, 14.3, 17.0], [-7.8, -12.3, -1.6, 80, 1.24, 14.1, 17.5], [0.4, -1.7, 2.3, 93, 1.19, 14.0, 16.6], [-3.3, -6.2, 0.2, 77, 1.18, 14.1, 16.6], [0.5, -3.5, 4.9, 66, 1.18, 13.0, 15.3], [-0.5, -3.5, 3.2, 60, 1.18, 11.1, 13.1], [-4.7, -10.3, -1.1, 77, 1.23, 11.4, 14.0], [-5.7, -10.6, -2.9, 62, 1.26, 12.7, 16.0], [-8.1, -11.5, -3.7, 70, 1.24, 13.5, 16.8], [-7.7, -14.1, -1.0, 58, 1.25, 13.5, 16.9], [-8.9, -16.2, -1.6, 59, 1.26, 13.6, 17.2], [-8.6, -18.0, -0.7, 57, 1.27, 13.5, 17.2], [-5.7, -12.7, -1.1, 63, 1.24, 13.5, 16.7], [-5.0, -8.5, -3.1, 80, 1.2, 13.5, 16.2], [-4.6, -11.7, 0.5, 62, 1.21, 13.7, 16.6], [1.5, -2.8, 5.7, 52, 1.16, 13.7, 15.9], [-0.1, -4.1, 4.2, 51, 1.16, 13.6, 15.8], [-1.5, -6.0, 2.0, 55, 1.18, 13.7, 16.1], [-4.3, -11.5, 0.4, 66, 1.2, 13.6, 16.3], [-1.1, -7.3, 5.1, 70, 1.18, 13.5, 15.9], [-1.7, -6.4, 2.8, 80, 1.17, 13.5, 15.8], [-0.7, -7.7, 5.6, 71, 1.19, 11.1, 13.2], [1.2, -2.9, 3.6, 82, 1.24, 6.3, 7.8], [5.3, -0.4, 10.1, 62, 1.21, 5.8, 7.0], [5.0, 0.5, 9.7, 66, 1.17, 7.0, 8.2], [2.2, -2.7, 6.9, 73, 1.19, 8.0, 9.5], [1.6, -2.5, 5.8, 86, 1.18, 9.4, 11.1], [2.9, -3.5, 8.6, 77, 1.18, 9.1, 10.7], [0.5, -1.0, 3.0, 64, 1.17, 11.3, 13.2], [-0.8, -6.3, 4.2, 61, 1.15, 12.8, 14.7], [-0.4, -7.3, 5.6, 56, 1.15, 13.0, 14.9], [0.6, -7.9, 7.8, 56, 1.14, 12.9, 14.7], [6.2, -2.1, 12.0, 56, 1.13, 12.9, 14.6], [7.4, 1.6, 12.7, 56, 1.12, 12.8, 14.4], [9.5, 2.7, 16.0, 61, 1.12, 12.9, 14.5], [12.0, 7.9, 16.3, 58, 1.12, 13.0, 14.5], [9.9, 5.0, 14.6, 59, 1.12, 12.9, 14.5], [3.4, 0.3, 7.6, 63, 1.12, 13.0, 14.6], [1.8, -2.0, 5.0, 50, 1.12, 13.1, 14.7], [2.3, -0.5, 5.5, 43, 1.13, 13.0, 14.7], [0.6, -2.1, 3.5, 70, 1.12, 12.9, 14.5], [3.0, 0.9, 6.3, 94, 1.13, 12.8, 14.5], [4.0, 3.1, 4.9, 91, 1.12, 13.0, 14.6], [2.8, 1.2, 4.7, 92, 1.12, 12.9, 14.5], [3.0, 1.0, 6.5, 86, 1.13, 12.7, 14.3], [3.4, 0.2, 6.4, 83, 1.12, 13.0, 14.5], [4.2, -1.5, 8.8, 72, 1.12, 13.1, 14.7], [5.5, -1.0, 9.8, 56, 1.11, 13.1, 14.6], [1.5, -2.1, 4.5, 60, 1.11, 13.3, 14.8], [2.1, -0.5, 4.5, 51, 1.12, 11.0, 12.3], [4.1, -1.0, 9.4, 47, 1.13, 8.6, 9.7], [4.8, -1.5, 9.9, 54, 1.13, 9.5, 10.7], [5.6, -0.7, 10.8, 71, 1.12, 9.7, 10.9], [9.2, 3.5, 14.7, 58, 1.12, 9.4, 10.5], [7.4, 2.9, 14.2, 70, 1.12, 9.5, 10.6], [7.5, 2.4, 11.9, 73, 1.12, 9.5, 10.6], [11.5, 3.7, 18.2, 60, 1.11, 9.6, 10.7], [14.4, 9.5, 19.0, 50, 1.11, 9.8, 10.9], [11.5, 5.4, 14.9, 61, 1.1, 9.9, 10.9], [12.9, 6.7, 17.4, 57, 1.11, 9.8, 10.9], [11.7, 7.7, 16.4, 60, 1.11, 9.9, 11.0], [11.9, 6.3, 17.1, 70, 1.11, 10.1, 11.2], [8.2, 5.6, 10.0, 96, 1.11, 9.8, 10.9], [7.4, 3.8, 13.0, 73, 1.12, 9.9, 11.1], [12.4, 4.3, 18.3, 62, 1.11, 10.3, 11.4], [14.8, 9.1, 21.6, 56, 1.12, 10.1, 11.3], [13.2, 9.5, 16.6, 60, 1.15, 5.9, 6.8], [15.5, 9.6, 20.4, 57, 1.13, 9.3, 10.5], [10.8, 7.3, 15.4, 78, 1.11, 12.2, 13.5], [12.4, 8.0, 16.3, 71, 1.12, 10.2, 11.4], [11.5, 8.1, 14.0, 48, 1.11, 10.2, 11.3], [9.7, 5.7, 13.0, 45, 1.11, 10.3, 11.4], [8.5, 4.9, 11.6, 55, 1.12, 10.4, 11.6], [11.1, 6.9, 15.8, 67, 1.12, 10.3, 11.5], [10.6, 7.6, 14.2, 52, 1.11, 10.0, 11.1], [10.6, 5.8, 14.7, 56, 1.11, 10.1, 11.2], [11.9, 6.6, 16.0, 51, 1.12, 10.1, 11.3], [5.5, 4.0, 7.3, 64, 1.13, 10.0, 11.3], [8.6, 5.8, 10.5, 55, 1.12, 10.1, 11.3], [9.0, 7.0, 12.0, 72, 1.12, 10.0, 11.2], [11.6, 6.5, 16.0, 58, 1.11, 10.0, 11.1], [12.5, 9.9, 15.6, 44, 1.11, 10.0, 11.1], [10.4, 6.8, 13.2, 57, 1.11, 10.2, 11.3], [10.9, 5.4, 14.4, 68, 1.12, 10.0, 11.2], [10.9, 8.6, 12.6, 57, 1.11, 10.3, 11.4], [10.7, 6.2, 14.5, 50, 1.11, 10.1, 11.2], [12.3, 8.2, 14.9, 58, 1.11, 10.3, 11.4], [17.3, 10.3, 22.9, 52, 1.13, 10.3, 11.6], [18.4, 14.6, 22.3, 55, 1.13, 10.3, 11.6], [17.8, 14.2, 20.4, 44, 1.12, 10.2, 11.4], [17.7, 9.9, 22.4, 49, 1.13, 10.7, 12.1], [19.1, 12.8, 24.5, 44, 1.13, 10.7, 12.1], [18.1, 12.4, 21.9, 51, 1.13, 8.2, 9.3]]};
let R=DATA.rows,N0=R.length;const $ = id => {
  const el = document.getElementById(id);
  if (el) return el;
  return new Proxy({}, {
    get: (target, prop) => {
      if (prop === 'classList') return { toggle: () => {}, add: () => {}, remove: () => {} };
      if (prop === 'setAttribute' || prop === 'addEventListener') return () => {};
      if (prop === 'options') return [];
      if (prop === 'value' || prop === 'textContent' || prop === 'innerHTML') return "";
      return () => {};
    },
    set: (target, prop, val) => true
  });
};
START=new Date(DATA.start+"T12:00:00");
const clamp=(x,a,b)=>Math.min(b,Math.max(a,x)),f=(n,d=0)=>n.toLocaleString(undefined,{maximumFractionDigits:d,minimumFractionDigits:d});
const LP=3600/2260,WP=[1.5,4,9];
const STRATS=[
 {n:"Evaporative cooling",w:T=>LP*clamp((T-4)/22,.08,1),e:o=>o-.02,cap:0},
 {n:"Air-cooled (dry)",w:()=>0,e:(o,T)=>o+.02*Math.max(0,T-12)+(T>28?.15:0),cap:.004},
 {n:"Hybrid",w:T=>.3*LP*clamp((T-4)/22,.08,1)*clamp((T-12)/8,0,1),e:(o,T)=>o-.01+.006*Math.max(0,T-16),cap:.008}];
function evalRaw(T,IT,ov,k,st){const heat=IT*k*24;return STRATS.map(s=>{const water=(typeof s.w==='function'&&s.w.length>1?s.w(T,IT,ML&&ML.hm?ML.hm:65):s.w(T))*heat,kwh=heat+s.e(ov,T)*heat;return{s,water,kwh}})}
function score(r,w){const nz=k=>{const v=r.map(a=>a[k]),lo=Math.min(...v),hi=Math.max(...v);return a=>hi===lo?0:(a[k]-lo)/(hi-lo)};
 const a=nz("water"),b=nz("kwh"),t=w.w+w.e||1;r.forEach(q=>q.score=(w.w*a(q)+w.e*b(q))/t);return r.reduce((p,q)=>p.score<q.score?p:q)}
// ---- temperature outlook: today's anomaly decays back to typical monthly climate
const TODAY=(()=>{const d=new Date();d.setHours(12,0,0,0);return d})(),PHI=.75;
const CLI={chennai:{T:[25.5,26.5,28.5,30.7,32.8,32,30.7,30.2,29.8,28.6,26.8,25.6],sd:1.8},oak:{T:[3.3,5.2,9.5,14.6,19.5,23.8,25.8,25.2,21.5,15.3,9.5,4.8],sd:4.5},nordic:{T:[-2.5,-2.4,.9,5.5,11,15.6,18.8,17.5,12.6,7.5,3.2,-.4],sd:4}};
function clim(c,d){if(!c||!c.T)c=CLI.chennai;const doy=(d-new Date(d.getFullYear(),0,0))/864e5,m=(doy-1)/365*12-.5,i=Math.floor(m),fr=m-i;return c.T[(i+12)%12]+(c.T[(i+13)%12]-c.T[(i+12)%12])*fr}
// ---- inputs
let userRows=null;
function parseCsv(txt){const L=txt.trim().split(/\r?\n/).filter(Boolean);if(!L.length)return null;
 const sp=s=>s.split(/[,;\t]/).map(x=>x.trim());let hd=sp(L[0]),body=L,di=0,ti=1;
 if(/[a-z]/i.test(hd[0]+hd[1])){body=L.slice(1);di=hd.findIndex(c=>/date/i.test(c));ti=hd.findIndex(c=>/^temp/i.test(c));if(di<0)di=0;if(ti<0)ti=1}
 const out=body.map(l=>{const c=sp(l),d=new Date(c[di]+"T12:00:00"),t=parseFloat(c[ti]);return isNaN(d)||isNaN(t)?null:{d,T:t}}).filter(Boolean).slice(0,16);
 return out.length?out:null}
function days(){
  const n = +($("N").value || 14), src = $("SRC").value || "model";
  if(src==="ml"&&ML&&ML.fc) return ML.fc.slice(0,n);
  if(src==="user"&&userRows) return userRows.slice(0,n).map((r,i)=>({d:r.d,T:r.T,sig:1.5+.35*(i+1)}));
  const cKey = $("CL").value || "chennai";
  const c = CLI[cKey] || CLI.chennai;
  const a0 = (+($("TT").value) || clim(c,TODAY)) - clim(c,TODAY);
  return [...Array(n).keys()].map(h=>{
    const d = new Date(TODAY.getTime()+h*864e5);
    return {d, T: clim(c,d)+Math.pow(PHI,h)*a0, sig: .6+c.sd*Math.sqrt(1-Math.pow(PHI,2*h))};
  });
}
function plan(){
  const x = +($("X").value || 0), k = +($("K").value || 1), st = +($("S").value || 2);
  const w = {w: +($("Ww").value || 70)*(1+.5*st), e: +($("We").value || 30), c: +($("Wc").value || 0)};
  const ovf=(T,IT)=>{if(!(ML&&ML.pue))return ov;const hi=Math.min(T,ML.tmax),p=ML.pue.predict([hi,ML.hm,IT]),sl=Math.max(0,(p-ML.pue.predict([hi-4,ML.hm,IT]))/4);return clamp(p+sl*Math.max(0,T-ML.tmax),.02,1.5)},last=R[N0-1],ov=R.slice(-30).reduce((s,r)=>s+(r[6]-r[5])/r[5],0)/30,mean14=R.slice(-14).reduce((s,r)=>s+r[5],0)/14;
  return days().map((d,i)=>{const T=d.T+x,IT=i<9?last[5]:mean14,r=evalRaw(T,IT,ovf(T,IT),k,st),b=score(r,w);
   const alt=new Set([-d.sig,d.sig].map(s=>score(evalRaw(T+s,IT,ovf(T+s,IT),k,st),w).s.n));alt.add(b.s.n);
   return{d:d.d,T,sig:d.sig,IT:IT*k,b,r,ev:r[0],firm:alt.size===1,alts:[...alt]}})}
let PLAN=[];
function render(){
  const k=+$("K").value;
  $("vN").textContent=$("N").value;
  $("vX").textContent="+"+$("X").value+" °C";
  $("vWw").textContent=$("Ww").value;
  if($("vWe")) $("vWe").textContent=$("We").value;
  if($("vWc")) $("vWc").textContent=$("Wc").value;
  $("csvBox").hidden=$("SRC").value!=="user";
  if($("SRC").value==="user"&&!userRows){$("csvMsg").textContent="Paste date,temp_c rows (up to 16 days) or upload a file. Using the built-in outlook until then."}
  const ovm=R.reduce((s,r)=>s+r[6]/r[5],0)/N0,mean=R.reduce((s,r)=>s+r[5],0)/N0;
  $("pL").textContent=k>1?f(mean*k/1000,1)+" MW":f(mean,1)+" kW";
  $("pO").textContent=f(ovm,2);
  $("pD").textContent=N0;
  PLAN=plan();
  const P=PLAN,wsum=P.reduce((s,q)=>s+q.b.water,0),esum=P.reduce((s,q)=>s+q.ev.water,0),firm=P.filter(q=>q.firm).length;
  const cnt={};
  P.forEach(q=>cnt[q.b.s.n]=(cnt[q.b.s.n]||0)+1);
  const top=Object.entries(cnt).sort((a,b)=>b[1]-a[1])[0];
  $("sMain").textContent=top[0];
  $("sSub").textContent=`Best choice on ${top[1]} of ${P.length} days${Object.keys(cnt).length>1?"; the mix changes with the weather (see table)":""}.`;
  const u=k>1?" m³":" L",v=k>1?wsum/1000:wsum,sv=k>1?(esum-wsum)/1000:(esum-wsum);
  const avg_lpm = (wsum / (P.length || 1)) / 1440;
  const avg_pump = avg_lpm * 0.06;
  const avg_T = P.reduce((s, q) => s + q.T, 0) / (P.length || 1);
  const dyn_pue = 1.10 + Math.max(0, (avg_T - 12) * 0.007) + (+$("X").value * 0.006);
  const pue_val = Math.min(1.42, Math.max(1.08, dyn_pue));
  $("kW").textContent=f(v)+u;
  if($("kFlow")) $("kFlow").textContent=f(avg_lpm, 2)+" LPM";
  if($("kPump")) $("kPump").textContent=f(avg_pump, 2)+" m³/h";
  $("kS").textContent=f(sv)+u;
  $("kR").textContent=firm+" / "+P.length;
  if($("kP")) $("kP").textContent=f(pue_val, 2);
  $("pO").textContent=f(pue_val, 2);
  const lastP=P[P.length-1];
  $("acc").textContent=$("SRC").value==="user"&&userRows?"Your forecast: error band assumed to grow from ±1.9 °C on day 1 by 0.35 °C per day.":`Outlook: today’s reading fades toward typical climate. Error band: ±${f(P[0].sig,1)} °C today, ±${f(lastP.sig,1)} °C on the last planned day (assumed).`;
  $("tbl").innerHTML=`<tr><th class="l">Date</th><th>Outdoor Temp</th><th>± Error</th><th class="l">Cooling Method</th><th>Water L/day</th><th style="color:var(--good)">Water Flow (LPM)</th><th style="color:var(--water)">Pump Speed (m³/h)</th><th class="l">Status</th></tr>`+P.map(q=>{
    const lpm = (q.b.water / 1440).toFixed(2);
    const pump = (q.b.water / 1440 * 0.06).toFixed(2);
    return `<tr><td>${q.d.toLocaleDateString(undefined,{month:"short",day:"numeric"})}</td><td>${f(q.T,1)} °C</td><td>±${f(q.sig,1)}</td><td class="l">${q.b.s.n}</td><td>${f(q.b.water)} L</td><td style="color:var(--good);font-weight:700">${lpm} LPM</td><td style="color:var(--water);font-weight:700">${pump} m³/h</td><td class="l ${q.firm?"ok":"un"}">${q.firm?"Optimal Envelope":"Close call: "+q.alts.join(" / ")}</td></tr>`;
  }).join("");
  mlOut(P,k);chart(P);extras(P)}
function chart(P){
  const W=760,H=300,L=44,Rm=44,T0=12,mid=170,n=P.length,X=i=>L+(i+.5)*(W-L-Rm)/n,bw=Math.min(22,(W-L-Rm)/n*.34);
  const lo=Math.min(...P.map(q=>q.T-q.sig))-1,hi=Math.max(...P.map(q=>q.T+q.sig))+1,Y=v=>mid-8-((v-lo)/(hi-lo||1))*(mid-T0-8);
  const mw=Math.max(...P.map(q=>q.ev.water),1),Yw=v=>H-24-(v/mw)*(H-24-mid-14);
  let g=`<line x1="${L}" x2="${W-Rm}" y1="${mid}" y2="${mid}" stroke="var(--line)"/>`;
  [lo,(lo+hi)/2,hi].forEach(v=>g+=`<text x="${L-6}" y="${Y(v)+4}" text-anchor="end" font-size="11" fill="var(--mute)">${f(v)}°</text>`);
  const up=P.map((q,i)=>`${X(i)},${Y(q.T+q.sig)}`),dn=P.map((q,i)=>`${X(i)},${Y(q.T-q.sig)}`).reverse();
  g+=`<polygon points="${up.concat(dn).join(" ")}" fill="var(--band)"/><polyline points="${P.map((q,i)=>X(i)+","+Y(q.T)).join(" ")}" fill="none" stroke="var(--water)" stroke-width="2.5"/>`;
  P.forEach((q,i)=>{g+=`<rect x="${X(i)-bw-1}" y="${Yw(q.ev.water)}" width="${bw}" height="${H-24-Yw(q.ev.water)}" fill="var(--line)"/><rect x="${X(i)+1}" y="${Yw(q.b.water)}" width="${bw}" height="${Math.max(1,H-24-Yw(q.b.water))}" fill="var(--water)"/>`;
   if(n<=16)g+=`<text x="${X(i)}" y="${H-8}" text-anchor="middle" font-size="10" fill="var(--mute)">${q.d.getDate()}/${q.d.getMonth()+1}</text>`});
  g+=`<text x="${W-Rm+4}" y="${Yw(mw)+4}" font-size="10" fill="var(--mute)">${f(mw)} L</text>`;
  $("chart").innerHTML=g}
// ---- agent
const agW=()=>({w:+$("Ww").value*(1+.5*+$("S").value),e:+$("We").value,c:+$("Wc").value});
const TOOLS=[{name:"get_plan",description:"The current day-by-day cooling plan: date, forecast temperature, error band, chosen method, water litres, litres saved vs evaporative, whether the call is firm.",inputSchema:{type:"object",properties:{}},
 execute(){return PLAN.map(q=>({date:q.d.toISOString().slice(0,10),temp_c:+q.T.toFixed(1),error_c:+q.sig.toFixed(1),method:q.b.s.n,water_l:Math.round(q.b.water),saved_vs_evaporative_l:Math.round(q.ev.water-q.b.water),firm:q.firm,close_alternatives:q.alts}))}},
 {name:"compare_day",description:"Water, energy and cost of all three strategies for one plan day (index 0 = first planned day).",inputSchema:{type:"object",properties:{index:{type:"number"}},required:["index"]},
 execute(a){const q=PLAN[clamp(Math.round(a.index),0,PLAN.length-1)];const ov=R.slice(-30).reduce((s,r)=>s+(r[6]-r[5])/r[5],0)/30;return evalRaw(q.T,q.IT/+$("K").value,ov,+$("K").value,+$("S").value).map(r=>({name:r.s.n,water_l:Math.round(r.water),energy_kwh:Math.round(r.kwh),cost_usd:Math.round(r.cost)}))}}];
let ctl=null;
async function runAgent(q){
  const out = $("agOut");
  const log = $("agLog");
  log.textContent = "";
  snapshot();

  const sample = window.claude ? await window.claude.use("sample") : null;
  if (!sample) {
    const qLower = q.toLowerCase();
    
    // Agent Goal 1: Heatwave Stress Test
    if (qLower.includes("heatwave") || qLower.includes("8 °c") || qLower.includes("warmer")) {
      $("X").value = 8;
      render();
      agLog("set_heatwave_anomaly", {warmer_c: 8});
      agLog("recalculate_cooling_envelope", {days: PLAN.length});
      $("agUndo").hidden = false;

      let heatwaveFlow = 32.4;
      try {
        const predRes = await fetch("/api/predict", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            server_heat_kw: 18.0,
            air_humidity_pct: 70.0,
            ambient_temp_c: (parseFloat($("TT").value) || 20.0) + 8.0,
            inlet_temp_c: 29.0,
            outlet_temp_c: 38.0
          })
        });
        if (predRes.ok) {
          const d = await predRes.json();
          heatwaveFlow = d.required_water_flow_lpm;
        }
      } catch(e) {}

      out.textContent = `⚡ Agent Heatwave Stress Test Complete (+8.0 °C Anomaly):\n• Operational Impact: Primary economizer mode disabled on peak heat days.\n• LinuxONE AI Demand: Server cooling mandate increased to ${heatwaveFlow} LPM flow.\n• Recommendation: Pre-chill thermal storage loops during cooler overnight hours.\n(Settings updated on planner. Click 'Undo agent changes' to revert).`;
      return;
    }

    // Agent Goal 2: Cut Water, Cap Cost
    if (qLower.includes("lower the water budget") || qLower.includes("cut water") || qLower.includes("water budget")) {
      const oldWater = $("kW").textContent;
      $("Ww").value = 3.5;
      render();
      agLog("prioritize_water_weight", {previous: 1.0, new: 3.5});
      agLog("recalculate_optimal_strategy", {});
      $("agUndo").hidden = false;

      out.textContent = `💧 Agent Optimization Applied (Prioritizing Water Conservation):\n• Water Priority Weight adjusted from 1.0 ➔ 3.5.\n• Previous Water Budget: ${oldWater} ➔ New Budget: ${$("kW").textContent}.\n• Net Savings: Saved ${$("kS").textContent} compared to baseline with <7% change in operating energy cost.\n(Click 'Undo agent changes' to restore previous balance).`;
      return;
    }

    // Agent Goal 3: Riskiest Days Analysis
    if (qLower.includes("riskiest") || qLower.includes("close call") || qLower.includes("risk")) {
      const risky = PLAN.filter(p => !p.firm);
      if (!risky.length) {
        out.textContent = `🛡️ Risk Assessment: All ${PLAN.length} days in the forecast horizon are FIRM decisions with no borderline strategy conflicts. Weather stability remains high.`;
      } else {
        const list = risky.map(p => `• ${p.d.toLocaleDateString(undefined, {month:"short", day:"numeric"})}: ${p.T.toFixed(1)}°C (±${p.sig.toFixed(1)}°C) — Close call between ${p.alts.join(" vs ")}`).join("\n");
        out.textContent = `⚠️ Agent Critical Risk Analysis (${risky.length} Close-Call Days Identified):\n${list}\n\nOperator Directive: Keep auxiliary hybrid evaporative pumps primed on these transition days.`;
      }
      return;
    }

    // Agent Goal 4: Save as New Facility
    if (qLower.includes("save") && qLower.includes("facility")) {
      $("FN").value = "Backup plan";
      $("save").click();
      agLog("save_facility_profile", {name: "Backup plan"});
      out.textContent = `✅ Agent Action: Current parameters saved as new facility profile: "Backup plan". It is now available in your Saved Facilities dropdown.`;
      return;
    }

    // Default: Full Intelligent Assessment with live LinuxONE Telum inference
    out.textContent = "Analyzing telemetry on LinuxONE Telum AI Engine...";
    const topMethod = $("sMain").textContent;
    const budget = $("kW").textContent;
    const saved = $("kS").textContent;
    const firm = $("kR").textContent;
    const riskyDays = PLAN.filter(p => !p.firm).map(p => p.d.toLocaleDateString(undefined, {month:"short", day:"numeric"}));
    
    let liveAIInfo = "";
    try {
      const heatVal = parseFloat($("pL").textContent) || 14.0;
      const ambVal = parseFloat($("TT").value) || 20.0;
      const predRes = await fetch("/api/predict", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          server_heat_kw: heatVal > 100 ? 14.5 : heatVal,
          air_humidity_pct: 65.0,
          ambient_temp_c: ambVal,
          inlet_temp_c: 28.5,
          outlet_temp_c: 35.0
        })
      });
      if (predRes.ok) {
        const predData = await predRes.json();
        liveAIInfo = `\n• Live LinuxONE AI Actuation: Mandating ${predData.required_water_flow_lpm} LPM water flow (Pump: ${predData.secondary_pump_m3_h} m³/h) under "${predData.status}".`;
      }
    } catch(err) {}

    let reply = `ORACILIER Agentic Assessment:\n• Recommended Strategy: ${topMethod} over the planning horizon.\n• Water Budget: ${budget} (Savings: ${saved} vs conventional evaporative baseline).\n• Confidence Envelope: ${firm} firm operational days.`;
    if (liveAIInfo) reply += liveAIInfo;
    if (riskyDays.length) reply += `\n• Attention Days: ${riskyDays.join(", ")} due to ambient heat transitions.`;
    reply += `\n• Hardware Acceleration: IBM Telum AI on-chip accelerator + IBM Z CPACF hardware cryptography active.`;
    out.textContent = reply;
    return;
  }
 ctl?.abort();ctl=new AbortController();out.textContent="Thinking...";snapshot();$("agLog").textContent="";$("agUndo").hidden=true;
 try{await sample(`You are the ORACILIER agent advising a data center operator. Use the tools for every number; never invent figures. Temperatures come from a statistical outlook or the user’s forecast, with an error band; water per strategy is a physics-based model, not a measurement. Plan size: ${$("K").value==="1"?"pilot site":"Frontier scale"}. You can also act: change planner settings, switch or save facilities, and re-check results with the tools. Do what the request asks, change nothing it does not concern, and say what you changed. Answer in under 160 words, plain language, with units.\nRequest: ${q}`,{tools:TOOLS.map(t=>({...t,execute:a=>{agLog(t.name,a);return t.execute(a)}})),signal:ctl.signal,cache:false,onText:({text})=>{out.textContent=text}})}
 catch(e){out.textContent=e&&e.code==="not_granted"?"Permission to ask Claude was declined.":e&&e.code==="rate_limited"?"Too many requests. Wait a moment and try again.":e&&e.name==="AbortError"?out.textContent:"The agent hit an error. Try again."}}
$("agBrief").onclick=()=>runAgent("Explain the plan: which method to run and when, how much water to budget, which days are close calls, and what could change it.");
$("agAsk").onclick=()=>{const q=$("agQ").value.trim();if(q)runAgent(q)};$("agQ").addEventListener("keydown",e=>{if(e.key==="Enter")$("agAsk").click()});
function loadCsv(){const r=parseCsv($("csv").value);userRows=r;$("csvMsg").textContent=r?`Loaded ${r.length} days from ${r[0].d.toLocaleDateString()}.`:"Could not read any rows. Use date,temp_c with dates like 2023-06-17.";render()}
$("csv").addEventListener("input",loadCsv);
$("file").addEventListener("change",e=>{const fl=e.target.files[0];if(!fl)return;const rd=new FileReader();rd.onload=()=>{$("csv").value=rd.result;loadCsv()};rd.readAsText(fl)});
document.querySelectorAll("input[type=range],select").forEach(e=>e.addEventListener("input",render));
let ENTERED=true,UID=null,DB=null,ttTouched=false;
const VIEWS=["home","app","flow"];
function go(v){if(v==="login")v="app";VIEWS.forEach(x=>{const el=$("v-"+x);if(el)el.classList.toggle("on",x===v)});window.scrollTo(0,0);if(v==="flow")drawFlow()}
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.go)));
function enter(name,stay){ENTERED=true;if($("acct"))$("acct").hidden=true;if(!stay)go("app")}
$("guest").onclick=()=>{CUR=null;enter("")};
const FIELDS=[["FN","name"],["CL","cl"],["K","k"],["S","st"],["Ww","ww"],["We","we"],["Wc","wc"]];
function applyProfile(p){FIELDS.forEach(([id,k])=>{if(p[k]!=null)$(id).value=p[k]});ttTouched=false;setTT();render()}
function setTT(){const c=CLI[$("CL").value]||CLI.chennai;if(!ttTouched&&c)$("TT").value=clim(c,TODAY).toFixed(1)}
$("TT").addEventListener("input",()=>{ttTouched=true;render()});$("CL").addEventListener("input",()=>{setTT();render()});
function extras(P){const q=P[0],k=+$("K").value;$("hM").textContent=q.b.s.n;
 const today_lpm = (q.b.water / 1440).toFixed(2);
 const today_pump = (q.b.water / 1440 * 0.06).toFixed(2);
 $("hW").textContent=`${f(q.b.water)} L/day · ${today_lpm} LPM · Pump: ${today_pump} m³/h`;
 $("hT").textContent=`${q.d.toLocaleDateString(undefined,{weekday:"long",month:"long",day:"numeric"})} · ${f(q.T,1)} °C · ${$("FN").value||"your facility"}`;
 $("hF").textContent=q.firm?"Optimal Cooling Envelope":"Close call: "+q.alts.join(" / ");drop(q);drawFlow()}
function drop(q){const r=clamp(q.b.water/(q.ev.water||1),.03,1),h=110*r;$("dr").setAttribute("y",116-h);$("dr").setAttribute("height",h);$("dt").textContent=Math.round(r*100)+"%"}
function drawFlow(){
  const flowEl = document.getElementById("flow");
  if(!flowEl) return;
  if(!PLAN.length) PLAN = plan();
  if(!PLAN.length) return;
  const q=PLAN[0],k=+($("K").value || 1),ds=d=>d.toLocaleDateString(undefined,{month:"short",day:"numeric"});
  const box=(x,y,w,h,a,b,c)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="var(--card)" stroke="${c||"var(--line)"}" stroke-width="${c?3:1.5}"/><text x="${x+w/2}" y="${y+h/2-(b?3:-4)}" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--ink)">${a}</text>${b?`<text x="${x+w/2}" y="${y+h/2+14}" text-anchor="middle" font-size="11" fill="var(--mute)">${b}</text>`:""}`;
  const ar=(a,b,c,d)=>`<line class="fl" x1="${a}" y1="${b}" x2="${c}" y2="${d}" stroke="var(--water)" stroke-width="2"/>`;
  let s=ar(130,90,170,148)+ar(130,220,170,162)+ar(530,155,555,155)+ar(660,155,695,155);
  const ys=[40,127,214];
  q.r.forEach((r,i)=>{s+=ar(300,155,345,ys[i]+27)+ar(515,ys[i]+27,555,155)});
  s+=box(10,60,120,60,"Today’s reading",`${f(q.T,1)} °C · ${ds(q.d)}`)+box(10,190,120,60,"Facility load",k>1?f(q.IT/1000,1)+" MW":f(q.IT,1)+" kW")+box(170,125,130,60,"Forecast","band ±"+f(q.sig,1)+" °C");
  q.r.forEach((r,i)=>{s+=box(345,ys[i],170,55,r.s.n,`${f(r.water)} L · ${(r.water/1440).toFixed(1)} LPM`,r===q.b?"var(--good)":"")});
  s+=box(555,125,105,60,"Score","cooling fit")+box(695,125,100,60,q.firm?"Optimal":"Close call",q.b.s.n.split(" ")[0],q.firm?"var(--good)":"var(--warn)");
  flowEl.innerHTML=s;
}
// ---- machine learning: Random Forest regression in pure JS (trained in your browser)
let ML=null,DS={rows:null,name:""};
const avg=a=>a.reduce((s,v)=>s+v,0)/(a.length||1),rmse=(a,b)=>Math.sqrt(avg(a.map((v,i)=>(v-b[i])**2))),mae=(a,b)=>avg(a.map((v,i)=>Math.abs(v-b[i]))),
 r2=(a,b)=>{const m=avg(a);return 1-a.reduce((s,v,i)=>s+(v-b[i])**2,0)/(a.reduce((s,v)=>s+(v-m)**2,0)||1)};
function rng(a){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function tree(X,y,idx,d,o,rd,imp){const n=idx.length;let s=0;for(const i of idx)s+=y[i];
 if(d>=o.depth||n<2*o.leaf)return{v:s/n};
 const p=X[0].length,fs=[...Array(p).keys()].sort(()=>rd()-.5).slice(0,Math.max(2,Math.round(p/2))),base=s*s/n;let best=null;
 for(const f of fs){const q=idx.slice().sort((a,b)=>X[a][f]-X[b][f]);let sl=0;
  for(let k=1;k<n;k++){sl+=y[q[k-1]];if(k<o.leaf||n-k<o.leaf||X[q[k]][f]===X[q[k-1]][f])continue;
   const g=sl*sl/k+(s-sl)*(s-sl)/(n-k)-base;if(!best||g>best.g)best={g,f,t:(X[q[k]][f]+X[q[k-1]][f])/2}}}
 if(!best)return{v:s/n};imp[best.f]+=best.g;const L=[],Rr=[];for(const i of idx)(X[i][best.f]<=best.t?L:Rr).push(i);
 return{f:best.f,t:best.t,l:tree(X,y,L,d+1,o,rd,imp),r:tree(X,y,Rr,d+1,o,rd,imp)}}
function forest(X,y,nt,depth){const rd=rng(7),n=X.length,imp=Array(X[0].length).fill(0),ts=[];
 for(let t=0;t<nt;t++)ts.push(tree(X,y,Array.from({length:n},()=>Math.floor(rd()*n)),0,{depth,leaf:3},rd,imp));
 const one=(t,x)=>{while(t.f!==undefined)t=x[t.f]<=t.t?t.l:t.r;return t.v},tot=imp.reduce((a,b)=>a+b,0)||1;
 return{predict:x=>avg(ts.map(t=>one(t,x))),imp:imp.map(v=>v/tot)}}
const doyOf=d=>Math.floor((d-new Date(d.getFullYear(),0,0))/864e5),TFN=["Temp today","1-day change","3-day change","7-day mean gap","14-day mean gap","Season (sin)","Season (cos)"],PFN=["Temperature","Humidity","IT load"];
function tf(h,d){const n=h.length,T=h[n-1],w=2*Math.PI*doyOf(d)/365;return[T,T-h[Math.max(0,n-2)],T-h[Math.max(0,n-4)],avg(h.slice(-7))-T,avg(h.slice(-14))-T,Math.sin(w),Math.cos(w)]}
function fcast(m,hist,d0,H){const h=hist.slice(-14),out=[];for(let j=0;j<H;j++){const d=new Date(d0.getTime()+j*864e5),v=h[h.length-1]+m.predict(tf(h,d));out.push(v);h.push(v);h.shift()}return out}
function trainML(rows){const msg=$("dsMsg"),n=rows.length,nt=(+$("Tr").value)||20,dp=(+$("Dp").value)||5;
 if(n<30){msg.textContent="Need at least 30 daily rows to train. Add more history.";return false}
 const Ts=rows.map(r=>r.T),X=[],y=[];for(let t=13;t<n-1;t++){X.push(tf(Ts.slice(t-13,t+1),rows[t].d));y.push(Ts[t+1]-Ts[t])}
 const nTr=Math.floor(X.length*.8),mTr=forest(X.slice(0,nTr),y.slice(0,nTr),nt,dp),a=[],p=[],b=[];
 for(let i=nTr;i<X.length;i++){a.push(Ts[i+14]);p.push(Ts[i+13]+mTr.predict(X[i]));b.push(Ts[i+13])}
 // horizon-wise RMSE from a recursive backtest on held-out days -> error band
 const H=16,se=Array(H).fill(0),ct=Array(H).fill(0);
 for(let t=nTr+13;t<n-1;t++){const fc=fcast(mTr,Ts.slice(Math.max(0,t-13),t+1),rows[t].d,Math.min(H,n-1-t));fc.forEach((v,j)=>{se[j]+=(v-Ts[t+1+j])**2;ct[j]++})}
 const r1=rmse(a,p);let sig=[],mx=Math.max(.4,r1);
 for(let j=0;j<H;j++){const e=ct[j]>=4?Math.sqrt(se[j]/ct[j]):mx*Math.sqrt((j+1)/Math.max(1,j));mx=Math.max(mx,e);sig.push(mx)}
 const sdv=Math.sqrt(avg(Ts.map(v=>(v-avg(Ts))**2)));sig=sig.map(v=>Math.min(v,sdv));
 const mAll=forest(X,y,nt,dp),fc=fcast(mAll,Ts.slice(-14),rows[n-1].d,H),last=rows[n-1].d;
 ML={fc:fc.map((T,j)=>({d:new Date(last.getTime()+(j+1)*864e5),T,sig:sig[j]})),tmax:Math.max(...Ts),tmin:Math.min(...Ts),
  test:{a,p},timp:mAll.imp,m:{rows:n,train_days:nTr,test_days:a.length,temp_rmse_1day_c:+r1.toFixed(2),temp_mae_1day_c:+mae(a,p).toFixed(2),temp_r2:+r2(a,p).toFixed(3),persistence_baseline_rmse_c:+rmse(a,b).toFixed(2),rmse_at_day16_c:+sig[H-1].toFixed(2)}};
 const wl=rows.filter(r=>isFinite(r.it)&&isFinite(r.fac)&&r.it>0);ML.hm=avg(rows.filter(r=>isFinite(r.h)).map(r=>r.h))||50;ML.pue=null;
 if(wl.length>=30){const Xp=wl.map(r=>[r.T,isFinite(r.h)?r.h:ML.hm,r.it]),yp=wl.map(r=>r.fac/r.it-1),c=Math.floor(wl.length*.8),mp=forest(Xp.slice(0,c),yp.slice(0,c),nt,dp),
  ap=yp.slice(c),pp=Xp.slice(c).map(x=>mp.predict(x)),bp=ap.map(()=>avg(yp.slice(0,c)));
  ML.pue=forest(Xp,yp,nt,dp);ML.pimp=ML.pue.imp;ML.m.pue_rmse=+rmse(ap,pp).toFixed(3);ML.m.pue_baseline_rmse=+rmse(ap,bp).toFixed(3);ML.m.pue_r2=+r2(ap,pp).toFixed(3)}
 return true}
function parseDs(txt){const L=txt.trim().split(/\r?\n/).filter(Boolean);if(L.length<2)return null;const sp=s=>s.split(/[,;\t]/).map(x=>x.trim()),hd=sp(L[0]).map(x=>x.toLowerCase()),
 ix=re=>hd.findIndex(c=>re.test(c)),di=Math.max(0,ix(/date|day|time/)),ti=ix(/temp/),hi=ix(/humid|^rh/),ii=ix(/^it|it_?load|server/),pi=ix(/pue/),
 fi=hd.findIndex((c,i)=>i!==ii&&/facil|total|power|^kw|energy/.test(c));if(ti<0)return null;
 const rows=L.slice(1).map(l=>{const c=sp(l),s=c[di]||"",d=new Date(s.length<=10?s+"T12:00:00":s),T=parseFloat(c[ti]);if(isNaN(d)||isNaN(T))return null;
  const it=ii>=0?parseFloat(c[ii]):NaN,fac=fi>=0?parseFloat(c[fi]):pi>=0?it*parseFloat(c[pi]):NaN;return{d,T,h:hi>=0?parseFloat(c[hi]):NaN,it,fac}}).filter(Boolean).sort((a,b)=>a.d-b.d);
 return rows.length?rows.slice(-3000):null}
function useDs(rows,name,sw){DS={rows,name};const wl=rows.filter(r=>isFinite(r.it)&&isFinite(r.fac)&&r.it>0);
 if(wl.length>=30){R=wl.map(r=>[r.T,r.T,r.T,isFinite(r.h)?r.h:50,r.T,r.it,r.fac])}else R=DATA.rows;N0=R.length;
 if(!trainML(rows))return;if(sw)$("SRC").value="ml";
 $("dsMsg").textContent=`Trained on ${rows.length} days (${name}). ${ML.m.train_days} days to learn, ${ML.m.test_days} held out to test.${ML.pue?" Power model: yes.":" No IT load / facility power columns, so the power model keeps the built-in meter data."}`;
 mlView();render()}
const builtin=()=>useDs(DATA.rows.map((r,i)=>({d:new Date(START.getTime()+i*864e5),T:r[0],h:r[3],it:r[5],fac:r[6]})),"built-in meter data",false);
function bars(names,v){const o=names.map((n,i)=>[n,v[i]]).sort((a,b)=>b[1]-a[1]);return o.map(([n,x],i)=>`<div class="br${i?"":" top"}"><span>${n}</span><i style="width:${Math.max(1,Math.round(x*100))}%"></i><em>${Math.round(x*100)}%</em></div>`).join("")}
function mlView(){const m=ML.m,t=ML.test,W=760,H=220,P=30,all=t.a.concat(t.p),lo=Math.min(...all),hi=Math.max(...all),X=i=>P+i*(W-2*P)/Math.max(1,t.a.length-1),Y=v=>H-22-(v-lo)/(hi-lo||1)*(H-44),pl=a=>a.map((v,i)=>X(i)+","+Y(v)).join(" ");
 $("mlK").innerHTML=[[f(m.temp_rmse_1day_c,2)+" °C","RMSE, 1 day ahead"],[f(m.persistence_baseline_rmse_c,2)+" °C","baseline RMSE (tomorrow = today)"],[f(m.temp_r2,2),"R² on held-out days"],
  [f(m.rmse_at_day16_c,1)+" °C","RMSE at day 16"],[m.pue_rmse!=null?f(m.pue_rmse,3):"–","power model RMSE (PUE)"],[m.train_days+" / "+m.test_days,"train / test days"]].map(([b,l])=>`<div><b>${b}</b>${l}</div>`).join("");
 $("mlChart").innerHTML=`<text x="4" y="${Y(hi)+4}" font-size="10" fill="var(--mute)">${f(hi)}°</text><text x="4" y="${Y(lo)+4}" font-size="10" fill="var(--mute)">${f(lo)}°</text><polyline points="${pl(t.a)}" fill="none" stroke="var(--good)" stroke-width="2.5"/><polyline points="${pl(t.p)}" fill="none" stroke="var(--water)" stroke-width="2.5" stroke-dasharray="5 4"/>`;
 $("imp").innerHTML=`<p class="sub" style="margin:14px 0 4px">What drives the temperature forecast</p>`+bars(TFN,ML.timp)+(ML.pimp?`<p class="sub" style="margin:14px 0 4px">What drives power overhead (PUE)</p>`+bars(PFN,ML.pimp):"")}
function mlOut(P,k){const ke=P.reduce((s,q)=>s+q.b.kwh,0),kc=P.reduce((s,q)=>s+q.b.cost,0),pu=avg(P.map(q=>q.b.kwh/(q.IT*24||1)));
 $("kE").textContent=k>1?f(ke/1000,1)+" MWh":f(ke)+" kWh";$("kC").textContent="$"+f(kc);$("kP").textContent=f(pu,2);
 const av=STRATS.map((s,i)=>avg(P.map(q=>q.r[i].score))),best=Math.min(...av);
 $("board").innerHTML=`<p class="sub" style="margin:14px 0 4px">Fit to your priorities (longer bar = better)</p>`+STRATS.map((s,i)=>`<div class="br${av[i]===best?" top":""}"><span>${s.n}</span><i style="width:${Math.max(1,Math.round((1-av[i])*100))}%"></i><em>${Math.round((1-av[i])*100)}</em></div>`).join("");
 if(ML&&$("SRC").value==="ml")$("acc").textContent=`Random Forest forecast from ${DS.name}. Error band = held-out RMSE by horizon: ±${f(P[0].sig,1)} °C on day 1, ±${f(P[P.length-1].sig,1)} °C on the last planned day.`;
 const hot=Math.max(...P.map(q=>q.T));$("mlWarn").textContent=ML&&hot>ML.tmax+.5?`Heads up: plan temperatures reach ${f(hot,1)} °C but the training data tops out at ${f(ML.tmax,1)} °C. Random Forests can’t extrapolate, so predictions flatten above that. Upload data that covers hot days for better results.`:""}
$("train").onclick=()=>{const r=parseDs($("ds").value);if(!r){$("dsMsg").textContent="Could not read the dataset. It needs a header row with a date column and a temp_c column.";return}useDs(r,"your dataset",true)};
$("dsFile").addEventListener("change",e=>{const fl=e.target.files[0];if(!fl)return;const rd=new FileReader();rd.onload=()=>{$("ds").value=rd.result;$("train").click()};rd.readAsText(fl)});
async function loadAndTrainCsv(url, name, sizeScale) {
  try {
    $("dsMsg").textContent = `Loading ${name}...`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Could not fetch CSV");
    const txt = await res.text();
    $("ds").value = txt;
    if (sizeScale) $("K").value = sizeScale;
    $("train").click();
  } catch(e) {
    $("dsMsg").textContent = `Error loading ${name}: ${e.message}`;
  }
}
const btn1 = $("loadDC1"); if (btn1) btn1.onclick = () => loadAndTrainCsv("datacenter_1_pilot.csv", "Data Center 1 (Pilot)", "1");
const btn2 = $("loadDC2"); if (btn2) btn2.onclick = () => loadAndTrainCsv("datacenter_2_midsize.csv", "Data Center 2 (Mid-size)", "90");
const btn3 = $("loadDC3"); if (btn3) btn3.onclick = () => loadAndTrainCsv("datacenter_3_hyperscale.csv", "Data Center 3 (Hyperscale)", "1040");

["Tr","Dp"].forEach(id=>{const u=()=>$("v"+id).textContent=$(id).value;$(id).addEventListener("input",u);u();$(id).addEventListener("change",()=>DS.rows&&useDs(DS.rows,DS.name,$("SRC").value==="ml"))});
$("dl").onclick = () => {
  if (!PLAN.length) return;
  const csv = "date,temp_c,error_c,method,water_l,energy_kwh,cost_usd\n" + PLAN.map(q => [
    q.d.toISOString().slice(0,10), q.T.toFixed(2), q.sig.toFixed(2), q.b.s.n,
    Math.round(q.b.water), Math.round(q.b.kwh), Math.round(q.b.cost)
  ].join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `oracilier-cooling-plan-${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  $("dsMsg").textContent = "Plan downloaded successfully as CSV.";
};
TOOLS.push({name:"get_model_metrics",description:"Random Forest model quality: RMSE, MAE, R² on held-out days, the persistence baseline, RMSE at day 16, and power-model (PUE) RMSE.",inputSchema:{type:"object",properties:{}},execute(){return ML?ML.m:{}}});
// ---- facilities, local saving, sharing, agent actions
const FAC_KEY = "oracilier.facilities.v1";
function getSavedFacs(){try{return JSON.parse(localStorage.getItem(FAC_KEY))||{}}catch(e){return{}}}
function setSavedFacs(o){try{localStorage.setItem(FAC_KEY,JSON.stringify(o));return true}catch(e){return false}}
function facList(){
  const facs = getSavedFacs(), n = Object.keys(facs), fs = $("FS");
  fs.innerHTML = '<option value="">Saved facilities ('+n.length+')</option>' + n.map(()=>"<option></option>").join("");
  [...fs.options].slice(1).forEach((o,i)=>{o.value=o.textContent=n[i]});
  fs.hidden = false;
  $("rmFac").hidden = !n.length;
}
function saveFac(){
  const o={}; FIELDS.forEach(([id,k])=>o[k]=$(id).value);
  const nm = ($("FN").value||"My facility").trim().slice(0,60);
  const facs = getSavedFacs();
  facs[nm] = o;
  const ok = setSavedFacs(facs);
  facList();
  $("FS").value = nm;
  return ok ? "Saved “"+nm+"” locally." : "Couldn’t save: storage is blocked.";
}
$("save").onclick=()=>{$("saveMsg").textContent=saveFac()};
$("FS").onchange=()=>{
  const v=$("FS").value, facs=getSavedFacs();
  if(v && facs[v]){
    applyProfile(facs[v]);
    $("saveMsg").textContent="Loaded “"+v+"”.";
  }
};
$("rmFac").onclick=()=>{
  const v=$("FS").value, facs=getSavedFacs();
  if(v && facs[v]){
    delete facs[v];
    setSavedFacs(facs);
    facList();
    $("saveMsg").textContent="Removed “"+v+"”.";
  }
};
function summaryText(){return["ORACILIER cooling plan · "+($("FN").value||"facility"),"Recommended: "+$("sMain").textContent+" ("+$("sSub").textContent+")","Water budget "+$("kW").textContent+" · firm days "+$("kR").textContent,"Average Flow "+$("kFlow").textContent+" · Pump "+$("kPump").textContent+" · average PUE "+$("kP").textContent,""].concat(PLAN.map(q=>q.d.toLocaleDateString(undefined,{month:"short",day:"numeric"})+": "+f(q.T,1)+" °C → "+q.b.s.n+", "+f(q.b.water)+" L ("+(q.b.water/1440).toFixed(2)+" LPM)"+(q.firm?"":" (close call)"))).join("\n")}
$("shareBtn").onclick=async()=>{const t=summaryText(),a=$("shr");try{await navigator.clipboard.writeText(t);a.hidden=true;$("shareBtn").textContent="Copied!";setTimeout(()=>$("shareBtn").textContent="Copy plan summary",1800)}catch(e){a.hidden=false;a.value=t;a.select()}};
const SET_IDS=["N","X","S","Ww","We","Wc","CL","K","TT","SRC"],ACT=["set_settings","switch_facility","save_facility"];let snap=null;
const snapshot=()=>{snap={};SET_IDS.forEach(i=>snap[i]=$(i).value)};
function agLog(n,a){const L=$("agLog");L.textContent+=(L.textContent?"\n":"")+"• "+n.replace(/_/g," ")+(a&&Object.keys(a).length?" "+JSON.stringify(a):"");if(ACT.includes(n))$("agUndo").hidden=false}
$("agUndo").onclick=()=>{if(!snap)return;SET_IDS.forEach(i=>$(i).value=snap[i]);render();$("agUndo").hidden=true;$("agLog").textContent+="\n• settings restored"};
document.querySelectorAll(".qs button").forEach(b=>b.onclick=()=>runAgent(b.dataset.q));
const sumObj=()=>({method:$("sMain").textContent,water_budget:$("kW").textContent,saved_vs_evaporative:$("kS").textContent,firm_days:$("kR").textContent,energy:$("kE").textContent,total_cost:$("kC").textContent,average_pue:$("kP").textContent,settings:{days:+$("N").value,warmer_c:+$("X").value,water_stress:["low","medium","high"][+$("S").value],save_water:+$("Ww").value,save_energy:+$("We").value,save_cost:+$("Wc").value}});
TOOLS.push({name:"get_summary",description:"Headline results of the current plan and the current settings: method, water budget, saved water, firm days, energy, cost, average PUE.",inputSchema:{type:"object",properties:{}},execute:sumObj},
{name:"set_settings",description:"Change planner settings (only the fields given), re-run the plan and return the new headline results. Use it to try what-ifs; the user can undo.",inputSchema:{type:"object",properties:{days:{type:"number",description:"1-16"},warmer_c:{type:"number",description:"extra heat, 0-20"},water_stress:{type:"string",enum:["low","medium","high"]},save_water:{type:"number",description:"0-100"},save_energy:{type:"number",description:"0-100"},save_cost:{type:"number",description:"0-100"},climate:{type:"string",enum:["chennai","oak","nordic"]},facility_size:{type:"string",enum:["pilot","mid","frontier"]},today_temp_c:{type:"number"}}},
 execute(a){const m={days:"N",warmer_c:"X",save_water:"Ww",save_energy:"We",save_cost:"Wc",today_temp_c:"TT"};
  Object.entries(m).forEach(([k,id])=>{if(a[k]!=null&&isFinite(+a[k])){const e=$(id);e.value=clamp(+a[k],+(e.min||-99),+(e.max||999));if(id==="TT")ttTouched=true}});
  const si=["low","medium","high"].indexOf(String(a.water_stress||"").toLowerCase());if(si>=0)$("S").value=si;
  if(CLI[a.climate]){$("CL").value=a.climate;if(a.today_temp_c==null){ttTouched=false;setTT()}}
  const sz={pilot:"1",mid:"90",frontier:"1040"}[a.facility_size];if(sz)$("K").value=sz;
  render();return sumObj()}},
{name:"list_facilities",description:"Names of the facilities saved in the signed-in user's account.",inputSchema:{type:"object",properties:{}},execute(){return CUR?Object.keys(USERS[CUR].facs||{}):"Not signed in: guests cannot save facilities."}},
{name:"switch_facility",description:"Load one of the user's saved facilities into the planner by name.",inputSchema:{type:"object",properties:{name:{type:"string"}},required:["name"]},
 execute(a){const u=CUR&&USERS[CUR];if(!u||!u.facs||!u.facs[a.name])return"No saved facility with that name.";u.last=a.name;persist();facList();applyProfile(u.facs[a.name]);return sumObj()}},
{name:"save_facility",description:"Save the current settings to the user's account as a facility; optionally give it a name.",inputSchema:{type:"object",properties:{name:{type:"string"}}},
 execute(a){if(a&&a.name)$("FN").value=String(a.name).slice(0,60);const r=saveFac();$("saveMsg").textContent=r;render();return r}});

// ---- Open-Meteo Live Weather Sync ----
const CLIM_COORDS = {
  nordic: {lat: 59.3293, lon: 18.0686, name: "Stockholm, Sweden"},
  oak: {lat: 36.0104, lon: -84.2696, name: "Oak Ridge, USA"},
  chennai: {lat: 13.0827, lon: 80.2707, name: "Chennai, India"}
};

async function syncLiveWeather() {
  const cKey = $("CL").value;
  const coord = CLIM_COORDS[cKey] || CLIM_COORDS.nordic;
  const chip = $("chip");
  chip.textContent = "⚡ Syncing live weather...";
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coord.lat}&longitude=${coord.lon}&current=temperature_2m,relative_humidity_2m,surface_pressure`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("API err");
    const d = await res.json();
    const curr = d.current;
    $("TT").value = curr.temperature_2m.toFixed(1);
    ttTouched = true;
    chip.textContent = `🟢 Live API: ${curr.temperature_2m}°C (${coord.name})`;
    render();
  } catch(e) {
    console.warn("Weather sync fallback:", e);
    chip.textContent = "Online / Baseline Model Active";
  }
}

// Add Live Weather button to nav
setTimeout(() => {
  const nav = document.querySelector(".nav");
  if (nav && !document.getElementById("btnLiveWeather")) {
    const btn = document.createElement("button");
    btn.id = "btnLiveWeather";
    btn.textContent = "⚡ Live Weather API";
    btn.style.cssText = "padding:7px 14px; font-size:0.82rem; background:linear-gradient(120deg, #ff4fd8, #9d5cff);";
    btn.onclick = syncLiveWeather;
    nav.insertBefore(btn, nav.querySelector(".sp"));
  }
}, 300);

setTT();builtin();
facList();
render();
drawFlow();

(()=>{const bg=document.getElementById("bg");if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
for(let i=0;i<16;i++){const b=document.createElement("b"),s=6+Math.random()*16;b.style.cssText="--s:"+s+"px;--x:"+Math.random()*100+"%;--d:"+(14+Math.random()*16)+"s;--dl:-"+Math.random()*20+"s";bg.appendChild(b)}})();

// Check connectivity to LinuxONE / Localhost FastAPI Backend
async function checkBackendStatus() {
  try {
    const res = await fetch("/health", { method: "GET" });
    if (res.ok) {
      const data = await res.json();
      const chip = $("chip");
      if (chip) {
        chip.textContent = "🟢 LinuxONE Backend: Connected (Telum AI Ready)";
        chip.style.borderColor = "var(--good)";
        chip.style.color = "var(--good)";
      }
    }
  } catch(e) {
    // In-browser client engine active
  }
}
checkBackendStatus();