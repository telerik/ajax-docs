---
title: Footers
page_title: Footers - RadComboBox
description: Check our Web Forms article about Footers.
slug: combobox/templates/footers
tags: footers
published: True
position: 3
---

# Footers



**FooterTemplate** element of RadComboBox, allows the footer of the items in the drop-down list, to be customized. The footer is especially useful if the item template displays attributes in multiple columns, although it can be used with any RadComboBox item style. It could be used even when RadComboBox does not have an **ItemTemplate** defined.Just like the ItemTemplate, the FooterTemplate can include any HTML element.

The following example shows how to create a multi-column RadComboBox with a footer that labels the columns of each item.

>note Both, the **FooterTemplate** and **ItemTemplate** , lay out items using a table that fixes column width,so that the footer and items line up properly.
>


````C#
<telerik:radcombobox 
id="RadComboBox1" 
width="420" 
height="190px" 
runat="server"
highlighttemplateditems="true" 
datasourceid="SqlDataSource1" 
onitemdatabound="RadComboBox1_ItemDataBound">    
<FooterTemplate>        
	<table style="width: 415px; text-align: left">            
		<tr>               
			<td style="width: 125px;">Company Name</td>               
			<td style="width: 125px;">City</td>               
			<td style="width: 125px;">Title</td>               
			<td style="width: 40px;" align="right">                   
				<img alt="" src="img/help.gif" />
			</td>            
		</tr>        
	</table>    
</FooterTemplate>    
<ItemTemplate>           
	<table style="width: 415px; text-align: left">            
	<tr>               
		<td style="width: 125px;">                  
			<%# DataBinder.Eval(Container.DataItem, "CompanyName") %>               
		 </td>               
		 <td style="width: 125px;">                   
			<%# DataBinder.Eval(Container.DataItem, "City") %>               
		 </td>               
		 <td style="width: 125px;">                  
			<%# DataBinder.Eval(Container.DataItem, "ContactTitle") %>               
		 </td>               
		 <td style="width: 40px;"></td>           
	 </tr>          
	 </table>    
</ItemTemplate>
</telerik:radcombobox>
````



In order to include data associated with every column in the text of the RadComboBox item,add an **ItemDataBound** event handler to the RadComboBox.



````C#
	     
	
protected void RadComboBox1_ItemDataBound(object sender, RadComboBoxItemEventArgs e)
{ 
 e.Item.Text = ((DataRowView)e.Item.DataItem)["CompanyName"].ToString() + "; " +               
			   ((DataRowView)e.Item.DataItem)["City"].ToString() + "; " +               
			   ((DataRowView)e.Item.DataItem)["ContactTitle"].ToString();
}
				
````
````VB.NET
	
	
Protected Sub RadComboBox1_ItemDataBound(ByVal sender As Object, ByVal e As RadComboBoxItemEventArgs)

	e.Item.Text = (DirectCast(e.Item.DataItem, DataRowView))("CompanyName").ToString() + "; " +
				  (DirectCast(e.Item.DataItem, DataRowView))("City").ToString() + "; " +
				  (DirectCast(e.Item.DataItem, DataRowView))("ContactTitle").ToString()
End Sub
	
````


## Defining FooterTemplates at run-time

````ASPNET
<telerik:radcombobox 
	id="RadComboBox2" 
	runat="server" 
	autopostback="true">            
</telerik:radcombobox>
````





````C#
	     
	
protected override void OnInit(EventArgs e)
{   
	RadComboBox2.FooterTemplate = new FooterTemplate();   
	base.OnInit(e);
}

protected void Page_Load(object sender, EventArgs e)
{   
	if (!Page.IsPostBack)   
	{       
		RadComboBox2.Items.Add(new RadComboBoxItem("RadComboBoxItem1"));       
		RadComboBox2.Items.Add(new RadComboBoxItem("RadComboBoxItem2"));   
	} 
  
	RadComboBox2.DataBind();
}

class FooterTemplate : ITemplate
{   
	public void InstantiateIn(Control container)   
	{       
		HtmlTable table = new HtmlTable();       
		HtmlTableRow row = new HtmlTableRow();       
		HtmlTableCell cell = new HtmlTableCell();       
		cell.InnerText = "Value";       
		row.Controls.Add(cell);       
		HtmlTableCell cell1 = new HtmlTableCell();       
		cell1.InnerText = "Text";      
		row.Controls.Add(cell1);       
		table.Controls.Add(row);       
		container.Controls.Add(table);   
	}
}
				
````
````VB.NET
	
	
Protected Overloads Overrides Sub OnInit(ByVal e As EventArgs)

	RadComboBox2.FooterTemplate = New FooterTemplate()
	MyBase.OnInit(e)

End Sub

Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)

	If Not Page.IsPostBack Then

		RadComboBox2.Items.Add(New RadComboBoxItem("RadComboBoxItem1"))
		RadComboBox2.Items.Add(New RadComboBoxItem("RadComboBoxItem2"))

	End If

	RadComboBox2.DataBind()

End Sub
	
Class FooterTemplate Implements ITemplate 

	Public Sub InstantiateIn(ByVal container As Control) Implements ITemplate.InstantiateIn
		Dim table As New HtmlTable()
		Dim row As New HtmlTableRow()
		Dim cell As New HtmlTableCell()
		cell.InnerText = "Value"
		row.Controls.Add(cell)
		Dim cell1 As New HtmlTableCell()
		cell1.InnerText = "Text"
		row.Controls.Add(cell1)
		table.Controls.Add(row)
		container.Controls.Add(table)
	End Sub

End Class
	
````


## Accessing controls in FooterTemplate

You can find any control embedded in the RadComboBox' FooterTemplate, like:



````C#
	     	
Label lbl = (Label)RadComboBox1.Footer.FindControl("footerLabel");
lbl.Text = "This is label in the footer";
				
````
````VB.NET
	
Dim lbl As Label = DirectCast(RadComboBox1.Footer.FindControl("footerLabel"), Label)
lbl.Text = "This is label in the footer"
	
````


# See Also

 * [Headers]({%slug combobox/templates/headers%})
