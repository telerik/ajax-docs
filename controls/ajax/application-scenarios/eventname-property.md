---
title: EventName Property
page_title: EventName Property | UI for ASP.NET AJAX Documentation
description: EventName Property
slug: ajax/application-scenarios/eventname-property
tags: eventname,property
published: True
position: 13
---

# EventName Property



As of Q2 2013, the __EventName__ property of the __RadAjaxManager__ settings behaves as expected and works properly in all scenarios where you would use __asp:UpdatePanel__ controls. This article compares setting the __EventName__ property for an __UpdatePanel__ and setting the same property for a __RadAjaxPanel__. The __EventName__ property gets or sets the Postback control event that triggers the updated controls to be updated.

## Setting the EventName Property

The main difference between setting this property in __RadAjaxManger__ and the same in __asp:UpdatePanel__ is that the __RadAjaxManager__ makes this task easier and you write less code. __Example 1__ and __Example 2__ define the EventName in both cases.

* __Example 1__: Setting __EventName__ for __asp:UpdatePanel's AsyncPostBack__ triggers:

>tabbedCode

````ASPNET
	    <div>
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
	                <telerik:RadTreeView ID="RadTreeView2" runat="server" OnNodeClick="RadTreeView_NodeClick"
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
	    </div>
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
````VB.NET
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
>end

* __Example 2__: How to set the __EventName__ property of a __RadAjaxManager__ control:

>tabbedCode

````ASPNET
	    <div>
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
	        <telerik:RadTreeView ID="RadTreeView1" runat="server" OnNodeClick="RadTreeView_NodeClick"
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
	    </div>
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
````VB.NET
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
>end

# See Also

 * [Overview]({%slug ajax/radajaxmanager/overview%})
