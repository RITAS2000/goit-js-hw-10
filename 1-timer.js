import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as u,i as m}from"./assets/vendor-BbSUbo7J.js";let n=null,a;const s=document.querySelector("#datetime-picker"),t=document.querySelector("button[data-start]");t.disabled=!0;const f=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),h=document.querySelector("[data-minutes]"),y=document.querySelector("[data-seconds]");u("#datetime-picker",{enableTime:!0,time_24hr:!0,minuteIncrement:1,locale:{firstDayOfWeek:1,weekdays:{shorthand:["Su","Mo","Tu","We","Th","Fr","Sa"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}},onClose(o){if(o.length>0){const r=o[0];if(r.getTime()<Date.now()){m.show({title:"Error",titleColor:"#FFFFFF",message:"Please choose a date in the future",messageColor:"#FFFFFF",position:"topRight",color:"#EF4040",timeout:3e3,iconColor:"#fff",iconUrl:"/img/octagon.svg"}),t.disabled=!0;return}n=r,t.disabled=!1}},dateFormat:"Y-m-d H:i",defaultDate:new Date});t.addEventListener("click",()=>{F(n),s.disabled=!0,t.disabled=!0});function F(o){a&&clearInterval(a),a=setInterval(()=>{const e=o-new Date;if(e<=0)clearInterval(a),s.disabled=!1,t.disabled=!0;else{const d=Math.floor(e/864e5),i=Math.floor(e%(1e3*60*60*24)/(1e3*60*60)),l=Math.floor(e%(1e3*60*60)/(1e3*60)),c=Math.floor(e%(1e3*60)/1e3);f.textContent=String(d).padStart(2,"0"),S.textContent=String(i).padStart(2,"0"),h.textContent=String(l).padStart(2,"0"),y.textContent=String(c).padStart(2,"0")}},1e3)}
//# sourceMappingURL=1-timer.js.map
