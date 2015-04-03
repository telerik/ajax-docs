---
title: Client-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: ajax/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



You can use the client-side API to execute your own JavaScript functions at certain stages of the AJAX request. Additionally, you can use ageneric JavaScript function to make explicit AJAX requests to the server from the client. This help article discusses many of functions.

>note You can construct the JavaScript function calls manually or alternatively use the server-side method __GetAjaxEventReference__ and have Telerik __RadAjax__ generate the necessary code for you.
>


>note  __RadAjax__ for ASP.NET AJAX requires enclosing the server code blocks inside a __RadCodeBlock__ control. More information is available here:[RadCodeBlock and RadScriptBlock]({%slug ajax/radcodeblock-and-radscriptblock%}).
>


## ajaxRequest(arguments)

There are cases in which you may want to trigger postback/ajax request to the server. In this cases you can use the__ajaxRequest(arguments)__ function to initiate a generic AJAX request. When using this function, the event target defaults to the __RadAjaxPanel__ or __RadAjaxManager__ instance. The __arguments__ are the parametersthat the control had used when it raised the request.

## AjaxRequest Event

When __ajaxRequest__ function is called on the client it can be handled in the __AjaxRequest__ eventhandler on the server, as shown in __Example 1__.

Example 1: Performe ajax request on the client and handle it on the server.

````JavaScript
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	
	            function InitiateAjaxRequest(arguments) {
	                var ajaxManager = $find("<%= RadAjaxManager1.ClientID %>");
	                ajaxManager.ajaxRequest(arguments);
	            }
	        </script>
	    </telerik:RadCodeBlock>
````



>tabbedCode

````C#
	    private void RadAjaxManager1_AjaxRequest(object sender, AjaxRequestEventArgs e)
	    {
	        //code to handle the generic AJAX request
	    }  
	
	
````



````VB.NET
	    Private Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As AjaxRequestEventArgs)
	        'code to handle the generic AJAX request
	    End Sub
````


>end

When an AJAX request is triggered using the __AjaxRequest__ event from the client, the __RadAjaxManager__itself should be set as the AJAX initiator updating the corresponding control, as shown in __Example 2__.

Example 2:Setting RadAjaxManager as an ajax initiator which updates the TextBox control.

````ASPNET
	    <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
	    </telerik:RadScriptManager>
	    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" OnAjaxRequest="RadAjaxManager1_AjaxRequest">
	        <AjaxSettings>
	            <telerik:AjaxSetting AjaxControlID="RadAjaxManager1">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="TextBox1" />
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	        </AjaxSettings>
	    </telerik:RadAjaxManager>
````



## ajaxRequestWithTarget(eventTarget, eventArgument)

You can call the __ajaxRequestWithTarget(eventTarget, eventArgument)__ function to simulate a postback/AJAX request send byanother control (besides __RadAjaxManager__ or __RadAjaxPanel__) with the specified UniqueID and specifiedarguments. The function’s execution can be handled by the corresponding event (i.e., Button_Click) on the server.


| Parameters | Description |
| ------ | ------ |
| __eventTarget__ |The control that should raise a postback event. You should always use the control's UniqueID..|
| __eventArgument__ |This is an optional argument for the event.|

>note  __ajaxRequestWithTarget__ is designed as a substitute of the standard __doPostBack function. Thus, you need to overridethe __RaisePostBackEvent__ of the page in order to get its argument server-side.
>


__Example 3__ shows how to use AjaxRequestWithTarget.

Example 3: The AjaxButton forces the Button to raise a postback event.

````ASPNET
	    <input type="button" onclick="AjaxRequestButton(); return false;" value="AjaxButton" />
	    <asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click"></asp:Button>
	    <asp:TextBox ID="TextBox1" runat="server" Text=""></asp:TextBox>
	    <asp:ScriptManager ID="ScriptManager" runat="server" />
	    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	        <AjaxSettings>
	            <telerik:AjaxSetting AjaxControlID="Button1">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="TextBox1" />
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	        </AjaxSettings>
	    </telerik:RadAjaxManager>
````



````JavaScript
	    <telerik:RadCodeBlock ID="cb1" runat="server">
	        <script type="text/javascript">
	            function AjaxRequestButton(arguments) {
	                var ajaxManager = $find("<%= RadAjaxManager1.ClientID %>");
	                ajaxManager.ajaxRequestWithTarget('<%= Button1.UniqueID %>', '');
	            }
	        </script>
	    </telerik:RadCodeBlock>
````



And in the code-behind:

>tabbedCode

````C#
	    protected void Button1_Click(object sender, System.EventArgs e)
	    {
	        TextBox1.Text = DateTime.Now.ToLongTimeString();
	    }
````



````VB.NET
	    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs)
	        TextBox1.Text = DateTime.Now
	    End Sub
````


>end

You can see the working example by following this link:

[http://demos.telerik.com/aspnet-ajax/Ajax/Examples/Manager/ClientSideAPI/DefaultCS.aspx](http://demos.telerik.com/aspnet-ajax/Ajax/Examples/Manager/ClientSideAPI/DefaultCS.aspx)

# See Also

 * [Overview]({%slug ajax/radajaxpanel/overview%})

 * [Overview]({%slug ajax/radajaxmanager/overview%})

 * [Demo: RadAjaxManager Client-side API](http://demos.telerik.com/aspnet-ajax/ajax/examples/manager/clientsideapi/defaultcs.aspx)
