---
title: Intended-vertical-left align tabs
page_title: Intended-vertical-left align tabs - RadTabStrip
description: Check our Web Forms article about Intended-vertical-left align tabs.
slug: tabstrip/how-to/intended-vertical-left-align-tabs
tags: tabs,vertical,intend,align
published: True
position: 6
---

# Intended-vertical-left align tabs

By using the *OuterCssClass=""* and *CssClass* proprties of the RadTabstrip control along with the right CSS class selectors you can achieve intended-vertical-left align tabs. Example:

````CSS	
<style type="text/css">
	.border {
		border-bottom: 1px solid grey; 
	}
	 .RadTabStripVertical li.rtsLI .new, .new {
		padding-left: 10px !important;
	}
	.RadTabStripVertical li.rtsLI .new1, .new1 {
		padding-left: 20px !important;	
	}
	.RadTabStripVertical li.rtsLI .new2, .new2 {
		padding-left: 30px !important;
	}
</style>
````

````ASPNET
<telerik:RadTabStrip RenderMode="Lightweight" ID="Radtabstrip1" runat="server" SelectedIndex="1" Orientation="VerticalLeft">
	<Tabs>
		<telerik:RadTab ImageUrl="VImg/icon_05.gif" Text="Management" CssClass="border">
		</telerik:RadTab>
		<telerik:RadTab ImageUrl="VImg/icon_02.gif" Text="Scheduling" OuterCssClass="new" CssClass="border">
		</telerik:RadTab>
		<telerik:RadTab ImageUrl="VImg/icon_03.gif" Text="Meetings" OuterCssClass="new1" CssClass="border">
		</telerik:RadTab>
		<telerik:RadTab ImageUrl="VImg/icon_04.gif" Text="Briefcase" OuterCssClass="new2" CssClass="border">
		</telerik:RadTab>
		<telerik:RadTab ImageUrl="VImg/icon_01.gif" Text="Settings">
		</telerik:RadTab>
	</Tabs>
</telerik:RadTabStrip>
````

