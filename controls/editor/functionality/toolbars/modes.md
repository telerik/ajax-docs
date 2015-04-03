---
title: Modes
page_title: Modes | UI for ASP.NET AJAX Documentation
description: Modes
slug: editor/functionality/toolbars/modes
tags: modes
published: True
position: 1
---

# Modes



## 

RadEditor for ASP.NET AJAX introduces a property named __ToolbarMode__, whichspecifies the behavior of the toolbar/ribbonbar. Here are the different options for settingthe ToolbarMode:


|  __ToolBar__ related: |  __RibbonBar__ related: |
| ------ | ------ |
| __Default__ - the toolbar is static and positioned over the	content area![editor-defaulttoolbarmode](images/editor-defaulttoolbarmode.png)| __RibbonBar__ - the ribbonbar is static and positioned over the	content area![editor-ribbonbarmode](images/editor-ribbonbarmode.png)|
| __PageTop__ - in this mode, when a particular editor gets the	focus its toolbar will appear docked at the top of the page![editor-pagetoptoolbarmode](images/editor-pagetoptoolbarmode.png)| __RibbonBarPageTop__ - in this mode, when a particular editor gets the	focus its ribbonbar will appear docked at the top of the page![editor-ribbonbarpagetopmode](images/editor-ribbonbarpagetopmode.png)|
| __ShowOnFocus__ - here the toolbar will appear	right above the editor when it gets focus![editor-showonfocusmode](images/editor-showonfocusmode.png)| __RibbonBarShowOnFocus__ - here the ribbonbar will appear	right above the editor when it gets focus.![editor-ribbonbarshowonfocusmode](images/editor-ribbonbarshowonfocusmode.png)|
| __Floating__ - the toolbar will pop up in a window and	will allow the user to move it over the page![editor-floatingmode](images/editor-floatingmode.png)| __RibbonBarFloating__ - the ribbonbar will pop up in a window and	will allow the user to move it over the page![editor-ribbonbarfloatingmode](images/editor-ribbonbarfloatingmode.png)|



The __ToolbarMode__property is a __EditorToolbarMode__enumeration that can be set at runtime to:

* Default

* Floating

* PageTop

* ShowOnFocus

* RibbonBar

* RibbonBarFloating

* RibbonBarPageTop

* RibbonBarShowOnFocus

````C#
	
	
		protected void Page_Load(object sender, EventArgs e)
		{
			RadEditor1.ToolbarMode = Telerik.Web.UI.EditorToolbarMode.Floating;
		} 
				
````



````VB.NET
	     
		Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
			RadEditor1.ToolbarMode = Telerik.Web.UI.EditorToolbarMode.Floating
		End Sub
````



# See Also

 * [Set Properties]({%slug editor/getting-started/set-properties%})

 * [Toolbar Modes](http://demos.telerik.com/aspnet/prometheus/Editor/Examples/ToolbarMode/DefaultCS.aspx)
