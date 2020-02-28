---
title: Standards Compliance
page_title: RadTreeView Standards Compliance | RadTreeView for ASP.NET AJAX Documentation
description: RadTreeView Standards Compliance
slug: treeview/standards-compliance
tags: radtreeview,standards,compliance
published: True
position: 2
---

# Standards Compliance


## 


**RadTreeView** is "Level A" content compliant (in accordance with the W3C Web Accessibility Guidelines 1.0).

**RadTreeView** satisfies the requirements of "Section 508" for software accessibility. As a result, the component can be used in US Federal Institutions and other organizations, which require software to be accessible to people with disabilities. The features listed below are essential for "Section 508" compliance:

* **AccessKey** - a key combination that allows the end-user to focus on the respective TreeView (e.g. Alt+W).
* **Arrow key Navigationand Key Commands** - allows end-users to navigate around the TreeView structure using the arrow keys, as well as to use the Plus, Minus, Space, Enter, and F2 keys for additional control. Read more...
* **LongDesc** attribute for links, Title/Alt (ToolTip) attributes for images (needed by readers / narrators), e.g.

````ASPNET
...
<Node Text="Some Text" NavigateUrl="http://somelink.com" Image="Image.Gif" ToolTip="Some ToolTip" LongDesc="Some Long Description" ... />
...
````

>note **RadTreeView** does not render tables (<*table*> HTML tags) so there is no need for extra headings, caption or summary attributes that are typically needed to make HTML tables "Section 508" compliant.
>


## Section 508

The USA federal mandate requires that information technology be made accessible to people with disabilities. Much of Section 508 compliance concerns making Web sites, intranets, and web-enabled applications accessible. Section 508 compliance has since become a major prerequisite not only in government related software, but also in most enterprise and corporate software solutions.

* **Narrator support** - Telerik RadTreeView supports the Narrator and the end-user can hear the "ToolTip" message of each "TreeNode" as he/she hovers the node with the mouse. This is helpful for people with visual imparities.

* **Magnifier support** - Telerik RadTreeView fully supports the Magnifier. It correctly focuses the view of Telerik RadTreeView as the user navigates through the categories. No matter how high the magnification is set, the main categories and the sub-categories are proportionately increased in size for easier viewing.

* **Keyboard support** - Telerik RadTreeView can be navigated using only the keyboard, which is a key requirement by the Section 508 Compliance Act. You can navigate up and down the tree structure by using the Up and Down arrows respectively and expand/collapse tree nodes using the Left and Right keyboard arrows (Internet Explorer only).

## W3C Web Content Accessibility Guidelines 1.0

The main goal of these guidelines is to encourage developers in creating applications providing accessible contents. However, adhering to these guidelines will also make Web content more accessible to all kind of users, using different devices and interfaces: desktop browser, voice browser, mobile phone, automobile-based personal computer, etc.

In accordance with these guidelines W3C defines three levels of conformance developers may implement in order to provide some level of content compliance to their products:

* Compliance Level "A"
* Compliance Level "AA"
* Compliance Level "AAA"

For more details on W3C accessibility guidelines see [Web Content Accessibility Guidelines 1.0](https://www.w3.org/TR/WAI-WEBCONTENT/).

In our attempt to make our products content compliant, each web-control we develop and its QSF strive to obtain at least one of the conformance levels listed above.

## XHTML Compliance

**RadTreeView** provides complete XHTML compliance. The HTML markup of the component is fully XHTML 1.1 compliant. XHTML stands for EXtensible HyperText Markup Language and it is a stricter and cleaner version of HTML recommended by W3C (World Wide Web Consortium). XHTML is the effective inheritor of HTML 4.01 and although it is almost identical to its predecessor it is aimed to replace it.


# See Also

* [Keyboard Support]({%slug treeview/accessibility-and-internationalization/keyboard-support%})
