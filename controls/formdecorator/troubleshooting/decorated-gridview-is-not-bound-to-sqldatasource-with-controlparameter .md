---
title: Decorated GridView Is Not Bound to SqlDataSource with ControlParameter 
page_title: Decorated GridView Is Not Bound to SqlDataSource with ControlParameter  | RadFormDecorator for ASP.NET AJAX Documentation
description: Decorated GridView Is Not Bound to SqlDataSource with ControlParameter 
slug: formdecorator/troubleshooting/decorated-gridview-is-not-bound-to-sqldatasource-with-controlparameter
tags: decorated,gridview,is,not,bound,to,sqldatasource,with,controlparameter 
published: True
position: 2
---

# Decorated GridView Is Not Bound to SqlDataSource with ControlParameter 

This help article offers a solution to an issue where a decorated input's click event is not triggered when the input is followed by an HTML label element.

**Problem:**

The client-side click event of decorated HTML input element of type "radio" or "checkbox" is not fired when the following conditions are met at the same time.

* The input is followed by a label element and there is not a whitespace between them.

* The "for" attribute of the label element and the "id" attribute of the input element are not declared.

**Cause:**

When a **RadFormDecorator** decorates "radio button" and "checkbox" HTML elements, it positions them outside of the visible viewport and then puts a label with a background image that represents the decorated input in their place.

Before inserting a new label, however, the **RadFormDecorator** tries to set the corresponding background image to the HTML label element that follows the input element. This operation is performed because the control assumes a relation between the input and the following label. In scenarios where this association is missing (i.e., the "for" attribute of the label HTML element is not specified), however, the click event of the input will not be raised. The main purpose of the label HTML element is to create an association with an input element, so it is advisable to use the "for" attribute.

This limitation is a consequence of the control's implementation and if the input-label relation cannot be created, one of the workarounds below must be used.

**Solution:**

There are a few options you can choose from, in order to handle the scenario described above.

* Declare the "for" and "id" attributes for the label and the input respectively. For example:

	>caption **Example 1**: Associating a label to an input element by matching the input's "id" to the label's "for" attribute.

	**ASP.NET**

		<telerik:RadFormDecorator RenderMode="Lightweight" ID="RadFormDecorator1" runat="server" DecoratedControls="All" />
		<input type="checkbox" id="checkbox1" name="name1" value="value1" onclick="alert(1);" /><label for="checkbox1">label 1</label>
		<input type="radio" id="radio1" name="name2" value="value2" onclick="alert(2);" /><label for="radio1">label 2</label>

* Insert a space between the input and the label - either in the markup (see an **Example 2**), or with JavaScript prior to the **RadFormDecorator**'s decoration (see an **Example 3**).

	>caption **Example 2**: Inserting a whitespace between an input and a label element in the markup.

	**ASP.NET**

		<telerik:RadFormDecorator RenderMode="Lightweight" ID="RadFormDecorator1" runat="server" DecoratedControls="All" />
		<input type="checkbox" name="name1" value="value1" onclick="alert(1);" /> <label>label 1</label>
		<input type="radio" name="name2" value="value2" onclick="alert(2);" /> <label>label 2</label>

	>caption **Example 3**: Inserting a whitespace between an input and a label element with JavaScript prior to decoration.

	**JavaScript**

		<%--The external jQuery reference is needed because RadFormDecorator doesn't reference internally jQuery--%>
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script type="text/javascript">
			$(function () {
				$("label").each(function () {
					this.parentNode.insertBefore(document.createTextNode(" "), this);
				});
			});
		</script>

	**ASP.NET**

		<telerik:RadFormDecorator RenderMode="Lightweight" ID="RadFormDecorator1" runat="server" DecoratedControls="All" />
		<input type="checkbox" name="name1" value="value1" onclick="alert(1);" /><label>label 1</label>
		<input type="radio" name="name2" value="value2" onclick="alert(2);" /><label>label 2</label>

# See Also

 * [RadFormDecorator Input Appearance Is Not Updated When Disabled In Internet Explorer]({%slug formdecorator/troubleshooting/input-appearance-is-not-updated-when-disabled-in-internet-explorer%})

 * [RadFormDecorator Integration With RadControls]({%slug formdecorator/integration-with-radcontrols%})

 * [RadFormDecorator Integration With Standard Controls]({%slug formdecorator/integration-with-standard-controls%})

 * [RadFormDecorator Overview]({%slug formdecorator/overview%})
