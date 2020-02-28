---
title: Integration With Standard Controls
page_title: Integration With Standard Controls | RadFormDecorator for ASP.NET AJAX Documentation
description: Integration With Standard Controls
slug: formdecorator/integration-with-standard-controls
tags: integration,with,standard,controls
published: True
position: 3
---

# Integration With Standard Controls

## Simple HTML Elements

|  **Control**  |  **Effect**  |
| ------ | ------ |
| **Button type="Button/Reset/Submit"** |Background-image, font-size and color for default state as well as :focus, :hover and :active|
| **Input type="Button/Reset/Submit"** |Background-image, font-size and color for default state as well as :focus, :hover and :active|
| **Input type="Checkbox"** |Background-image for default state and :hover|
| **Input type="Radio"** |Background-image for default state and :hover|
| **Input type="Text/Password"** |Background-color, font-family, font-size, color, border and rounded corners for default state. Border for :hover state|
| **Input type="File/Hidden/Image"** |unaffected|
| **TextArea** |Font-family, font-size, color, border and rounded corners for default state. Border for :hover state|
| **Fieldset** |Background-image, border and rounded corners|
| **Legend** |Font-family, font-size and color|
| **Label** |Font-family, font-size and color|
| **H4, H5, H6** |Font-family, font-weight, font-size and color. H4 and H5 are underlined|
| **Select** |Background-image, background-color, font-family, font-size and color for default, :hovered and :active state.|
| **ScrollBar** |Decorated - For more information see [this KB article](https://www.telerik.com/support/kb/aspnet-ajax/formdecorator/styling-scrollbars.aspx)|

## Standard ASP Controls


>caption Standard Toolbox Controls

|  **Control**  |  **Effect**  |
| ------ | ------ |
| **AdRotator, BulletedList, LinkButton, ImageButton,**  **ImageMap, Calendar, FileUpload, HiddenField, Image,**  **HyperLink, Label, Literal, Localize, Substitution, XML** |unaffected|
| **Button, CheckBox, CheckBoxList, TextBox** | Rendered and decorated as standard input elements; TextBox TextMode="MultiLine" is rendered and decorated as standard TextArea element|
| **DropDownList, ListBox** |Rendered and decorated as standard select elements|
| **MultiView, Panel, PlaceHolder, Table, Wizard** |Controls inside are decorated|


>caption Login Toolbox Controls

|  **Control**  |  **Effect**  |
| ------ | ------ |
| **ChangePassword** | Title of the control and Input labels are decorated; Inputs and Buttons are decorated; Rounded corners for the table|
| **CreateUserWizard** | Title of the control and Input labels are decorated; Inputs and Button are decorated; Rounded corners for the table|
| **Login** | Title of the control and Input labels are decorated; Inputs, Button and Checkbox are decorated; Rounded corners for the table|
| **LoginName** |Color, border and rounded corners|
| **LoginStatus** |Link is decorated|
| **LoginView** |Controls inside AnonymousTemplate, LoggedInTemplate and ContentTemplate of the RoleGroups are decorated|
| **PasswordRecovery** | Label of the Input is decorated; Input and Button are decorated|

>caption Data Toolbox Controls

|  **Control**  |  **Effect**  |
| ------ | ------ |
| **ListView** |Controls inside ItemTemplate are decorated|
| **GridView** | Header - Background color, border color, font-family, font-fize, and font color; Body - Background color, font-family and font-size. Borders are removed; ButtonField - ButtonType=Button/Link are decorated; HyperLinkField - Font-family, font-size and font-color are applied to the text; CommandField - Insert/Edit/Cancel/Delete Buttons are decorated. Editing Input is decorated; CheckBoxField - Checkboxes are decorated; Controls inside the TemplateField are decorated|
| **DetailsView** | Body - Background color, font-family and font-size. Borders are removed; ButtonField - ButtonType=Button/Link are decorated; HyperLinkField - Font-Family, font-size and font-color are applied to the text; CommandField - Insert/Edit/Cancel/Delete Buttons are decorated. Editing Input is decorated; CheckBoxField - Checkboxes are decorated; Controls inside the TemplateField are decorated|
| **FormView** | Background color, font-family, font-size and font-color; Controls inside ItemTemplate are decorated|
| **Repeater** |Controls inside Repeater are decorated|
| **DataList** |Controls inside DataList are decorated|

