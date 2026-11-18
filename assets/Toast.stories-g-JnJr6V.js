import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./createLucideIcon-BXqG86fR.js";import{n as a,t as o}from"./circle-exclamation-point-CYhGcRlV.js";import{n as s,t as c}from"./Button-vIA4pBQ6.js";var l,u;function d(){return(d=e((()=>{r(),l={name:`circle-check`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m16 9-5.5 5.5L8 12`,key:`xofnsj`}]],aliases:[`check-circle-2`]},l.node,u=i(l)})))()}var f,p;function m(){return(m=e((()=>{r(),f={name:`undo-2`,size:24,node:[[`path`,{d:`M9 14 4 9l5-5`,key:`102s5s`}],[`path`,{d:`M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11`,key:`f3b9sd`}]]},f.node,p=i(f)})))()}function h({destructive:e=!1,title:t,description:n,action:r,icon:i,className:a,...s}){return(0,g.jsxs)(`div`,{role:e?`alert`:`status`,"aria-live":e?`assertive`:`polite`,className:[`hx-toast`,a].filter(Boolean).join(` `),"data-destructive":e?``:void 0,...s,children:[(0,g.jsx)(`span`,{className:`hx-toast__icon`,"aria-hidden":!0,children:i??(e?(0,g.jsx)(o,{}):(0,g.jsx)(u,{}))}),(0,g.jsxs)(`div`,{className:`hx-toast__text`,children:[t&&(0,g.jsx)(`p`,{className:`hx-toast__title`,children:t}),n&&(0,g.jsx)(`p`,{className:`hx-toast__description`,children:n})]}),r&&(0,g.jsx)(`div`,{className:`hx-toast__action`,children:r})]})}var g;function _(){return(_=e((()=>{d(),a(),g=n(),h.__docgenInfo={description:``,methods:[],displayName:`Toast`,props:{destructive:{required:!1,tsType:{name:`boolean`},description:`Figma property: Destructive`,defaultValue:{value:`false`,computed:!1}},title:{required:!1,tsType:{name:`ReactNode`},description:`Figma: Show Title + Title Text`},description:{required:!1,tsType:{name:`ReactNode`},description:`Figma: Show Description + Description Text`},action:{required:!1,tsType:{name:`ReactNode`},description:`Figma: Show Button. E.g. an Undo link or a Ghost button.`},icon:{required:!1,tsType:{name:`ReactNode`},description:`Replaces the default circle icon`}},composes:[`Omit`]}})))()}var v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{v=t(),m(),_(),s(),y=n(),b={title:`Components/Toast`,component:h,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,y.jsx)(`div`,{style:{width:361},children:(0,y.jsx)(e,{})})],args:{title:`Removed from watchlist`,description:`Charizard Base Set #4`},argTypes:{action:{control:!1},icon:{control:!1}}},x=(0,y.jsx)(c,{variant:`link-accent`,size:`xs`,leftIcon:(0,y.jsx)(p,{}),children:`Undo`}),S={},C={args:{action:x}},w={args:{destructive:!0,title:`Upload failed`,description:`Check your connection.`,action:(0,y.jsx)(c,{variant:`ghost`,size:`sm`,children:`Retry`})}},T={render:e=>{let[t,n]=(0,v.useState)(!1);return(0,v.useEffect)(()=>{if(!t)return;let e=setTimeout(()=>n(!1),4e3);return()=>clearTimeout(e)},[t]),(0,y.jsxs)(`div`,{style:{display:`grid`,gap:16,justifyItems:`center`},children:[(0,y.jsx)(c,{size:`sm`,variant:`secondary`,onClick:()=>n(!0),children:`Remove from watchlist`}),t&&(0,y.jsx)(h,{...e,action:(0,y.jsx)(c,{variant:`link-accent`,size:`xs`,leftIcon:(0,y.jsx)(p,{}),onClick:()=>n(!1),children:`Undo`})})]})}},E=[`Default`,`WithUndo`,`Destructive`,`AutoClose`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    action: undo
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    destructive: true,
    title: 'Upload failed',
    description: 'Check your connection.',
    action: <Button variant="ghost" size="sm">Retry</Button>
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
      if (!open) return;
      const t = setTimeout(() => setOpen(false), 4000);
      return () => clearTimeout(t);
    }, [open]);
    return <div style={{
      display: 'grid',
      gap: 16,
      justifyItems: 'center'
    }}>
        <Button size="sm" variant="secondary" onClick={() => setOpen(true)}>Remove from watchlist</Button>
        {open && <Toast {...args} action={<Button variant="link-accent" size="xs" leftIcon={<Undo2 />} onClick={() => setOpen(false)}>Undo</Button>} />}
      </div>;
  }
}`,...T.parameters?.docs?.source},description:{story:`Click the button: the toast appears and closes itself after 4 s (HobbyX rule for undo toasts).`,...T.parameters?.docs?.description}}}})))()}D();export{T as AutoClose,S as Default,w as Destructive,C as WithUndo,E as __namedExportsOrder,b as default};