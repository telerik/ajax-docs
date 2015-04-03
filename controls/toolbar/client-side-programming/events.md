---
title: Events
page_title: Events | UI for ASP.NET AJAX Documentation
description: Events
slug: toolbar/client-side-programming/events
tags: events
published: True
position: 8
---

# Events



## 

__RadToolBar__ supports a number of client-side events that let you customize the behavior of the toolbar:

* [OnClientLoad]({%slug toolbar/client-side-programming/onclientload%}) occurs when the toolbar is first loaded

* [OnClientButtonClicked]({%slug toolbar/client-side-programming/onclientbuttonclicked%}) occurs immediately after the toolbar responds to a button click.

* [OnClientButtonClicking]({%slug toolbar/client-side-programming/onclientbuttonclicking%}) occurs when the user clicks on a button before the toolbar responds to the click.

* [OnClientDropDownClosed]({%slug toolbar/client-side-programming/onclientdropdownclosed%}) occurs after the drop-down list has been closed

* [OnClientDropDownClosing]({%slug toolbar/client-side-programming/onclientdropdownclosing%}) occurs before the drop-down list closes

* [OnClientDropDownOpened]({%slug toolbar/client-side-programming/onclientdropdownopened%}) occurs after the drop-down list has been opened

* [OnClientDropDownOpening]({%slug toolbar/client-side-programming/onclientdropdownopening%}) occurs before the drop-down list opens

* [OnClientCheckedStateChanged]({%slug toolbar/client-side-programming/onclientcheckedstatechanged%}) occurs immediately after a button has been checked

* [OnClientCheckedStateChanging]({%slug toolbar/client-side-programming/onclientcheckedstatechanging%}) occurs before a button has been checked.

* [OnClientContextMenu]({%slug toolbar/client-side-programming/onclientcontextmenu%}) occurs when the user right clicks on a button.

* [OnClientMouseOver]({%slug toolbar/client-side-programming/onclientmouseover%}) occurs when the mouse moves over a button.

* [OnClientMouseOut]({%slug toolbar/client-side-programming/onclientmouseout%}) occurs when the mouse moves off a button.

To use these events, simply write a javascript function that can be called when the event occurs. Then assign the name of the javascript function as the value of the the corresponding __RadToolBar__ property.

````ASPNET
	
	    <script>
	        function OnClientButtonClicking(sender, args) {
	            args.set_cancel(true);    
	        }
	      </script>
	
	    <telerik:RadToolBar ID="RadToolBar1" runat="server" Orientation="Horizontal" OnClientButtonClicking="OnClientButtonClicking">
	        <CollapseAnimation Duration="200" Type="OutQuint" />
	        <Items>
	            <telerik:RadToolBarButton Text="button1" runat="server">
	            </telerik:RadToolBarButton>
	            <telerik:RadToolBarDropDown Text="dropdown" runat="server">
	                <Buttons>
	                    <telerik:RadToolBarButton Text="Button2" runat="server">
	                    </telerik:RadToolBarButton>
	                </Buttons>
	            </telerik:RadToolBarDropDown>
	        </Items>
	    </telerik:RadToolBar>
	    
````



You can also assign event handlers in client-side code. When using the client-side API, pass a reference to the event handler rather than its name. One advantage of using the client-side API is that you can attach multiple event handlers to one event using the standard MS AJAX convention:

````JavaScript
	
	        function onClickedHandler1() {
	            alert("First handler called");
	        }
	        function onClickedHandler2() {
	            alert("Second handler called");
	        }
	        function pageLoad() {
	            var toolBar = $find("<%=RadToolBar1.ClientID%>");
	            
	            toolBar.add_buttonClicked(OnClickedHandler1);
	            toolBar.add_buttonClicked(OnClickedHandler2);
			}
				
````



Another advantage of the client-side API is that you can detach an event handler dynamically:

````JavaScript
	
			    function removeOnClicked2() {
			        var toolBar = $find("<%=RadToolBar1.ClientID%>");
			        toolBar.remove_buttonClicked(onClickedHandler1);
			    }
				
````



>note Note that on the client-side, the names of events are slightly different than on the server side. The following table shows the correspondance between client-side and server-side names:
>



| Server-Side Name | Client-SideName | Methods to add and Remove |
| ------ | ------ | ------ |
|OnClientLoad|load|add_load, remove_load|
|OnClientButtonClicking|buttonClicking|add_buttonClicking, remove_buttonClicking|
|OnClientButtonClicked|buttonClicked|add_buttonClicked, remove_buttonClicked|
|OnClientDropDownClosed|dropDownClosed|add_dropDownClosed, remove_dropDownClosed|
|OnClientDropDownClosing|dropDownClosing|add_dropDownClosing, remove_dropDownClosing|
|OnClientDropDownOpened|dropDownOpened|add_dropDownOpened, remove_dropDownOpened|
|OnClientDropDownOpening|dropDownOpening|add_dropDownOpening, remove_dropDownOpening|
|OnClientCheckedStateChanged|checkedStateChanged|add_checkedStateChanged, remove_checkStateChanged|
|OnClientCheckedStateChanging|checkedStateChanging|add_checkedStateChanging, remove_checkStateChanging|
|OnClientContextMenu|contextMenu|add_contextMenu, remove_contextMenu|
|OnClientMouseOver|mouseOver|add_mouseOver, remove_mouseOver|
|OnClientMouseOut|mouseOut|add_mouseOut, remove_mouseOut|

# See Also

 * [Overview]({%slug toolbar/client-side-programming/overview%})

 * [RadToolBarItemCollection Object]({%slug toolbar/client-side-programming/radtoolbaritemcollection-object%})

 * [Events]({%slug toolbar/server-side-programming/events%})
