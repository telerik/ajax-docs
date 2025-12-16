---
title: Non working dialogs when xhtmlConformance mode Legacy is set in the web.config
description: Non working RadEditor dialogs when xhtmlConformance mode Legacy is set in the web.config. Check it now!
type: how-to
page_title: Non working dialogs when xhtmlConformance mode Legacy is set in the web.config
slug: editor-non-working-dialogs-when-xhtmlconformance-mode-legacy-is-set-in-the-web-config
res_type: kb
---


   
## PROBLEM
 Non working dialogs when xhtmlConformance mode="Legacy" is set in the web.config  
   
## SYMPTOMS
The following symptons or errrors could be caused by the xhtmlConformance mode="Legacy" web.config setting:  
 
1. Blank managers
2. Non accessible textboxes, dropdowns or other elements in the dialogs
3. Error: Sys.WebForms is undefined

 
## SOLUTION 
 The problem is caused by the following line in project's web.config file:
 
````ASP.NET
<xhtmlConformance mode="Legacy"/>
````

This setting is incompatible with ASP.NET AJAX controls (like RadEditor) and it should be removed. This setting could be added when upgrading an old project with Visual Studio.  
   



 