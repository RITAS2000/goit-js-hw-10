import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as y,i as f}from"./assets/vendor-BbSUbo7J.js";y("#datetime-picker",{enableTime:!0,time_24hr:!0,locale:{firstDayOfWeek:1,weekdays:{shorthand:["Su","Mo","Tu","We","Th","Fr","Sa"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}},onClose(e){console.log(e[0])},dateFormat:"Y-m-d H:i",defaultDate:new Date});const t=document.querySelector("#datetime-picker"),o=document.querySelector("button[data-start]"),D=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),v=document.querySelector("[data-seconds]");let r=null;const s=e=>{const n=e.getFullYear()+"-"+String(e.getMonth()+1).padStart(2,"0")+"-"+String(e.getDate()).padStart(2,"0")+" "+String(e.getHours()).padStart(2,"0")+":"+String(e.getMinutes()).padStart(2,"0");t.value=n};setInterval(()=>{r||s(new Date)},1e3);t.addEventListener("change",()=>{const e=new Date(t.value);e<new Date?f.show({title:"Error",message:"You selected a valid future date.",position:"topRight",color:"#EF4040",timeout:3e3}):(r=e,s(r))});t.addEventListener("change",()=>{const e=new Date;new Date(t.value)>e?(o.style.backgroundColor="#4E75FF",o.style.color="#FFFFFF"):(o.style.backgroundColor="",o.style.color="")});o.addEventListener("mouseenter",l);o.addEventListener("mouseleave",c);function l(){const e=new Date;new Date(t.value)>e&&(o.style.backgroundColor="#6C8CFF")}function c(){const e=new Date;new Date(t.value)>e&&(o.style.backgroundColor="#4E75FF")}o.addEventListener("click",()=>{const e=new Date(t.value);F(e),h()});function F(e){const n=setInterval(()=>{const a=e-new Date;if(a<=0)clearInterval(n),p();else{const d=Math.floor(a/864e5),u=Math.floor(a%(1e3*60*60*24)/(1e3*60*60)),i=Math.floor(a%(1e3*60*60)/(1e3*60)),m=Math.floor(a%(1e3*60)/1e3);D.textContent=String(d).padStart(2,"0"),S.textContent=String(u).padStart(2,"0"),g.textContent=String(i).padStart(2,"0"),v.textContent=String(m).padStart(2,"0")}},1e3)}function h(){t.disabled=!0,o.disabled=!0,o.style.backgroundColor="",o.style.color="",t.style.borderColor="#808080",t.style.backgroundColor="#FAFAFA",t.style.color="#808080",o.removeEventListener("mouseenter",l),o.removeEventListener("mouseleave",c)}function p(){t.disabled=!1,o.disabled=!1,t.style.borderColor="",t.style.backgroundColor="",t.style.color=""}
//# sourceMappingURL=1-timer.js.map
