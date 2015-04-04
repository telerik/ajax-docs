---
title: Keyboard Support
page_title: Keyboard Support | UI for ASP.NET AJAX Documentation
description: Keyboard Support
slug: window/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 1
---

# Keyboard Support



## 

__RadWindow__ supports keyboard shortcuts to invoke its commands. This is an accessibility feature as well as functionality that can make working with the application more convenient for the end user.

Shortcuts can be global for the __RadWindowManager__ - for commands that affect all its child __RadWindows__ such as __Tile, RestoreAll, CloseAll__.

Commands that are specific for each separate __RadWindow__ such as __Close, Minimize, Maximize__ must be declared for each separate __RadWindow__. They are only active if the __RadWindow__ has focus.

There are three ways to specify these shortcuts. The more common two are: in the __<Shortcuts>__ inner tag:

````ASPNET
	    <telerik:RadWindowManager ID="RadWindowManager1" runat="server">
	        <Shortcuts>
	            <telerik:WindowShortcut CommandName="RestoreAll" Shortcut="Alt+F3" />
	            <telerik:WindowShortcut CommandName="Tile" Shortcut="Alt+F6" />
	            <telerik:WindowShortcut CommandName="CloseAll" Shortcut="Esc" />
	        </Shortcuts>
	        <Windows>
	            <telerik:RadWindow ID="RadWindow1" runat="server" VisibleOnPageLoad="true"
	                NavigateUrl="http://www.telerik.com">
	                <Shortcuts>
	                    <telerik:WindowShortcut CommandName="Maximize" Shortcut="Ctrl+F2" />
	                    <telerik:WindowShortcut CommandName="Restore" Shortcut="Ctrl+F3" />
	                </Shortcuts>
	            </telerik:RadWindow>
	        </Windows>
	    </telerik:RadWindowManager>
````



or via the __Shortcuts__ server-side property:

>tabbedCode

````C#
	            RadWindow1.Shortcuts.Add("Close", "Esc");
	            //or
	            RadWindow1.Shortcuts.Add(new Telerik.Web.UI.WindowShortcut("Close", "Esc"));
````
````VB.NET
	            RadWindow1.Shortcuts.Add("Close", "Esc")
	            'or
	            RadWindow1.Shortcuts.Add(new Telerik.Web.UI.WindowShortcut("Close", "Esc"))
	    #End Region
	
	End Class


>end

Since Q2 2012 the __RadWindow__ also offers the option to modify the shortcuts via JavaScript by using the following methods:

````JavaScript
	        var oWnd = $find("RadWindow1"); //get a reference to the desired RadWindow
	        oWnd.addShortcut("Command", "shortcutString"); //adds the specified shortcut string to the given command
	        oWnd.removeShortcut("Command"); //removes the last shortcut for the  given command
	        oWnd.getShortcutString("Command"); //returns the last shortcut for the given command
	        oWnd.isShortcutAdded("Command"); //returns true if a shortcut is added for this command
	        oWnd.removeAllShortcutsCommand("Command"); //clears all shortcuts for the given command
````



>note Shortcut modifications done via JavaScript will *not* be persisted if the control is disposed - either in an AJAX request, a full postback or via the DestroyOnClose functionality. These modifications are available *only* for a __RadWindow__ instances and *not* for the __RadWindowManager__ .
>


>tip You should avoid globally used combinations such as Alt+F4, Ctrl+F5, etc. that have meaning in the context of the user browser/machine.
>


__Here follows a list with the available commands:__


>caption for the RadWindowManager

|  __Name__  |  __Executed command__  |
| ------ | ------ |
| __CloseAll__ |Closes all opened RadWindows from the Windows Collection of the specific RadWindowManager|
| __MinimizeAll__ |Minimizes all opened RadWindows from the Windows Collection of the specific RadWindowManager|
| __RestoreAll__ |Restores all opened RadWindows from the Windows Collection of the specific RadWindowManager|
| __MaximizeAll__ |Maximizes all opened RadWindows from the Windows Collection of the specific RadWindowManager|
| __MinimizeActiveWindow__ |Minimizes the currently active (focused) RadWindow from the Windows Collection of the specific RadWindowManager|
| __RestoreActiveWindow__ |Restores the currently active (focused) RadWindow from the Windows Collection of the specific RadWindowManager|
| __CloseActiveWindow__ |Closes the currently active (focused) RadWindow from the Windows Collection of the specific RadWindowManager|


>caption For each separate RadWindow

|  __Name__  |  __Executed command__  |
| ------ | ------ |
| __Minimize__ |Minimizes the RadWindow|
| __togglePin__ |Changes the Pinned property of the RadWindow to the opposite value (true/false)|
| __Close__ |Closes the RadWindow|
| __Maximize__ |Maximizes the RadWindow|
| __Reload__ |Reloads the RadWindow|

# See Also

 * [See keyboard shortcuts in action online](http://demos.telerik.com/aspnet-ajax/window/examples/keyboardsupport/defaultvb.aspx)
