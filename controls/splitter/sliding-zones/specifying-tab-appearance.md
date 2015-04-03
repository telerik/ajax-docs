---
title: Specifying Tab appearance
page_title: Specifying Tab appearance | UI for ASP.NET AJAX Documentation
description: Specifying Tab appearance
slug: splitter/sliding-zones/specifying-tab-appearance
tags: specifying,tab,appearance
published: True
position: 2
---

# Specifying Tab appearance



The sliding zone tab of a __RadSlidingPane__ control can represent its content using both a title and an image:

* Use the __IconUrl__ property to specify the image that appears on the tab for a sliding pane.

* Use the __Title__ property to specify the text that appears on the tab for a sliding pane.

Once you have set the __Title__ and/or __IconUrl__ properties of a __RadSlidingPane__ control, you can control the way its sliding zone tab is rendered by setting its __TabView__ property. The __TabView__ property uses the __Telerik.Web.UI.SplitterSlidePaneTabView__ enumeration which has the following values:

* __TextAndImage__ (default) - both the Icon and Title are displayed in the tab

* __TextOnly__ - only the Title is displayed

* __ImageOnly__ - only the Icon is displayed

>tip Since the vertical alignment of the text in pane tabs is not supported by Mozilla-based browsers at this time, you can use the __TabView__ property to let the pane tabs look the same in all browsers. Just prepare images that include both the title and the icon of the pane, and set __TabView="ImageOnly"__ .
>


## Example

The following example shows a splitter that contains a sliding pane with each of the possible __TabView__ values:

````ASPNET
	<telerik:RadSplitter ID="RadSplitter1" runat="server" Height="300" Width="700">
	 <telerik:RadPane ID="LeftPane" runat="server" width="22" Scrolling="None">
	   <telerik:RadSlidingZone ID="SlidingZone1" runat="server" width="22">
	     <telerik:RadSlidingPane
	          ID="Pane1"
	          runat="server"
	          Width="150"
	          Title="Pane1"
	          IconUrl="Pane1Icon.gif">
	        This pane has the default Setting of <b>TabView</b> property.<br />
	        It displays both the icon and the title of the pane.
	     </telerik:RadSlidingPane>
	     <telerik:RadSlidingPane
	          ID="Pane2"
	          runat="server"
	          Width="150"  
	          Title="Pane2"
	          IconUrl="Pane2Icon.gif"
	          TabView="ImageOnly">
	        This pane has the <b>TabView</b> property set to <b>ImageOnly</b>.
	     </telerik:RadSlidingPane>
	     <telerik:RadSlidingPane
	          ID="Pane3"
	          runat="server"
	          Width="150"
	          Title="Pane3"
	          IconUrl="Pane3Icon.gif"
	          TabView="TextOnly">
	       This pane has the <b>TabView</b> property set to <b>TextOnly</b>.
	     </telerik:RadSlidingPane>
	   </telerik:RadSlidingZone>
	 </telerik:RadPane>
	 <telerik:RadSplitBar id="RadSplitbar1" runat="server" />
	 <telerik:RadPane id="MainPane" runat="server">Main Pane</telerik:RadPane>
	</telerik:RadSplitter>			
````



When you run the splitter declared above, the first sliding pane shows both its image and title, the second shows only its image, and the third only its title:
>caption 

![](images/splitter-tabview.png)

# See Also

 * [Skins]({%slug splitter/appearance-and-styling/skins%})
