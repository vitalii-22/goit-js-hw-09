import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const r="feedback-form-state",a=document.querySelector(".feedback-form"),m=a.elements.message,o=a.elements.email;a.addEventListener("submit",l);a.addEventListener("input",c);i();function l(e){e.preventDefault(),localStorage.removeItem(r),console.log({email:`${e.currentTarget.elements.email.value.trim()}`,message:`${e.currentTarget.elements.message.value.trim()}`}),e.currentTarget.reset()}function c(e){const t=e.currentTarget.elements.email.value.trim(),s=e.currentTarget.elements.message.value.trim();localStorage.setItem(r,JSON.stringify({email:`${t}`,message:`${s}`}))}function i(){const e=localStorage.getItem(r),t=JSON.parse(e);if(t){const{email:s,message:n}=t;m.value=n,o.value=s}}
//# sourceMappingURL=commonHelpers2.js.map