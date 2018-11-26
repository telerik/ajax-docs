---
title: Keyboard Support
page_title: Keyboard Support | RadNavigation for ASP.NET AJAX Documentation
description: Keyboard Support
slug: navigation/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 1
---

# Keyboard Support


A critical requirement for software accessibility is keyboard support as a complete alternative to pointing devices (mouse, etc.). Keyboard support is comprised of command key, focus key, and keyboard navigation. **RadNavigation** seamlessly switches between mouse and keyboard navigation.

Setting the control's **KeyboardNavigationSettings** (*introduced in R2 2016 - ver.2016.2.504*), allows you to associate an activation combination (**CommandKey** + **FocusKey**), which moves focus directly to the **RadNavigation** and enables keyboard navigation. When there are multiple **RadNavigation** controls on a given page, each of them may have a different activation combination.

## Keyboard Navigation Settings

The **KeyboardNavigationSettings** exposes two properties to configure the keyboard combination that sets focus to the control:

* **CommandKey**: [Ctrl] , [Alt] or [Shift].

* **FocusKey**: An upper-case letter or number.

Pressing **CommandKey** + **FocusKey** sets the focus on the **RadNavigation**'s first node and enables keyboard navigation.

>tip Certain keyboard combinations are reserved and used as shortcuts in the browsers.
>

 **Example:** Setting the **KeyboardNavigationSettings** for **RadNavigation**

````ASP.NET
<telerik:RadNavigation ID="RadNavigation1" runat="server">
    <KeyboardNavigationSettings CommandKey="Alt" FocusKey="M" />
	<Nodes>
		<telerik:NavigationNode Text="Home" >
		</telerik:NavigationNode>
		<telerik:NavigationNode Text="Products" >
		</telerik:NavigationNode>
		<telerik:NavigationNode Text="About Us" >
		</telerik:NavigationNode>
	</Nodes>
</telerik:RadNavigation>
````

## Keyboard Navigation

* Focus the **RadNavigation**'s first node by pressing [CommandKey] + [FocusKey]:

![Control Focus](images/navigation-keyboardsupport1.png)

* Navigate the nodes using Left and Right Arrows keys:

![Node Navigation](images/navigation-keyboardsupport2.png)

* Expand the submenus using Down and Up Arrows keys:

![Expand Submenu](images/navigation-keyboardsupport3.png)

* Select a focused node and expand its submenu by pressing Enter:

![Select Enter](images/navigation-keyboardsupport6.png)

* Select a focused node and expand its submenu by pressing Space bar:

![Select Space](images/navigation-keyboardsupport7.png)

* Close an expanded submenu by pressing Esc:

![Close Submenu](images/navigation-keyboardsupport8.png)
