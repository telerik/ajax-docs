---
title: Controlling Z-Index
page_title: Controlling Z-Index - RadAjaxLoadingPanel
description: Check our Web Forms article about Controlling Z-Index.
slug: ajaxloadingpanel/appearance-and-styling/controlling-z-index
previous_url: ajax/appearance-and-styling/controlling-z-index
tags: controlling,z-index
published: True
position: 2
---

# Controlling Z-Index



**RadAjaxLoadingPanel** has default z-index set to 90000. To change this default setting, you can use one of the approaches below, based on the way the loading panel is configured:

* When **RadAjaxLoadingPanel** uses **Skin** the Z-index could be directly set in the markup using the **ZIndex** property of the control

````ASP.NET
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" Skin="Vista" ZIndex="3000" />
          
````


* When **RadAjaxLoadingPanel** has a template defined, the z-index could be set through **inline CSS**:

````ASP.NET	
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" style="z-index:3000;">
    <img alt="loading..." src="loading.gif" />
</telerik:RadAjaxLoadingPanel>
````         



## 

>note Note that when **IsSticky** is set to **true** , z-index is not automatically assigned to the **RadAjaxLoadingPanel** .
>


## See Also

 * [Overview]({%slug ajaxloadingpanel/overview%})

 * [Skins]({%slug ajaxloadingpanel/appearance-and-styling/skins%})

 * [Controlling Appearance of a RadAjaxLoadingPanel]({%slug ajaxloadingpanel/appearance-and-styling/controlling-appearance-of-a-radajaxloadingpanel%})

 * [HTML Output]({%slug ajaxloadingpanel/appearance-and-styling/html-output%})
