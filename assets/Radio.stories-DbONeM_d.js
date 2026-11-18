import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";function r({label:e,description:t,weight:n=`medium`,framed:r=!1,id:o,className:s,...c}){let l=(0,i.useId)(),u=o??l;return(0,a.jsxs)(`label`,{className:[`hx-radio`,s].filter(Boolean).join(` `),"data-weight":n,"data-framed":r?``:void 0,htmlFor:u,children:[(0,a.jsx)(`input`,{id:u,type:`radio`,...c}),(e||t)&&(0,a.jsxs)(`span`,{className:`hx-radio__text`,children:[e&&(0,a.jsx)(`span`,{className:`hx-radio__label`,children:e}),t&&(0,a.jsx)(`span`,{className:`hx-radio__description`,children:t})]})]})}var i,a;function o(){return(o=e((()=>{i=t(),a=n(),r.__docgenInfo={description:``,methods:[],displayName:`Radio`,props:{label:{required:!1,tsType:{name:`string`},description:`Figma: Show Text + Switch Text`},description:{required:!1,tsType:{name:`string`},description:`Figma: Show Description + Description Text`},weight:{required:!1,tsType:{name:`union`,raw:`'medium' | 'regular'`,elements:[{name:`literal`,value:`'medium'`},{name:`literal`,value:`'regular'`}]},description:`Figma property: Font Weight`,defaultValue:{value:`'medium'`,computed:!1}},framed:{required:!1,tsType:{name:`boolean`},description:`Bordered card around the item. Figma property: frame = yes`,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})))()}var s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{o(),s=n(),c={title:`Components/Radio`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{name:`demo`,label:`Standard shipping`,description:`3–5 business days`}},l={},u={args:{defaultChecked:!0}},d={args:{framed:!0,defaultChecked:!0}},f={args:{disabled:!0,defaultChecked:!0}},p={render:()=>(0,s.jsxs)(`div`,{role:`radiogroup`,"aria-label":`Shipping`,style:{display:`grid`,gap:12,width:280},children:[(0,s.jsx)(r,{name:`ship`,framed:!0,defaultChecked:!0,label:`Standard shipping`,description:`3–5 business days`}),(0,s.jsx)(r,{name:`ship`,framed:!0,label:`Express shipping`,description:`1–2 business days`}),(0,s.jsx)(r,{name:`ship`,framed:!0,disabled:!0,label:`Vault storage`,description:`Not available for this item`})]})},m=[`Default`,`Checked`,`Framed`,`Disabled`,`Group`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    framed: true,
    defaultChecked: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div role="radiogroup" aria-label="Shipping" style={{
    display: 'grid',
    gap: 12,
    width: 280
  }}>
      <Radio name="ship" framed defaultChecked label="Standard shipping" description="3–5 business days" />
      <Radio name="ship" framed label="Express shipping" description="1–2 business days" />
      <Radio name="ship" framed disabled label="Vault storage" description="Not available for this item" />
    </div>
}`,...p.parameters?.docs?.source},description:{story:"Same `name` = one group: only one option can be selected.",...p.parameters?.docs?.description}}}})))()}h();export{u as Checked,l as Default,f as Disabled,d as Framed,p as Group,m as __namedExportsOrder,c as default};