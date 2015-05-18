---
title: Site Navigation
page_title: Site Navigation | RadTreeView for ASP.NET AJAX Documentation
description: Site Navigation
slug: treeview/application-scenarios/general/site-navigation
tags: site,navigation
published: True
position: 0
---

# Site Navigation



## 

One of the most common scenarios, in which the **TreeView** can be used, is navigating through pages using the **TreeView** control. However, due to the page redirect performed by clicking on a node, the **TreeView** state is lost and the current node loses its selected state.

This example shows how to overcome this limitation using the **RadTreeView.FindNodeByUrl()** method in conjunction with **RadTreeNode.ExpandParentNodes()**.

Please review the code for more details.

````ASPNET
<form id="form1" runat="server">
<asp:ScriptManager ID="ScriptManager1" runat="server">
</asp:ScriptManager>
<telerik:RadTreeView ID="RadTreeView1" runat="server">
    <Nodes>
        <telerik:RadTreeNode runat="server" Text="Root RadTreeNode1">
            <Nodes>
                <telerik:RadTreeNode runat="server" Text="Child 1" NavigateUrl="Default.aspx">
                </telerik:RadTreeNode>
                <telerik:RadTreeNode runat="server" Text="Child 2" NavigateUrl="Default2.aspx">
                </telerik:RadTreeNode>
            </Nodes>
        </telerik:RadTreeNode>
    </Nodes>
    <CollapseAnimation Type="OutQuint" Duration="100"></CollapseAnimation>
    <ExpandAnimation Duration="100"></ExpandAnimation>
</telerik:RadTreeView>
<asp:ContentPlaceHolder ID="ContentPlaceHolder1" runat="server">
</asp:ContentPlaceHolder>
</form>
````
````C#
	using System;
	using System.Data;
	using System.Configuration;
	using System.Collections;
	using System.Web;
	using System.Web.Security;
	using System.Web.UI;
	using System.Web.UI.WebControls;
	using System.Web.UI.WebControls.WebParts;
	using System.Web.UI.HtmlControls;
	using Telerik.Web.UI;
	public partial class MasterPage : System.Web.UI.MasterPage
	{
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        RadTreeNode myNode = (RadTreeNode)RadTreeView1.FindNodeByUrl(Request.Url.PathAndQuery);
	        myNode.ExpandParentNodes();
	        myNode.Selected = true;
	    }
	}
````
````VB.NET
	Imports System
	Imports System.Data
	Imports System.Configuration
	Imports System.Collections
	Imports System.Web
	Imports System.Web.Security
	Imports System.Web.UI
	Imports System.Web.UI.WebControls
	Imports System.Web.UI.WebControls.WebParts
	Imports System.Web.UI.HtmlControls
	Imports Telerik.Web.UI
	    Partial Class MasterPage2
	        Inherits System.Web.UI.MasterPage
	        Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
	            Dim myNode As RadTreeNode = DirectCast(RadTreeView1.FindNodeByUrl(Request.Url.PathAndQuery), RadTreeNode)
	            myNode.ExpandParentNodes()
	            myNode.Selected = True
	        End Sub
	    End Class
````

