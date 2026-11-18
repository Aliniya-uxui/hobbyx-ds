import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./createLucideIcon-BXqG86fR.js";import{n as a,t as o}from"./x-DDag5CR1.js";var s,c;function l(){return(l=e((()=>{r(),s={name:`search`,size:24,node:[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]},s.node,c=i(s)})))()}function u({variant:e=`default`,size:t=`L`,label:n,description:r,error:i,leftIcon:a,rightIcon:s,onClear:l,required:u,disabled:p,id:m,className:h,...g}){let _=(0,d.useId)(),v=m??_,y=`${v}-desc`,b=typeof i==`string`?i:r,x=a??(e===`search`?(0,f.jsx)(c,{}):null),S=g.value!==void 0&&g.value!==``;return(0,f.jsxs)(`div`,{className:[`hx-input`,h].filter(Boolean).join(` `),"data-variant":e,"data-size":t,"data-error":i?``:void 0,"data-disabled":p?``:void 0,children:[n&&(0,f.jsxs)(`label`,{className:`hx-input__label`,htmlFor:v,children:[n,u&&(0,f.jsx)(`span`,{className:`hx-input__required`,"aria-hidden":!0,children:` *`})]}),(0,f.jsxs)(`div`,{className:`hx-input__field`,children:[x&&(0,f.jsx)(`span`,{className:`hx-input__icon`,"aria-hidden":!0,children:x}),(0,f.jsx)(`input`,{id:v,required:u,disabled:p,"aria-invalid":i?!0:void 0,"aria-describedby":b?y:void 0,...g}),e===`search`&&l&&S&&(0,f.jsx)(`button`,{type:`button`,className:`hx-input__clear`,onClick:l,"aria-label":`Clear`,children:(0,f.jsx)(o,{})}),s&&(0,f.jsx)(`span`,{className:`hx-input__icon`,"aria-hidden":!0,children:s})]}),b&&(0,f.jsx)(`p`,{id:y,className:`hx-input__description`,children:b})]})}var d,f;function p(){return(p=e((()=>{d=t(),l(),a(),f=n(),u.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'search' | 'chat'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'search'`},{name:`literal`,value:`'chat'`}]},description:`Figma property: Type`,defaultValue:{value:`'default'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'L' | 'S'`,elements:[{name:`literal`,value:`'L'`},{name:`literal`,value:`'S'`}]},description:`Height: L 48 · S 40 (Figma has S only for Chat live). Figma property: Size`,defaultValue:{value:`'L'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Figma: Show Label + Label Text`},description:{required:!1,tsType:{name:`string`},description:"Figma: Show Description + Description Text. Turns red when `error` is set."},error:{required:!1,tsType:{name:`union`,raw:`boolean | string`,elements:[{name:`boolean`},{name:`string`}]},description:"Figma State=Error. `true` or an error message that replaces the description."},leftIcon:{required:!1,tsType:{name:`ReactNode`},description:`Figma: Icon left + Icon. Search shows a magnifier by default.`},rightIcon:{required:!1,tsType:{name:`ReactNode`},description:`Figma: Icon right`},onClear:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Search only: shows the clear (×) button when there is a value.`}},composes:[`Omit`]}})))()}var m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{m=t(),p(),h=n(),g={title:`Components/Input`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,h.jsx)(`div`,{style:{width:373},children:(0,h.jsx)(e,{})})],args:{label:`Card name`,placeholder:`e.g. Charizard Base Set`,description:`As printed on the card.`},argTypes:{leftIcon:{control:!1},rightIcon:{control:!1}}},_={},v={args:{defaultValue:`Charizard Base Set`}},y={args:{required:!0}},b={args:{defaultValue:`Charizard`,error:`Card not found. Check the spelling.`}},x={args:{disabled:!0}},S={args:{variant:`search`,label:void 0,description:void 0,placeholder:`Search...`},render:e=>{let[t,n]=(0,m.useState)(``);return(0,h.jsx)(u,{...e,value:t,onChange:e=>n(e.target.value),onClear:()=>n(``)})}},C={args:{variant:`chat`,label:void 0,description:void 0,placeholder:`Say something…`}},w={args:{...C.args,size:`S`}},T=[`Default`,`Filled`,`Required`,`WithError`,`Disabled`,`Search`,`ChatLive`,`ChatLiveSmall`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Charizard Base Set'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Charizard',
    error: 'Card not found. Check the spelling.'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'search',
    label: undefined,
    description: undefined,
    placeholder: 'Search...'
  },
  render: args => {
    const [value, setValue] = useState('');
    return <Input {...args} value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue('')} />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'chat',
    label: undefined,
    description: undefined,
    placeholder: 'Say something…'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...ChatLive.args,
    size: 'S'
  }
}`,...w.parameters?.docs?.source}}}})))()}E();export{C as ChatLive,w as ChatLiveSmall,_ as Default,x as Disabled,v as Filled,y as Required,S as Search,b as WithError,T as __namedExportsOrder,g as default};