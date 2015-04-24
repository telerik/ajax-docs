---
title: ServerTemplates
page_title: ServerTemplates | RadDropDownList for ASP.NET AJAX Documentation
description: ServerTemplates
slug: dropdownlist/templates/servertemplates
tags: servertemplates
published: True
position: 2
---

# ServerTemplates



## 

You can also add Templates to **RadDropDownList** at runtime, using the **ItemTemplate** property. This property is of type **ITemplate**, so you must assign an object that implements that interface as a value:

>note The DropDownListItems should be dynamically added so that Templates can be defined at run time.
>Also, the **Items should be bound** to be able to eval DataBinder expressions. In other words, you should call the **DataBind** method of the RadDropDownList object or bind the Items that are about to use **DataBinder.Eval** . You can bind a specific item by calling the **DataBind** method of this specific Item.
>


>caution The ItemTemplate should be initialized in the OnInit event of the page. This is needed as the Template should be instantiated before the DropDownListItems are initialized.
>




````C#
protected override void OnInit(EventArgs e)
{
	RadDropDownList1.ItemTemplate = new TextBoxTemplate();
	base.OnInit(e);
}

protected void Page_Load(object sender, EventArgs e)
{
	if (!Page.IsPostBack)
	{
		RadDropDownList1.Items.Add(new DropDownListItem("Item1")); RadDropDownList1.Items.Add(new DropDownListItem("Item2"));
	}

	RadDropDownList1.DataBind();
}
class TextBoxTemplate : ITemplate
{
	public void InstantiateIn(Control container)
	{
		Label label1 = new Label();
		label1.ID = "ItemLabel";
		label1.Text = "Text";
		label1.Font.Size = 10;
		label1.Font.Bold = true;
		label1.DataBinding += new EventHandler(label1_DataBinding);
		container.Controls.Add(label1);
	}

	private void label1_DataBinding(object sender, EventArgs e)
	{
		Label target = (Label)sender;
		DropDownListItem node = (DropDownListItem)target.BindingContainer;
		string nodeText = (string)DataBinder.Eval(node, "Text");
		target.Text = nodeText;
	}
}
````
````VB.NET
Protected Overloads Overrides Sub OnInit(ByVal e As EventArgs)
	RadDropDownList1.ItemTemplate = New TextBoxTemplate()
	MyBase.OnInit(e)
End Sub

Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	If Not Page.IsPostBack Then
		RadDropDownList1.Items.Add(New DropDownListItem("root1"))
		RadDropDownList1.Items.Add(New DropDownListItem("root2"))
	End If
	RadDropDownList1.DataBind()
End Sub

Class TextBoxTemplate
	Implements ITemplate

	Public Sub InstantiateIn(container As Control)
		Dim label1 As New Label()
		label1.ID = "ItemLabel"
		label1.Text = "Text"
		label1.Font.Size = 10
		label1.Font.Bold = True
		AddHandler label1.DataBinding, AddressOf label1_DataBinding
		container.Controls.Add(label1)
	End Sub
	Private Sub label1_DataBinding(sender As Object, e As EventArgs)
		Dim target As Label = DirectCast(sender, Label)
		Dim node As DropDownListItem = DirectCast(target.BindingContainer, DropDownListItem)
		Dim nodeText As String = DirectCast(DataBinder.Eval(node, "Text"), String)
		target.Text = nodeText
	End Sub

	Public Sub InstantiateIn1(container As Control) Implements ITemplate.InstantiateIn

	End Sub
	
	
````


If you want to add different templates to specific items, based on some property or value for instance, the best way is to use the **TemplateNeeded** event.



````C#
protected void RadDropDownList1_TemplateNeeded1(object sender, DropDownListItemEventArgs e)
{
	var textBoxTemplate = new TextBoxTemplate();
	RadDropDownList1.ItemTemplate = textBoxTemplate;
}
````
````VB.NET
End Class

Protected Sub RadDropDownList1_TemplateNeeded(sender As Object, e As DropDownListItemEventArgs)
	Dim textBoxTemplate As TextBoxTemplate = New TextBoxTemplate()
	RadDropDownList1.ItemTemplate = textBoxTemplate
End Sub
````


If for some reason you cannot define the Template in the OnInit event of the page, or take advantage of the TemplateNeeded event, you could use another approach:

>note The Template has to be instantiated for each Item upon a postback. Since the **TextBoxTemplate** class initializes the Label on InstantiateIn we called the InstantiateIn method of the TextBoxTemplate object for each Item.
>




````C#
protected void Page_Load(object sender, EventArgs e)
{
	if (!Page.IsPostBack)
	{
		RadDropDownList1.Items.Add(new DropDownListItem("Item1")); RadDropDownList1.Items.Add(new DropDownListItem("Item2"));
	}
	TextBoxTemplate template = new TextBoxTemplate();
	foreach (DropDownListItem item in RadDropDownList1.Items)
	{
		template.InstantiateIn(item);
	}

	RadDropDownList1.DataBind();
}
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	If Not Page.IsPostBack Then
		RadDropDownList1.Items.Add(New DropDownListItem("root1"))
		RadDropDownList1.Items.Add(New DropDownListItem("root2"))
	End If
	RadDropDownList1.DataBind()
	Dim template As New TextBoxTemplate()
	For Each item As DropDownListItem In RadDropDownList1.Items
		template.InstantiateIn(item)
	Next
	RadDropDownList1.DataBind()
End Sub
````

