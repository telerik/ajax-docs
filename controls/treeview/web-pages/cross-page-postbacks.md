---
title: Cross-Page Postbacks
page_title: Cross-Page Postbacks | RadTreeView for ASP.NET AJAX Documentation
description: Cross-Page Postbacks
slug: treeview/web-pages/cross-page-postbacks
tags: cross-page,postbacks
published: True
position: 0
---

# Cross-Page Postbacks



## 

ASP.NET 2.0 introduces the ability to have an ASPX page postback to a different ASPX page with cross-page postbacks. This can be achieved by setting the **PostBackUrl** property of the **RadTreeView** to the page that will handle the postback. Once in the second page you can access the controls from the previous page by accessing the **Page.PreviousPage** property. Use the **FindControl()** method of **PreviousPage** to retrieve a reference to the **RadTreeView** control.

In the example below, the default page contains a **RadTreeView** with a single Node. The **PostBackUrl** property is assigned another page in the project, "page2.aspx". In the Page_Load for Page2, the **Page.PreviousPage.FindControl()** provides a reference to the **RadTreeView**. The text of the only Node in the **TreeView** is displayed in a Label on Page2.

````ASPNET
<form id="form1" runat="server">
<asp:ScriptManager ID="ScriptManager1" runat="server" />
<div>
    <telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView1" runat="server" PostBackUrl="page2.aspx" OnNodeClick="RadTreeView1_NodeClick">
        <Nodes>
            <telerik:RadTreeNode runat="server" Text="A node from the Default page" />
        </Nodes>
    </telerik:RadTreeView>
</div>
</form>
````



````ASPNET
<form id="form1" runat="server">
<div>
    <asp:Label ID="lblNode" runat="server" />
</div>
</form>
````



The following is the code used to access controls on the default page from the second page.



````C#
using System;
using Telerik.Web.UI;
namespace RadTreeView_Appearance1
{
	public partial class Page2 : System.Web.UI.Page
	{
	   protected void Page_Load(object sender, EventArgs e)
	   {
	       RadTreeView RadTreeView1 = Page.PreviousPage.FindControl("RadTreeView1") as RadTreeView;
	       lblNode.Text = RadTreeView1.Nodes[0].Text;
	   }
	}
} 	
````
````VB.NET
Imports System
Imports Telerik.Web.UI
Namespace RadTreeView_Appearance1
    Partial Public Class Page2
        Inherits System.Web.UI.Page
        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            Dim RadTreeView1 As RadTreeView = TryCast(Page.PreviousPage.FindControl("RadTreeView1"), RadTreeView)
            lblNode.Text = RadTreeView1.Nodes(0).Text
        End Sub
    End Class
End Namespace
````


For a live example, see [Cross-Page Postback](http://demos.telerik.com/aspnet-ajax/TreeView/Examples/Functionality/CrossPagePostBack/DefaultCS.aspx).
