import{i as r}from"./vue-demi.6e7a88e9.js";import{au as p,r as u,aa as l}from"./@vue.5cbf77f7.js";/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const f=Symbol();var o;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(o||(o={}));function _(){const t=p(!0),s=t.run(()=>u({}));let c=[],i=[];const a=l({install(e){a._a=e,e.provide(f,a),e.config.globalProperties.$pinia=a,i.forEach(n=>c.push(n)),i=[]},use(e){return!this._a&&!r?i.push(e):c.push(e),this},_p:c,_a:null,_e:t,_s:new Map,state:s});return a}export{_ as c};
