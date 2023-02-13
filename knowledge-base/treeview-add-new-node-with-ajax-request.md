---
title: Adding new nodes to RadTreeView with Ajax requests from the client
description: Find out two ways of adding new nodes to RadTreeView on a button click with an Ajax request with the help of RadAjaxManager and RadAjaxPanel - Telerik UI for ASP.NET AJAX
type: troubleshooting
page_title: Add a new node to RadTreeView with Ajax requests and a button click
slug: treeview-add-new-node-with-ajax-request
position: 
tags: 
ticketid: 1597281
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadTreeView for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
Find out two ways of adding new nodes to RadTreeView on a button click with an Ajax request with the help of RadAjaxManager and RadAjaxPanel in the Solution section below:

## Solution
Scenario 1: RadAjaxManager and ajaxRequest:

````ASPX
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>RadAjaxManager and ajaxRequest</title>
</head>

<body>
    <script type="text/javascript">
        function refreshWindow() {
            $find("<%= RadAjaxManager1.ClientID %>").ajaxRequest();
        }
    </script>

    <form id="form1" runat="server">
        <telerik:RadScriptManager ID="RadScriptManager1" runat="server"></telerik:RadScriptManager>

        <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
            <AjaxSettings>
                <telerik:AjaxSetting AjaxControlID="RadAjaxManager1">
                    <UpdatedControls>
                        <telerik:AjaxUpdatedControl ControlID="RadButton1" />
                        <telerik:AjaxUpdatedControl ControlID="treeEmployees" />
                    </UpdatedControls>
                </telerik:AjaxSetting>
                <telerik:AjaxSetting AjaxControlID="RadButton1">
                    <UpdatedControls>
                        <telerik:AjaxUpdatedControl ControlID="treeEmployees" />
                    </UpdatedControls>
                </telerik:AjaxSetting>
            </AjaxSettings>
        </telerik:RadAjaxManager>

        <div style="height: 200px; width: 300px;">
            <telerik:RadTreeView ID="treeEmployees" runat="server" ShowLineImages="False" Skin="Glow" ForeColor="Black">
            </telerik:RadTreeView>
        </div>

        <telerik:RadButton ID="RadButton1" runat="server" Text="Add a new Treeview Node" AutoPostBack="false" OnClientClicked="refreshWindow"></telerik:RadButton>
    </form>
</body>
</html>
````

````C#
using Telerik.Web.UI;

partial class testForm : System.Web.UI.Page
{
    protected void RadAjaxManager1_AjaxRequest(object sender, AjaxRequestEventArgs e)
    {
        RadTreeNode mainNode;

        mainNode = new RadTreeNode();
        mainNode.Text = "Testing";

        treeEmployees.Nodes.Add(mainNode);
    }
}
````
````VB
Imports Telerik.Web.UI

Partial Class testForm
    Inherits System.Web.UI.Page


    Protected Sub RadAjaxManager1_AjaxRequest(sender As Object, e As AjaxRequestEventArgs) Handles RadAjaxManager1.AjaxRequest
        Dim mainNode As RadTreeNode

        mainNode = New RadTreeNode
        mainNode.Text = "Testing"

        treeEmployees.Nodes.Add(mainNode)
    End Sub

End Class
````

Scenario 2: RadAjaxPanel and ajaxRequest:

````ASPX
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>

<body>
    <script type="text/javascript">

        function refreshWindow() {
            $find("<%= RadAjaxPanel1.ClientID %>").ajaxRequest();
        }
    </script>

    <form id="form1" runat="server">
        <telerik:RadScriptManager ID="RadScriptManager1" runat="server"></telerik:RadScriptManager>

        <div>
            <telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server" Height="200px" Width="300px" OnAjaxRequest="RadAjaxPanel1_AjaxRequest">
                <telerik:RadTreeView ID="treeEmployees" runat="server" ShowLineImages="False" Skin="Glow" ForeColor="Black">
                </telerik:RadTreeView>
            </telerik:RadAjaxPanel>

            <telerik:RadButton ID="RadButton1" runat="server" Text="Add a new Treeview Node" AutoPostBack="false" OnClientClicked="refreshWindow"></telerik:RadButton>
        </div>
    </form>
</body>
</html>
````

````C#
using Telerik.Web.UI;

partial class testForm : System.Web.UI.Page
{
    protected void RadAjaxPanel1_AjaxRequest(object sender, AjaxRequestEventArgs e)
    {
        RadTreeNode mainNode;

        mainNode = new RadTreeNode();
        mainNode.Text = "Testing";

        treeEmployees.Nodes.Add(mainNode);
    }
}
````
````VB
Imports Telerik.Web.UI

Partial Class testForm
    Inherits System.Web.UI.Page

    Protected Sub RadAjaxPanel1_AjaxRequest(sender As Object, e As AjaxRequestEventArgs)
        Dim mainNode As RadTreeNode

        mainNode = New RadTreeNode
        mainNode.Text = "Testing"

        treeEmployees.Nodes.Add(mainNode)
    End Sub
End Class
````

   
