import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as m,i as f}from"./assets/vendor-77e16229.js";document.querySelector(".field");const h=document.querySelector("#datetime-picker");let r=0;const e=document.querySelector("[data-start]");e.classList.add("not-active");e.disabled=!0;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<Date.now()&&f.show({title:"Error",message:"Illegal operation",position:"topRight",color:"red"}),e.disabled=!1,e.classList.remove("not-active"),e.classList.add("is-active"),r=t[0]}};console.log(r);function o(t){return String(t).padStart(2,"0")}function v(t){const s=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:a,minutes:u,seconds:l}}e.addEventListener("click",p);function p(){const t=setInterval(()=>{const c=Date.now();e.disabled=!0,e.classList.remove("is-active"),e.classList.add("not-active");const n=r-c,{days:i,hours:d,minutes:s,seconds:a}=v(n);n>0?(document.querySelector("[data-days]").textContent=o(i),document.querySelector("[data-hours]").textContent=o(d),document.querySelector("[data-minutes]").textContent=o(s),document.querySelector("[data-seconds]").textContent=o(a)):clearInterval(t)},1e3)}m(h,y);
//# sourceMappingURL=commonHelpers.js.map
