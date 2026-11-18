import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./createLucideIcon-BXqG86fR.js";import{n as i,t as a}from"./trash-FTNL_zRp.js";import{n as o,t as s}from"./Button-vIA4pBQ6.js";var c,l;function u(){return(u=e((()=>{n(),c={name:`arrow-right`,size:24,node:[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]},c.node,l=r(c)})))()}var d,f;function p(){return(p=e((()=>{n(),d={name:`gavel`,size:24,node:[[`path`,{d:`m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381`,key:`pgg06f`}],[`path`,{d:`m16 16 6-6`,key:`vzrcl6`}],[`path`,{d:`m21.5 10.5-8-8`,key:`a17d9x`}],[`path`,{d:`m8 8 6-6`,key:`18bi4p`}],[`path`,{d:`m8.5 7.5 8 8`,key:`1oyaui`}]]},d.node,f=r(d)})))()}var m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{u(),p(),i(),o(),m=t(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Button`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],args:{children:`Place bid`,onClick:h()},argTypes:{leftIcon:{control:!1},rightIcon:{control:!1}}},_={},v={args:{variant:`secondary`,children:`Make offer`}},y={args:{variant:`destructive`,children:`Delete listing`}},b={args:{variant:`ghost`,children:`Cancel`}},x={args:{variant:`tinted`,children:`Filters`}},S={args:{variant:`link`,children:`View all`}},C={args:{leftIcon:(0,m.jsx)(f,{}),rightIcon:(0,m.jsx)(l,{})}},w={args:{disabled:!0}},T={render:e=>(0,m.jsx)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[`lg`,`default`,`sm`,`xs`].map(t=>(0,m.jsx)(s,{...e,size:t,leftIcon:(0,m.jsx)(f,{}),children:t},t))})},E={render:e=>(0,m.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(4, auto)`,gap:16,alignItems:`center`},children:[`primary`,`secondary`,`destructive`,`ghost`,`tinted`,`link`,`link-accent`,`link-destructive`].map(t=>(0,m.jsx)(s,{...e,variant:t,leftIcon:t===`destructive`?(0,m.jsx)(a,{}):void 0,children:t},t))})},D=[`Primary`,`Secondary`,`Destructive`,`Ghost`,`Tinted`,`Link`,`WithIcons`,`Disabled`,`AllSizes`,`AllVariants`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Make offer'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: 'Delete listing'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Cancel'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tinted',
    children: 'Filters'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    children: 'View all'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    leftIcon: <Gavel />,
    rightIcon: <ArrowRight />
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      {(['lg', 'default', 'sm', 'xs'] as const).map(size => <Button key={size} {...args} size={size} leftIcon={<Gavel />}>{size}</Button>)}
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    gap: 16,
    alignItems: 'center'
  }}>
      {(['primary', 'secondary', 'destructive', 'ghost', 'tinted', 'link', 'link-accent', 'link-destructive'] as const).map(v => <Button key={v} {...args} variant={v} leftIcon={v === 'destructive' ? <Trash2 /> : undefined}>{v}</Button>)}
    </div>
}`,...E.parameters?.docs?.source}}}})))()}O();export{T as AllSizes,E as AllVariants,y as Destructive,w as Disabled,b as Ghost,S as Link,_ as Primary,v as Secondary,x as Tinted,C as WithIcons,D as __namedExportsOrder,g as default};