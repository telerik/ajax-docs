---
title: Adding Templates at Run-time
page_title: Adding Templates at Run-time | RadMenu for ASP.NET AJAX Documentation
description: Adding Templates at Run-time
slug: menu/templates/adding-templates-at-run-time
tags: adding,templates,at,run-time
published: True
position: 5
---

# Adding Templates at Run-time



## 

You can also add templates to **RadMenu** at runtime, using the **ItemTemplate** property. This property is of type **ITemplate**, so you must assign an object that implements that interface as a value:



>note The RadMenu items should be dynamically added so that templates can be defined at run time.
>Also, the **items should be bound** to be able to eval DataBinder expressions. In other words, you should call the **DataBind** method of the RadMenu object or bind the items that are about to use **DataBinder.Eval** . You can bind a specific item by calling the **DataBind** method of this specific item.
>




````C#
	    protected override void OnInit(EventArgs e)
	    {    RadMenu1.ItemTemplate = new TextBoxTemplate();    
	        base.OnInit(e);
	    }
	
	    protected void Page_Load(object sender, EventArgs e)
	    {    
	        if (!Page.IsPostBack)
	        {        
	            RadMenu1.Items.Add(new RadMenuItem("MenuItem1"));
	            RadMenu1.Items.Add(new RadMenuItem("MenuItem2"));
	        }    
	        RadMenu1.DataBind();
	    }
	
	    class TextBoxTemplate : ITemplate
	    {    
	        public void InstantiateIn(Control container)    
	        {        
	            Label label1 = new Label();
	            label1.ID = "ItemLabel";
	            label1.Text = "Text";
	            label1.Font.Size = 15;
	            label1.Font.Bold = true;
	            label1.DataBinding += new EventHandler(label1_DataBinding);
	            container.Controls.Add(label1);
	        }    
	        
	        private void label1_DataBinding(object sender, EventArgs e)
	        {        
	            Label target = (Label)sender;
	            RadMenuItem item = (RadMenuItem)target.BindingContainer;
	            string itemText = (string)DataBinder.Eval(item, "Text");
	            target.Text = itemText;
	        }
	    }
	    			
````
````VB.NET
	    Protected Overloads Overrides Sub OnInit(ByVal e As EventArgs)
	        RadMenu1.ItemTemplate = New TextBoxTemplate()
	        MyBase.OnInit(e)
	    End Sub
	
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        If Not Page.IsPostBack Then
	            RadMenu1.Items.Add(New RadMenuItem("MenuItem1"))
	            RadMenu1.Items.Add(New RadMenuItem("MenuItem2"))
	        End If
	        RadMenu1.DataBind()
	    End Sub
	
	    Class TextBoxTemplate Implements ITemplate 
	        Public Sub InstantiateIn(ByVal container As Control)
	            Dim label1 As New Label()
	            label1.ID = "ItemLabel"
	            label1.Text = "Text"
	            label1.Font.Size = 15
	            label1.Font.Bold = True
	
	            AddHandler label1.DataBinding, AddressOf label1_DataBinding
	            container.Controls.Add(label1)
	        End Sub
	
	        Private Sub label1_DataBinding(ByVal sender As Object, ByVal e As EventArgs)
	            Dim target As Label = DirectCast(sender, Label)
	            Dim item As RadMenuItem = DirectCast(target.BindingContainer, RadMenuItem)
	            Dim itemText As String = DirectCast(DataBinder.Eval(item, "Text"), String)
	            target.Text = itemText
	        End Sub
	    End Class
````


If you for some reason cannot define the template in the OnInit event of the page, you could use another approach:



>note The template has to be instantiated for each item upon a postback. Since the **TextBoxTemplate** class initializes the label on InstantiateIn we called the InstantiateIn method of the TextBoxTemplate object for each item.
>




````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {    
	        if (!Page.IsPostBack)    
	        {        
	            RadMenu1.Items.Add(new RadMenuItem("MenuItem1"));
	            RadMenu1.Items.Add(new RadMenuItem("MenuItem2"));
	        }        
	        
	        TextBoxTemplate template = new TextBoxTemplate();
	        foreach (RadMenuItem item in RadMenu1.GetAllItems())
	        {        
	            template.InstantiateIn(item);
	        }
	        RadMenu1.DataBind();
	    }
	    			
````
````VB.NET
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        If Not Page.IsPostBack Then
	            RadMenu1.Items.Add(New RadMenuItem("MenuItem1"))
	            RadMenu1.Items.Add(New RadMenuItem("MenuItem2"))
	        End If
	        Dim template As New TextBoxTemplate()
	        For Each item As RadMenuItem In RadMenu1.GetAllItems()
	            template.InstantiateIn(item)
	        Next
	        RadMenu1.DataBind()
	    End Sub
	
````


The end result of this code looks like the following:

![RadMenu Dynamic Template](images/menu_dynamictemplates.gif)
