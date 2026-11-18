import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./react-DITjJg24.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{a as i,s as a}from"./blocks-DYXAApOk.js";import{a as o,i as s,r as c}from"./FoundationBlocks-BLFLJoxP.js";function l(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{title:`Foundations/Typography`}),`
`,(0,d.jsx)(n.h1,{id:`typography`,children:`Typography`}),`
`,(0,d.jsxs)(n.p,{children:[`One family: `,(0,d.jsx)(n.strong,{children:`Momo Trust Sans`}),` (Google Fonts, SIL Open Font License). Weights 400 / 500 / 600 / 700.`]}),`
`,(0,d.jsxs)(n.p,{children:[`In Figma every text style is named `,(0,d.jsx)(n.code,{children:`text <size>/<leading>/<weight>`}),` — 125 styles in total.
In code they are not 125 classes: a style = `,(0,d.jsx)(n.strong,{children:`size + leading + weight`}),`, combined from three small classes.`]}),`
`,(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:`language-html`,children:`<p class="hx-text-sm hx-font-medium">…</p>          <!-- text small/leading-normal/medium -->
<h2 class="hx-text-2xl-tight hx-font-semibold">…</h2> <!-- text 2x large/leading-none/semibold -->
`})}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:`leading-normal`}),` — fixed line height in px. Body text, multi-line.`]}),`
`,(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:`leading-none`}),` (`,(0,d.jsx)(n.code,{children:`-tight`}),` in code) — line height as a ratio: 120% (10–12 px), 130% (14–20 px), 100% (24 px +). Headings, numbers, single lines.`]}),`
`]}),`
`,(0,d.jsx)(n.h2,{id:`type-scale`,children:`Type scale`}),`
`,(0,d.jsx)(c,{}),`
`,(0,d.jsx)(n.h2,{id:`weights`,children:`Weights`}),`
`,(0,d.jsx)(s,{}),`
`,(0,d.jsx)(n.h2,{id:`notes-from-the-figma-audit`,children:`Notes from the Figma audit`}),`
`,(0,d.jsxs)(n.ul,{children:[`
`,(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:`italic`}),` styles are set in the Regular face (no italic applied). Not carried into code.`]}),`
`,(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:`text extra small/leading-none/medium 10`}),` and `,(0,d.jsx)(n.code,{children:`leading-trim/medium 10`}),` are set in Regular, not Medium.`]}),`
`,(0,d.jsx)(n.li,{children:`No semantic roles yet (Heading, Body, Caption, Price…). Good next step for the DS: name roles on top of this scale.`}),`
`]})]})}function u(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=r(),n(),a(),o()})))()}f();export{u as default};