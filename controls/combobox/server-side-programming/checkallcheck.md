---
title: CheckAllCheck
page_title: CheckAllCheck | UI for ASP.NET AJAX Documentation
description: CheckAllCheck
slug: combobox/server-side-programming/checkallcheck
tags: checkallcheck
published: True
position: 7
---

# CheckAllCheck



## 

The CheckAllCheck event occurs when the check all items check box of the __RadComboBox__ is changed.

>caution The __CheckAllCheck__ event does not fire unless the __AutoPostBack__ property is __True__ .
>


The __CheckAllCheck__ receives one argument which indicates whether the check all check box is checked or unchecked.

````ASPNET
	            <telerik:RadComboBox ID="RadComboBox1" runat="server" OnCheckAllCheck="RadComboBox1_CheckAllCheck"
	                EnableCheckAllItemsCheckBox="true" AutoPostBack="true" CheckBoxes="true">
	                <Items>
	                    <telerik:RadComboBoxItem Text="Item1" />
	                    <telerik:RadComboBoxItem Text="Item2" />
	                    <telerik:RadComboBoxItem Text="Item3" />
	                </Items>
	            </telerik:RadComboBox>
	            <asp:Label ID="Label1" runat="server" />
````



>tabbedCode

````C#
	    protected void RadComboBox1_CheckAllCheck(object sender, RadComboBoxCheckAllCheckEventArgs e)
	    {
	        bool allChecked = e.CheckAllChecked;
	        if (allChecked)
	        {
	            Label1.Text = "All items are checked.";
	        }
	        else
	        {
	            Label1.Text = "All items are unchecked";
	        }
	    }
````



````VB.NET
	    Protected Sub RadComboBox1_CheckAllCheck(sender As Object, e As RadComboBoxCheckAllCheckEventArgs)
	        Dim allChecked As Boolean = e.CheckAllChecked
	        If allChecked Then
	            Label1.Text = "All items are checked."
	        Else
	            Label1.Text = "All items are unchecked"
	        End If
	    End Sub
````


>end
