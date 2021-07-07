---
title: Using Global CSS Styles on Websites with Third Party Controls
description: Using Global CSS Styles on Websites with Third Party Controls - Telerik Web UI. Check it now!
type: how-to
page_title: Using Global CSS Styles on Websites with Third Party Controls
slug: licensing-using-global-css-styles-on-websites-with-third-party-controls
res_type: kb
---

 
## HOW-TO

Using Global CSS Styles on Websites with Third Party Controls

## SOLUTION
 
Defining CSS styles globally is a common practice for controlling the layout of entire websites, but this approach may result in unexpected and unpleasant behaviors in *third party* controls that these websites utilize.
 

Basically, a global CSS definition is the use of a selector with inherited properties without a class name, for example:
 

````CSS
table  
 {  
     border-collapse: collapse;  
     border: solid 1px red;  
     font: bold 14px Verdana, Arial, Sans-serif;  
     line-height: 2em;  
 }
 ````

 
Such definitions, although convenient, will apply their settings to third party controls, which have the same selectors, but do **not** have the properties that are explicitly defined in the global CSS definition, so:
 

````CSS
table.RadGrid  
{  
    background: red;  
}
```` 

 
…will automatically result in…
 
````CSS 
table.RadGrid  
 {  
     border-collapse: collapse;  
     border: solid 1px red;  
     font: bold 14px Verdana, Arial, Sans-serif;  
     line-height: 2em;  
     background: red;  
 }
 ````

 
…Because the browser will apply both the global table settings and the table.RadGrid settings, and this will lead to significant changes in the design and layout of the third party control.
 
 
Basically, there are two ways of managing this issue:
 

 
**Reconsidering your own HTML and CSS**
 

 
When using third party controls, refrain from defining global CSS classes in your style sheets. For example, if your layout consists of div’s, give each layout div a unique class name, and define it separately, that is:
 

````CSS 
div.wrapper  
 {  
     margin: auto;  
     width: 800px;  
     border: solid 1px #404040;  
     background: lightgreen;  
 }
 ````

 
…instead of:
 

````CSS 
div  
 {  
     border: solid 1px #404040;  
     background: lightgreen;  
 }
 ````

 
**Editing the Third Party Control’s CSS**
 
 
The second approach is to edit the CSS styles of the third party control, which is obviously not the best way, because you will have both to understand the logic of these styles and then to override the global settings using the !important flag, or setting the missing properties and their values explicitly, that is:
 

 ````CSS
table.RadGrid  
{  
    border-collapse: separate;  
    border: solid 1px #000;  
    font: normal 12px Verdana, Arial, Sans-serif;  
    background: #fff;  
    line-height: 2.1em;  
}
 ````

 
…In order to override the global table settings:
 

 ````CSS
table  
 {  
     border-collapse: collapse;  
     border: solid 1px red;  
     font: bold 14px Verdana, Arial, Sans-serif;  
     background: red;  
     line-height: 2em;  
 }
````

 