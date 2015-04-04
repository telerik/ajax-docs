---
title: ClientTemplates
page_title: ClientTemplates | UI for ASP.NET AJAX Documentation
description: ClientTemplates
slug: dropdownlist/templates/clienttemplates
tags: clienttemplates
published: True
position: 1
---

# ClientTemplates



Client Template

## Overview

The template contains mark up and binding expressions which are evaluated against a __DataItem__ and then rendered as the Item's content on the client. The templates support the following type of expressions which are evaluated at run-time:

* __#=...#__ - Evaluates the JavaScript code expression or a string property from the data item and outputs the result in the template.

* __#...#__ - Evaluates the JavaScript code expression inside, but doesn't output value.

* __#:...#__ - Evaluates the JavaScript code expression or a string property from the data item and outputs the result in the template which is HTML encoded.

>important Client templates __couldn't__ contain server-side controls.
>


## Server side representation

On the server the template will be presented as a string property of the control, named __ClientItemTemplate__. Below a static and dynamic definition of a client template is shown

````ASPNET
	        <telerik:RadDropDownList ID="RadDropDownList1" runat="server">           
	            <ClientItemTemplate>
	                <div class="customClass">
	                    <img src="#= ImagePath #" alt="Picture" />
	                    <span>"#= Text #"</span>
	                </div>
	            </ClientItemTemplate>       
	            <WebServiceSettings Method="LoadItems" Path="Products.asmx" />
	        </telerik:RadDropDownList>
````



>tabbedCode

````C#
	
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (!Page.IsPostBack)
	        {
	            StringBuilder clientTemplate = new StringBuilder();
	            clientTemplate.Append("<div class='customClass'>");
	            clientTemplate.Append("<img src='#= ImagePath #' alt='Picture' />");
	            clientTemplate.Append("<span> #= Text # </span>");
	            clientTemplate.Append("</div>");
	            RadDropDownList1.ClientItemTemplate = clientTemplate.ToString();
	        }
	    }
````
````VB.NET
	
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        If Not Page.IsPostBack Then
	            Dim clientTemplate As New StringBuilder()
	            clientTemplate.Append("<div class='customClass'>")
	            clientTemplate.Append("<img src='#= ImagePath #' alt='Photo' />")
	            clientTemplate.Append("<span> #= Text # </span>")
	            clientTemplate.Append("</div>")
	            RadDropDownList1.ClientItemTemplate = clientTemplate.ToString()
	        End If
	    End Sub
````
>end

## Client side representation

The template will be applied automatically to all items loaded through __Web Service(including if ODataSource control is used)__. If an item is added through JavaScript, the template would not be applied, unless its __bindTemplate()__ method is explicitly invoked. The method can be called before, as well as after the item is added to the child collection of the control.

### Client-side methods

There are two methods of the RadDropDownList's client-side object:

* get_clientTemplate() : this method will return the defined client template as a string which include the defined binding expressions.

* set_clientTemplate(value) : this method will set the client template of the RadDropDownList. As a parameter should be passed a string representing the template including the binding expressions.

A client-side method of the DropDownListItem's client-side object is also available:

* bindTemplate() : as a parameter to this method a data item should be passed, if it's called without such paramater it will be automatically created from the basic properties of the item. When the method is called the expressions in the client template will be evaluated.

Sample code for the usage of the method is demonstrated below.

* Adding item and then binding the Control’s template to it:

````ASPNET
	        <telerik:RadDropDownList ID="RadDropDownList1" runat="server">
	            <ClientItemTemplate>
	                Template text: #= Text #
	            </ClientItemTemplate>
	        </telerik:RadDropDownList>
````



````JavaScript
	            var item = new Telerik.Web.UI.DropDownListItem();
	            item.set_text("new item");
	            $find("RadDropDownList1").get_items().add(item);
	            item.bindTemplate();
````



* Creating item, setting its client template and calling __bindTemplate__ method before inserting it into the items collection of the RadDropDownList:

````JavaScript
	            var item = new Telerik.Web.UI.DropDownListItem();
	            item.set_text("new item");
	            item.set_clientTemplate("template text: #= Text #");
	            item.bindTemplate();
	            $find("RadDropDownList1").get_items().add(item);
````



* Creating item, setting it’s client template and calling __bindTemplate__ method after inserting it into the items colelction of the RadDropDownList:

````JavaScript
	            var item = new Telerik.Web.UI.DropDownListItem();
	            item.set_text("new item");
	            item.set_clientTemplate("template text: #= Text #");
	            $find("RadDropDownList1").get_items().add(item);
	            item.bindTemplate();
````



* Bind the client template to an item rendered on the server:

````ASPNET
	        <telerik:RadDropDownList ID="RadDropDownList1" runat="server">
	            <Items>
	                <telerik:DropDownListItem Text="Item" />
	            </Items>
	        </telerik:RadDropDownList>
````



````JavaScript
	            var item = $find("RadDropDownList1").get_items().getItem(0);
	            item.set_clientTemplate("template text: #= Text #");
	            item.bindTemplate();
````


