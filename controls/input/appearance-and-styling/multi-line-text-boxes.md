---
title: Multi-Line Text Boxes
page_title: Multi-Line Text Boxes | UI for ASP.NET AJAX Documentation
description: Multi-Line Text Boxes
slug: input/appearance-and-styling/multi-line-text-boxes
tags: multi-line,text,boxes
published: True
position: 10
---

# Multi-Line Text Boxes



## 

You can create multi-line __RadTextBox__ and __RadMaskedTextBox__ controls by setting the __TextMode__ property to "MultiLine". When the __TextMode__ property is "MultiLine", the text box displays its value using multiple lines.

The __Columns__ property determines the width of each line in characters, and the __Rows__ property determines the number of lines the text box displays. The __Wrap__ property determines how the value in the text box is displayed within the area defined by the __Columns__ and __Rows__ properties:

* If the __Wrap__ property is __True__, the value in the text box extends to the limit set by the __Columns__ property, and then wraps to additional rows as necessary:![MultiLine text box](images/MultiLineTextBox.png)If the value in the text box extends beyond the number of rows specified by the __Rows__ property, the text box gets a vertical scroll bar:![Wrapping MultiLine text box](images/WrappingMultiLineTextBox.png)

* If the __Wrap__ property is __False__, the value in the text box does not wrap. Additional lines are used only if the text value includes a new-line character. A horizontal scroll bar appears if the value of any line exceeds the limit set by the __Columns__ property:![Non wrapping text box](images/NonWrappingTextBox.png)

When working with a multi-line __RadMaskedTextBox__ control, you can enter the carriage-return line feed characters as literal parts of the mask to format the layout of the value:![Multi-line RadMaskedTextBox](images/MultiLineMaskedTextBox.png)

````ASPNET
	    <telerik:RadMaskedTextBox ID="RadMaskedTextBox1" runat="server" Skin="Office2007"
	        Label="Contact:" TextMode="MultiLine" Mask="Phone: (###) ### - ####\r\nF\ax: (###) ### - ####"
	        Rows="2" Columns="25">
	    </telerik:RadMaskedTextBox>
````



# See Also

 * [Overview]({%slug input/radtextbox/overview%})

 * [Overview]({%slug input/radmaskedtextbox/overview%})
