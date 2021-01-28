---
title: Keyboard Support
page_title: Keyboard Support - RadCalendar
description: Check our Web Forms article about Keyboard Support.
slug: calendar/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 5
---

# Keyboard Support


The **RadCalendar** control provides keyboard navigation using the tab and arrow keys:


You can use the `TAB` key to focus the control. Once focus is on the **RadCalendar** control, you can use the following commands:

* the `TAB` key and `SHIFT+TAB` key combination move through the parts of the control. 
	
* The first time the user presses the `TAB` key, focus moves to the first navigation control in the title bar. 
	
* Pressing `TAB` repeatedly moves through the navigation controls in the title bar and then through each day shown in the main calendar area. 
	
* Pressing `SHIFT+TAB` moves backward through the same elements. 
	
* Pressing the `ENTER` key when focus is on a navigation control causes the view to change.
	
* Pressing the `ENTER` key when focus is on a day in the main calendar area selects the day.

* Pressing the `arrow` keys when focus is on the calendar moves the focused date in the respective direction.

A built-in access key is `Y` so you can use `Alt+Y` to focus the control by default. If you need more granular access key settings, you can use JavaScript to set them:

>caption How to set a custom access key to a RadCalendar.

````ASPX
<telerik:RadCalendar ID="RadCalendar1" RenderMode="Lightweight" runat="server"
    EnableKeyboardNavigation="true" EnableAriaSupport="true" EnableMultiSelect="false">
    <ClientEvents OnLoad="OnLoad" />
</telerik:RadCalendar>
<script>
    function OnLoad(sender, args) {
        $telerik.$(sender.get_element()).find(".rcMainTable").first().attr("accessKey", "Q");
    }
</script>
````

>caption How to change the markup and script to use a key set in the control markup.

````ASPX
<telerik:RadCalendar ID="RadCalendar1" RenderMode="Lightweight" runat="server"
    EnableKeyboardNavigation="true" EnableAriaSupport="true" EnableMultiSelect="false">
    <ClientEvents OnLoad="function(s,a){OnLoad(s,a,'K')}" />
</telerik:RadCalendar>
<script>
    function OnLoad(sender, args, theKey) {
        $telerik.$(sender.get_element()).find(".rcMainTable").first().attr("accessKey", theKey);
    }
</script>
````


# See Also

 * [Removing RadCalendar from the Tab Sequence]({%slug calendar/how-to/removing-radcalendar-from-the-tab-sequence%})
