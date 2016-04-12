---
title: Specifying Tab appearance
page_title: Specifying Tab appearance | RadSplitter for ASP.NET AJAX Documentation
description: Specifying Tab appearance
slug: splitter/sliding-zones/specifying-tab-appearance
tags: specifying,tab,appearance
published: True
position: 2
---

# Specifying Tab appearance

The sliding zone tab of a **RadSlidingPane** control can represent its content using both a title and an image:

* Use the **IconUrl** property to specify the image that appears on the tab for a sliding pane.

* Use the **Title** property to specify the text that appears on the tab for a sliding pane.

Once you have set the **Title** and/or **IconUrl** properties of a **RadSlidingPane** control, you can control the way its sliding zone tab is rendered by setting its **TabView** property. The **TabView** property uses the **Telerik.Web.UI.SplitterSlidePaneTabView** enumeration which has the following values:

* **TextAndImage** (default) - both the Icon and Title are displayed in the tab

* **TextOnly** - only the Title is displayed

* **ImageOnly** - only the Icon is displayed

>tip Since the vertical alignment of the text in pane tabs is not supported by Mozilla-based browsers at this time, you can use the **TabView** property to let the pane tabs look the same in all browsers. Just prepare images that include both the title and the icon of the pane, and set **TabView="ImageOnly"** .

## Example

The following example shows a splitter that contains a sliding pane with each of the possible **TabView** values:

````ASP.NET
<telerik:RadSplitter RenderMode="Lightweight" ID="RadSplitter1" runat="server" Height="300" Width="700">
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

![](images/splitter-tabview.png)

## See Also

 * [Skins]({%slug splitter/appearance-and-styling/skins%})
