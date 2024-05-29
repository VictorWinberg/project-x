import{a as W,aK as C,r as p,j as e,G as t,aL as j,f as d,B as s,D as m,T as i,aa as g,ac as w,aM as b,aN as c,ab as G,aO as v,L as y,aP as M}from"./index-CHY1lVvJ.js";import{G as z,c as R,a as f,d as H,b as $,A as q,e as T,f as O}from"./AuthFooter-COPCRJre.js";import{F as U}from"./formik.esm-7Z_jRDH6.js";import{I as V}from"./IconButton-DXGcB5xq.js";import{F as _,C as K}from"./FormControlLabel-OrlK4W5m.js";const N=({...o})=>{const n=W(),k=C(n.breakpoints.down("md")),[I,S]=p.useState(!0),A=async()=>{console.error("Login")},[l,F]=p.useState(!1),P=()=>{F(!l)},B=r=>{r.preventDefault()};return e.jsxs(e.Fragment,{children:[e.jsxs(t,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(j,{children:e.jsxs(d,{disableElevation:!0,fullWidth:!0,onClick:A,size:"large",variant:"outlined",sx:{color:"grey.700",backgroundColor:n.palette.grey[50],borderColor:n.palette.grey[100]},children:[e.jsx(s,{sx:{mr:{xs:1,sm:2,width:20}},children:e.jsx("img",{src:z,alt:"google",width:16,height:16,style:{marginRight:k?8:16}})}),"Sign in with Google"]})})}),e.jsx(t,{item:!0,xs:12,children:e.jsxs(s,{sx:{alignItems:"center",display:"flex"},children:[e.jsx(m,{sx:{flexGrow:1},orientation:"horizontal"}),e.jsx(d,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:`${n.palette.grey[100]} !important`,color:`${n.palette.grey[900]}!important`,fontWeight:500,borderRadius:"6px"},disableRipple:!0,disabled:!0,children:"OR"}),e.jsx(m,{sx:{flexGrow:1},orientation:"horizontal"})]})}),e.jsx(t,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:e.jsx(s,{sx:{mb:2},children:e.jsx(i,{variant:"subtitle1",children:"Sign in with Email address"})})})]}),e.jsx(U,{initialValues:{email:"",password:"",submit:null},validationSchema:R().shape({email:f().email("Must be a valid email").max(255).required("Email is required"),password:f().max(255).required("Password is required")}),onSubmit:console.log,children:({errors:r,handleBlur:x,handleChange:u,handleSubmit:D,isSubmitting:E,touched:a,values:h})=>e.jsxs("form",{noValidate:!0,onSubmit:D,...o,children:[e.jsxs(g,{fullWidth:!0,error:!!(a.email&&r.email),sx:{...n.typography.customInput},children:[e.jsx(w,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),e.jsx(b,{id:"outlined-adornment-email-login",type:"email",value:h.email,name:"email",onBlur:x,onChange:u,label:"Email Address / Username",inputProps:{}}),a.email&&r.email&&e.jsx(c,{error:!0,id:"standard-weight-helper-text-email-login",children:r.email})]}),e.jsxs(g,{fullWidth:!0,error:!!(a.password&&r.password),sx:{...n.typography.customInput},children:[e.jsx(w,{htmlFor:"outlined-adornment-password-login",children:"Password"}),e.jsx(b,{id:"outlined-adornment-password-login",type:l?"text":"password",value:h.password,name:"password",onBlur:x,onChange:u,endAdornment:e.jsx(G,{position:"end",children:e.jsx(V,{"aria-label":"toggle password visibility",onClick:P,onMouseDown:B,edge:"end",size:"large",children:l?e.jsx(H,{}):e.jsx($,{})})}),label:"Password",inputProps:{}}),a.password&&r.password&&e.jsx(c,{error:!0,id:"standard-weight-helper-text-password-login",children:r.password})]}),e.jsxs(v,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[e.jsx(_,{control:e.jsx(K,{checked:I,onChange:L=>S(L.target.checked),name:"checked",color:"primary"}),label:"Remember me"}),e.jsx(i,{variant:"subtitle1",color:"primary",sx:{textDecoration:"none",cursor:"pointer"},children:"Forgot Password?"})]}),r.submit&&e.jsx(s,{sx:{mt:3},children:e.jsx(c,{error:!0,children:r.submit})}),e.jsx(s,{sx:{mt:2},children:e.jsx(j,{children:e.jsx(d,{disableElevation:!0,disabled:E,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Sign in"})})})]})})]})},ee=()=>{const o=C(n=>n.breakpoints.down("md"));return e.jsx(q,{children:e.jsxs(t,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:e.jsx(t,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:e.jsx(T,{children:e.jsxs(t,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[e.jsx(t,{item:!0,sx:{mb:3},children:e.jsx(y,{to:"#","aria-label":"logo",children:e.jsx(M,{})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{container:!0,direction:{xs:"column-reverse",md:"row"},alignItems:"center",justifyContent:"center",children:e.jsx(t,{item:!0,children:e.jsxs(v,{alignItems:"center",justifyContent:"center",spacing:1,children:[e.jsx(i,{color:"primary.main",gutterBottom:!0,variant:o?"h3":"h2",children:"Hi, Welcome Back"}),e.jsx(i,{variant:"caption",fontSize:"16px",textAlign:{xs:"center",md:"inherit"},children:"Enter your credentials to continue"})]})})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(N,{})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(m,{})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:e.jsx(i,{component:y,to:"/pages/register",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})})})}),e.jsx(t,{item:!0,xs:12,sx:{m:3,mt:1},children:e.jsx(O,{})})]})})};export{ee as default};
