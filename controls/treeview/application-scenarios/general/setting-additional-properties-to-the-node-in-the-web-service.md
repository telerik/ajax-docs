---
title: Setting Additional Properties to the Node in the Web Service
page_title: Setting Additional Properties to the Node in the Web Service | UI for ASP.NET AJAX Documentation
description: Setting Additional Properties to the Node in the Web Service
slug: treeview/application-scenarios/general/setting-additional-properties-to-the-node-in-the-web-service
tags: setting,additional,properties,to,the,node,in,the,web,service
published: True
position: 3
---

# Setting Additional Properties to the Node in the Web Service



Usually, the WebMethod of the WebService returns an array of RadTreeNodeData ([help reference]({%slug treeview/load-on-demand/web-service-binding%})). RadTreeNodeData class has a limited number of properties:

````C#
	
	    public class RadTreeNodeData : ControlItemData
	    {
	        public RadTreeNodeData();
	        public string ContentCssClass { get; set; }
	        public string ContextMenuID { get; set; }
	        public string CssClass { get; set; }
	        public string DisabledCssClass { get; set; }
	        public string DisabledImageUrl { get; set; }
	        public string ExpandedImageUrl { get; set; }
	        public TreeNodeExpandMode ExpandMode { get; set; }
	        public string HoveredCssClass { get; set; }
	        public string HoveredImageUrl { get; set; }
	        public string ImageUrl { get; set; }
	        public string NavigateUrl { get; set; }
	        public bool PostBack { get; set; }
	        public string SelectedCssClass { get; set; }
	        public bool Checked { get; set; }
	    } 
	    
	
````



So, these are the only properties you can set to the child nodes added from Web Service.

Imagine that you need to set a property that is not available in the RadTreeNodeData class - e.g. ToolTip. There are two approaches to do this:

## First Approach - using a custom class

1. Create a class that inherits the RadTreeNodeData class and add the ToolTop property to it:

````C#
	
	    public class CustomRadTreeNodeData : RadTreeNodeData { public string ToolTip;}
	
````



2. Define the WebMethod as follows:

````C#
	
	    [WebMethod]
	    public CustomRadTreeNodeData[] GetNodesWithToolTips()
	    {
	        List<CustomRadTreeNodeData> nodes = new List<CustomRadTreeNodeData>();
	
	        for (int i = 1; i < 11; i++)
	        {
	            CustomRadTreeNodeData node = new CustomRadTreeNodeData();
	            node.Text = "node " + i.ToString();
	            node.ToolTip = "Tooltip for " + node.Text;
	            nodes.Add(node);
	        }
	
	        return nodes.ToArray();
	    } 
````



3. Set the tooltip of the node in the [OnClientNodeDataBound]({%slug treeview/client-side-programming/events/onclientnodedatabound%}) event:

````JavaScript
	
	        function OnClientNodeDataBoundHandler(sender, e) {
	            var node = e.get_node();
	            node.set_toolTip(e.get_dataItem().ToolTip);
	        }
	
````



Here is the JSON output for the first child node:

````JavaScript
	    {"__type":"CustomRadTreeNodeData","ToolTip":"Tooltip for node 1","ExpandMode":0,"NavigateUrl":"","PostBack"
	    :true,"CssClass":"","DisabledCssClass":"","SelectedCssClass":"","ContentCssClass":null,"HoveredCssClass"
	    :"","ImageUrl":"","HoveredImageUrl":null,"DisabledImageUrl":"","ExpandedImageUrl":"","ContextMenuID"
	    :null,"Text":"node 1","Value":"","Enabled":true,"Attributes":{}}
````



## Second approach - using the Attributes collection

1. Add the ToolTip custom attribute:

````C#
	
	    [WebMethod]
	    public RadTreeNodeData[] GetNodesWithToolTips()
	    {
	        List<RadTreeNodeData> nodes = new List<RadTreeNodeData>();
	
	        for (int i = 1; i < 11; i++)
	        {
	            RadTreeNodeData node = new RadTreeNodeData();
	            node.Text = "node " + i.ToString();
	            node.Attributes["ToolTip"] = "new tooltip for " + node.Text;
	            nodes.Add(node);
	        }
	
	        return nodes.ToArray();
	    } 
````





2. Set the tooltip of the node in the [OnClientNodeDataBound]({%slug treeview/client-side-programming/events/onclientnodedatabound%}) event:

````JavaScript
	
	        function OnClientNodeDataBoundHandler(sender, e) {
	            var node = e.get_node();
	            node.set_toolTip(node.get_attributes().getAttribute("ToolTip"));
	        }
	
````



Here is the JSON output for the first child node:

````JavaScript
	    {"__type":"Telerik.Web.UI.RadTreeNodeData","ExpandMode":0,"NavigateUrl":"","PostBack":true,"CssClass"
	    :"","DisabledCssClass":"","SelectedCssClass":"","ContentCssClass":null,"HoveredCssClass":"","ImageUrl"
	    :"","HoveredImageUrl":null,"DisabledImageUrl":"","ExpandedImageUrl":"","ContextMenuID":null,"Text":"node
	    1","Value":"","Enabled":true,"Attributes":{"ToolTip":"new tooltip for node 1"}}
````



# See Also

 * [Web Service Binding]({%slug treeview/load-on-demand/web-service-binding%})

 * [Tutorial on Web Service Binding]({%slug treeview/load-on-demand/tutorial-on-web-service-binding%})
