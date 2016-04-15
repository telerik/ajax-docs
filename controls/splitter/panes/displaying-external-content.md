---
title: Displaying External Content
page_title: Displaying External Content | RadSplitter for ASP.NET AJAX Documentation
description: Displaying External Content
slug: splitter/panes/displaying-external-content
tags: displaying,external,content
published: True
position: 2
---

# Displaying External Content

You can load any external content into a **RadPane** control by setting the **ContentUrl** property to the URL for the source of the content.

>caution If the **RadPane** control contains any controls or text, they are discarded when you set the **ContentUrl** property.

If the resulting content of the pane exceeds its size, the **RadPane** control displays scrollbars. You can control which scrollbars are displayed when this happens using the **Scrolling** property.

* When **Scrolling** is "**None**", the **RadPane** never displays scroll bars. If the content exceeds the size of the pane, it is cropped.

* When **Scrolling** is "**X**", the **RadPane** displays only a horizontal scroll bar when the content exceeds its width. If the content exceeds the height of the pane, it is cropped.

* When **Scrolling** is "**Y**", the **RadPane** displays only a vertical scroll bar when the content exceeds its height.If the content exceeds the width of the pane, it is cropped.

* When **Scrolling** is "**Both**", the **RadPane** can display both horizontal and vertical scroll bars when the content exceeds its size.

>tip If you want to use a pane with external content from other links in your page, you can set the **target** property of the link to the same value as the **ClientID** property of the pane. When the user clicks the link, the pane will display the content.

## Example

The following example shows how to display external URL in a **RadPane** control and how to change it with hyperlinks. Note that the "MiddlePane" text is never displayed:

````ASP.NET
<telerik:RadSplitter RenderMode="Lightweight" runat="server" id="RadSplitter1"
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

## See Also

 * [Printing Content]({%slug splitter/panes/printing-content%})

 * [Referencing the External Content of a Pane]({%slug splitter/how-to/referencing-the-external-content-of-a-pane%})
