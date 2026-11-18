import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,n as r,r as i,t as a}from"./Badge-BHK4Khzv.js";var o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),r(),o=t(),s={title:`Components/Badge`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{children:`Badge`},argTypes:{leftIcon:{control:!1},rightIcon:{control:!1}}},c={},l={args:{type:`filled`}},u={args:{children:`+12%`,leftIcon:(0,o.jsx)(i,{})}},d={args:{color:`red`,children:`Live`,dot:!0}},f={args:{type:`filled`,color:`grey`,size:`S`,children:`Sold`}},p=[`green`,`red`,`yellow`,`blue`,`grey`,`teal`,`pink`,`white`,`blur`],m={render:e=>(0,o.jsx)(`div`,{style:{display:`grid`,gap:12},children:[`blur`,`filled`].map(t=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:8},children:p.map(n=>(0,o.jsx)(a,{...e,color:n,type:t,children:n},n))},t))})},h={render:e=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[`L`,`M`,`S`].map(t=>(0,o.jsxs)(a,{...e,size:t,leftIcon:(0,o.jsx)(i,{}),children:[`Size `,t]},t))})},g=[`Blur`,`Filled`,`WithIcon`,`WithDot`,`Sold`,`AllColors`,`AllSizes`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'filled'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: '+12%',
    leftIcon: <TrendingUp />
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'red',
    children: 'Live',
    dot: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'filled',
    color: 'grey',
    size: 'S',
    children: 'Sold'
  }
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 12
  }}>
      {(['blur', 'filled'] as const).map(type => <div key={type} style={{
      display: 'flex',
      gap: 8
    }}>
          {colors.map(c => <Badge key={c} {...args} color={c} type={type}>{c}</Badge>)}
        </div>)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>
      {(['L', 'M', 'S'] as const).map(s => <Badge key={s} {...args} size={s} leftIcon={<TrendingUp />}>Size {s}</Badge>)}
    </div>
}`,...h.parameters?.docs?.source}}}})))()}_();export{m as AllColors,h as AllSizes,c as Blur,l as Filled,f as Sold,d as WithDot,u as WithIcon,g as __namedExportsOrder,s as default};