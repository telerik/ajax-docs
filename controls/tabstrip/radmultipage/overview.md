---
title: Overview
page_title: RadMultiPage Overview | RadTabStrip for ASP.NET AJAX Documentation
description: Overview
slug: tabstrip/radmultipage/overview
tags: overview
published: True
position: 0
---

# RadMultiPage Overview



You can use the __RadMultiPage__ control to organize the content of tabbed pages.__RadMultiPage__ acts as a container for __RadPageView__ controls, where each __RadPageView__ represents the content of a page associated with a tab in a __RadTabStrip__ control. Separated from the tab strip labels, the content can be positioned anywhere on the page.

__RadMultiPage__ is intended to be used primarily with __RadTabStrip__. At the same time, __RadMultiPage__ is a self-contained component that can be used as a general multi-page application.

The screenshot below shows __RadTabStrip__ together with __RadMultiPage__.

![Multipage](images/tabstrip_tab_multipage.gif)

To integrate __RadTabStrip__ with __RadMultiPage__, set the __MultiPageID__ property of the tab strip to the __ID__ of the multi-page instance. For more details, see [Integrating RadMultiPage with RadTabStrip]({%slug tabstrip/radmultipage/integrating-with--radtabstrip%}).

>note See a live example of this functionality at[www.telerik.com](http://demos.telerik.com/aspnet-ajax/tabstrip/examples/functionality/multipage/defaultcs.aspx).
>


## Structure

__RadMultiPage__ acts as a container for __RadPageView__ controls. Each __RadPageView__ control in turn contains child controls such as buttons and text boxes. You can programmatically show and hide a particular __RadPageView__ on the sever and client side.

__RadMultiPage__ consists of several __RadPageView__ controls used to hold and display information. The structure of a __RadMultiPage__ looks like the following:

````ASPNET
	 
	 <telerik:RadMultiPage id="RadMultiPage1" runat="server" SelectedIndex="0" Width="400">
	  <telerik:RadPageView id="Pageview1" runat="server">
	      Name: John Smith<br />
	      Birthday: October 20th 1976<br />
	      Marital Status: Single
	      <br />
	  </telerik:RadPageView>
	  <telerik:RadPageView id="Pageview2" runat="server">
	      ...
	      Content of the Pageview2
	      ...
	  </telerik:RadPageView>
	  <telerik:RadPageView id="Pageview3" runat="server">
	      ...
	      Content of the Pageview3
	      ...
	  </telerik:RadPageView>
	</telerik:RadMultiPage> 
	 
````



## Appearance

The visual appearance can be defined using CSS style sheets applied to the multi-page structure elements (the __RadPageView__ controls).

# See Also

 * [Integrating with  RadTabStrip]({%slug tabstrip/radmultipage/integrating-with--radtabstrip%})

 * [RadMultiPage Scroll Bars]({%slug tabstrip/radmultipage/radmultipage-scroll-bars%})
