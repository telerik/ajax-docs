---
title: Displaying External Content
page_title: Displaying External Content | UI for ASP.NET AJAX Documentation
description: Displaying External Content
slug: splitter/panes/displaying-external-content
tags: displaying,external,content
published: True
position: 2
---

# Displaying External Content



You can load any external content into a __RadPane__ control by setting the __ContentUrl__ property to the URL for the source of the content.

>caution If the __RadPane__ control contains any controls or text, they are discarded when you set the __ContentUrl__ property.
>


If the resulting content of the pane exceeds its size, the __RadPane__ control displays scrollbars. You can control which scrollbars are displayed when this happens using the __Scrolling__ property.

* When __Scrolling__ is "__None__", the __RadPane__ never displays scroll bars. If the content exceeds the size of the pane, it is cropped.

* When __Scrolling__ is "__X__", the __RadPane__ displays only a horizontal scroll bar when the content exceeds its width. If the content exceeds the height of the pane, it is cropped.

* When __Scrolling__ is "__Y__", the __RadPane__ displays only a vertical scroll bar when the content exceeds its height.If the content exceeds the width of the pane, it is cropped.

* When __Scrolling__ is "__Both__", the __RadPane__ can display both horizontal and vertical scroll bars when the content exceeds its size.

>tip If you want to use a pane with external content from other links in your page, you can set the __target__ property of the link to the same value as the __ClientID__ property of the pane. When the user clicks the link, the pane will display the content.
>


## Example

The following example shows how to display external URL in a __RadPane__ control and how to change it with hyperlinks. Note that the "MiddlePane" text is never displayed:

````ASPNET
	     
	
	<telerik:RadSplitter runat="server" id="RadSplitter1"
	   Orientation="Horizontal" width="90%" height="600px">
	 <telerik:RadPane runat="server" id="LinkPane" Height="75">
	   <a href="http://www.telerik.com"
	      target="<%= ContentPane.ClientID %>">Telerik
	   </a><br />
	   <a href="http://www.msn.com"
	      target="<%= ContentPane.ClientID %>">MSN
	   </a><br />
	   <a href="http://www.google.com"
	      target="<%= ContentPane.ClientID %>">Google</a>
	 </telerik:RadPane>
	 <telerik:RadSplitBar runat="server" id="RadSplitBar1" />
	 <telerik:RadPane runat="server" id="ContentPane"
	     contenturl="http://www.telerik.com">
	   This text is never shown
	 </telerik:RadPane>
	</telerik:RadSplitter>
				
````



# See Also

 * [Printing Content]({%slug splitter/panes/printing-content%})

 * [Referencing the External Content of a Pane]({%slug splitter/application-scenarios/referencing-the-external-content-of-a-pane%})
