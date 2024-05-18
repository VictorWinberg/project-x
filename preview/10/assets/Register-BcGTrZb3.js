import{ai as l,A as $,a9 as R,f as d,j as e,G as t,aa as v,N as h,B as i,D as j,T as a,W as S,ab as g,ac as I,ad as k,ae as p,af as N,L as b,ah as q,ag as H}from"./index-Bttwv09b.js";import{G as V,F as _,c as O,a as A,I as Q,d as U,b as Z,e as J,C as K,A as X,f as Y,g as ee}from"./AuthFooter-BWJqu28F.js";const te=r=>new RegExp(/[0-9]/).test(r),re=r=>new RegExp(/[a-z]/).test(r)&&new RegExp(/[A-Z]/).test(r),se=r=>new RegExp(/[!#@$%^&*)(+=._-]/).test(r),ne=r=>r<2?{label:"Poor",color:l.errorMain}:r<3?{label:"Weak",color:l.warningDark}:r<4?{label:"Normal",color:l.orangeMain}:r<5?{label:"Good",color:l.successMain}:r<6?{label:"Strong",color:l.successDark}:{label:"Poor",color:l.errorMain},ie=r=>{let s=0;return r.length>5&&(s+=1),r.length>7&&(s+=1),te(r)&&(s+=1),se(r)&&(s+=1),re(r)&&(s+=1),s},ae=({...r})=>{const s=$(),f=R(s.breakpoints.down("md")),[m,E]=d.useState(!1),[P,W]=d.useState(!0),[F,M]=d.useState(0),[o,D]=d.useState(),B=async()=>{console.error("Register")},z=()=>{E(!m)},G=n=>{n.preventDefault()},w=n=>{const c=ie(n);M(c),D(ne(c))};return d.useEffect(()=>{w("123456")},[]),e.jsxs(e.Fragment,{children:[e.jsxs(t,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(v,{children:e.jsxs(h,{variant:"outlined",fullWidth:!0,onClick:B,size:"large",sx:{color:"grey.700",backgroundColor:s.palette.grey[50],borderColor:s.palette.grey[100]},children:[e.jsx(i,{sx:{mr:{xs:1,sm:2,width:20}},children:e.jsx("img",{src:V,alt:"google",width:16,height:16,style:{marginRight:f?8:16}})}),"Sign up with Google"]})})}),e.jsx(t,{item:!0,xs:12,children:e.jsxs(i,{sx:{alignItems:"center",display:"flex"},children:[e.jsx(j,{sx:{flexGrow:1},orientation:"horizontal"}),e.jsx(h,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:`${s.palette.grey[100]} !important`,color:`${s.palette.grey[900]}!important`,fontWeight:500,borderRadius:"12px"},disableRipple:!0,disabled:!0,children:"OR"}),e.jsx(j,{sx:{flexGrow:1},orientation:"horizontal"})]})}),e.jsx(t,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:e.jsx(i,{sx:{mb:2},children:e.jsx(a,{variant:"subtitle1",children:"Sign up with Email address"})})})]}),e.jsx(_,{initialValues:{email:"",password:"",submit:null},validationSchema:O().shape({email:A().email("Must be a valid email").max(255).required("Email is required"),password:A().max(255).required("Password is required")}),onSubmit:console.log,children:({errors:n,handleBlur:c,handleChange:y,handleSubmit:L,isSubmitting:T,touched:u,values:C})=>e.jsxs("form",{noValidate:!0,onSubmit:L,...r,children:[e.jsxs(t,{container:!0,spacing:f?0:2,children:[e.jsx(t,{item:!0,xs:12,sm:6,children:e.jsx(S,{fullWidth:!0,label:"First Name",margin:"normal",name:"fname",type:"text",defaultValue:"",sx:{...s.typography.customInput}})}),e.jsx(t,{item:!0,xs:12,sm:6,children:e.jsx(S,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lname",type:"text",defaultValue:"",sx:{...s.typography.customInput}})})]}),e.jsxs(g,{fullWidth:!0,error:!!(u.email&&n.email),sx:{...s.typography.customInput},children:[e.jsx(I,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),e.jsx(k,{id:"outlined-adornment-email-register",type:"email",value:C.email,name:"email",onBlur:c,onChange:y,inputProps:{}}),u.email&&n.email&&e.jsx(p,{error:!0,id:"standard-weight-helper-text--register",children:n.email})]}),e.jsxs(g,{fullWidth:!0,error:!!(u.password&&n.password),sx:{...s.typography.customInput},children:[e.jsx(I,{htmlFor:"outlined-adornment-password-register",children:"Password"}),e.jsx(k,{id:"outlined-adornment-password-register",type:m?"text":"password",value:C.password,name:"password",label:"Password",onBlur:c,onChange:x=>{y(x),w(x.target.value)},endAdornment:e.jsx(N,{position:"end",children:e.jsx(Q,{"aria-label":"toggle password visibility",onClick:z,onMouseDown:G,edge:"end",size:"large",children:m?e.jsx(U,{}):e.jsx(Z,{})})}),inputProps:{}}),u.password&&n.password&&e.jsx(p,{error:!0,id:"standard-weight-helper-text-password-register",children:n.password})]}),F!==0&&e.jsx(g,{fullWidth:!0,children:e.jsx(i,{sx:{mb:2},children:e.jsxs(t,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(t,{item:!0,children:e.jsx(i,{style:{backgroundColor:o==null?void 0:o.color},sx:{width:85,height:8,borderRadius:"7px"}})}),e.jsx(t,{item:!0,children:e.jsx(a,{variant:"subtitle1",fontSize:"0.75rem",children:o==null?void 0:o.label})})]})})}),e.jsx(t,{container:!0,alignItems:"center",justifyContent:"space-between",children:e.jsx(t,{item:!0,children:e.jsx(J,{control:e.jsx(K,{checked:P,onChange:x=>W(x.target.checked),name:"checked",color:"primary"}),label:e.jsxs(a,{variant:"subtitle1",children:["Agree with  ",e.jsx(a,{variant:"subtitle1",component:b,to:"#",children:"Terms & Condition."})]})})})}),n.submit&&e.jsx(i,{sx:{mt:3},children:e.jsx(p,{error:!0,children:n.submit})}),e.jsx(i,{sx:{mt:2},children:e.jsx(v,{children:e.jsx(h,{disableElevation:!0,disabled:T,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign up"})})})]})})]})},ce=()=>{const r=R(s=>s.breakpoints.down("md"));return e.jsx(X,{children:e.jsxs(t,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:e.jsx(t,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:e.jsx(Y,{children:e.jsxs(t,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[e.jsx(t,{item:!0,sx:{mb:3},children:e.jsx(b,{to:"#","aria-label":"theme logo",children:e.jsx(q,{})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{container:!0,direction:{xs:"column-reverse",md:"row"},alignItems:"center",justifyContent:"center",children:e.jsx(t,{item:!0,children:e.jsxs(H,{alignItems:"center",justifyContent:"center",spacing:1,children:[e.jsx(a,{color:"secondary.main",gutterBottom:!0,variant:r?"h3":"h2",children:"Sign up"}),e.jsx(a,{variant:"caption",fontSize:"16px",textAlign:{xs:"center",md:"inherit"},children:"Enter your credentials to continue"})]})})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(ae,{})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(j,{})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:e.jsx(a,{component:b,to:"/pages/login",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})})})}),e.jsx(t,{item:!0,xs:12,sx:{m:3,mt:1},children:e.jsx(ee,{})})]})})};export{ce as default};
