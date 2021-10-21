---
title: Secure and nonsecure items warning with RadEditor under SSL HTTPS
description: Secure and nonsecure items warning with RadEditor under SSL HTTPS. Check it now!
type: how-to
page_title: Secure and nonsecure items warning with RadEditor under SSL HTTPS
slug: editor-secure-nonsecure-warning-with-radeditor-under-ssl-https
res_type: kb
---

  
   
 **PROBLEM**  

In scenarios when using RadEditor under SSL (Secure Sockets Layer) environment, you can receive a warning message  that says "This page contains both secure and nonsecure item".  
   
 **SOLUTION  

Here is a list of the reasons which could cause the problem and suggestions how to fix it:  
 
 
- The warning message is most likely due to the fact that Visual Studio 2005 sometimes adds LINK tag(s) inside the HEAD tag that point(s) to the editor css skin file(s), e.g.:
     &lt;link href="**C:\**Dev\WebProject\RadControls\Editor\Skins\Default\Controls.css" rel="stylesheet" type="text/css" /&gt;
     As you can see the **href** attribute of the LINK tag points to your the server's **local drive **which path under SSL environment is a forbidden destination.
     Since RadEditor does not need this LINK tag as it is able to locate its controls.css file itself, you should manually delete the LINK tag.
- The problem could be also due to a CSS class that specifies a **relative url**, such as a CSS using a background-image selector, i.e.      background-image: url(CssImg/Separator.gif);
    Check your CSS classes that you have in your page and replace the relative paths within absolute url paths that start with **https://**.
- Set the **CssFiles **property of RadEditor to point to an external css file which has basic css classes that do not contain any url paths in them.



 