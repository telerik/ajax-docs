---
title: Scroll with Static Headers
page_title: Scroll with Static Headers | UI for ASP.NET AJAX Documentation
description: Scroll with Static Headers
slug: grid/functionality/scrolling/scroll-with-static-headers
tags: scroll,with,static,headers
published: True
position: 1
---

# Scroll with Static Headers



## 

The most common problem when scrolling is losing the context of the current column. This context is supplied by the column header. __RadGrid__ lets you keep the header at the top even when scrolling the grid. To enable this feature, set the __ClientSettings.Scrolling.UseStaticHeaders__ property to __True__. (Its default value is __False__.)

When __UseStaticHeaders__ property is set to __True__, grid header and pager remain static, even when the grid is scrolled:

![UseStaticHeaders is true](images/grid_scroll-with-static-headers-true.png)

When __UseStaticHeaders__ is __False__, the header and pager scroll along with the data rows:

![UseStaticHeaders is false](images/grid_scroll-with-static-headers-false.png)

>note When scrolling is enabled and __UseStaticHeaders__ is __True__ , the grid columns should declare __HeaderStyle.Width__ .
>


You can set __UseStaticHeaders__ declaratively at design time:

````ASPNET
	<telerik:RadGrid runat="server" ... />
	   <ClientSettings>
	       <Scrolling AllowScroll="True" UseStaticHeaders="true" />
	   <ClientSettings>
	   ...
	</telerik:RadGrid>		
````



You can also set the scrolling properties in the code-behind at runtime:

>tabbedCode

````C#
	        RadGrid1.ClientSettings.Scrolling.AllowScroll = true;
	        RadGrid1.ClientSettings.Scrolling.UseStaticHeaders = true;
````
````VB.NET
	        RadGrid1.ClientSettings.Scrolling.AllowScroll = True
	        RadGrid1.ClientSettings.Scrolling.UseStaticHeaders = True
````
>end

>note If you use static headers when the grid's __Width__ and __Height__ properties are set to "100%", the Web page shows only the grid scrollbars; the browser scrollbars are hidden. In this way, __RadGrid__ can mimic a desktop application such as Microsoft Excel.
>

