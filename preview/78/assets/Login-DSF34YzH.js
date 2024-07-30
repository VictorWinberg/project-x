import{a as D,bb as w,r as u,j as e,G as t,bC as h,f as d,B as n,D as x,T as i,M as g,N as j,bD as p,b9 as c,b7 as E,J as F,S as y,L as b,bE as P}from"./index-W-oHtgo0.js";import{G as B,d as L,A as G,a as W,b as M}from"./social-google-CU-ooJqX.js";import{u as z,d as R,F as H,a as q}from"./index.esm-CwwIOZu5.js";const T=()=>{const r=D(),o=w(r.breakpoints.down("md")),[f,C]=u.useState(!0),{register:m,formState:{errors:s},handleSubmit:v}=z(),S=async()=>{console.error("Google Login")},[a,k]=u.useState(!1),I=()=>{k(!a)},A=l=>{l.preventDefault()};return e.jsxs(e.Fragment,{children:[e.jsxs(t,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(h,{children:e.jsxs(d,{disableElevation:!0,fullWidth:!0,onClick:S,size:"large",variant:"outlined",sx:{color:"grey.700",backgroundColor:r.palette.grey[50],borderColor:r.palette.grey[100]},children:[e.jsx(n,{sx:{mr:{xs:1,sm:2,width:20}},children:e.jsx("img",{src:B,alt:"google",width:16,height:16,style:{marginRight:o?8:16}})}),"Sign in with Google"]})})}),e.jsx(t,{item:!0,xs:12,children:e.jsxs(n,{sx:{alignItems:"center",display:"flex"},children:[e.jsx(x,{sx:{flexGrow:1},orientation:"horizontal"}),e.jsx(d,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:`${r.palette.grey[100]} !important`,color:`${r.palette.grey[900]}!important`,fontWeight:500,borderRadius:"6px"},disableRipple:!0,disabled:!0,children:"OR"}),e.jsx(x,{sx:{flexGrow:1},orientation:"horizontal"})]})}),e.jsx(t,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:e.jsx(n,{sx:{mb:2},children:e.jsx(i,{variant:"subtitle1",children:"Sign in with Email address"})})})]}),e.jsxs("form",{noValidate:!0,onSubmit:v(console.log),children:[e.jsxs(g,{fullWidth:!0,error:!!s.email,sx:{...r.typography.customInput},children:[e.jsx(j,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),e.jsx(p,{id:"outlined-adornment-email-login",type:"email",label:"Email Address / Username",inputProps:{},...m("email",{required:"Email is required",pattern:{value:/^\S+@\S+$/i,message:"Must be a valid email address"},maxLength:{value:255,message:"Email address is too long"}})}),s.email&&e.jsx(c,{error:!0,id:"standard-weight-helper-text-email-login",children:s.email.message})]}),e.jsxs(g,{fullWidth:!0,error:!!s.password,sx:{...r.typography.customInput},children:[e.jsx(j,{htmlFor:"outlined-adornment-password-login",children:"Password"}),e.jsx(p,{id:"outlined-adornment-password-login",type:a?"text":"password",...m("password",{required:"Password is required"}),endAdornment:e.jsx(E,{position:"end",children:e.jsx(F,{"aria-label":"toggle password visibility",onClick:I,onMouseDown:A,edge:"end",size:"large",children:a?e.jsx(L,{}):e.jsx(R,{})})}),label:"Password",inputProps:{}}),s.password&&e.jsx(c,{error:!0,id:"standard-weight-helper-text-password-login",children:s.password.message})]}),e.jsxs(y,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[e.jsx(H,{control:e.jsx(q,{checked:f,onChange:l=>C(l.target.checked),name:"checked",color:"primary"}),label:"Remember me"}),e.jsx(i,{variant:"subtitle1",color:"primary",sx:{textDecoration:"none",cursor:"pointer"},children:"Forgot Password?"})]}),s.root&&e.jsx(n,{sx:{mt:3},children:e.jsx(c,{error:!0,children:s.root.message})}),e.jsx(n,{sx:{mt:2},children:e.jsx(h,{children:e.jsx(d,{disableElevation:!0,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Sign in"})})})]})]})},_=()=>{const r=w(o=>o.breakpoints.down("md"));return e.jsx(G,{children:e.jsxs(t,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:e.jsx(t,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:e.jsx(W,{children:e.jsxs(t,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[e.jsx(t,{item:!0,sx:{mb:3},children:e.jsx(b,{to:"#","aria-label":"logo",children:e.jsx(P,{})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{container:!0,direction:{xs:"column-reverse",md:"row"},alignItems:"center",justifyContent:"center",children:e.jsx(t,{item:!0,children:e.jsxs(y,{alignItems:"center",justifyContent:"center",spacing:1,children:[e.jsx(i,{color:"primary.main",gutterBottom:!0,variant:r?"h3":"h2",children:"Hi, Welcome Back"}),e.jsx(i,{variant:"caption",fontSize:"16px",textAlign:{xs:"center",md:"inherit"},children:"Enter your credentials to continue"})]})})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(T,{})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(x,{})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:e.jsx(i,{component:b,to:"/pages/register",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})})})}),e.jsx(t,{item:!0,xs:12,sx:{m:3,mt:1},children:e.jsx(M,{})})]})})};export{_ as default};
