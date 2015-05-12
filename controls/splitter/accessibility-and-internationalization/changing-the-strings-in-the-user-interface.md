---
title: Changing the Strings in the User Interface
page_title: Changing the Strings in the User Interface | RadSplitter for ASP.NET AJAX Documentation
description: Changing the Strings in the User Interface
slug: splitter/accessibility-and-internationalization/changing-the-strings-in-the-user-interface
tags: changing,the,strings,in,the,user,interface
published: True
position: 2
---

# Changing the Strings in the User Interface

Both **RadSplitBar** and **RadSlidingPane** controls contain icons that the user can click to interact with them. When the user hovers the mouse over these icons, they display tool tips that inform the user on the effects of clicking on them.

## RadSplitBar

The **CollapseExpandPanelText** property lets you change the tool tip that appears when the mouse hovers over the collapse or expand buttons on the split bar. The value of this property is a format string that can include a single argument. The argument identifies the pane that is about to collapse or expand using the string "top", "bottom", "left" or "right".

## RadSlidingPane

* The **CollapseText** property specifies the tool tip that appears when the user hovers the mouse over the collapse button in the title bar.

* The **DockText** property specifies the tool tip that appears when the user hovers the mouse over the dock button in the title bar.

* The **UndockText** property specifies the tool tip that appears when the user hovers the mouse over the undock button in the title bar.

* The **ResizeText** property specifies the tool tip that appears when the user hovers the mouse over the resizable border of the sliding pane.

## Example

The following example shows a **RadSplitter** control with the text of the tool tips changed:

````ASP.NET	 
<telerik:RadSplitter runat="server" id="RadSplitter1" width="90%" height="90%">
 <telerik:RadPane runat="server" id="SlidingZonePane" Height="75">
 <telerik:RadSlidingZone runat="server" id="RadSlidingZone1">
   <telerik:RadSlidingPane
		runat="server"
		Title="A"
		id="RadSlidingPane1"
		CollapseText="Close"
		DockText="Pin"
		ResizeText="Change size"
		UndockText="Unpin">
	 content of Pane A      
   </telerik:RadSlidingPane>
   <telerik:RadSlidingPane
		runat="server"
		Title="B"
		id="RadSlidingPane2"
		CollapseText="Close"
		DockText="Pin"
		ResizeText="Change size"
		UndockText="Unpin">
	 content of Pane B
   </telerik:RadSlidingPane>
 </telerik:RadSlidingZone>
 </telerik:RadPane>
 <telerik:RadSplitBar
	runat="server"
	id="RadSplitBar1"
	CollapseExpandPaneText="Close/Open the {0} region."
	CollapseMode="Both"  />
 <telerik:RadPane runat="server" id="MainPane" >
   Bottom Pane
 </telerik:RadPane>
</telerik:RadSplitter> 			
````

## See Also

 * [Sliding Pane Behavior]({%slug splitter/sliding-zones/sliding-pane-behavior%})
