---
title: Using RadWindow as a Dialog
page_title: Using RadWindow as a Dialog | RadWindow for ASP.NET AJAX Documentation
description: Using RadWindow as a Dialog
slug: window/how-to/using-radwindow-as-a-dialog
tags: using,radwindow,as,a,dialog
published: True
position: 3
---

# Using RadWindow as a Dialog



**RadWindow** events and properties provide the support you need to create dialogs that communicate with your Web page.

## On the Main Page

* The **OnClientShow** event handler sets the argument to the dialog being opened.

* The **OnClientClose** event handler receives the result of the dialog and responds.

* The necessary code - a RadWindow declaration and the event handlers themselves:

````ASPNET
	    <script type="text/javascript" language="javascript">
	        function clientShow(sender, eventArgs)
	        {
	            var txtInput = document.getElementById("txtInput");
	            sender.argument = txtInput.value;
	        }
	        function clientClose(sender, args)
	        {
	            if (args.get_argument() != null)
	            {
	                alert("'" + sender.get_name() + "'" + " was closed and returned the following argument: '" + args.get_argument() + "'");
	            }
	        }
	    </script>
	    <telerik:RadWindow ID="RadWindow1" runat="server" Modal="True" NavigateUrl="Dialog.aspx"
	        OpenerElementID="showDialog" OnClientClose="clientClose" OnClientShow="clientShow" ReloadOnShow="true">
	    </telerik:RadWindow>
	    Type initial value here:
	    <br />
	    <asp:TextBox ID="txtInput" runat="server" /><br />
	    <asp:Button ID="showDialog" Text="Show Dialog" runat="server" />
````



## On the Dialog Page

* To get a reference to the **RadWindow** object that hosts the content, add the following script to the dialog page:

````JavaScript
	        function GetRadWindow()
	        {
	            var oWindow = null;
	            if (window.radWindow)
	                oWindow = window.radWindow;
	            else if (window.frameElement.radWindow)
	                oWindow = window.frameElement.radWindow;
	            return oWindow;
	        }
````



* Use the ASP.NET AJAX pageLoad() client function to read the argument and use it to initialize the dialog.

````JavaScript
	        //this function is automatically called when all ASP.NET AJAX controls are fully rendered on the page
	        //and receives the argument passed from the parent page
	        //IMPORTANT: for pageLoad() to work, you need to have asp:scriptmanager or RadScriptManager controls on the page.
	        //Setting ReloadOnShow for the RadWindow to true ensures the page will be loaded freshly and that pageLoad() will be called
	
	        function pageLoad()
	        {
	            txtInput = document.getElementById('txtUserInput');
	            var currentWindow = GetRadWindow();
	            txtInput.value = currentWindow.argument;
	        }
	
````



````ASPNET
	    <asp:ScriptManager ID="ScriptManager1" runat="server">
	    </asp:ScriptManager>
	    <asp:TextBox ID="txtUserInput" runat="server"></asp:TextBox>
	    <br />
	    <asp:Button ID="Button1" runat="server" Text="Close With Argument" OnClientClick="returnArg(); return false;" />
	    <asp:Button ID="Button2" runat="server" Text="Cancel" OnClientClick="cancelAndClose(); return false;" />
````



* The **Cancel** button closes the containing window like this:

````JavaScript
	        //return no argument and close the RadWindow
	        function cancelAndClose()
	        {
	            var oWindow = GetRadWindow();
	            oWindow.close(null);
	        }
````



* The **Close With Argument** button invokes the OnClientClose function and provides it with a return value like this:

````JavaScript
	        //Close the dialog and return the argument to the OnClientClose event handler
	        function returnArg()
	        {
	            var oWnd = GetRadWindow();
	            oWnd.close(txtInput.value);
	        }
````



# See Also

 * [Overview]({%slug window/alert,-confirm,-prompt-dialogs/overview%})

 * [Use Querystring to Provide Arguments to RadWindow]({%slug window/how-to/use-querystring-to-provide-arguments-to-radwindow%})

 * [Executing Script on a Reload]({%slug window/how-to/executing-script-on-a-reload%})
