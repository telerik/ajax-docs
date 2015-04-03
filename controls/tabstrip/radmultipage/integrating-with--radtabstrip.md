---
title: Integrating with  RadTabStrip
page_title: Integrating with  RadTabStrip | UI for ASP.NET AJAX Documentation
description: Integrating with  RadTabStrip
slug: tabstrip/radmultipage/integrating-with--radtabstrip
tags: integrating,with,,radtabstrip
published: True
position: 5
---

# Integrating with  RadTabStrip



## 

Even if __RadMultiPage__ and __RadTabStrip__ can be used independently of each other, these controls are best used together. When __RadMultiPage__ is used with __RadTabStrip__, it represents the content area of __RadTabStrip__.

The screenshot below shows __RadTabStrip__ together with __RadMultiPage__:

![Multipage](images/tabstrip_tab_multipage.gif)

To integrate __RadTabStrip__ with __RadMultiPage__, set the __MultiPageID__ property of __RadTabStrip__ to the __ID__ of the __RadMultiPage__ control.

Once the __RadMultiPage__ control is attached to the __RadTabStrip__, its page views are automatically linked to the tabs in the tab strip as follows:

* When selected, the first tab displays the first page view, the second tab displays the second page view, and so on. The order of tabs in the __RadTabStrip__ follows a depth first pattern: that is, the children of the first tab are before the second root level tab.

* If the __RadMultiPage__ control contains more page views than there are tabs, the last page views are ignored.

* If the __RadTabStrip__ contains more tabs than there are page views, the last tabs do not display a page view.

Additionally, each tab in __RadTabStrip__ has a property named __PageViewID__, which assigns a specific page in the __RadMultiPage__ control that will be switched upon clicking on this tab.

Here is an example definition of __RadTabStrip__ connected to a __RadMultiPage__:

````ASPNET
	
	<telerik:RadTabStrip ID="RadTabStrip1" SelectedIndex="0" runat="server" MultiPageID="RadMultiPage1" skin="Outlook" CssClass="NoBg">
	 <Tabs>
	   <telerik:RadTab runat="server" Text="Root RadTab1" PageViewID="PageView1">
	   </telerik:RadTab>
	   <telerik:RadTab runat="server" Text="Root RadTab2" PageViewID="PageView2">
	   </telerik:RadTab>
	   <telerik:RadTab runat="server" Text="Root RadTab3" PageViewID="PageView3">
	   </telerik:RadTab>
	 </Tabs>
	</telerik:RadTabStrip>
	<telerik:RadMultiPage id="RadMultiPage1" runat="server" SelectedIndex="0" Width="400">
	  <telerik:RadPageView id="PageView1" runat="server">
	      Name: John Smith<br />
	      Birthday: October 20th 1976<br />
	      Marital Status: Single
	      <br />
	  </telerik:RadPageView>
	  <telerik:RadPageView id="PageView2" runat="server">
	      ...
	      Content of the Pageview2
	      ...
	  </telerik:RadPageView>
	  <telerik:RadPageView id="PageView3" runat="server" ContentUrl="http://www.telerik.com">
	      This text is never shown
	  </telerik:RadPageView>
	</telerik:RadMultiPage> 
	
````



>caution Note that the order of the pages is reversed: the first tab switches to the last page, and the last tab switches to the first page. This is to illustrate that you can assign any page to any tab.
>


You can load any external content into a __RadPageView__control by setting the __ContentUrl__ property to the URL for the source of the content. Take a look at the "*Pageview3*" from the example above.

>caution If the __RadPageView__ control contains any controls or text, they are discarded when you set the __ContentUrl__ property.
>



