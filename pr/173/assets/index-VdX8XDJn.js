const r=/^m[trblxy]?$/,c=t=>o=>{const n={};return Object.keys(o).forEach(s=>{t(s||"")&&(n[s]=o[s])}),n},e=c(t=>r.test(t)),a=c(t=>!r.test(t));export{e as g,a as o};
