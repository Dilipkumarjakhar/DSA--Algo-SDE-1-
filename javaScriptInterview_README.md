**JAVASCRIPT INTERVIEW Topics**
**How to find which browser user use for Browsing the website**
- Steps to detect browser name in JavaScript
 1.HTML markup to display browser name.
 2.JavaScript code to detect browser using useragent.match
 3.JavaScript code to detect browser using useragent.indexOf


```
HTML
<p id="navigater_userAgent">Which Browser user use simply find using navigater.userAgent</p>
--------------
--------------
JS
let userAgent=window.navigator.userAgent;
let browserName;
if(userAgent.match(/chrome|chromium|crios/i)){
    browserName = "chrome";
}else if(userAgent.match(/firefox|fxios/i)){
    browserName = "firefox";
}  else if(userAgent.match(/safari/i)){
    browserName = "safari";
}else if(userAgent.match(/opr\//i)){
    browserName = "opera";
} else if(userAgent.match(/edg/i)){
    browserName = "edge";
}else{
    browserName="No browser detection";
}
let z=document.getElementById("navigater_userAgent");
z.innerHTML=" "+" "+":"+browserName;
```

```
output:-Which Browser user use simply find using navigater.userAgent :chrome
```
**isNaN**

```
- h
```
**isNaN**

```
- h
```