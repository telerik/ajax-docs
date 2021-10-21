---
title: Using ASP.NET Themes for setting RadControls properties
description: Using ASP.NET Themes for setting RadControls properties. Check it now!
type: how-to
page_title: Using ASP.NET Themes for setting RadControls properties
slug: licensing-using-asp-net-themes-for-setting-radcontrols-properties
res_type: kb
---


## HOW-TO

Use ASP.NET Themes for setting Telerik UI for ASP.NET AJAX controls properties

## SOLUTION

The attached demo [here](files/licensing-using-asp-net-themes-with-radcontrols.zip) shows how you can set different controls' properties using the ASP.NET Themes mechanism. This approach is useful in scenarios where you want to show RadControls using Ajax request but you find that your page updates very slowly due to complicated layout. There is a property called `EnableAjaxSkinRendering` (set to true by default) that handles such scenarios automatically, however if you want to this manually, here is how to do this:


As you can see in the `Default.aspx` file, we have a basic web form with
three controls (initially hidden). The controls
become visible after an AJAX request. Note that `EnableAjaxSkinRendering`
is not used on the page. The only thing you should note on the page is
its theme `Theme="NoAjaxSkin"`.  
   

The `App_Themes` folder should be placed in the
root of your web application. Inside it are all the themes for the
application. In this demo we have a single theme called **NoAjaxSkin**.
Inside the theme folder there is a special file called RadControls.skin.
The `*.skin` files in a theme folder are automatically parsed by ASP.NET.
Inside this file we can add properties to the different controls. We are doing just that - adding an `EnableAjaxSkinRendering` property for the
grid, menu, and tree controls. The property will be applied on all such
controls on pages that use the  **NoAjaxSkin** theme.   
   

The final thing you need to do is load the actual CSS files for the
controls, since they are not going to be output
(`EnableAjaxSkinRendering="false"`). ASP.NET will automatically load all
CSS files that are inside a theme folder. We are taking advantage of this
feature and have placed the needed CSS files (from the Skins folder of
the RadControls for ASP.NET AJAX distribution) in the **NoAjaxSkin** theme.
Of course, you can load the CSS files manually in the page as well and
leave only the RadControls.skin folder in the theme.  
   

One final thing that must be noted is that if you want to apply a
particular theme on all the pages in your application, you do not need
to modify each `.aspx` file and add a `Theme="..."` to the page directive.
You can do this in the Web.config file:  
   
 
````XML
<configuration> 
    <system.web> 
        <pages theme="NoAjaxSkin" /> 
    </system.web> 
</configuration> 
````

The above will enable the **NoAjaxSkin** theme for all pages in the web application.  
 

  
