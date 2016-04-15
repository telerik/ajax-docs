---
title: EventName Property
page_title: EventName Property | RadAjax for ASP.NET AJAX Documentation
description: EventName Property
slug: ajaxmanager/how-to/eventname-property
previous_url: ajax/how-to/eventname-property
tags: eventname,property
published: True
position: 13
---

# EventName Property



As of Q2 2013, the **EventName** property of the **RadAjaxManager** settings behaves as expected and works properly in all scenarios where you would use **asp:UpdatePanel** controls. This article compares setting the **EventName** property for an **UpdatePanel** and setting the same property for a **RadAjaxPanel**. The **EventName** property gets or sets the Postback control event that triggers the updated controls to be updated.

## Setting the EventName Property

The main difference between setting this property in **RadAjaxManger** and the same in **asp:UpdatePanel** is that the **RadAjaxManager** makes this task easier and you write less code. **Example 1** and **Example 2** define the EventName in both cases.

* **Example 1** : Setting **EventName** for **asp:UpdatePanel's AsyncPostBack** triggers:



````ASP.NET
<asp:UpdatePanel ID="UpdatePanel1" UpdateMode="Conditional" runat="server">
	<ContentTemplate>
	    <asp:Label ID="lbl2" runat="server"></asp:Label>
	</ContentTemplate>
	<Triggers>
	    <asp:AsyncPostBackTrigger ControlID="RadTreeView1" EventName="NodeClick" />
	</Triggers>
</asp:UpdatePanel>
<asp:UpdatePanel ID="UpdatePanel2" UpdateMode="Conditional" runat="server">
	<ContentTemplate>
	   <telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView2" runat="server" OnNodeClick="RadTreeView_NodeClick"
	    OnNodeExpand="RadTreeView_NodeExpand">
	    <Nodes>
	    <telerik:RadTreeNode runat="server" ExpandMode="ServerSide" Text="Node1">
	    <Nodes>
	      <telerik:RadTreeNode runat="server" Text="Inner Node1">
	      </telerik:RadTreeNode>
	    </Nodes>
	      </telerik:RadTreeNode>
	    <telerik:RadTreeNode runat="server" ExpandMode="ServerSide" Text="Node2">
	    <Nodes>
	      <telerik:RadTreeNode runat="server" Text="Inner Node2">
	      </telerik:RadTreeNode>
	    </Nodes>
	   </telerik:RadTreeNode>
	    </Nodes>
	   </telerik:RadTreeView>
	</ContentTemplate>
</asp:UpdatePanel>
````
````C#
public partial class Default : System.Web.UI.Page 
{
	protected void Page_Load(object sender, EventArgs e)
	    {
	        if (RadScriptManager.GetCurrent(Page).IsInAsyncPostBack)
	        {
	            lbl1.Text = DateTime.Now.ToString();
	            lbl2.Text = "label2" + DateTime.Now.ToString();
	        }
	    }
	protected void RadTreeView_NodeClick(object sender, RadTreeNodeEventArgs e)
	    {
	        //When the event fires the ajax request is performed and the lbl1 control will be updated.
	    }
	protected void RadTreeView_NodeExpand(object sender, RadTreeNodeEventArgs e)
	    {
	        //When the event fires the ajax request is performed but the lbl1 control will not be updated.
	
	    }
	
````
````VB
Partial Public Class [Default]
	Inherits System.Web.UI.Page
	    Protected Sub Page_Load(sender As Object, e As EventArgs)
	        If RadScriptManager.GetCurrent(Page).IsInAsyncPostBack Then
	            lbl1.Text = DateTime.Now.ToString()
	            lbl2.Text = "label2" + DateTime.Now.ToString()
	        End If
	    End Sub
	    Protected Sub RadTreeView_NodeClick(sender As Object, e As RadTreeNodeEventArgs)
	        'When the event fires the ajax request is performed and the lbl1 control will be updated.
	    End Sub
	    Protected Sub RadTreeView_NodeExpand(sender As Object, e As RadTreeNodeEventArgs)
	        'When the event fires the ajax request is performed but the lbl1 control will not be updated.
	
	    End Sub
End Class
````


* **Example 2**: How to set the **EventName** property of a **RadAjaxManager** control:



````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" EnableAJAX="true" runat="server">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="RadTreeView1" EventName="NodeClick">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="lbl1" />
	        </UpdatedControls>
	        </telerik:AjaxSetting>
	        <telerik:AjaxSetting AjaxControlID="RadTreeView1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="RadTreeView1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
	        <br />
<telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView1" runat="server" OnNodeClick="RadTreeView_NodeClick"
	OnNodeExpand="RadTreeView_NodeExpand">
	<Nodes>
	    <telerik:RadTreeNode runat="server" ExpandMode="ServerSide" Text="Node1">
	        <Nodes>
	            <telerik:RadTreeNode runat="server" Text="Inner Node1">
	            </telerik:RadTreeNode>
	        </Nodes>
	    </telerik:RadTreeNode>
	    <telerik:RadTreeNode runat="server" ExpandMode="ServerSide" Text="Node2">
	        <Nodes>
	            <telerik:RadTreeNode runat="server" Text="Inner Node2">
	            </telerik:RadTreeNode>
	        </Nodes>
	    </telerik:RadTreeNode>
	</Nodes>
</telerik:RadTreeView>
<br />
<asp:Label ID="lbl1" runat="server"></asp:Label>
````
````C#
public partial class Default : System.Web.UI.Page 
{
	protected void Page_Load(object sender, EventArgs e)
	{
	    if (RadScriptManager.GetCurrent(Page).IsInAsyncPostBack)
	    {
	            lbl1.Text = DateTime.Now.ToString();
	            lbl2.Text = "label2" + DateTime.Now.ToString();
	    }
	}
	protected void RadTreeView_NodeClick(object sender, RadTreeNodeEventArgs e)
	{
	    //When the event fires the ajax request is performed and the lbl1 control will be updated.
	}
	protected void RadTreeView_NodeExpand(object sender, RadTreeNodeEventArgs e)
	{
	    //When the event fires the ajax request is performed but the lbl1 control will not be updated.
	
	}
	
````
````VB
Partial Public Class [Default]
	Inherits System.Web.UI.Page
	Protected Sub Page_Load(sender As Object, e As EventArgs)
	    If RadScriptManager.GetCurrent(Page).IsInAsyncPostBack Then
	        lbl1.Text = DateTime.Now.ToString()
	        lbl2.Text = "label2" + DateTime.Now.ToString()
	    End If
	End Sub
	Protected Sub RadTreeView_NodeClick(sender As Object, e As RadTreeNodeEventArgs)
	    'When the event fires the ajax request is performed and the lbl1 control will be updated.
	End Sub
	Protected Sub RadTreeView_NodeExpand(sender As Object, e As RadTreeNodeEventArgs)
	    'When the event fires the ajax request is performed but the lbl1 control will not be updated.
	
	End Sub
End Class
````


## See Also

 * [Overview]({%slug ajaxmanager/overview%})
