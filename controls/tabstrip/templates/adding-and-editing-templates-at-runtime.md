---
title: Adding and Editing Templates at Runtime
page_title: Adding and Editing Templates at Runtime | UI for ASP.NET AJAX Documentation
description: Adding and Editing Templates at Runtime
slug: tabstrip/templates/adding-and-editing-templates-at-runtime
tags: adding,and,editing,templates,at,runtime
published: True
position: 3
---

# Adding and Editing Templates at Runtime



## 

You can also add templates to __RadTabStrip__ at runtime, using the __TabTemplate__ property. This property is of type __ITemplate__, so you must assign an object that implements that interface as a value:

>note The tabs should be dynamically added so that templates can be defined at run time.
>Also, the tabs should be bound to be able to eval DataBinder expressions. In other words, you should call the DataBind method of the RadTabStrip object or bind the tabs that are about to use DataBinder.Eval. You can bind a specific tab by calling the DataBind method of this specific tab.
>


>caution The TabTemplate should be initialized in the __OnInit__ event of the page. This is needed as the template should be instantiated before the RadTabs are initialized.
>




>tabbedCode

````C#
	   
	protected override void OnInit(EventArgs e)
	{
	   RadTabStrip1.TabTemplate = new TextBoxTemplate();        
	   base.OnInit(e);
	}
	protected void Page_Load(object sender, EventArgs e)
	{
	   if (!Page.IsPostBack)
	   {
	       RadTabStrip1.Tabs.Add(new RadTab("root1"));
	       RadTabStrip1.Tabs.Add(new RadTab("root2"));
	   }
	   RadTabStrip1.DataBind();
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
	       RadTab tab = (RadTab)target.BindingContainer;
	       string tabText = (string)DataBinder.Eval(tab, "Text");
	       target.Text = tabText;
	   }
	} 
	
````
````VB.NET
	
	Protected Overloads Overrides Sub OnInit(ByVal e As EventArgs)
	 RadTabStrip1.TabTemplate = New TextBoxTemplate()
	 MyBase.OnInit(e)
	End Sub
	Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	 If Not Page.IsPostBack Then
	  RadTabStrip1.Tabs.Add(New RadTab("root1"))
	  RadTabStrip1.Tabs.Add(New RadTab("root2"))
	 End If
	 RadTabStrip1.DataBind()
	End Sub
	Class TextBoxTemplate
	 Implements ITemplate
	 Public Sub InstantiateIn(ByVal container As Control) Implements ITemplate.InstantiateIn
	  Dim label1 As New Label()
	  label1.ID = "ItemLabel"
	  label1.Text = "Text"
	  label1.Font.Size = 10
	  label1.Font.Bold = True
	  AddHandler label1.DataBinding, AddressOf label1_DataBinding
	  container.Controls.Add(label1)
	 End Sub
	 Private Sub label1_DataBinding(ByVal sender As Object, ByVal e As EventArgs)
	  Dim target As Label = DirectCast(sender, Label)
	  Dim tab As RadTab = DirectCast(target.BindingContainer, RadTab)
	  Dim tabText As String = DirectCast(DataBinder.Eval(tab, "Text"), String)
	  target.Text = tabText
	 End Sub
	End Class  
	
				
````
>end

If you for some reason cannot define the template in the OnInit event of the page, you could use another approach:

>note The template has to be instantiated for each tab upon a postback. Since the TextBoxTemplate class initializes the label on InstantiateIn we called the InstantiateIn method of the TextBoxTemplate object for each tab.
>


>tabbedCode

````C#
	
	protected void Page_Load(object sender, EventArgs e)
	{
	   
	   if (!Page.IsPostBack)
	   {
	       RadTabStrip1.Tabs.Add(new RadTab("root1"));
	       RadTabStrip1.Tabs.Add(new RadTab("root2"));
	   }
	   TextBoxTemplate template = new TextBoxTemplate();
	   foreach (RadTab tab in RadTabStrip1.GetAllTabs())
	   {
	       template.InstantiateIn(tab);
	   }
	   RadTabStrip1.DataBind();
	} 
				
````
````VB.NET
	
	Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	 If Not Page.IsPostBack Then
	  RadTabStrip1.Tabs.Add(New RadTab("root1"))
	  RadTabStrip1.Tabs.Add(New RadTab("root2"))
	 End If
	 Dim template As New TextBoxTemplate()
	 For Each tab As RadTab In RadTabStrip1.GetAllTabs()
	  template.InstantiateIn(tab)
	 Next
	 RadTabStrip1.DataBind()
	End Sub 
	
				
````
>end



The end result of this code looks like the following:

![Templates](images/tabstrip_temlpates6.gif)
