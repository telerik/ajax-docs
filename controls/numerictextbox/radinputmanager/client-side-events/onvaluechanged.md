---
title: OnValueChanged
page_title: OnValueChanged | RadInput for ASP.NET AJAX Documentation
description: OnValueChanged
slug: input/radinputmanager/client-side-events/onvaluechanged
tags: onvaluechanged
published: True
position: 4
---

# OnValueChanged



OnValueChanged event could be raised in two cases. Once when the browser fires the OnChange event of the input element and second time when the RadInputManager modifies the value in accordance with the behavior settings.

## OnValueChanged event

The OnValueChanged event could be raised twice for the control extended by **RadInputManager** when its value is chagned.

That is to say, if you have the OnValueChanged hooked for a TextBoxSettings which targets a "normal" TextBox control, the event will be raised once for the OnChange browser event of the HTML Input element. And second time the event could be fired if the value does not fit the requirements of the settings defined in the configuration of the RadInputManager. So, if the value needs to be formatted in accordance with the rules of the input manager the OnValueChanged will be raised second time.

There is a difference between the arguments of the event based for which time the event is fired:


| First time: |  | Second time: |  |
| ------ | ------ | ------ | ------ |
| **Property** :| **Value** :| **Property** :| **Value** :|
|get_domEvent|The DOM event that was raised when the value has been changed.|get_domEvent|Null|
|get_oldValue|Null|get_oldValue|The old value that was parsed by the RadInputManager. Empty string if the string could not be parsed or the event was not fired.|
|get_newValue|Null|get_newValue|The new value that was parsed by the RadInputManager. Empty string if the string could not be parsed or the event was not fired.|
|get_inputExtender|The extender control that will extend the regular control.|get_inputExtender|The extender control that will extend the regular control.|

In case the value needs to be formatted the OnValueChanged event will be raised twice. The first time the get_domEvent property will return the DOM event	that was raised by the browser. However, the get_oldValue() and get_newValue() properties will return empty strings, since the value was not parsed	by the RadInputManager yet.

The second time the event fires, the get_oldValue() and get_newValue() properties will be parsed and the old value will remain empty string, but theformatted value will be set as the new value. In this case, however, there won't be a DOM event returned by the get_domEvent() property, because this is the second	event that is raised and it is out of the scope of the DOM event.

In both cases the get_inputExtender() property could be used to get the unformatted value.

An easy way to distinguish who raised the event the browser OnChange event or the parse method of the RadInputManager is to check either the get_domEvent() property	whether it returns null, as we discussed above, the get_domEvent() property return null, only if the event is fired for a second tiem. The other approach is	to compare the get_oldValue() and the get_newValue() property values, if there is a difference this is the second time the event is raised, otherwise this	is the first time the event is fired.



````ASPNET
<asp:TextBox runat="server" ID="DateInput1"></asp:TextBox>
<telerik:radinputmanager id="RadInputManager1" runat="server">
	<telerik:DateInputSetting BehaviorID="Setting1" >
		<ClientEvents OnValueChanged="ValueChanged" />
		<TargetControls>                   
			<telerik:TargetInput ControlID="DateInput1" />
		</TargetControls>                
	</telerik:DateInputSetting>
</telerik:radinputmanager>
````
````JavaScript
function ValueChanged(sender, args) {
	if (args.get_domEvent() != null) {
		var value = "Event fired for first time, value is:" + args.get_inputExtender().get_value();
		alert(value);
	}
	else {
		var value = "Event fired for second time, value is:" + args.get_newValue();
		alert(value);
	}
}
````

