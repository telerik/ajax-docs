---
title: Flexible Validation
page_title: Flexible Validation | UI for ASP.NET AJAX Documentation
description: Flexible Validation
slug: listview/data-editing/flexible-validation
tags: flexible,validation
published: True
position: 3
---

# Flexible Validation



## 

The validation for the RadListView control follows the general logic for validating the input of any other server control. The main logic is to relate the validators to the field(s) of the edit or insert fields. In terms of settings, there are three properties, which are part of the ValidationSettings tag of the control. These are:

* __EnableValidation__ – a Boolean field, which is enabled by default and specifies whether the validation will be enabled for the control.

* __CommandsToValidate__- the names of the commands to validate. CommandsToValidate is an array which triggers validation for Insert and Update commands by default. If you set for example "Edit" as the only command name which should be validated, default commands (Insert and Update ) will be override.

* __ValidationGroup__ – the name of the validation group to which the ListView control belongs.

The example bellow shows a typical set of validation settings, where the "CommandName" is the command which triggers validation:

````ASPNET
	<validationsettings commandstovalidate="CommandName" validationgroup="Group1" />
````



Additionally, these settings can be modified dynamically, as shown in the following code snippets:

>tabbedCode

````C#
	    protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
	    {
	        switch (DropDownList1.SelectedValue)
	        {
	            case "NoGroup":
	                RadListView1.ValidationSettings.ValidationGroup = String.Empty;
	                RadListView1.Rebind();
	                break;
	            case "FormGroup":
	                RadListView1.ValidationSettings.ValidationGroup = "FormValidationGroup";
	                RadListView1.Rebind();
	                break;
	            case "SearchGroup":
	                RadListView1.ValidationSettings.ValidationGroup = "SearchValidationGroup";
	                RadListView1.Rebind();
	                break;
	        }
	    }
	    protected void CheckBox2_CheckedChanged(object sender, EventArgs e)
	    {
	        RadListView1.ValidationSettings.EnableValidation = (sender as CheckBox).Checked;
	        RadListView1.Rebind();
	    }
````
````VB.NET
	    Protected Sub DropDownList1_SelectedIndexChanged(ByVal sender As Object, ByVal e As EventArgs)
	        Select Case DropDownList1.SelectedValue
	            Case "NoGroup"
	                RadListView1.ValidationSettings.ValidationGroup = [String].Empty
	                RadListView1.Rebind()
	                Exit Select
	            Case "FormGroup"
	                RadListView1.ValidationSettings.ValidationGroup = "FormValidationGroup"
	                RadListView1.Rebind()
	                Exit Select
	            Case "SearchGroup"
	                RadListView1.ValidationSettings.ValidationGroup = "SearchValidationGroup"
	                RadListView1.Rebind()
	                Exit Select
	        End Select
	    End Sub
	    Protected Sub CheckBox2_CheckedChanged(ByVal sender As Object, ByVal e As EventArgs)
	        RadListView1.ValidationSettings.EnableValidation = (TryCast(sender, CheckBox)).Checked
	        RadListView1.Rebind()
	    End Sub
````
>end

The next important piece of the validation logic is the structuring of the edit/insert templates, the relation among the validators, and the validated controls. There are two possible ways to handle this – declaratively, in the aspx, or programmatically.

The declarative declaration is pretty straightforward, and consists mainly of declaring the validators, and setting the ControlToValidate to the ID of the textboxes to the validated.

A typical declaration of an EditFormTemplate, which consists of a number of textboxes, a number of required field validators, and a custom validator may look like this:

````ASPNET
	<edititemtemplate>
	    <fieldset style="float: left; width: 226px; height:140px;">
	        <table cellpadding="0" cellspacing="2" style="height:100%">
	            <tr>
	                <td style="width: 20%;">
	                    Name:
	                </td>
	                <td style="width: 80%; padding-left: 5px;">
	                    <asp:TextBox ID="TextBox1" runat="server" Text='<%# Bind("ProductName") %>' Width="100px"></asp:TextBox>
	                    <asp:RequiredFieldValidator runat="server" ID="RequiredFiuld1" ControlToValidate="TextBox1"
	                        ErrorMessage="*">
	                    </asp:RequiredFieldValidator>
	                </td>
	            </tr>
	            <tr>
	                <td>
	                    Quantity:
	                </td>
	                <td style="width: 80%; padding-left: 5px;">
	                    <asp:TextBox ID="TextBox2" runat="server" Text='<%# Bind("QuantityPerUnit") %>' Width="100px"></asp:TextBox>
	                        <asp:RequiredFieldValidator runat="server" ID="RequiredFieldValidator2" ControlToValidate="TextBox2"
	                        ErrorMessage="*"></asp:RequiredFieldValidator>
	                </td>
	            </tr>
	            <tr>
	                <td>
	                    Price:
	                </td>
	                <td style="width: 80%; padding-left: 5px;">
	                    <asp:TextBox ID="TextBox3" runat="server" Text='<%# Bind("UnitPrice") %>' Width="65px"></asp:TextBox>
	                        <asp:RequiredFieldValidator runat="server" ID="RequiredFieldValidator3" ControlToValidate="TextBox3"
	                        ErrorMessage="*"></asp:RequiredFieldValidator>
	                </td>
	            </tr>
	            <tr>
	                <td>
	                    Units:
	                </td>
	                <td style="width: 80%; padding-left: 5px;">
	                    <asp:TextBox ID="TextBox4" runat="server" Text='<%# Bind("UnitsInStock") %>' Width="65px"></asp:TextBox>
	                    <asp:CustomValidator runat="server" ID="CustomValidator1" ControlToValidate="TextBox4" 
	                    OnServerValidate="CustomValidator1_ServerValidate" ErrorMessage="Invalid">
	                    </asp:CustomValidator>
	                </td>
	            </tr>
	            <tr>
	                <td>
	                    Discontinued:
	                </td>
	                <td style="width: 80%; padding-left: 5px;">
	                    <asp:CheckBox ID="CheckBox1" runat="server" Checked='<%# Bind("Discontinued") %>' />                                
	                </td>
	            </tr>
	            <tr>
	                <td colspan="2">
	                    <asp:ImageButton ID="Button1" runat="server" CommandName="Update" 
	                    ImageUrl="~/ListView/Examples/DefiningStructure/DeclarativeDefinition/Img/Update.gif"
	                        />
	                    <asp:ImageButton ID="Button2" runat="server" CommandName="Cancel" 
	                    ImageUrl="~/ListView/Examples/DefiningStructure/DeclarativeDefinition/Img/Cancel.gif"
	                        />
	                </td>
	            </tr>                        
	        </table>
	    </fieldset>
	</edititemtemplate>
````



The above settings can also be handled programmatically. For example, let us assume that the above form does not contain any validation controls, and we wanted to add these dynamically. To add two required field validators, and a custom validator to the edit form, we can use code similar to the one below:

>tabbedCode

````C#
	    protected void RadListView1_ItemDataBound(object sender, RadListViewItemEventArgs e)
	    {
	        if (e.Item is RadListViewEditableItem && e.Item.IsInEditMode)
	        {
	            RadListViewEditableItem editedItem = (RadListViewEditableItem)e.Item;
	            RequiredFieldValidator RequiredValidator1 = new RequiredFieldValidator();
	            RequiredFieldValidator RequiredValidator2 = new RequiredFieldValidator();
	            CustomValidator customValidator1 = new CustomValidator();
	            RequiredValidator1.ID = "RequiredValidator1";
	            RequiredValidator1.ErrorMessage = "This field is required!";
	            RequiredValidator1.ControlToValidate = "TextBox1";
	            RequiredValidator2.ID = "RequiredValidator2";
	            RequiredValidator2.ErrorMessage = "This field is required!";
	            RequiredValidator2.ControlToValidate = "TextBox2";
	            customValidator1.ID = "customValidator1";
	            customValidator1.ControlToValidate = "TextBox4";
	            customValidator1.ErrorMessage = "Invalid Input!";
	            customValidator1.ServerValidate += new ServerValidateEventHandler(CustomValidator1_ServerValidate);
	            editedItem.Controls.Add(RequiredValidator1);
	            editedItem.Controls.Add(RequiredValidator2);
	            editedItem.Controls.Add(customValidator1);
	        }
	    }
````
````VB.NET
	    Protected Sub RadListView1_ItemDataBound(ByVal sender As Object, ByVal e As RadListViewItemEventArgs)
	        If TypeOf e.Item Is RadListViewEditableItem AndAlso e.Item.IsInEditMode Then
	            Dim editedItem As RadListViewEditableItem = DirectCast(e.Item, RadListViewEditableItem)
	
	            Dim RequiredValidator1 As New RequiredFieldValidator()
	            Dim RequiredValidator2 As New RequiredFieldValidator()
	            Dim customValidator1 As New CustomValidator()
	
	            RequiredValidator1.ID = "RequiredValidator1"
	            RequiredValidator1.ErrorMessage = "This field is required!"
	            RequiredValidator1.ControlToValidate = "TextBox1"
	
	            RequiredValidator2.ID = "RequiredValidator2"
	            RequiredValidator2.ErrorMessage = "This field is required!"
	            RequiredValidator2.ControlToValidate = "TextBox2"
	
	            customValidator1.ID = "customValidator1"
	            customValidator1.ControlToValidate = "TextBox4"
	            customValidator1.ErrorMessage = "Invalid Input!"
	            AddHandler customValidator1.ServerValidate AddressOf(CustomValidator1_ServerValidate)
	
	            editedItem.Controls.Add(RequiredValidator1)
	            editedItem.Controls.Add(RequiredValidator2)
	            editedItem.Controls.Add(customValidator1)
	        End If
	    End Sub
````
>end

As demonstrated above, we can programmatically add validation controls to the edit form, or insert form of the RadListView control, set their validated controls, or add event handlers (such as onServerValidate), to further customize the validation logic. This allows for significant flexibility.
