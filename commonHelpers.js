import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as m,i as f}from"./assets/vendor-77e16229.js";document.querySelector(".field");const h=document.querySelector("#datetime-picker");let d=0;const t=document.querySelector("[data-start]");t.classList.add("not-active");t.disabled=!0;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){if(e[0]<Date.now()){f.show({title:"Error",message:"Illegal operation",position:"topRight",color:"red"}),t.classList.remove("is-active"),t.classList.add("not-active"),t.disabled=!0;return}t.disabled=!1,t.classList.remove("not-active"),t.classList.add("is-active"),d=e[0]}};function o(e){return String(e).padStart(2,"0")}function y(e){const s=Math.floor(e/864e5),a=Math.floor(e%864e5/36e5),u=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:a,minutes:u,seconds:l}}t.addEventListener("click",p);function p(){const e=setInterval(()=>{const r=Date.now();t.disabled=!0,t.classList.remove("is-active"),t.classList.add("not-active");const n=d-r,{days:c,hours:i,minutes:s,seconds:a}=y(n);n>0?(document.querySelector("[data-days]").textContent=o(c),document.querySelector("[data-hours]").textContent=o(i),document.querySelector("[data-minutes]").textContent=o(s),document.querySelector("[data-seconds]").textContent=o(a)):clearInterval(e)},1e3)}m(h,v);
//# sourceMappingURL=commonHelpers.js.map
