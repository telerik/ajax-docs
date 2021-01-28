---
title: Executing JavaScript Code from Server
page_title: Executing JavaScript Code from Server - RadWindow
description: Check our Web Forms article about Executing JavaScript Code from Server.
slug: window/troubleshooting/executing-javascript-code-from-server
tags: executing,javascript,code,from,server
published: True
position: 4
---

# Executing JavaScript Code from Server



This is a pretty common scenario when working with WebForms. There are many ways to achieve the desired result, but they have one thing in common – you should make sure that the controls are fully loaded in the page before trying to get a reference to them and use them in your JavaScript code.

>note You can check the [Executing JavaScript Code from Server-side in Web Forms and ASP.NET AJAX](https://www.telerik.com/support/kb/aspnet-ajax/details/executing-javascript-code-from-server-side-in-web-forms-and-asp.net-ajax) KB article for more abstract code snippets.
> Before you dive and test the different solutions make sure that:
> * The code is actually inserted on the page – the easiest way is to put a simple alert() and check if it is fired.
> * The controls are rendered on the page before referencing them in your JavaScript function
> * If you are manually inserting the '<script>' tags – that you have set either the type (type='text/javascript') or the language (language='javascript') attributes

## The simplest way

Use a label or a literal to import the script on the page:

````ASP.NET
<head id="Head1" runat="server"> 
	<title>Untitled Page</title> 
	<script type="text/javascript">
		function calledFn()
		{
			alert("code fired");
		} 
	</script> 
</head> 
<body> 
	<form id="form2" runat="server"> 
		<asp:Button ID="Button1" runat="server" Text="Run JavaScript Code" OnClick="Button1_Click" /> 
		<asp:Label ID="Label1" runat="server"></asp:Label> 
	</form> 
````


````C#
protected void Button1_Click(object sender, EventArgs e)
{
	Label1.Text = "<script type='text/javascript'>calledFn()</script>";
} 
````
````VB
Protected Sub Button1_Click(sender As Object, e As EventArgs)
    Label1.Text = "<script type='text/javascript'>calledFn()</script>"
End Sub
````

The solution above is pretty simple and will not cover the scenario when the asp:Label is hidden (Visible="false"). In this case, do not hide the label via the Visible property but move it outside of the visible screen boundaries via CSS -> style="position: absolute;top:-1000px; left:-1000px;" or alternatively use a Literal or the [Page.RegisterStartupScript](https://msdn.microsoft.com/en-us/library/system.web.ui.page.registerstartupscript.aspx), [Page.RegisterClientScriptBlock](https://msdn.microsoft.com/en-us/library/system.web.ui.page.registerclientscriptblock.aspx), [ClientScriptManager.RegisterStartupScript](https://msdn.microsoft.com/en-us/library/system.web.ui.clientscriptmanager.registerstartupscript.aspx) / [ClientScriptManager.RegisterClientScriptBlock](https://msdn.microsoft.com/en-us/library/system.web.ui.clientscriptmanager.registerclientscriptblock.aspx) methods.



## When using ASP.NET AJAX

In ASP.NET AJAX environment however, you should take into consideration the fact that the ASP.NET AJAX controls are loaded after *window.onload* is fired. You can verify this by putting some ASP.NET AJAX controls and then examine the HTML of the rendered page.

Again, there are several ways to ensure that the controls are loaded on the client before trying to use them. If you want to use the RegisterStartupScript() method, I would recommend to check the ASP.NET [AJAX’s Sys.Application.Load](https://msdn.microsoft.com/en-us/library/bb383829.aspx) event. This event is raised after all scripts have been loaded on the page and the controls have been created and initialized. You need to make sure however, that the code that you will insert in the Load event will be executed only once and then removed, otherwise it will be called after every Ajax request. For example you could use the following logic:

````JavaScript
function f()  
{  
	//code 
	Sys.Application.remove_load(f);  
}  
Sys.Application.add_load(f);  
````

For example let’s call the RadWindow’s radalert() function after a postback by using the code above:

````ASP.NET
<form id="form3" runat="server">  
	<asp:ScriptManager ID="ScriptManager1" runat="server" /> 
	<telerik:RadWindowManager RenderMode="Lightweight" ID="RadWindowManager1" runat="server">  
	</telerik:RadWindowManager>  
	<asp:Button ID="Button2" Text="Postback and show RadAlert" runat="server"  OnClick="Button1_Click" /> 
</form> 
````





````C#
protected void Button1_Click(object sender, EventArgs e)
{
	string radalertscript = "<script language='javascript'>function f(){radalert('Welcome to RadWindow for <strong>ASP.NET AJAX</strong>!', 330, 210); Sys.Application.remove_load(f);}; Sys.Application.add_load(f);</script>";
	Page.ClientScript.RegisterStartupScript(this.GetType(), "radalert", radalertscript);
}  
````
````VB
Protected Sub Button1_Click(sender As Object, e As EventArgs)
    Dim radalertscript As String = "<script language='javascript'>function f(){radalert('Welcome to RadWindow <strong>ASP.NET AJAX</strong>!', 330, 210); Sys.Application.remove_load(f);}; Sys.Application.add_load(f);</script>"
    Page.ClientScript.RegisterStartupScript(Me.[GetType](), "radalert", radalertscript)
End Sub
````

>tip If you are working with Ajax requests however, it is better to use the asp:Scriptmanager’s [RegisterStartupScript()](https://msdn.microsoft.com/en-us/library/system.web.ui.scriptmanager.registerstartupscript.aspx) method as shown below:

````ASP.NET
<form id="form4" runat="server">  
	<asp:ScriptManager ID="ScriptManager2" runat="server">  
	</asp:ScriptManager>  
	<telerik:RadWindowManager RenderMode="Lightweight" ID="RadWindowManager1" runat="server">  
	</telerik:RadWindowManager>  
	<asp:UpdatePanel ID="UpdatePanel1" runat="server">  
		<ContentTemplate>  
			<asp:Button ID="Button3" Text="AJAX postback and show RadAlert" runat="server" OnClick="Button1_Click" /> 
		</ContentTemplate>  
	</asp:UpdatePanel>  
</form> 
````


````C#
protected void Button1_Click(object sender, EventArgs e)  
{  
	string scriptstring = "radalert('Welcome to Rad<strong>Window</strong>!', 330, 210);";  
	ScriptManager.RegisterStartupScript(Page, Page.GetType(), "radalert", scriptstring, true);  
} 
````
````VB
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs)
    Dim scriptstring As String = "radalert('Welcome to Rad<strong>Window</strong>!', 330, 210);"
ScriptManager.RegisterStartupScript(Page, Page.GetType(), "radalert", scriptstring, True)
End Sub
````

More information on this subject can also be found in these KB articles (they are about RadWindow but use general approaches that can be applied to different scenarios):

* [Calling radalert from code-behind (all versions of RadWindow)](https://www.telerik.com/support/kb/aspnet-ajax/window/calling-radalert-from-codebehind.aspx)

* [RadWindow that postbacks and manipulates opener page on its reload](https://www.telerik.com/support/kb/aspnet-ajax/window/radwindow-that-postbacks-and-manipulates-opener-page-on-its-reload.aspx)

And in the following MSDN article: [Using JavaScript Along with ASP.NET 2.0](https://msdn.microsoft.com/en-us/library/aa479390.aspx) (by Bill Evjen)


## Execute script on Sys.Application.Load and pass parameters for it
 
The Sys.Application.Load does not allow passing parameters for the event handler, so we just need to call our function inside the page load handler function. 

> Note: If you are passing string as parameter, the quotes wrapping the value should be added. Otherwise, a global variable with that name will be searched and passed as a function parameter. 

````ASP.NET
<form id="form1" runat="server">
    <asp:ScriptManager ID="ScriptManager2" runat="server">
    </asp:ScriptManager>
    <script>
        function alertWithParameters(text, number, boolParam) {
            if (boolParam) {
                alert(text);
            } else {
                prompt("Enter age", number);
            }
        }
    </script>
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <asp:Button ID="Button3" Text="AJAX postback and show RadAlert" runat="server" OnClick="Button3_Click" />
        </ContentTemplate>
    </asp:UpdatePanel>
</form>
````


````C#
protected void Button3_Click(object sender, EventArgs e)
{
    //https://stackoverflow.com/questions/3773857/escape-curly-brace-in-string-format
    string applicationLoadHandlerFormatString = "Sys.Application.add_load(applicationLoadHandler); function applicationLoadHandler() {{ {0}; /* Sys.Application.remove_load(applicationLoadHandler);*/ }}";
 
    // obtain values from business logic
    string text = "Everything is fine!";
    int number = 21;
    bool boolParam = false;
 
    string myFunction = string.Format("alertWithParameters('{0}', {1}, {2})", text, number, boolParam.ToString().ToLower());
    string applicationLoadHandler = string.Format(applicationLoadHandlerFormatString, myFunction);
 
    ScriptManager.RegisterStartupScript(Page, Page.GetType(), "clientprompt", applicationLoadHandler, true);
}
````
````VB
Protected Sub Button3_Click(ByVal sender As Object, ByVal e As EventArgs)
    Dim applicationLoadHandlerFormatString As String = "Sys.Application.add_load(applicationLoadHandler); function applicationLoadHandler() {{ {0}; /* Sys.Application.remove_load(applicationLoadHandler);*/ }}"
    ' obtain values from business logic
    Dim text As String = "Everything is fine!"
    Dim number As Integer = 21
    Dim boolParam As Boolean = False
    Dim myFunction As String = String.Format("alertWithParameters('{0}', {1}, {2})", text, number, boolParam.ToString().ToLower())
    Dim applicationLoadHandler As String = String.Format(applicationLoadHandlerFormatString, myFunction)
    ScriptManager.RegisterStartupScript(Page, Page.[GetType](), "clientprompt", applicationLoadHandler, True)
End Sub
````

## In conclusion

Calling a JavaScript function from the server is a relatively easy task. Just make sure that:

1. The code is actually inserted on the page – the easiest way is to put a simple alert() and check if it is fired.

1. The controls are rendered on the page before referencing them in your JavaScript function

1. If you are manually inserting the <script> tags – that you have set either the type (type='text/javascript') or the language (language='javascript') attributes.
