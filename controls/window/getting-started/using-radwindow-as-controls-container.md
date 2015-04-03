---
title: Using RadWindow as Controls Container
page_title: Using RadWindow as Controls Container | UI for ASP.NET AJAX Documentation
description: Using RadWindow as Controls Container
slug: window/getting-started/using-radwindow-as-controls-container
tags: using,radwindow,as,controls,container
published: True
position: 5
---

# Using RadWindow as Controls Container



## 

Since the __Telerik UI for ASP.NET AJAX Q3 2009__ release, __RadWindow__ can be used as controls container. This feature is useful for scenarios where you need to have the content in the same page where the RadWindow is declared. When used in this manner, RadWindow acts like a standard container element.

The content of the window is declared in its __ContentTemplate__ tag.

The controls inside can be accessed directly from the page without first going through the ContentContainer of the RadWindow, for example:

>tabbedCode

````ASPNET
	    <telerik:RadWindow runat="server" id="RadWindow2" VisibleOnPageLoad="true">
	        <ContentTemplate>
	            <asp:Label ID="Label1" Text="" runat="server" />
	        </ContentTemplate>
	    </telerik:RadWindow>
	    <asp:Button ID="Button2" Text="Set text to the label" OnClick="Button1_Click" runat="server" />
````



````C#
	    protected void Button1_Click(object sender, EventArgs e)
	    {
	        Label1.Text = DateTime.Now.ToString();
	    }
````



````VB.NET
	    Protected Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
	        Label1.Text = DateTime.Now.ToString()
	    End Sub
````


>end

For more complex scenarios (e.g. accessing user controls and casting them to their type) or to add controls you can use the full hierarchy of the control tree:

>tabbedCode

````ASPNET
	    <telerik:RadWindow ID="RadWindow1" VisibleOnPageLoad="true" runat="server">
	        <ContentTemplate>
	            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
	            <asp:Button ID="Button1" runat="server" Text="Click me" OnClick="Button1_Click" />
	        </ContentTemplate>
	    </telerik:RadWindow>
````



````C#
	    protected void Button1_Click(object sender, EventArgs e)
	    {
	        //Get the TextBox control in RadWindow's Content template
	        TextBox mybox = RadWindow1.ContentContainer.FindControl("TextBox1") as TextBox;
	        mybox.Text = DateTime.Now.ToString();
	        //Add new control to RadWindow's Content template
	        RadWindow1.ContentContainer.Controls.Add(new LiteralControl("Dynamic Control"));
	    }
````



````VB.NET
	    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
	        'Get the TextBox control in RadWindow's Content template
	        Dim mybox As TextBox = TryCast(RadWindow1.ContentContainer.FindControl("TextBox1"), TextBox)
	        mybox.Text = DateTime.Now.ToString()
	        'Add new control to RadWindow's Content template
	        RadWindow1.ContentContainer.Controls.Add(New LiteralControl("Dynamic Control"))
	    End Sub
````


>end

The RadWindow in this case is only an[INaming container](http://msdn.microsoft.com/en-us/library/system.web.ui.inamingcontainer.aspx) and thus using the controls inside via __JavaScript__ requires their correct __Client IDs__:

````ASPNET
	    <telerik:RadWindow runat="server" id="RadWindow3" VisibleOnPageLoad="true">
	        <ContentTemplate>
	            <asp:Label ID="Label2" Text="" runat="server" />
	        </ContentTemplate>
	    </telerik:RadWindow>
	    <asp:Button ID="Button3" Text="Set text to the label" OnClientClick="setText(); return false;" runat="server" />
	    <script type="text/javascript">
	        function setText()
	        {
	            $get("<%=Label2.ClientID %>").innerHTML = "new text";
	        }
	    </script>
````



>note Important:
>
* When used as a container the RadWindow is an INamingContainer and behaves like such
* You can dynamically add controls to the RadWindow from code-behind by adding them to its ContentContainer as shown below: __UserListDialog.ContentContainer.Controls.Add(new LiteralControl("Dynamic Control"));__ 
* To use the __RadAjaxManager__ control in integration with a __RadWindow__ as demonstrated in this[demo](http://demos.telerik.com/aspnet-ajax/window/examples/internalcontent/defaultcs.aspx)you should use a separate __RadWindow__ control and not to wrap it in a RadWindowManager. As to using with the standard MS AJAX, it should be used as all other INamingContainers. More information on using AJAX with the ContentTemplate of the RadWindow is available in[this help article]({%slug window/application-scenarios/how-to-use-radwindow-with-ajax%}).
* When controls with complex server lifecycle are placed in the`ContentTemplate`(e.g., a *RadGrid* ),such __RadWindows__ should be kept __outside of a RadWindowManager__ .The manager maintains the Windows collection and sometimes needs to Clear() and recreate it, which can cause unexpected behavior with the server logic of the complex controls inside.>



