"use strict";(self.webpackChunkcaspardb=self.webpackChunkcaspardb||[]).push([[807],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(r),m=i,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={title:"Introduction \xe0 Git",sidebar_label:"Introduction \xe0 Git",pagination_label:"Introduction \xe0 Git",description:"Introduction \xe0 Git",keywords:["docs","devops","git"]},o=void 0,s={unversionedId:"bases/git",id:"bases/git",title:"Introduction \xe0 Git",description:"Introduction \xe0 Git",source:"@site/docs/09-bases/01-git.md",sourceDirName:"09-bases",slug:"/bases/git",permalink:"/random-veille/bases/git",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/09-bases/01-git.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction \xe0 Git",sidebar_label:"Introduction \xe0 Git",pagination_label:"Introduction \xe0 Git",description:"Introduction \xe0 Git",keywords:["docs","devops","git"]},sidebar:"tutorialSidebar",previous:{title:"Accueil bases",permalink:"/random-veille/bases/"},next:{title:"Accueil OSINT",permalink:"/random-veille/osint/"}},u={},l=[{value:"Commandes principales de <code>git</code>",id:"commandes-principales-de-git",level:2},{value:"R\xe9cup\xe9rer un projet depuis un d\xe9p\xf4t distant",id:"r\xe9cup\xe9rer-un-projet-depuis-un-d\xe9p\xf4t-distant",level:3},{value:"Ajouter des fichiers au tracking de Git",id:"ajouter-des-fichiers-au-tracking-de-git",level:3},{value:"Cr\xe9er une branche",id:"cr\xe9er-une-branche",level:3},{value:"Commit vos changements et les push",id:"commit-vos-changements-et-les-push",level:3},{value:"Merge une branche A dans une branche B",id:"merge-une-branche-a-dans-une-branche-b",level:3}],p={toc:l},c="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Git, c'est ",(0,i.kt)("strong",{parentName:"p"},"LE")," logiciel que vous devez connaitre pour r\xe9ussir \xe0 travailler en \xe9quipe. D\xe9veloppeur, DevOps, Ops, tout le monde utilise Git pour la simple et bonne raison qu'il n'existe pas vraiment d'alternatives, Git ayant tout simplement \xe9cras\xe9 la concurrence lors de sa sortie."),(0,i.kt)("p",null,"Vous trouverez bien \xe9videmment plusieurs serveurs Git, dont voici une petite liste non-exhaustive :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/"},"GitHub"),", sur lequel est h\xe9berg\xe9 ce site d'ailleurs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlab.com/gitlab-org/gitlab"},"GitLab"),", qui propose par ailleurs une instance gratuite, mais avec + de conditions que GitHub."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://forgejo.org/"},"Forgejo"),", dont l'instance principale est ",(0,i.kt)("a",{parentName:"li",href:"https://codeberg.org/"},"codeberg.org"),". Forgejo est un logiciel libre, et est tr\xe8s l\xe9ger ce qui permet de le d\xe9ployer un peu partout, si vous souhaitez vous passer de GitHub notamment.")),(0,i.kt)("p",null,"Si vous souhaitez rentrer un peu plus dans les diff\xe9rentes commandes disponibles avec ",(0,i.kt)("inlineCode",{parentName:"p"},"git"),", je vous invite \xe0 lire ",(0,i.kt)("a",{parentName:"p",href:"https://rogerdudler.github.io/git-guide/index.fr.html"},"ce tutoriel")," qui est tr\xe8s complet et par lequel beaucoup de devs passent pour apprendre \xe0 ma\xeetriser l'outil."),(0,i.kt)("p",null,"D'ailleurs, si vous voulez faire des trucs un peu tricky, il peut \xeatre utile d'avoir un GUI Git sous la main.\nPour GitHub, vous pouvez utiliser ",(0,i.kt)("a",{parentName:"p",href:"https://desktop.github.com/"},"GitHub Desktop"),"."),(0,i.kt)("p",null,"Pour avoir une solution un peu plus puissante, vous pouvez utiliser ",(0,i.kt)("a",{parentName:"p",href:"https://www.gitkraken.com/"},"GitKraken"),".\nAu passage, si vous avez un compte ",(0,i.kt)("a",{parentName:"p",href:"https://education.github.com/students"},"GitHub Students"),", GitKraken vous offrira une license Pro."),(0,i.kt)("h2",{id:"commandes-principales-de-git"},"Commandes principales de ",(0,i.kt)("inlineCode",{parentName:"h2"},"git")),(0,i.kt)("h3",{id:"r\xe9cup\xe9rer-un-projet-depuis-un-d\xe9p\xf4t-distant"},"R\xe9cup\xe9rer un projet depuis un d\xe9p\xf4t distant"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone <repo_url>\n")),(0,i.kt)("h3",{id:"ajouter-des-fichiers-au-tracking-de-git"},"Ajouter des fichiers au tracking de Git"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git add <fichiers>\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Vous pouvez aussi utiliser des wildcards comme ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," ou ",(0,i.kt)("inlineCode",{parentName:"p"},"."),".")),(0,i.kt)("h3",{id:"cr\xe9er-une-branche"},"Cr\xe9er une branche"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout -b <nom_branche>\n")),(0,i.kt)("h3",{id:"commit-vos-changements-et-les-push"},"Commit vos changements et les push"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -m "message du commit"\ngit push\n')),(0,i.kt)("h3",{id:"merge-une-branche-a-dans-une-branche-b"},"Merge une branche A dans une branche B"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout branche_b\ngit merge branche_a\n")))}d.isMDXComponent=!0}}]);