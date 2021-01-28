---
title: Getting Started
page_title: Getting Started Overview - RadTextBox
description: Check our Web Forms article about Getting Started.
slug: radtextbox/getting-started
tags: overview
published: True
position: 2
---

# Getting Started With RadTextBox





This tutorial will walk you through creating a Web page that uses the **RadTextBox** control. It shows how to:



* Apply a **Skin** to customize the look and feel.

* Add labels to the input controls.

* Add messages to appear when nothing is entered.

* Customize the selection behavior when the control receives focus.

* Specify formats for display and editing.

* Specify maximum and minimum values.

1. Drag a **RadTextBox** control from the toolbox onto your Web page. It's [Smart Tag]({%slug radtextbox/design-time%}) should appear automatically.
![Smart Tag](images/RadTextBoxSmartTag.png)

1. In the **RadTextBox** Smart Tag,
	* Set the **Empty Message** to "-Enter a name-". This message will appear in the text box when the user has not entered any text.
	* Open the **Skin** drop-down. It lets you preview the available skins and choose a skin to give the text box its general look-and-feel. Choose "Office2007".

	![Empty Message and Skin](images/RadTextBoxEmptyMessageAndSkin.png)
1. In the designer, right-click the **RadTextBox** control and choose **Properties** from its context menu:
![RadDateInput Properties](images/RadDateInputProperties.png)

1. In the properties pane for the **RadTextBox** control, set the **Label** property to "Name:". Note that a label automatically appears in the **RadTextbox** control.
![RadTextBox Label](images/RadTextBoxLabel.png)

1. In the **Behavior** section of the properties pane, locate the **SelectionOnFocus** property and change it to "SelectAll". This causes the entire text in the text box to become selected when focus moves to the text box so that it is replaced when the user starts typing. Other options move the caret to the beginning or end of the text box.
![Selection on Focus](images/RadTextBoxSelectionOnFocus.png)


1. Choose the "Office2007" Skin in the Smart Tag so that the masked text box matches the other text box on your page.


1. Run the application. The strings you entered for the **EmptyMessage** properties appear in the input controls, because they do not have any values entered. The labels all appear next to the input area.

1. Experiment with entering data in the controls:

* On the **RadTextBox** control, note that the entire string becomes selected when you move focus to the control.

