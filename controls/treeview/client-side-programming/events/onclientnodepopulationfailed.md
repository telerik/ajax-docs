---
title: OnClientNodePopulationFailed
page_title: OnClientNodePopulationFailed | UI for ASP.NET AJAX Documentation
description: OnClientNodePopulationFailed
slug: treeview/client-side-programming/events/onclientnodepopulationfailed
tags: onclientnodepopulationfailed
published: True
position: 3
---

# OnClientNodePopulationFailed



## 

The __OnClientNodePopulationFailed__ client-side event occurs when:

* Child nodes are loaded on-demand.

* The parent node __ExpandMode__ property is __ServerSideCallback__ or __WebService__.

* An exception occurs while loading.

The event handler receives parameters:

1. The treeview instance that fired the event.

1. Event arguments with functions:

* __get_node()__ retrieves a reference to the parent node.

* __get_errorMessage()__ retrieves the exception message text.

* __set_cancel()__ - call this function to specify wether the event should be canceled (true) or not (false). Canceling of the event will prevent the exception from propagating.

* __get_domEvent()__ retrieves a DOM event object.

In the example below an exception is raised in the server-side [NodeExpand]({%slug treeview/server-side-programming/events/nodeexpand%}) event handler

````ASPNET
	
	    <script type="text/javascript" language="javascript">
	        function ClientNodePopulationFailed(sender, eventArgs) {
	        
	            var node = eventArgs.get_node();
	            var message = eventArgs.get_errorMessage();
	            alert("OnClientNodePopulationFailed fired for node " +
	                node.get_text() +
	                " with message[" +
	                message + "]");
	           eventArgs.set_cancel(true);
	        }
	    </script>
	
	    <telerik:RadTreeView ID="RadTreeView1" runat="server" OnClientNodePopulationFailed="ClientNodePopulationFailed"
	        OnNodeExpand="RadTreeView1_NodeExpand">
	        <Nodes>
	            <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="Search" ImageUrl="~/images/search.ico"
	                Expanded="True" Value="1">
	                <Nodes>
	                    <telerik:RadTreeNode runat="server" ExpandMode="ServerSideCallBack" Text="Recent Searches">
	                    </telerik:RadTreeNode>
	                    <telerik:RadTreeNode runat="server" ExpandMode="ServerSideCallBack" Text="Network Locations">
	                    </telerik:RadTreeNode>
	                </Nodes>
	            </telerik:RadTreeNode>
	        </Nodes>
	    </telerik:RadTreeView>
````





>caution Note that the custom alert will appear on remote clients, only if the __customErrors__ mode is set to __Off__ in the web.config:
><customErrors mode="Off"></customErrors>
>




The server __NodeExpand__ event handler for the RadTreeView defined above:

>tabbedCode

````C#
	     
	
	protected void RadTreeView1_NodeExpand(object sender, Telerik.Web.UI.RadTreeNodeEventArgs e)
	{    
	    throw new ApplicationException("An error occurred while attempting to populate " + e.Node.Text);
	}
				
````
````VB.NET
	     
	
	    Protected Sub RadTreeView1_NodeExpand(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadTreeNodeEventArgs)
	        Throw New ApplicationException("An error occurred while attempting to populate " + e.Node.Text)
	    End Sub
	
````
>end

# See Also

 * [OnClientNodePopulating]({%slug treeview/client-side-programming/events/onclientnodepopulating%})

 * [OnClientNodePopulated]({%slug treeview/client-side-programming/events/onclientnodepopulated%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
