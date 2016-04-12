---
title: Client Templates
page_title: Client Templates | RadComboBox for ASP.NET AJAX Documentation
description: Client Templates
slug: combobox/templates/client-templates
tags: client,templates
published: True
position: 6
---

# Client Templates


## Overview

As of Q2 2012 RadComboBox provides support for client templates. The template itself contains mark up and binding expressions which are evaluated against a **DataItem** and then rendered as the Item's content on the client. The templates support the following type of expressions which are evaluated at run-time:

* **#=...#** - Evaluates the JavaScript code expression or a string property from the data item and outputs the result in the template.

* **#...#** - Evaluates the JavaScript code expression inside, but doesn't output value.

* **#:...#** - Evaluates the JavaScript code expression or a string property from the data item and outputs the result in the template which is HTML encoeded.

>important Client templates **couldn't** contain server-side controls.
>

>note When a WCF service is used, the Attributes collection is serialized as an array of Name-Value pairs, and inside the ClientTemplate the attributes are accessed by index: **#=Attributes[0].Value#**
>


## Server side representation

On the server the template will be presented as a string property of the control, named **ClientItemTemplate**. Below a static and dynamic definition of a client template is shown

````ASPNET
	
<telerik:RadComboBox RenderMode="Lightweight" ID="RadComboBox1" runat="server">
	<ClientItemTemplate>
		<div class="customClass">
			<img src="#= ImagePath #" alt="Photo" />
		</div>
	</ClientItemTemplate>
</telerik:RadComboBox>
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
		RadComboBox1.ClientItemTemplate = clientTemplate.ToString();
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
		RadComboBox1.ClientItemTemplate = clientTemplate.ToString()
	End If
End Sub
````




## Client side representation

The template will be applied automatically to all items loaded through **Web Service**. If an item is added through JavaScript, the template would not be applied, unless its **bindTemplate()** method is explicitly invoked. The method can be called before, as well as after the item is added to the child collection of the control.

### New client-side methods

There are two new method of the RadComboBox's client-side object:

* get_clientTemplate() : this method will return the defined client template as a string which include the defined binding expressions.

* set_clientTemplate(value) : this method will set the client template of the RadComboBox. As a parameter should be passed a string representing the template including the binding expressions.

A new client-side method of the RadComboBoxItem's client-side object is also introduced:

* bindTemplate() : as a parameter to this method a data item should be passed, if it's called without such paramater it will be automatically created from the basic properties of the item. When the method is called the expressions in the client template will be evaluated.

Sample code for the usage of the new method is demonstrated below.

* Adding item and then binding the Control’s template to it:

````ASPNET

<telerik:RadComboBox RenderMode="Lightweight" ID="RadComboBox1" runat="server">
	<ClientItemTemplate>
		Template text: #= Text #
	</ClientItemTemplate>
</telerik:RadComboBox>
````



````JavaScript
	
var item = new Telerik.Web.UI.RadComboBoxItem();
item.set_text("new item");
$find("RadComboBox1").get_items().add(item);
item.bindTemplate();
	
````



* Creating item, setting its client template and calling **bindTemplate** method before inserting it into the items collection of the RadComboBox:

````JavaScript

var item = new Telerik.Web.UI.RadComboBoxItem();
item.set_text("new item");
item.set_clientTemplate("template text: #= Text #");
item.bindTemplate();
$find("RadComboBox1").get_items().add(item);
	
````



* Creating item, setting it’s client template and calling **bindTemplate** method after inserting it into the items colelction of the RadComboBox:

````JavaScript

var item = new Telerik.Web.UI.RadComboBoxItem();
item.set_text("new item");
item.set_clientTemplate("template text: #= Text #");
$find("RadComboBox1").get_items().add(item);
item.bindTemplate();

````



* Bind the client template to an item rendered on the server:

````ASPNET
<telerik:RadComboBox RenderMode="Lightweight" ID="RadComboBox1" runat="server">
	<Items>
		<telerik:RadComboBoxItem Text="Item" />
	</Items>
</telerik:RadComboBox>
````



````JavaScript
var item = $find("RadComboBox1").get_items().getItem(0); 
item.set_clientTemplate("template text: #= Text #");
item.bindTemplate();
````



### Client-side event

A new client-side [OnClientTemplateDataBound]({%slug combobox/client-side-programming/events/onclienttemplatedatabound%}) event is introduced.

# See Also

 * [Online Demo](http://demos.telerik.com/aspnet-ajax-beta/combobox/examples/functionality/clienttemplates/defaultcs.aspx)
