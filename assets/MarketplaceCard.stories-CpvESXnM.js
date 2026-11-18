import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./createLucideIcon-BXqG86fR.js";import{i as a,n as o,r as s,t as c}from"./IconButton-QNqW31YI.js";import{i as l,n as u,r as d,t as f}from"./Badge-BHK4Khzv.js";import{n as p,t as m}from"./Skeleton-BmDRG3mU.js";import{n as h,t as g}from"./Tabs-DXxXQnVE.js";var _,v;function y(){return(y=e((()=>{r(),_={name:`clock`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]},_.node,v=i(_)})))()}var b,x;function S(){return(S=e((()=>{r(),b={name:`sparkles`,size:24,node:[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]],aliases:[`stars`]},b.node,x=i(b)})))()}var C,w;function T(){return(T=e((()=>{r(),C={name:`trending-down`,size:24,node:[[`path`,{d:`M16 17h6v-6`,key:`t6n2it`}],[`path`,{d:`m22 17-8.5-8.5-5 5L2 7`,key:`x473p`}]]},C.node,w=i(C)})))()}function E({image:e,title:t,subtitle:n,price:r,priceLabel:i,bids:a,lastSale:o,predicted:l,trend:u,status:p,endsIn:m,collectionNote:h,saved:g=!1,onToggleSave:_,bg:y=`filled`,className:b,...S}){let C=u===`down`?w:d;return(0,D.jsxs)(`article`,{className:[`hx-mcard`,b].filter(Boolean).join(` `),"data-bg":y,...S,children:[(0,D.jsxs)(`div`,{className:`hx-mcard__media`,children:[(0,D.jsx)(`img`,{src:e,alt:``}),p&&(0,D.jsx)(f,{className:`hx-mcard__status`,color:p.color,type:`filled`,size:`M`,children:p.label}),(0,D.jsx)(c,{className:`hx-mcard__save`,variant:`blur`,size:`sm`,"aria-label":g?`Remove from watchlist`:`Add to watchlist`,"aria-pressed":g,onClick:_,children:(0,D.jsx)(s,{fill:g?`currentColor`:`none`})}),m&&(0,D.jsx)(f,{className:`hx-mcard__timer`,color:`blur`,size:`M`,leftIcon:(0,D.jsx)(v,{}),children:m})]}),(0,D.jsxs)(`div`,{className:`hx-mcard__details`,children:[(0,D.jsxs)(`div`,{className:`hx-mcard__header`,children:[(0,D.jsx)(`h3`,{className:`hx-mcard__title`,children:t}),n&&(0,D.jsx)(`p`,{className:`hx-mcard__subtitle`,children:n})]}),(0,D.jsxs)(`div`,{children:[(0,D.jsxs)(`p`,{className:`hx-mcard__price`,children:[r,a!==void 0&&(0,D.jsxs)(`span`,{className:`hx-mcard__bids`,children:[` / `,a,` bids`]})]}),i&&(0,D.jsx)(`p`,{className:`hx-mcard__price-label`,children:i})]}),(o||l)&&(0,D.jsxs)(`dl`,{className:`hx-mcard__compare`,children:[o&&(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`dt`,{children:`Last Sale`}),(0,D.jsx)(`dd`,{children:o})]}),l&&(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`dt`,{children:`Predicted`}),(0,D.jsxs)(`dd`,{children:[l,u&&(0,D.jsx)(C,{className:`hx-mcard__trend`,"data-trend":u,"aria-label":`trending ${u}`})]})]})]}),h&&(0,D.jsxs)(`p`,{className:`hx-mcard__note`,children:[(0,D.jsx)(x,{"aria-hidden":!0}),h]})]})]})}var D;function O(){return(O=e((()=>{y(),a(),S(),T(),l(),u(),o(),D=n(),E.__docgenInfo={description:``,methods:[],displayName:`MarketplaceCard`,props:{image:{required:!0,tsType:{name:`string`},description:``},title:{required:!0,tsType:{name:`string`},description:``},subtitle:{required:!1,tsType:{name:`string`},description:`e.g. "Pokémon · PSA 8"`},price:{required:!0,tsType:{name:`string`},description:`Formatted price, e.g. "£3,200"`},priceLabel:{required:!1,tsType:{name:`string`},description:`Under the price: "Current bid", "Starting price"…`},bids:{required:!1,tsType:{name:`number`},description:`Auction: number of bids next to the price`},lastSale:{required:!1,tsType:{name:`string`},description:``},predicted:{required:!1,tsType:{name:`string`},description:``},trend:{required:!1,tsType:{name:`union`,raw:`'up' | 'down'`,elements:[{name:`literal`,value:`'up'`},{name:`literal`,value:`'down'`}]},description:`Arrow next to the predicted price`},status:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ label: string; color: BadgeColor }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`color`,value:{name:`union`,raw:`'green' | 'red' | 'yellow' | 'blue' | 'grey' | 'teal' | 'pink' | 'white' | 'blur'`,elements:[{name:`literal`,value:`'green'`},{name:`literal`,value:`'red'`},{name:`literal`,value:`'yellow'`},{name:`literal`,value:`'blue'`},{name:`literal`,value:`'grey'`},{name:`literal`,value:`'teal'`},{name:`literal`,value:`'pink'`},{name:`literal`,value:`'white'`},{name:`literal`,value:`'blur'`}],required:!0}}]}},description:`Top-left badge, e.g. { label: 'Ending soon', color: 'yellow' }`},endsIn:{required:!1,tsType:{name:`string`},description:`Bottom-left timer on the photo, e.g. "Ends in 0h 38m"`},collectionNote:{required:!1,tsType:{name:`string`},description:`Teal note at the bottom, e.g. "Completes your Base Set"`},saved:{required:!1,tsType:{name:`boolean`},description:`Heart button state`,defaultValue:{value:`false`,computed:!1}},onToggleSave:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},bg:{required:!1,tsType:{name:`union`,raw:`'filled' | 'blur'`,elements:[{name:`literal`,value:`'filled'`},{name:`literal`,value:`'blur'`}]},description:`Figma property: BG (Filled / Blur)`,defaultValue:{value:`'filled'`,computed:!1}}},composes:[`Omit`]}})))()}var k;function A(){return(A=e((()=>{k=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20316%20300'%3e%3cdefs%3e%3clinearGradient%20id='bg'%20x1='0'%20y1='0'%20x2='1'%20y2='1'%3e%3cstop%20offset='0'%20stop-color='%231e293b'/%3e%3cstop%20offset='1'%20stop-color='%230a0a0a'/%3e%3c/linearGradient%3e%3clinearGradient%20id='art'%20x1='0'%20y1='0'%20x2='1'%20y2='1'%3e%3cstop%20offset='0'%20stop-color='%235eead4'/%3e%3cstop%20offset='.5'%20stop-color='%230d9488'/%3e%3cstop%20offset='1'%20stop-color='%23134e4a'/%3e%3c/linearGradient%3e%3clinearGradient%20id='foil'%20x1='0'%20y1='0'%20x2='1'%20y2='0'%3e%3cstop%20offset='0'%20stop-color='%23fff'%20stop-opacity='0'/%3e%3cstop%20offset='.5'%20stop-color='%23fff'%20stop-opacity='.18'/%3e%3cstop%20offset='1'%20stop-color='%23fff'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3crect%20width='316'%20height='300'%20fill='url(%23bg)'/%3e%3crect%20x='88'%20y='14'%20width='140'%20height='272'%20rx='10'%20fill='%23d4d4d8'%20opacity='.16'%20stroke='%23fafafa'%20stroke-opacity='.35'/%3e%3crect%20x='98'%20y='24'%20width='120'%20height='28'%20rx='4'%20fill='%23fafafa'%20opacity='.85'/%3e%3crect%20x='106'%20y='33'%20width='58'%20height='10'%20rx='2'%20fill='%230a0a0a'%20opacity='.6'/%3e%3crect%20x='186'%20y='30'%20width='24'%20height='16'%20rx='3'%20fill='%23ef4444'/%3e%3crect%20x='104'%20y='62'%20width='108'%20height='210'%20rx='6'%20fill='%23facc15'/%3e%3crect%20x='112'%20y='70'%20width='92'%20height='120'%20rx='3'%20fill='url(%23art)'/%3e%3ccircle%20cx='158'%20cy='122'%20r='26'%20fill='%23fafafa'%20opacity='.85'/%3e%3cpath%20d='M146%20122l8%208%2016-18'%20fill='none'%20stroke='%23134e4a'%20stroke-width='6'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3crect%20x='112'%20y='198'%20width='92'%20height='8'%20rx='2'%20fill='%23422006'%20opacity='.5'/%3e%3crect%20x='112'%20y='212'%20width='70'%20height='6'%20rx='2'%20fill='%23422006'%20opacity='.35'/%3e%3crect%20x='112'%20y='224'%20width='80'%20height='6'%20rx='2'%20fill='%23422006'%20opacity='.35'/%3e%3crect%20x='88'%20y='14'%20width='140'%20height='272'%20rx='10'%20fill='url(%23foil)'/%3e%3c/svg%3e`})))()}var j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{j=t(),O(),p(),h(),A(),M=n(),N={title:`Patterns/MarketplaceCard`,component:E,parameters:{layout:`centered`},tags:[`autodocs`],args:{image:k,title:`Teal Guardian Holo 1st Edition`,subtitle:`TCG · PSA 8`,price:`£320`,lastSale:`£295`,predicted:`£340`,trend:`up`},argTypes:{image:{control:!1}}},P={args:{collectionNote:`Completes your 1st Edition set`}},F={args:{status:{label:`Ending soon`,color:`yellow`},endsIn:`Ends in 0h 38m`,price:`£3,200`,bids:14,priceLabel:`Current bid`,lastSale:`£3,200`,predicted:`£3,600`}},I={args:{status:{label:`Live`,color:`red`},bg:`blur`,priceLabel:`Starting price`,trend:`down`,predicted:`£300`}},L={render:e=>{let[t,n]=(0,j.useState)(!1);return(0,M.jsx)(E,{...e,saved:t,onToggleSave:()=>n(e=>!e)})}},R={parameters:{layout:`padded`},render:e=>(0,M.jsxs)(`div`,{style:{width:360,display:`grid`,gap:16},children:[(0,M.jsx)(g,{"aria-label":`Marketplace`,items:[{value:`all`,label:`All`},{value:`auction`,label:`Auction`},{value:`raffles`,label:`Raffles`},{value:`live`,label:`Live`}]}),(0,M.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`174px 174px`,gap:12},children:[(0,M.jsx)(E,{...e,...F.args}),(0,M.jsx)(E,{...e,collectionNote:`Completes your 1st Edition set`}),(0,M.jsx)(E,{...e,...I.args}),(0,M.jsxs)(`div`,{style:{display:`grid`,gap:8,alignContent:`start`,padding:8},children:[(0,M.jsx)(m,{height:150,style:{borderRadius:12}}),(0,M.jsx)(m,{width:`85%`,height:14}),(0,M.jsx)(m,{width:`50%`,height:12}),(0,M.jsx)(m,{width:`40%`,height:16})]})]})]})},z=[`FixedPrice`,`AuctionEndingSoon`,`Live`,`Saveable`,`MarketplaceGrid`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    collectionNote: 'Completes your 1st Edition set'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      label: 'Ending soon',
      color: 'yellow'
    },
    endsIn: 'Ends in 0h 38m',
    price: '£3,200',
    bids: 14,
    priceLabel: 'Current bid',
    lastSale: '£3,200',
    predicted: '£3,600'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      label: 'Live',
      color: 'red'
    },
    bg: 'blur',
    priceLabel: 'Starting price',
    trend: 'down',
    predicted: '£300'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [saved, setSaved] = useState(false);
    return <MarketplaceCard {...args} saved={saved} onToggleSave={() => setSaved(s => !s)} />;
  }
}`,...L.parameters?.docs?.source},description:{story:`Heart toggles the saved state.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: args => <div style={{
    width: 360,
    display: 'grid',
    gap: 16
  }}>
      <Tabs aria-label="Marketplace" items={[{
      value: 'all',
      label: 'All'
    }, {
      value: 'auction',
      label: 'Auction'
    }, {
      value: 'raffles',
      label: 'Raffles'
    }, {
      value: 'live',
      label: 'Live'
    }]} />
      <div style={{
      display: 'grid',
      gridTemplateColumns: '174px 174px',
      gap: 12
    }}>
        <MarketplaceCard {...args} {...AuctionEndingSoon.args} />
        <MarketplaceCard {...args} collectionNote="Completes your 1st Edition set" />
        <MarketplaceCard {...args} {...Live.args} />
        <div style={{
        display: 'grid',
        gap: 8,
        alignContent: 'start',
        padding: 8
      }}>
          <Skeleton height={150} style={{
          borderRadius: 12
        }} />
          <Skeleton width="85%" height={14} />
          <Skeleton width="50%" height={12} />
          <Skeleton width="40%" height={16} />
        </div>
      </div>
    </div>
}`,...R.parameters?.docs?.source},description:{story:`A small screen composed only from DS components: Tabs + cards + Skeleton while loading.`,...R.parameters?.docs?.description}}}})))()}B();export{F as AuctionEndingSoon,P as FixedPrice,I as Live,R as MarketplaceGrid,L as Saveable,z as __namedExportsOrder,N as default};