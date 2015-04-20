---
title: Finding Embedded RadComboBox on the Client
page_title: Finding Embedded RadComboBox on the Client | UI for ASP.NET AJAX Documentation
description: Finding Embedded RadComboBox on the Client
slug: combobox/how-to/finding-embedded-radcombobox-on-the-client
tags: finding,embedded,radcombobox,on,the,client
published: True
position: 1
---

# Finding Embedded RadComboBox on the Client



## 

Consider the following scenario:

Telerik RadComboBox is embedded in Telerik RadMenu and you need to find the client-side instance of the combobox control:

````ASPNET
<telerik:radmenu id="RadMenu1" runat="server">    
<CollapseAnimation Duration="200" Type="OutQuint" />    
<Items>        
	<telerik:RadMenuItem runat="server" Text="Root RadMenuItem1">            
	<Items>                
		<telerik:RadMenuItem runat="server" Text="Child RadMenuItem 1">                    
			<ItemTemplate>                        
				<telerik:RadComboBox ID="RadComboBox1" runat="server">                            
				<Items>                                
					<telerik:RadComboBoxItem runat="server" Text="RadComboBoxItem1" />                                
					<telerik:RadComboBoxItem runat="server" Text="RadComboBoxItem2" />                            
				</Items>                        
				</telerik:RadComboBox>                    
			</ItemTemplate>                
	</telerik:RadMenuItem>            
	</Items>        
	</telerik:RadMenuItem>    
</Items>
</telerik:radmenu>
````



To find the client-side instance of the combobox control you can use one of the following approaches:

````JavaScript
		
var combo = $find('<%= RadMenu1.Items[0].Items[0].FindControl("RadComboBox1").ClientID %>');
	
````



or

````JavaScript
		
var menu = $find("<%= RadMenu1.ClientID %>"); 
var combo = menu.get_items().getItem(0).findControl("RadComboBox1");
	
````



or

````JavaScript
	
var combo = Telerik.Web.UI.RadComboBox.ComboBoxes[0];
	
````



# See Also

 * [Accessing Controls Inside Templates]({%slug combobox/templates/accessing-controls-inside-templates%})
