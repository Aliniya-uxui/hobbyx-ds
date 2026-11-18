import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./StatusIcon-BhxWTaDS.js";import{n as i,t as a}from"./Button-vIA4pBQ6.js";function o({title:e,description:t,icon:n=`neutral`,actions:i,className:a,...o}){return(0,s.jsxs)(`div`,{className:[`hx-empty`,a].filter(Boolean).join(` `),...o,children:[(0,s.jsx)(r,{type:n,size:`m`}),(0,s.jsxs)(`div`,{className:`hx-empty__text`,children:[(0,s.jsx)(`h3`,{className:`hx-empty__title`,children:e}),t&&(0,s.jsx)(`p`,{className:`hx-empty__description`,children:t})]}),i&&(0,s.jsx)(`div`,{className:`hx-empty__actions`,children:i})]})}var s;function c(){return(c=e((()=>{n(),s=t(),o.__docgenInfo={description:``,methods:[],displayName:`EmptyState`,props:{title:{required:!0,tsType:{name:`ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:``},icon:{required:!1,tsType:{name:`union`,raw:`'success' | 'failed' | 'warning' | 'neutral'`,elements:[{name:`literal`,value:`'success'`},{name:`literal`,value:`'failed'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'neutral'`}]},description:`Glyph type of the StatusIcon on top`,defaultValue:{value:`'neutral'`,computed:!1}},actions:{required:!1,tsType:{name:`ReactNode`},description:`Buttons, stacked, 180 wide`}},composes:[`Omit`]}})))()}var l,u,d,f,p,m,h;function g(){return(g=e((()=>{c(),i(),l=t(),u={title:`Components/EmptyState`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{title:`Start a conversation`,description:`Connect with people on Hobby Index and your conversations will appear here.`},argTypes:{actions:{control:!1}}},d={args:{actions:(0,l.jsx)(a,{size:`default`,children:`New message`})}},f={args:{title:`No cards found`,description:`Try another name or remove some filters.`,actions:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{size:`default`,children:`Clear filters`}),(0,l.jsx)(a,{size:`default`,variant:`ghost`,children:`Back to marketplace`})]})}},p={args:{icon:`success`,title:`Listing published`,description:`Buyers can now see your card in the marketplace.`}},m={args:{icon:`failed`,title:`Scan failed`,description:`We could not read the card. Retake the photo in good light.`,actions:(0,l.jsx)(a,{size:`default`,children:`Try again`})}},h=[`Default`,`NoResults`,`Success`,`Failed`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    actions: <Button size="default">New message</Button>
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No cards found',
    description: 'Try another name or remove some filters.',
    actions: <>
        <Button size="default">Clear filters</Button>
        <Button size="default" variant="ghost">Back to marketplace</Button>
      </>
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'success',
    title: 'Listing published',
    description: 'Buyers can now see your card in the marketplace.'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'failed',
    title: 'Scan failed',
    description: 'We could not read the card. Retake the photo in good light.',
    actions: <Button size="default">Try again</Button>
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{d as Default,m as Failed,f as NoResults,p as Success,h as __namedExportsOrder,u as default};