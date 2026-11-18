import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./createLucideIcon-BXqG86fR.js";import{n as i,t as a}from"./circle-exclamation-point-CYhGcRlV.js";import{n as o,t as s}from"./Button-vIA4pBQ6.js";var c,l;function u(){return(u=e((()=>{n(),c={name:`info`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]},c.node,l=r(c)})))()}function d({variant:e=`default`,size:t=`L`,title:n,description:r,icon:i,action:o,className:s,...c}){return(0,f.jsxs)(`div`,{role:e===`destructive`?`alert`:`status`,className:[`hx-alert`,s].filter(Boolean).join(` `),"data-variant":e,"data-size":t,...c,children:[(0,f.jsx)(`span`,{className:`hx-alert__icon`,"aria-hidden":!0,children:i??(e===`destructive`?(0,f.jsx)(a,{}):(0,f.jsx)(l,{}))}),(0,f.jsxs)(`div`,{className:`hx-alert__body`,children:[(0,f.jsx)(`p`,{className:`hx-alert__title`,children:n}),r&&(0,f.jsx)(`p`,{className:`hx-alert__description`,children:r}),o&&(0,f.jsx)(`div`,{className:`hx-alert__action`,children:o})]})]})}var f;function p(){return(p=e((()=>{i(),u(),f=t(),d.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'destructive' | 'blur'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'destructive'`},{name:`literal`,value:`'blur'`}]},description:`Figma property: Variant (Default / Destructive / bg blur)`,defaultValue:{value:`'default'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'L' | 'S' | 'xs'`,elements:[{name:`literal`,value:`'L'`},{name:`literal`,value:`'S'`},{name:`literal`,value:`'xs'`}]},description:`Padding & text: L 16 · S 12 · xs 10. Figma property: Size`,defaultValue:{value:`'L'`,computed:!1}},title:{required:!0,tsType:{name:`ReactNode`},description:`Figma: Title Text`},description:{required:!1,tsType:{name:`ReactNode`},description:`Figma: Description + Description Text`},icon:{required:!1,tsType:{name:`ReactNode`},description:`Replaces the default icon (Info, or CircleAlert for destructive)`},action:{required:!1,tsType:{name:`ReactNode`},description:`Figma: Button. A Button or link shown under the text.`}},composes:[`Omit`]}})))()}var m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{p(),o(),m=t(),h={title:`Components/Alert`,component:d,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,m.jsx)(`div`,{style:{width:420},children:(0,m.jsx)(e,{})})],args:{title:`Price updated`,description:`Market value was recalculated from 12 recent sales.`},argTypes:{icon:{control:!1},action:{control:!1}}},g={},_={args:{variant:`destructive`,title:`Payment failed`,description:`Your card was declined. Try another payment method.`}},v={args:{variant:`blur`}},y={args:{action:(0,m.jsx)(s,{size:`xs`,variant:`secondary`,children:`View sales`})}},b={args:{description:void 0}},x={render:e=>(0,m.jsx)(`div`,{style:{display:`grid`,gap:12},children:[`L`,`S`,`xs`].map(t=>(0,m.jsx)(d,{...e,size:t},t))})},S=[`Default`,`Destructive`,`Blur`,`WithAction`,`TitleOnly`,`AllSizes`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    title: 'Payment failed',
    description: 'Your card was declined. Try another payment method.'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'blur'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    action: <Button size="xs" variant="secondary">View sales</Button>
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    description: undefined
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      {(['L', 'S', 'xs'] as const).map(s => <Alert key={s} {...args} size={s} />)}
    </div>
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as AllSizes,v as Blur,g as Default,_ as Destructive,b as TitleOnly,y as WithAction,S as __namedExportsOrder,h as default};