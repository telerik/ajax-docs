---
title: Multi-Line Text Boxes
page_title: Multi-Line Text Boxes | RadTextBox for ASP.NET AJAX Documentation
description: Multi-Line Text Boxes
slug: radtextbox/appearance-and-styling/multi-line-text-boxes
tags: multi-line,text,boxes
published: True
position: 10
---

# Multi-Line Text Boxes



## 

You can create multi-line **RadTextBox** controls by setting the **TextMode** property to "MultiLine". When the **TextMode** property is "MultiLine", the text box displays its value using multiple lines.

````ASPNET
<telerik:RadTextBox id="RadTextBox" runat="server" 
  TextMode="MultiLine"
  Rows="2" 
  Wrap="true" 
  Text="Very Long Content on multiple lines. Another line of text.">
</telerik:RadTextBox>
`````

The **Columns** property determines the width of each line in characters, and the **Rows** property determines the number of lines the text box displays. The **Wrap** property determines how the value in the text box is displayed within the area defined by the **Columns** and **Rows** properties:

* If the **Wrap** property is **True**, the value in the text box extends to the limit set by the **Columns** property, and then wraps to additional rows as necessary:

![MultiLine text box](images/MultiLineTextBox.png)

If the value in the text box extends beyond the number of rows specified by the **Rows** property, the text box gets a vertical scroll bar:

![Wrapping MultiLine text box](images/WrappingMultiLineTextBox.png)


* If the **Wrap** property is **False**, the value in the text box does not wrap. Additional lines are used only if the text value includes a new-line character. A horizontal scroll bar appears if the value of any line exceeds the limit set by the **Columns** property:
![Non wrapping text box](images/NonWrappingTextBox.png)



# See Also

 * [RadTextBox Overview]({%slug radtextbox/overview%})
