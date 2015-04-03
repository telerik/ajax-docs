---
title: Controlling Z-Index
page_title: Controlling Z-Index | UI for ASP.NET AJAX Documentation
description: Controlling Z-Index
slug: ajax/appearance-and-styling/controlling-z-index
tags: controlling,z-index
published: True
position: 2
---

# Controlling Z-Index



__RadAjaxLoadingPanel__ has default z-index set to 90000. To change this default setting, you can use one of the approaches below, based on the way the loading panel is configured:

* When __RadAjaxLoadingPanel__ uses __Skin__ the Z-index could be directly set in the markup using the __ZIndex__ property of the control#_ASPX_

	
            <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server"
            Skin="Vista" ZIndex="3000" />
          



* When __RadAjaxLoadingPanel__ has a template defined, the z-index could be set through __inline CSS__:#_ASPX_

	
            <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server"
            style="z-index:3000;">
            <img alt="loading..." src="loading.gif" />
            </telerik:RadAjaxLoadingPanel>
          



## 

>note Note that when __IsSticky__ is set to __true__ , z-index is not automatically assigned to the __RadAjaxLoadingPanel__ .
>


# See Also

 * [Overview]({%slug ajax/radajaxloadingpanel/overview%})

 * [Skins]({%slug ajax/appearance-and-styling/skins%})

 * [Controlling Appearance of a RadAjaxLoadingPanel]({%slug ajax/appearance-and-styling/controlling-appearance-of-a-radajaxloadingpanel%})

 * [HTML Output]({%slug ajax/appearance-and-styling/html-output%})
