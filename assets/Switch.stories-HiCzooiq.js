import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";function r({label:e,description:t,textPlacement:n=`right`,id:r,className:o,...s}){let c=(0,i.useId)(),l=r??c;return(0,a.jsxs)(`label`,{className:[`hx-switch`,o].filter(Boolean).join(` `),"data-placement":n,htmlFor:l,children:[(0,a.jsx)(`input`,{id:l,type:`checkbox`,role:`switch`,...s}),(e||t)&&(0,a.jsxs)(`span`,{className:`hx-switch__text`,children:[e&&(0,a.jsx)(`span`,{className:`hx-switch__label`,children:e}),t&&(0,a.jsx)(`span`,{className:`hx-switch__description`,children:t})]})]})}var i,a;function o(){return(o=e((()=>{i=t(),a=n(),r.__docgenInfo={description:``,methods:[],displayName:`Switch`,props:{label:{required:!1,tsType:{name:`string`},description:`Figma: Show Text + Switch Text`},description:{required:!1,tsType:{name:`string`},description:`Figma: Show Description + Description Text`},textPlacement:{required:!1,tsType:{name:`union`,raw:`'right' | 'left'`,elements:[{name:`literal`,value:`'right'`},{name:`literal`,value:`'left'`}]},description:`Figma property: Text Placement`,defaultValue:{value:`'right'`,computed:!1}}},composes:[`Omit`]}})))()}var s,c,l,u,d,f,p;function m(){return(m=e((()=>{o(),s={title:`Components/Switch`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{label:`Price alerts`,description:`Notify me when the price drops.`}},c={},l={args:{defaultChecked:!0}},u={args:{defaultChecked:!0,textPlacement:`left`}},d={args:{defaultChecked:!0,disabled:!0}},f={args:{label:void 0,description:void 0,"aria-label":`Price alerts`}},p=[`Off`,`On`,`TextLeft`,`Disabled`,`Bare`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    textPlacement: 'left'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    description: undefined,
    'aria-label': 'Price alerts'
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Bare,d as Disabled,c as Off,l as On,u as TextLeft,p as __namedExportsOrder,s as default};