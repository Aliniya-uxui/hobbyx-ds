import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./StatusIcon-BhxWTaDS.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i=t(),a={title:`Components/StatusIcon`,component:r,parameters:{layout:`centered`},tags:[`autodocs`]},o={},s={args:{type:`success`}},c={args:{type:`failed`}},l={args:{type:`warning`}},u={render:()=>(0,i.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(4, 90px)`,gap:24,justifyItems:`center`,alignItems:`center`},children:[`L`,`m`,`s`].flatMap(e=>[`success`,`failed`,`neutral`,`warning`].map(t=>(0,i.jsx)(r,{type:t,size:e},e+t)))})},d=[`Neutral`,`Success`,`Failed`,`Warning`,`All`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'failed'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 90px)',
    gap: 24,
    justifyItems: 'center',
    alignItems: 'center'
  }}>
      {(['L', 'm', 's'] as const).flatMap(size => (['success', 'failed', 'neutral', 'warning'] as const).map(type => <StatusIcon key={size + type} type={type} size={size} />))}
    </div>
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as All,c as Failed,o as Neutral,s as Success,l as Warning,d as __namedExportsOrder,a as default};