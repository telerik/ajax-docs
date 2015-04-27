---
title: Examples
page_title: Examples | RadWindow for ASP.NET AJAX Documentation
description: Examples
slug: window/server-side-programming/examples
tags: examples
published: True
position: 2
---

# Examples



## 

It is possible to increase the flexibility of the RadWindowManager and RadWindow by configuring them dynamically in the code-behind, based on external conditions on the page.The code below shows:

* Looping through the **Windows** collection of a **RadWindowManager**

* Setting properties to **RadWindowManager** and **RadWindow** objects

* Creating a new **RadWindow** dynamically and adding it to the **RadWindowManager Windows** collection or as a separate control in the form (for ASP.NET AJAX feature only)

* Retrieving a window from the **RadWindowManager Windows** collection and configuring it.



````C#
	    private void Page_Load(object sender, System.EventArgs e)
	    {
	        //Set properties present only in RadWindowManager
	        //Set skin
	        WindowManager.Skin = "Monochrome";
	        //Set the same height to all windows
	        WindowManager.Height = Unit.Pixel(250);
	        int offsetLeft = 0;
	        //Loop through all windows in the WindowManager.Windows collection
	        foreach (Telerik.Web.UI.RadWindow win in WindowManager.Windows)
	        {
	            //Set whether the first window will be visible on page load
	            win.VisibleOnPageLoad = true;
	            //Set the behavior (whether the window will allow to be minimized, maximized and/or pinned)
	            win.Behaviors = Telerik.Web.UI.WindowBehaviors.Maximize | Telerik.Web.UI.WindowBehaviors.Close;
	
	            //Set OffsetElementId - the id (ClientID if a runat=server is used) of a html element, which, when clicked, will automatically open/show the Telerik RadWindow
	            win.OffsetElementID = "OffsetElement";
	            //Top and Left can be used in conjunction with the OffsetElementId (if no OffsetElementId is specified, the top left corner of the browser window is used
	            win.Top = 15;
	            win.Left = offsetLeft;
	            offsetLeft += 100;
	        }
	
	        //Create a new window add it dynamically
	        //The window will inherit the default settings of parent WindowManager
	        Telerik.Web.UI.RadWindow newWindow = new Telerik.Web.UI.RadWindow();
	        newWindow.NavigateUrl = "http://www.sitefinity.com";
	        //Set OpenerElementId - the id (ClientID if a runat=server is used) of a html element, which, when clicked, will automatically open/show the Telerik RadWindow
	        newWindow.OpenerElementID = OpenerButton.ClientID;
	        //Set OffsetElementID - the id (ClientID if a runat=server is used) of a html element, whose left and top position will be used as 0,0 of the Telerik RadWindow object when it is first shown
	        newWindow.OffsetElementID = OpenerButton.ClientID;
	        //Top and Left can be used in conjunction with the OffsetElementId (if no OffsetElementId is specified, the top left corner of the browser window is used
	        newWindow.Top = Unit.Pixel(22);
	        newWindow.Left = Unit.Pixel(0);
	        //OPTION 1
	        //Add the newly created RadWindow to the RadWindowManager's collection
	        //WindowManager.Windows.Add(newWindow);
	        //OPTION 2
	        //since in the for ASP.NET AJAX version you can have a RadWindow outside of a RadWindowManager
	        //as a separate control, you can add the newly created RadWindow directly to the form's Controls collection
	        form1.Controls.Add(newWindow);
	
	        //Get a reference to the first window in the list
	        Telerik.Web.UI.RadWindow firstWindow = WindowManager.Windows[0];
	        //Set its navigate URl to be different
	        firstWindow.NavigateUrl = "http://www.telerik.com/products/sharepoint/overview.aspx";
	    }
````
````VB.NET
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
	        'Set properties present only in RadWindowManager
	        'Set skin
	        WindowManager.Skin = "Monochrome"
	        'Set the same height to all windows
	        WindowManager.Height = Unit.Pixel(250)
	        Dim offsetLeft As Integer = 0
	        'Loop through all windows in the WindowManager.Windows collection
	        For Each win As Telerik.Web.UI.RadWindow In WindowManager.Windows
	            'Set whether the first window will be visible on page load
	            win.VisibleOnPageLoad = True
	            'Set the behavior (whether the window will allow to be minimized, maximized and/or pinned)
	            win.Behaviors = Telerik.Web.UI.WindowBehaviors.Maximize Or Telerik.Web.UI.WindowBehaviors.Close
	            'Set OffsetElementId - the id (ClientID if a runat=server is used) of a html element, which, when clicked, will automatically open/show the Telerik RadWindow
	            win.OffsetElementID = "OffsetElement"
	
	            'Top and Left can be used in conjunction with the OffsetElementId (if no OffsetElementId is specified, the top left corner of the browser window is used
	            win.Top = 15
	            win.Left = offsetLeft
	            offsetLeft += 100
	        Next
	
	        'Create a new window add it dynamically
	        'The window will inherit the default settings of parent WindowManager
	        Dim newWindow As New Telerik.Web.UI.RadWindow()
	        newWindow.NavigateUrl = "http://www.sitefinity.com"
	        'Set OpenerElementId - the id (ClientID if a runat=server is used) of a html element, which, when clicked, will automatically open/show the Telerik RadWindow
	        newWindow.OpenerElementID = OpenerButton.ClientID
	        'Set OffsetElementID - the id (ClientID if a runat=server is used) of a html element, whose left and top position will be used as 0,0 of the Telerik RadWindow object when it is first shown
	        newWindow.OffsetElementID = OpenerButton.ClientID
	        'Top and Left can be used in conjunction with the OffsetElementId (if no OffsetElementId is specified, the top left corner of the browser window is used
	        newWindow.Top = Unit.Pixel(22)
	        newWindow.Left = Unit.Pixel(0)
	        'OPTION 1
	        'Add the newly created RadWindow to the RadWindowManager's collection
	        'WindowManager.Windows.Add(newWindow)
	        'OPTION 2
	        'since in the for ASP.NET AJAX version you can have a RadWindow outside of a RadWindowManager
	        'as a separate control, you can add the newly created RadWindow directly to the form's Controls collection
	        form1.Controls.Add(newWindow)
	
	        'Get a reference to the first window in the list
	        Dim firstWindow As Telerik.Web.UI.RadWindow = WindowManager.Windows(0)
	        'Set its navigate URl to be different
	        firstWindow.NavigateUrl = "http://www.telerik.com/products/sharepoint/overview.aspx"
	    End Sub
	
````

