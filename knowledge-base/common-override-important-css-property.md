---
title: Overriding !important rule in a CSS property style
description: There are a couple of simple JS techniques to override an important rule with JavaScript via setAttribute, cssText and setProperty methods. See them in action with examples in this knowledge base article.
type: troubleshooting
page_title: How to override an !important style using JavaScript?
slug: common-override-important-css-property
position: 
tags: 
ticketid: 1585411
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
How to override an `!important` rule using JavaScript? 

For example, if you have a CSS class like the following one

````CSS
.RadCalendarPopup{
       z-index: 300000 !important;
}
````

and you want to override the `!important` property, there are a couple of simple JS techniques to specify the important property via the setAttribute, cssText and setProperty JavaScript methods. See them in action with examples in the Solution section below.

## Solution
Solution 1 - Using the setAttribute approach:

````ASPX
<style>
    .RadCalendarPopup  {
        z-index: 300000 !important;
    }
</style>
<script>
    function popupOpening(sender, args) {
        var popup = args.get_popupControl();
        setTimeout(function () {
            popup.get_element().parentElement.setAttribute('style', 'z-index: 103000 !important');
        });
    }
</script>
<telerik:RadDatePicker RenderMode="Lightweight" ID="RadDatePicker2" runat="server">
    <ClientEvents OnPopupOpening="popupOpening" />
</telerik:RadDatePicker>
````

Solution 2 - Via the style.cssText property:

````ASPX
        <script>
            function popupOpening(sender, args) {
                var popup = args.get_popupControl();
                setTimeout(function () {
                    popup.get_element().parentElement.style.cssText = 'z-index: 103000 !important';
                });
            }
        </script>
        <telerik:RadDatePicker RenderMode="Lightweight" ID="RadDatePicker2" runat="server">
            <ClientEvents OnPopupOpening="popupOpening" />
        </telerik:RadDatePicker>
````

Solution 3 - Through the element.style.setProperty(propertyName, value, priority) method:

````ASPX
<script>
    function popupOpening(sender, args) {
        var popup = args.get_popupControl();
        setTimeout(function () {
            popup.get_element().parentElement.style.setProperty('z-index', '103000', 'important');
        });
    }
</script>
<telerik:RadDatePicker RenderMode="Lightweight" ID="RadDatePicker1" runat="server">
        <ClientEvents OnPopupOpening="popupOpening" />
</telerik:RadDatePicker>
````

## See Also
* [Overriding !important style](https://stackoverflow.com/questions/462537/overriding-important-style)
   
