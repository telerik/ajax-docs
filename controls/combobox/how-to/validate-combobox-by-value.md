---
title: Validate Combobox by Value
page_title: Validate Combobox by Value | UI for ASP.NET AJAX Documentation
description: Validate Combobox by Value
slug: combobox/how-to/validate-combobox-by-value
tags: validate,combobox,by,value
published: True
position: 2
---

# Validate Combobox by Value



## 

RadComboBox can be [easily validated]({%slug combobox/functionality/validation%}) against the __Text__ of its items. This is by design.

The control cannot be validated by value out of the box. The combobox is a composite control, its input area being essentially a <input type"text" ...> DOM element. The __.value__ property of this DOM element corresponds to the actual __text__ being written inside the textbox. This is not the case with <asp:dropdownlist> which corresponds to DOM <select> element and a number of <option> elements of ListItems which have different value / text properties.

Here is an example of how to validate the combobox by value.

Assume we have a combobox with some items. Some of the items have values, other does not. Some of the values are strings, other are numbers.

The goal is to allow form submission only if the __value__ of the selected item is an even number.

````ASPNET
	    <telerik:radcombobox 
	        id="RadComboBox1" 
	        allowcustomtext="true" 
	        runat="server">    
	        <Items>        
	            <telerik:RadComboBoxItem runat="server" Text="-- Select item --" />        
	            <telerik:RadComboBoxItem runat="server" Text="Item with No Value" />        
	            <telerik:RadComboBoxItem runat="server" Text="Item with Value=1" Value="1" />        
	            <telerik:RadComboBoxItem runat="server" Text="Item with Value=2" Value="2" />        
	            <telerik:RadComboBoxItem runat="server" Text="Item with Value=3" Value="3" />        
	            <telerik:RadComboBoxItem runat="server" Text="Item with Value=4" Value="4" />        
	            <telerik:RadComboBoxItem runat="server" Text="Item with Value=string" Value="string" />    
	        </Items>
	    </telerik:radcombobox>
````



We will validate the combobox client-side and server-side by using CustomValidator control:

````ASPNET
	    <asp:CustomValidator 
	        ID="CustomValidator1" 
	        runat="server" 
	        ClientValidationFunction="validateCombo"
	        ErrorMessage="You must select an item with even value" 
	        OnServerValidate="CustomValidator1_ServerValidate">
	    </asp:CustomValidator>
````



Here is the javascript validation function:

````JavaScript
	
	
	        function validateCombo(source, args) 
	        {
	            args.IsValid = false;
	            var combo = $find("<%= RadComboBox1.ClientID %>");
	            var text = combo.get_text();
	            if (text.length < 1) 
	            {
	                args.IsValid = false;
	            }
	            else 
	            {
	                var node = combo.findItemByText(text);
	                if (node) 
	                {
	                    var value = node.get_value();
	                    if (value.length > 0 && value % 2 == 0) 
	                    {
	                        args.IsValid = true;
	                    }
	                }
	                else 
	                {
	                    args.IsValid = false;
	                }
	            } 
	          }
	
````



Here is the server-side validation:

````C#
	    protected void CustomValidator1_ServerValidate(object source, ServerValidateEventArgs args)
	    {
	       string selectedValue = RadComboBox1.SelectedValue;
	       if (selectedValue != null && selectedValue.Length > 0)
	       {
	           try
	           {
	               int value = Convert.ToInt32(selectedValue);
	               if (value % 2 == 0)
	                   args.IsValid = true;
	               else
	                   args.IsValid = false;
	           }
	           catch (Exception ex)
	           {
	               args.IsValid = false;
	           }            
	       }
	       else
	           args.IsValid = false;
	    } 
````


