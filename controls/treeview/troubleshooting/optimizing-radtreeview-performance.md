---
title: Optimizing RadTreeView Performance
page_title: Optimizing RadTreeView Performance | UI for ASP.NET AJAX Documentation
description: Optimizing RadTreeView Performance
slug: treeview/troubleshooting/optimizing-radtreeview-performance
tags: optimizing,radtreeview,performance
published: True
position: 3
---

# Optimizing RadTreeView Performance



## 

The performance of RadTreeView for ASP.NET AJAX depends mainly on the number of Nodes that are loaded in the control at any moment. The overall output of the TreeView increases with the number of Nodes, which impacts the control’s performance.

__Load on demand__

The load on demand mechanism of RadTreeView for ASP.NET AJAX comes of a great help in this situation. It enables the control to load Nodes only when they are required (about to be rendered), that is when a Node is expanded and its children Nodes are shown.

RadTreeView for ASP.NET AJAX supports three different Load on Demand modes:

• Server side PostBack

• Server side Callback

• Web Service

Each of the Load on Demand modes has its pros and cons. Below are a visual comparison table of each of the three Load on Demand modes according to three criterions - performance, templates support, ease of implementation and a brief description of each mode:


>caption  

|  | Performance | Templates Support | Ease of Implementation |
| ------ | ------ | ------ | ------ |
|Server Side PostBack|
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterhollow.gif)
>caption 

![](images/treeview_windowslivewriterhollow.gif)
>caption 

![](images/treeview_windowslivewriterhollow.gif)
>caption 

![](images/treeview_windowslivewriterhollow.gif)|
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterfull.gif)|
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterfull.gif)|
|Server Side Callback|
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterhollow.gif)
>caption 

![](images/treeview_windowslivewriterhollow.gif)
>caption 

![](images/treeview_windowslivewriterhollow.gif)|
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterhollow.gif)
>caption 

![](images/treeview_windowslivewriterhollow.gif)|
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterhollow.gif)|
|Web Service|
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterfull.gif)|
>caption 

![](images/treeview_windowslivewriterhalf.gif)
>caption 

![](images/treeview_windowslivewriterhollow.gif)
>caption 

![](images/treeview_windowslivewriterhollow.gif)
>caption 

![](images/treeview_windowslivewriterhollow.gif)
>caption 

![](images/treeview_windowslivewriterhollow.gif)|
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterfull.gif)
>caption 

![](images/treeview_windowslivewriterhollow.gif)
>caption 

![](images/treeview_windowslivewriterhollow.gif)|



__Server Side PostBack__

__Performance__

The Server Side PostBack mode has worst performance without any doubts. The page is posted back and as a result all controls are rendered and updated. A possible workaround is to wrap the RadTreeView control inside RadAjaxPanel or UpdatePanel. Then only the RadTreeView control will be updated. Still performance will be worse than other load on demand modes because the whole RadTreeView control will be rendered and updated.

__Templates__

Full support for templates with no limitations.

__Implementation__

As with the Server Side Callback mode the user should subscribe to the NodeExpand event and add child nodes to the currently expanded Node. A side effect from the full postback is that the developer can update other controls in the page (provided RadTreeView is not wrapped inside RadAjaxPanel/UpdatePanel).

__Server Side Callback__

__Performance__

Server Side Callback mode comes second. Using ASP.NET 2.0 Callbacks involves sending the ViewState of the page back to the server. The page life cycle is executed as well. The good thing is that only a small portion of HTML is returned - only the nodes added during the NodeExpand event.

__Templates__

Server Side Callback mode supports templates with one limitation. It does not support any controls with client-side behavior (e.g. other RadControls for ASP.NET AJAX). You can use anything else though - static HTML, text boxes, buttons etc.

__Implementation__

It is a lot easier to subscribe to an event and create RadTreeNode objects than implement a Web Service. A good thing to know when using Server Side Callback mode is that only the expanded RadTreeNode will be updated after the load on demand request finishes. If you update any other control in the page the changes will not be applied (rendered). Additionally the __IsCallback__ property of the page is __true__ during server side callbacks. So binding of other controls on the page during such requests can be skipped if necessary.

__Web Service__

__Performance__

The Web Service load on demand mode undisputedly delivers the best performance. It does not execute the page lifecycle, does not send the ViewState to the server and outputs tidy JSON which saves precious traffic.

__Templates__

The Web Service load on demand mode completely disregards the template set for RadTreeView, or otherwise put templates do not work in this case. The reason is simple. Since only JSON is sent back and forth the actual template contents (controls and HTML that is) are lost. RadTreeView utilizes its client-side rendering abilities to convert the JSON returned from the web service into HTML representation of tree nodes. A possible workaround is to use ASP.NET AJAX 4.0 templates (check [here](http://blogs.telerik.com/AtanasKorchev/Posts/08-07-23/RadControls_and_ASP_NET_Ajax_4_0_Preview.aspx?ReturnURL=/AtanasKorchev/Posts.aspx) for more information, a sample project and running demo).

__Implementation__

Implementing a Web Service method is a bit more complicated than subscribing to a server-side event (NodeExpand) for example, but the resulting performance boost is worth the extra work.



The Web Service load on demand mode in its basic implementation delivers the best performance compared to the other two modes: Server Side PostBack and Server Side Callback. But this is not all - the mode can further be optimized to achieve even better performance.

__Web Service load on demand optimization tips__

__Use a custom class instead of RadTreeNodeData__

The serialized output of the WebService can be minimized by using a custom class instead of the default RadTreeNodeData. This class can represent the minimum amount of data that is required for the Nodes of the RadTreeView. Below is a sample implementation of a 'minimized' NodeData class and a sample use case:



````C#
	
	    [WebMethod]
	    public IEnumerable GetNodes(RadTreeNodeData node, IDictionary context)
	    {
	        int numberOfNodes = 1000;
	        List<NodeData> nodes = new List<NodeData>();
	        for (int i = 0; i < numberOfNodes; i++)
	        {
	            NodeData nodeData = new NodeData();
	            nodeData.Text = "Node " + i;
	            nodes.Add(nodeData);
	        }
	        return nodes;
	    }
	    class NodeData
	    {
	        private string text;
	        public string Text
	        {
	            get { return text; }
	            set { text = value; }
	        }
	    } 	
````
````VB.NET
	    <WebMethod()> _
	    Public Function GetNodes(ByVal node As RadTreeNodeData, ByVal context As IDictionary) As IEnumerable
	        Dim numberOfNodes As Integer = 1000
	        Dim nodes As List(Of NodeData) = New List(Of NodeData)()
	        For i As Integer = 0 To numberOfNodes - 1
	            Dim nodeData As New NodeData()
	            nodeData.Text = "Node " & i
	            nodes.Add(nodeData)
	        Next i
	        Return nodes
	    End Function
	
	    Friend Class NodeData
	        Private text_Renamed As String
	        Public Property Text() As String
	            Get
	                Return text_Renamed
	            End Get
	            Set(ByVal value As String)
	                text_Renamed = value
	            End Set
	        End Property
	    End Class
````


__Do not persist nodes loaded on demand__

Setting the __PersistLoadOnDemandNodes__ property to __false__ will also improve performance. However the nodes loaded on demand will not be able to fire server-side events (NodeClick, NodeDrop etc). There are workarounds still - using RadAjaxManager to simulate the postbacks (check [here](http://demos.telerik.com/aspnet/prometheus/TreeView/Examples/Programming/Performance/DefaultCS.aspx) for a running demo of this approach).



These were the optimization tips for the load on demand process of RadTreeView. There are still a few more things that can improve the performance.

__Other optimization tips__

__Make sure ASP.NET Ajax scripts are not in debug mode__

Either set __<compilation debug="false">__ in your web.config or set the __ScriptMode__ property of the ScriptManager to __"Release"__. This is a general performance tip when working with RadControls for ASP.NET Ajax. Always deploy your web sites with __<compilation debug="false">__.

__Line images affect performance__

By using a skin with no line images (e.g. "Vista") or setting the __ShowLineImages__ property to __false__ you can improve the loading time even more.
