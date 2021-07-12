---
title: Exception that the control needs to be placed into a server form control
description: Exception that the control needs to be placed into a server form control - Telerik Web UI. Check it now!
type: how-to
page_title: Exception that the control needs to be placed into a server form control
slug: common-exception-that-the-control-needs-to-be-placed-into-a-server-form-control
res_type: kb
---

## Problem

Control 'ctl00_RadTextBox1' of type 'RadTextBox' must be placed inside a form tag with runat=server

## Solution

An HtmlForm control is required to process postback requests. A Web Forms page might only have one server side tag. Typically when you create a new Web Form in Visual Studio for example the new web form is created with a server form in it and thus you don't have to add it manually.  
   
The standard .NET Web Controls (Button, TextBox, DropDownList, etc) will throw an HttpException when not placed in a form tag with runat=server. The same is valid for all of the RadControls (RadEditor, RadMenu, etc) as all of our controls make postback requests. For example, when the Submit/Update button of RadEditor is clicked or when a RadMenu item that makes a postback is clicked you will receive an HttpException. When you get this message the best solution is to check whether your Web Form (.aspx file) contains ***<u>WHAT ?!?!?</u>***  
and whether the respective control is not added as a child control outside the HtmlForm control.  
   
If you're using User Controls (.ascx files) then you should not place a &lt;Form&gt; tag for each individual User Control provided you have one in the parent ASPX page and it encapsulates all the user controls that contain other server controls.  

For more information check this StackOverflow post - [Control 'ctl00_TextBox1' of type 'TextBox' must be placed inside a form tag with runat=server](https://stackoverflow.com/questions/2490340/control-ctl00-textbox1-of-type-textbox-must-be-placed-inside-a-form-tag-with).



  