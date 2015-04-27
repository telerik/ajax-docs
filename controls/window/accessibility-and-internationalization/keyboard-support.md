---
title: Keyboard Support
page_title: Keyboard Support | RadWindow for ASP.NET AJAX Documentation
description: Keyboard Support
slug: window/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 1
---

# Keyboard Support



## 

**RadWindow** supports keyboard shortcuts to invoke its commands. This is an accessibility feature as well as functionality that can make working with the application more convenient for the end user.

Shortcuts can be global for the **RadWindowManager** - for commands that affect all its child **RadWindows** such as **Tile, RestoreAll, CloseAll**.

Commands that are specific for each separate **RadWindow** such as **Close, Minimize, Maximize** must be declared for each separate **RadWindow**. They are only active if the **RadWindow** has focus.

There are three ways to specify these shortcuts. The more common two are: in the **<Shortcuts>** inner tag:

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



or via the **Shortcuts** server-side property:



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




Since Q2 2012 the **RadWindow** also offers the option to modify the shortcuts via JavaScript by using the following methods:

````JavaScript
	        var oWnd = $find("RadWindow1"); //get a reference to the desired RadWindow
	        oWnd.addShortcut("Command", "shortcutString"); //adds the specified shortcut string to the given command
	        oWnd.removeShortcut("Command"); //removes the last shortcut for the  given command
	        oWnd.getShortcutString("Command"); //returns the last shortcut for the given command
	        oWnd.isShortcutAdded("Command"); //returns true if a shortcut is added for this command
	        oWnd.removeAllShortcutsCommand("Command"); //clears all shortcuts for the given command
````



>note Shortcut modifications done via JavaScript will *not* be persisted if the control is disposed - either in an AJAX request, a full postback or via the DestroyOnClose functionality. These modifications are available *only* for a **RadWindow** instances and *not* for the **RadWindowManager** .
>


>tip You should avoid globally used combinations such as Alt+F4, Ctrl+F5, etc. that have meaning in the context of the user browser/machine.
>


**Here follows a list with the available commands:**


>caption for the RadWindowManager

|  **Name**  |  **Executed command**  |
| ------ | ------ |
| **CloseAll** |Closes all opened RadWindows from the Windows Collection of the specific RadWindowManager|
| **MinimizeAll** |Minimizes all opened RadWindows from the Windows Collection of the specific RadWindowManager|
| **RestoreAll** |Restores all opened RadWindows from the Windows Collection of the specific RadWindowManager|
| **MaximizeAll** |Maximizes all opened RadWindows from the Windows Collection of the specific RadWindowManager|
| **MinimizeActiveWindow** |Minimizes the currently active (focused) RadWindow from the Windows Collection of the specific RadWindowManager|
| **RestoreActiveWindow** |Restores the currently active (focused) RadWindow from the Windows Collection of the specific RadWindowManager|
| **CloseActiveWindow** |Closes the currently active (focused) RadWindow from the Windows Collection of the specific RadWindowManager|


>caption For each separate RadWindow

|  **Name**  |  **Executed command**  |
| ------ | ------ |
| **Minimize** |Minimizes the RadWindow|
| **togglePin** |Changes the Pinned property of the RadWindow to the opposite value (true/false)|
| **Close** |Closes the RadWindow|
| **Maximize** |Maximizes the RadWindow|
| **Reload** |Reloads the RadWindow|

# See Also

 * [See keyboard shortcuts in action online](http://demos.telerik.com/aspnet-ajax/window/examples/keyboardsupport/defaultvb.aspx)
