import{i as l}from"./assets/octagon-CEVKFbtH.js";/* empty css                      */import{i as s}from"./assets/vendor-BbbuE1sJ.js";const r="data:image/svg+xml,%3csvg%20width='22'%20height='20'%20viewBox='0%200%2022%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.75001%2010C1.74979%208.55176%202.13082%207.12893%202.85482%205.87459C3.57882%204.62026%204.62026%203.57861%205.87445%202.85437C7.12865%202.13013%208.5514%201.74881%209.99969%201.74876C11.448%201.7487%2012.8708%202.1299%2014.125%202.85405C14.2972%202.95193%2014.5011%202.97775%2014.6922%202.92586C14.8833%202.87397%2015.0462%202.74858%2015.1452%202.57707C15.2442%202.40555%2015.2714%202.20183%2015.2208%202.01036C15.1702%201.81888%2015.0459%201.65521%2014.875%201.55505C13.0163%200.481918%2010.8554%200.0520769%208.72754%200.332185C6.59964%200.612294%204.62362%201.5867%203.10594%203.10428C1.58826%204.62186%200.613733%206.59782%200.333488%208.7257C0.0532427%2010.8536%200.482945%2013.0145%201.55595%2014.8733C2.62896%2016.732%204.28531%2018.1848%206.26813%2019.0063C8.25094%2019.8278%2010.4494%2019.9721%2012.5226%2019.4168C14.5958%2018.8615%2016.4278%2017.6377%2017.7345%2015.9351C19.0413%2014.2325%2019.7497%2012.1463%2019.75%2010C19.75%209.80113%2019.671%209.61037%2019.5303%209.46972C19.3897%209.32906%2019.1989%209.25005%2019%209.25005C18.8011%209.25005%2018.6103%209.32906%2018.4697%209.46972C18.329%209.61037%2018.25%209.80113%2018.25%2010C18.25%2012.1881%2017.3808%2014.2865%2015.8336%2015.8337C14.2865%2017.3809%2012.188%2018.25%2010%2018.25C7.81198%2018.25%205.71356%2017.3809%204.16638%2015.8337C2.61921%2014.2865%201.75001%2012.1881%201.75001%2010Z'%20fill='white'/%3e%3cpath%20d='M21.031%203.03097C21.1007%202.96124%2021.156%202.87846%2021.1938%202.78735C21.2315%202.69624%2021.2509%202.59859%2021.2509%202.49997C21.2509%202.40135%2021.2315%202.3037%2021.1938%202.2126C21.156%202.12149%2021.1007%202.0387%2021.031%201.96897C20.9612%201.89924%2020.8785%201.84392%2020.7873%201.80619C20.6962%201.76845%2020.5986%201.74902%2020.5%201.74902C20.4014%201.74902%2020.3037%201.76845%2020.2126%201.80619C20.1215%201.84392%2020.0387%201.89924%2019.969%201.96897L9.99997%2011.9395L6.03097%207.96897C5.96124%207.89924%205.87846%207.84392%205.78735%207.80619C5.69624%207.76845%205.59859%207.74902%205.49997%207.74902C5.40136%207.74902%205.3037%207.76845%205.2126%207.80619C5.12149%207.84392%205.0387%207.89924%204.96897%207.96897C4.89924%208.0387%204.84392%208.12149%204.80619%208.21259C4.76845%208.3037%204.74902%208.40135%204.74902%208.49997C4.74902%208.59859%204.76845%208.69624%204.80619%208.78735C4.84392%208.87846%204.89924%208.96124%204.96897%209.03097L9.46897%2013.531C9.53864%2013.6008%209.6214%2013.6562%209.71252%2013.694C9.80364%2013.7318%209.90132%2013.7513%209.99997%2013.7513C10.0986%2013.7513%2010.1963%2013.7318%2010.2874%2013.694C10.3785%2013.6562%2010.4613%2013.6008%2010.531%2013.531L21.031%203.03097Z'%20fill='white'/%3e%3c/svg%3e",o=document.querySelector(".form");function m(e,C){return new Promise((i,t)=>{setTimeout(()=>{C==="fulfilled"?i(e):t(e)},e)})}o.addEventListener("submit",e=>{e.preventDefault();const C=Number(o.elements.delay.value),i=o.elements.state.value;m(C,i).then(t=>{s.show({title:"OK",titleColor:"#FFFFFF",message:`Fulfilled promise in ${t}ms`,messageColor:"#FFFFFF",position:"topRight",color:"#59a10d",iconUrl:r})}).catch(t=>{s.show({title:"Error",titleColor:"#FFFFFF",message:`Rejected promise in ${t}ms`,messageColor:"#FFFFFF",position:"topRight",color:"#ef4040",iconUrl:l})}),o.reset()});
//# sourceMappingURL=2-snackbar.js.map
