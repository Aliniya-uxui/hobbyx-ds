import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./createLucideIcon-BXqG86fR.js";var a,o;function s(){return(s=e((()=>{r(),a={name:`check`,size:24,node:[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]},a.node,o=i(a)})))()}function c({size:e=`L`,label:t,description:n,id:r,className:i,...a}){let s=(0,l.useId)(),c=r??s;return(0,u.jsxs)(`label`,{className:[`hx-check`,i].filter(Boolean).join(` `),"data-size":e,htmlFor:c,children:[(0,u.jsxs)(`span`,{className:`hx-check__control`,children:[(0,u.jsx)(`input`,{id:c,type:`checkbox`,...a}),(0,u.jsx)(o,{className:`hx-check__mark`,"aria-hidden":!0})]}),(t||n)&&(0,u.jsxs)(`span`,{className:`hx-check__text`,children:[t&&(0,u.jsx)(`span`,{className:`hx-check__label`,children:t}),n&&(0,u.jsx)(`span`,{className:`hx-check__description`,children:n})]})]})}var l,u;function d(){return(d=e((()=>{l=t(),s(),u=n(),c.__docgenInfo={description:``,methods:[],displayName:`Checkbox`,props:{size:{required:!1,tsType:{name:`union`,raw:`'L' | 'S'`,elements:[{name:`literal`,value:`'L'`},{name:`literal`,value:`'S'`}]},description:`Label text size: L 16 · S 14. Figma property: Size`,defaultValue:{value:`'L'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Figma: Show Text + Label Text`},description:{required:!1,tsType:{name:`string`},description:`Figma: Show Description + Description Text`}},composes:[`Omit`]}})))()}var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{d(),f=n(),p={title:`Components/Checkbox`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],args:{label:`Graded cards only`,description:`Hide raw cards from the results.`}},m={},h={args:{defaultChecked:!0}},g={args:{size:`S`,defaultChecked:!0}},_={args:{description:void 0}},v={render:e=>(0,f.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, auto)`,gap:24},children:[(0,f.jsx)(c,{...e}),(0,f.jsx)(c,{...e,disabled:!0}),(0,f.jsx)(c,{...e,defaultChecked:!0}),(0,f.jsx)(c,{...e,defaultChecked:!0,disabled:!0})]})},y=[`Default`,`Checked`,`Small`,`LabelOnly`,`AllStates`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'S',
    defaultChecked: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    description: undefined
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, auto)',
    gap: 24
  }}>
      <Checkbox {...args} />
      <Checkbox {...args} disabled />
      <Checkbox {...args} defaultChecked />
      <Checkbox {...args} defaultChecked disabled />
    </div>
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as AllStates,h as Checked,m as Default,_ as LabelOnly,g as Small,y as __namedExportsOrder,p as default};