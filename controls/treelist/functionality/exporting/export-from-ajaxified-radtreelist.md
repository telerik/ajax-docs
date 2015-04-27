---
title: Export from Ajaxified RadTreeList
page_title: Export from Ajaxified RadTreeList | RadTreeList for ASP.NET AJAX Documentation
description: Export from Ajaxified RadTreeList
slug: treelist/functionality/exporting/export-from-ajaxified-radtreelist
tags: export,from,ajaxified,radtreelist
published: True
position: 1
---

# Export from Ajaxified RadTreeList



Generally speaking, the exporting feature of the control works with regular postbacks only. The reason is that the treelist prepares additional information available on postback when performing the export operation. When the action is performed through asynchronous requests, this information can not be passed through the *XMLHttpObject* - that is why the communication between the browser and the server fails. To bypass the limitation you can wire the [OnRequestStart](1DA8C181-3B68-4113-8F82-4A4F9076F5BF) event of the **RadAjaxPanel** or the **RadAjaxManager**, determine whether the target control is ajaxified and explicitly disable the AJAX in order to export with a regular postback:



````ASPNET
	        <telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server" ClientEvents-OnRequestStart="onRequestStart">
	            <asp:Button Text="Export to PDF" ID="btnExport" runat="server" OnClick="Button1_Click" />
	            <telerik:RadTreeList runat="server" ID="RadTreeList1" DataSourceID="SqlDataSource1"
	                AutoGenerateColumns="true" AllowPaging="true" PageSize="5" DataKeyNames="id"
	                ParentDataKeyNames="parentId">
	            </telerik:RadTreeList>
	        </telerik:RadAjaxPanel>
	        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>"
	            SelectCommand="SELECT * FROM [Links]"></asp:SqlDataSource>
````
````JavaScript
	                function onRequestStart(sender, args) {
	                    if (args.get_eventTarget().indexOf("btnExport") >= 0) {
	                        args.set_enableAjax(false);
	                    }
	                }
````
````C#
	    protected void Button1_Click(object sender, EventArgs e)
	    {
	        RadTreeList1.ExportToPdf();
	    }
````
````VB
	    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
	        RadTreeList1.ExportToPdf()
	    End Sub
````


If you export from a *Button* that is nested in a **MS AJAX UpdatePanel**, you should set the button as a *PostBackTrigger*:

````ASPNET
	        <Triggers>         
	            <asp:PostBackTrigger ControlID="btnExport" />
	        </Triggers>
````



It is also possible to register the control as a trigger for full postback in the code-behind:



````C#
	    ScriptManager.GetCurrent(Page).RegisterPostBackControl(btnExport);          
````
````VB
	    ScriptManager.GetCurrent(Page).RegisterPostBackControl(btnExport)          
````


# See Also[Exclude Controls from Ajaxifying](25CA11AE-56BC-4E4A-98A5-C920FC13E3ED)
