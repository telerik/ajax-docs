---
title: Adding Custom Command Buttons
page_title: Adding Custom Command Buttons | RadFileExplorer for ASP.NET AJAX Documentation
description: Adding Custom Command Buttons
slug: fileexplorer/how-to/adding-custom-command-buttons
tags: adding,custom,command,buttons
published: True
position: 0
---

# Adding Custom Command Buttons



## 

**RadFileExplorer**

The server code creates a new toolbar button and a new context menu item and adds them in the **RadFileExplorer**control. The client code executes when the **RadFileExplorer**is loaded and attaches new event handlers for the toolbar and treeview/grid context menus. These handlers will be used to execute code when the custom button/item is clicked. The CSSstyle for the toolbar button can be used to add an image.



````C#
	
		protected void Page_Load(object sender, EventArgs e)
		{
			if (!IsPostBack)
			{
				//custom button
				RadToolBarButton customButton = new RadToolBarButton("test");
				customButton.CssClass = "test_button";
				customButton.Value = "testCommand";
				RadFileExplorer1.ToolBar.Items.Add(customButton);
				//context menu item
				RadMenuItem customMenuOption = new RadMenuItem("custom");
				customMenuOption.Value = "custom_Menu";
				RadFileExplorer1.TreeView.ContextMenus[0].Items.Add(customMenuOption);
				//attach the event handler to the RadTreeView
				RadFileExplorer1.TreeView.OnClientContextMenuItemClicked = "treeContextMenuClicked";
				//if you want the custom context menu item to be visible in the grid as well
				RadFileExplorer1.GridContextMenu.Items.Add(customMenuOption.Clone());
			}
		}
````
````VB.NET
	
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	        If Not IsPostBack Then
	            'custom button
	            Dim customButton As New RadToolBarButton("test")
	            customButton.CssClass = "test_button"
	            customButton.Value = "testCommand"
	            RadFileExplorer1.ToolBar.Items.Add(customButton)
	            'context menu item
	            Dim customMenuOption As New RadMenuItem("custom")
	            customMenuOption.Value = "custom_Menu"
	            RadFileExplorer1.TreeView.ContextMenus(0).Items.Add(customMenuOption)
	            'attach the event handler to the RadTreeView
	            RadFileExplorer1.TreeView.OnClientContextMenuItemClicked = "treeContextMenuClicked"
	            'if you want the custom context menu item to be visible in the grid as well
	            RadFileExplorer1.GridContextMenu.Items.Add(customMenuOption.Clone())
	        End If
	    End Sub
````


````JavaScript
	        function toolbarClicked(toolbar, args)
	        {
	            var buttonValue = args.get_item().get_value();
	            if (buttonValue == "testCommand")
	                alert("test button clicked");
	        }
	        function gridContextMenuClicked(toolbar, args)
	        {
	            var buttonValue = args.get_item().get_value();
	            if (buttonValue == "custom_Menu")
	                alert("custom context menu item clicked");
	        }
	        function treeContextMenuClicked(toolbar, args)
	        {
	            var buttonValue = args.get_menuItem().get_value();
	            if (buttonValue == "custom_Menu")
	                alert("custom context menu item clicked");
	        }
	
	        function attachHandlers(explorer, args)
	        {
	            //support for grid context menu
	            var toolbar = explorer.get_toolbar();
	            toolbar.add_buttonClicked(toolbarClicked);
	
	            //support for grid context menu
	            var gridContextMenu = explorer.get_gridContextMenu();
	            gridContextMenu.add_itemClicked(gridContextMenuClicked);
	
	            //TreeView handler is attached in codebehind
	        }
	
````



````ASPNET
	    <telerik:RadFileExplorer ID="RadFileExplorer1" runat="server" OnClientLoad="attachHandlers">
	    </telerik:RadFileExplorer>
````



# See Also

 * [Add a custom button to the toolbar](http://www.telerik.com/community/code-library/aspnet-ajax/file-explorer/how-to-add-a-custom-button-to-the-toolbar-and-hide-an-existing-one-s.aspx)
