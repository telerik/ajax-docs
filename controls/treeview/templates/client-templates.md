---
title: Client Templates
page_title: Client Templates | RadTreeView for ASP.NET AJAX Documentation
description: Client Templates
slug: treeview/templates/client-templates
tags: client,templates
published: True
position: 1
---

# Client Templates



## Overview

As of Q2 2012 RadTreeView provides support for client templates. The template itself contains mark up and binding expressions which are evaluated against a **DataItem** and then rendered as the Node's content on the client. The templates support the following type of expressions which are evaluated at run-time:

* **#=...#** - Evaluates the JavaScript code expression or a string property from the data item and outputs the result in the template.

* **#...#** - Evaluates the JavaScript code expression inside, but doesn't output value.

* **#:...#** - Evaluates the JavaScript code expression or a string property from the data item and outputs the result in the template which is HTML encoeded.

>important Client templates **couldn't** contain server-side controls.
>


## Server side representation

On the server the template will be presented as a string property of the control, named **ClientItemTemplate**. Below a static and dynamic definition of a client template is shown

````ASPNET
	
	    <telerik:RadTreeView ID="RadTreeView1" runat="server">
	        <Nodes>
	            ...
	        </Nodes>
	        <ClientNodeTemplate>
	            <div class="customClass">
	                <img src="#= ImagePath #" alt="Photo" />
	            </div>
	        </ClientNodeTemplate>
	    </telerik:RadTreeView>
	
````





````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (!Page.IsPostBack)
	        {
	            StringBuilder clientTemplate = new StringBuilder();
	            clientTemplate.Append("<div class='customClass'>");
	            clientTemplate.Append("<img src='#= ImagePath #' alt='Photo' />");
	            clientTemplate.Append("</div>");
	            RadTreeView1.ClientItemTemplate = clientTemplate.ToString();
	        }
	    }
````
````VB.NET
	    Protected Sub Default_Vb_Load(sender As Object, e As System.EventArgs) Handles Me.Load
	        If Not Page.IsPostBack Then
	            Dim clientTemplate As New StringBuilder()
	            clientTemplate.Append("<div class='customClass'>")
	            clientTemplate.Append("<img src='#= ImagePath #' alt='Photo' />")
	            clientTemplate.Append("</div>")
	            RadTreeView1.ClientItemTemplate = clientTemplate.ToString()
	        End If
	    End Sub
	    '#End Region
	End Class




## Client side representation

The template will be applied automatically to all nodes loaded through **Web Service**. If a node is added through JavaScript, the template would not be applied, unless its **bindTemplate()** method is explicitly invoked. The method can be called before, as well as after the node is added to the node collection of the control.

Client teplates could be applied globally for all RadTreeView nodes or per Node basis allowing a diversity in the look and feel of the different nodes. This functionality is very useful in case of hierarchy when the root nodes doesn't have templates, by their children does.

### New client-side methods

There are two new methods of the RadTreeView's client-side object which are also available for its nodes:

* get_clientTemplate() : this method will return the defined client template as a string which include the defined binding expressions.

* set_clientTemplate(value) : this method will set the client template of the RadTreeView/RadTreeNode. As a parameter should be passed a string representing the template including the binding expressions.

A new method of the RadTreeNode's client-side object is also introduced:

* bindTemplate() : as a parameter to this method a data item should be passed, if it's called without such paramater it will be automatically created from the basic properties of the item. When the method is called the expressions in the client template will be evaliated.

Sample code for the usage of the new method is demonstrated below.

* Adding item and then binding the Control’s template to it:

````ASPNET
	
	    <telerik:RadTreeView runat="server" ID="RadTreeView1">
	        <ClientNodeTemplate>
	            Template text: #= Text #
	        </ClientNodeTemplate>
	    </telerik:RadTreeView>
	
````



````JavaScript
	
	        var node = new Telerik.Web.UI.RadTreeNode();
	        node.set_text("node");
	        $find("RadTreeView1").get_nodes().add(node);
	        node.bindTemplate();
	
	
````



* Creating item, setting its client template and calling **bindTemplate** method before inserting it into the nodes collection of the RadTreeView:

````JavaScript
	        var node = new Telerik.Web.UI.RadTreeNode();
	        node.set_text("node");
	        node.set_clientTemplate("template text: #= Text #");
	        node.bindTemplate();
	        $find("RadTreeView1").get_nodes().add(node);
````



* Creating item, setting it’s client template and calling **bindTemplate** method after inserting it into the nodes colelction of the RadTreeView:

````JavaScript
	        var node = new Telerik.Web.UI.RadTreeNode();
	        node.set_text("node");
	        node.set_clientTemplate("template text: #= Text #");
	        $find("RadTreeView1").get_nodes().add(node); 
	        node.bindTemplate();
````



* Bind the client template to an item rendered on the server:

````ASPNET
	    <telerik:RadTreeView runat="server" ID="RadTreeView1">
	        <Nodes>
	            <telerik:RadTreeNode Text"node"></telerik:RadTreeNode>
	        </Nodes>
	    </telerik:RadTreeView>
````



````JavaScript
	        var node = $find("RadTreeView1").get_nodes().getNode(0); 
	        node.set_clientTemplate("template text: #= Text #");
	        node.bindTemplate();
````



### Client-side event

A new client-side [OnClientTemplateDataBound]({%slug treeview/client-side-programming/events/onclienttemplatedatabound%}) event is introduced.

# See Also

 * [Online Demo](http://demos.telerik.com/aspnet-ajax-beta/treeview/examples/functionality/clienttemplates/defaultcs.aspx)
