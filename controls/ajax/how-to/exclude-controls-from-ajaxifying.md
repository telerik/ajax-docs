---
title: Exclude Controls from Ajaxifying
page_title: Exclude Controls from Ajaxifying | UI for ASP.NET AJAX Documentation
description: Exclude Controls from Ajaxifying
slug: ajax/how-to/exclude-controls-from-ajaxifying
tags: exclude,controls,from,ajaxifying
published: True
position: 4
---

# Exclude Controls from Ajaxifying



By default the __RadAjaxPanel__ AJAX-enables all controls placed inside. If you want to exclude a control from being AJAX-enabled, you can use one of the following approaches:

* __Use RadScriptManager's RegisterPostBackControl Methodhttp://www.telerik.com/help/aspnet-ajax/ajax-exclude.html#Section1_self__

* __Disable AJAX via the OnRequestStart Event (RadAjaxPanel, RadAjaxManager)http://www.telerik.com/help/aspnet-ajax/ajax-exclude.html#Section2_self__

* __Cancel the AJAX Request on InitializeRequest Eventhttp://www.telerik.com/help/aspnet-ajax/ajax-exclude.html#Section3_self__

* __Add the Postback Function Manuallyhttp://www.telerik.com/help/aspnet-ajax/ajax-exclude.html#Section4_self__

* __Exclude Dynamically Loaded Controlshttp://www.telerik.com/help/aspnet-ajax/ajax-exclude.html#Section5_self__

This help article shows how to use each approach.

## Use RadScriptManager's RegisterPostBackControl Method

You can use the __RadScriptManager's RegisterPostBackControl__ method (__Example 1__).

````ASPNET
	    <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
	    </telerik:RadScriptManager>
	    <telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server">
	        <asp:Button runat="server" ID="Button1" Text="Ajax" OnClick="Button_Click" />
	        <asp:Button runat="server" ID="Button2" Text="Postback" OnClick="Button_Click" />
	        <asp:Label ID="Label1" runat="server"></asp:Label>
	    </telerik:RadAjaxPanel>
````





````C#
	
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        RadScriptManager1.RegisterPostBackControl(Button2);
	    }
	    protected void Button_Click(object sender, EventArgs e)
	    {
	        Label1.Text = DateTime.Now.ToLongTimeString();
	    }
````
````VB.NET
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        RadScriptManager1.RegisterPostBackControl(Button2)
	    End Sub
	    Protected Sub Button_Click(ByVal sender As Object, ByVal e As EventArgs)
	        Label1.Text = DateTime.Now.ToLongTimeString()
	    End Sub
	
````


>note This approach is not applicable when the page is AJAX-enabled with __RadAjaxManager__ .
>


## Disable AJAX via the OnRequestStart Event (RadAjaxPanel, RadAjaxManager)

Use the __OnRequestStart__[ client-side event ]({%slug ajax/client-side-programming/events/onrequeststart%}) handler to determine the AJAX initiator and disable AJAX for the current request. The event is fired on each request so on the next request, the same check will be performed. A similar implementation is often used when exporting from an AJAX-enabled Grid:

[Export RadGrid content to Excel/Word/CSV/PDF with AJAX enabled](http://www.telerik.com/support/code-library/export-radgrid-content-to-excel-word-csv-pdf-with-ajax-enabled)

>note Note that all controls added in the __UpdatedControls__ collection in the __RadAjaxManager__ AJAX settings would perform a callback instead of a Postback. To exclude them from ajaxifying use the above approach.
>


## Cancel the AJAX Request on InitializeRequest Event

This approach is suitable for canceling the AJAX request in a wide range of scenarios (__Example 2__)). Unlike the __OnRequestStart__ event, the __InitializeRequest__ will be triggered for both Telerik (__RadAjaxManager__, __RadAjaxPanel__) and ASP.NET (__UpdatePanel__) AJAX controls.

Example 2: You can add your custom logic using the instance of the PageRequestManager

````ASPNET
	    <telerik:RadScriptManager ID="RadScriptManager1" runat="server" />
		<script type="text/javascript">
			Sys.WebForms.PageRequestManager.getInstance().add_initializeRequest(initRequest);
			function initRequest(sender, args)
			{
			    if (args.get_postBackElement().id.indexOf("CONTROL_ID") != -1)
			    {
			        args.set_cancel(true);  //stop async request
			        sender._form["__EVENTTARGET"].value = args.get_postBackElement().id.replace(/\_/g, "$");
			        sender._form["__EVENTARGUMENT"].value = "";
			        sender._form.submit();
			        return;
			    }
			}
		</script>
````



Please note that you have to replace the CONTROL_ID string with the actual name of the control that triggers the AJAX request.

## Add the Postback Function Manually

1. Implement the __realPostBack__ function into your aspx/ascx file1.

1. Add a custom __OnClick__ attribute to the control (Button in this case)(__Example 3__)).

Example 3: ASPX

````ASPNET
	    <telerik:RadCodeBlock ID="codeblock1" runat="server">
	        <script type="text/javascript">
	            function realPostBack(eventTarget, eventArgument)
	            {
	                $find("<%= RadAjaxPanel1.ClientID %>").__doPostBack(eventTarget, eventArgument);
	            }
	        </script>
	    </telerik:RadCodeBlock>
	    <asp:Button ID="Button1" runat="server" Text="Button" />
	    <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
	    <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
	    </telerik:RadScriptManager>
	    <telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server">
	        <asp:LinkButton ID="LinkButton1" runat="server" Text="PostBack"></asp:LinkButton>
	        <asp:LinkButton ID="LinkButton2" runat="server" Text="Ajax"></asp:LinkButton>
	    </telerik:RadAjaxPanel>
````



And in the code-behind (__Page_Load__ event handler):



````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (!Page.IsPostBack)
	        {
	            LinkButton1.Attributes.Add("onclick", string.Format("realPostBack(\"{0}\", \"\"); return false;", LinkButton1.UniqueID));
	        }
	    }
````
````VB.NET
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
	        If Not Page.IsPostBack Then
	            LinkButton1.Attributes.Add("onclick", String.Format("realPostBack('{0}', ''); return false;", LinkButton1.UniqueID))
	        End If
	    End Sub
````


If you do not have a control that registers the ____doPostBack__ function on the page you should add the following line in the __Page_Load__ as well:



````C#
	
	        this.Page.ClientScript.GetPostBackEventReference(this, "");
	
````
````VB.NET
	        Me.Page.ClientScript.GetPostBackEventReference(Me, "")
````


This will come in handy when you want a single control to perform the Postback for your scenario or you want to upload files from a control in __RadAjaxPanel__.

____

## Exclude Dynamically Loaded Controls

If you are loading the user control dynamically, the code __if (!Page.IsPostBack)__ in __Example 3__ in its __Page_Load__ event handler is never executed. You can check for the attached __OnClick__ event instead of the __IsPostBack__ as shown in __Example 4__.



````C#
	
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        bool isOnClickAttached = false;
	        IEnumerator keys = this.CheckBox1.Attributes.Keys.GetEnumerator();
	        while (keys.MoveNext())
	        {
	            if (keys.Current.Equals("onClick"))
	            {
	                isOnClickAttached = true;
	                break;
	            }
	        }
	        if (!isOnClickAttached)
	            this.CheckBox1.Attributes.Add("onClick", string.Format("realPostBack(\"{0}\", \"\"); return false;", this.CheckBox1.UniqueID));
	    }
	
````
````VB.NET
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        Dim isOnClickAttached As Boolean = False
	        Dim keys As IEnumerator = Me.CheckBox1.Attributes.Keys.GetEnumerator
	        While keys.MoveNext
	            If keys.Current.Equals("onClick") Then
	                isOnClickAttached = True
	                'TODO: Warning!!! break;If
	            End If
	        End While
	        If Not isOnClickAttached Then
	            Me.CheckBox1.Attributes.Add("onClick", String.Format("realPostBack(\""{0}\"", \""\""); return false;", Me.CheckBox1.UniqueID))
	        End If
	    End Sub
````


# See Also

 * [AJAX And File Upload]({%slug ajax/troubleshooting/ajax-and-file-upload%})
