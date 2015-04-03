---
title: OnDropDownTemplateNeeded
page_title: OnDropDownTemplateNeeded | UI for ASP.NET AJAX Documentation
description: OnDropDownTemplateNeeded
slug: autocompletebox/server-side-programming/events/ondropdowntemplateneeded
tags: ondropdowntemplateneeded
published: True
position: 3
---

# OnDropDownTemplateNeeded



## 

The __DropDownTemplateNeeded__ event occurs before template is being applied to the drop-down item. It is commonly used for dynamic templating.

The __DropDownTemplateNeeded__ event handler receives two arguments:

1. The __RadAutoCompleteBox__ object. This argument is of type object, but can be cast to the __RadAutoCompleteBox__ type.

1. An AutoCompleteDropDownItemEventArgs object. This object has an __Item__ property of type DropDownDataItem.

Use the __DropDownTemplateNeeded__ event handler create templates dynamically.

````ASPNET
	    <telerik:RadAutocompleteBox runat="server" id="RadAutoCompleteBox1" inputtype="Token"
	        datasourceid="SqlDataSource1" width="400px" datatextfield="ContactName" dropdownwidth="400px"
	        ondropdowntemplateneeded="RadAutoCompleteBox1_DropDownTemplateNeeded">
	        </telerik:RadAutocompleteBox>
	    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>"
	        ProviderName="System.Data.SqlClient" SelectCommand="SELECT TOP 6 * FROM [CustomerPhotos]" />
````



>tabbedCode

````C#
	
		public partial class AutoComplete_Examples_Templates_DefaultCS : System.Web.UI.Page
		{
	
			protected void RadAutoCompleteBox1_DropDownTemplateNeeded(object sender, AutoCompleteDropDownItemEventArgs e)
			{
				e.Item.Template = new CustomContentTemplate();
			}
		}
	
		class CustomContentTemplate : ITemplate
		{
			public void InstantiateIn(Control container)
			{
				Label label1 = new Label();
				label1.Font.Bold = true;
				label1.DataBinding += new EventHandler(label1_DataBinding);
				container.Controls.Add(label1);
			}
	
			private void label1_DataBinding(object sender, EventArgs e)
			{
				Label target = (Label)sender;
				DropDownDataItem item = (DropDownDataItem)target.BindingContainer;
				string itemText = (string)DataBinder.Eval(item.DataItem, "ContactName");
				target.Text = itemText;
			}
		}
	
````



````VB.NET
	
	    Partial Public Class AutoComplete_Examples_Templates_DefaultCS
	        Inherits System.Web.UI.Page
	
	        Protected Sub RadAutoCompleteBox1_DropDownTemplateNeeded(sender As Object, e As AutoCompleteDropDownItemEventArgs)
	            e.Item.Template = New CustomContentTemplate()
	        End Sub
	    End Class
	
	    Class CustomContentTemplate
	        Implements ITemplate
	        Public Sub InstantiateIn(container As Control)
	            Dim label1 As New Label()
	            label1.Font.Bold = True
	            label1.DataBinding += New EventHandler(label1_DataBinding)
	            container.Controls.Add(label1)
	        End Sub
	
	        Private Sub label1_DataBinding(sender As Object, e As EventArgs)
	            Dim target As Label = DirectCast(sender, Label)
	            Dim item As DropDownDataItem = DirectCast(target.BindingContainer, DropDownDataItem)
	            Dim itemText As String = DirectCast(DataBinder.Eval(item.DataItem, "ContactName"), String)
	            target.Text = itemText
	        End Sub
	    End Class
	
````


>end

# See Also

 * [OnEntryAdded]({%slug autocompletebox/server-side-programming/events/onentryadded%})

 * [OnEntryRemoved]({%slug autocompletebox/server-side-programming/events/onentryremoved%})

 * [OnTextChanged]({%slug autocompletebox/server-side-programming/events/ontextchanged%})
