---
title: WAI-ARIA Support
page_title: WAI-ARIA Support - RadDropDownTree
description: Check our Web Forms article about WAI-ARIA Support.
slug: dropdowntree/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 1
---

# WAI-ARIA Support

@[template](/_templates/common/wai-aria-templates.md#intro "control: RadDropDownTree")

The [ WAI-ARIA Suite ](https://www.w3.org/WAI/intro/aria), defines an approach to make Web content and Web applications more accessible to people with disabilities.

In order to enable the WAI-ARIA support, set the **RadDropDownTree** contol's **EnableAriaSupport** property to **true** as shown in the example below.


>caption **Example 1**: Setting the **EnalbeAriaSupport** property for **RadDropDownTree**.

````ASPNET
<telerik:RadDropDownTree ID="RadDropDownTree1" runat="server" CheckBoxes="SingleCheck" EnableAriaSupport="true" 
AriaLabel="DropDownTree with ARIA label" DataFieldParentID="ParentID" DataFieldID="ID" DataTextField="Name" DataValueField="ID" Width="300" />
````
````C#
protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            RadDropDownTree1.DataSource = GetDummyDepartments();
            RadDropDownTree1.DataBind();
        }
    }

    private List<Department> GetDummyDepartments()
    {
        return new List<Department>
        {
            new Department { ID = 1, ParentID = null, Name = "Head Office" },
            new Department { ID = 2, ParentID = 1, Name = "HR" },
            new Department { ID = 3, ParentID = 1, Name = "IT" },
            new Department { ID = 4, ParentID = 3, Name = "Development" },
            new Department { ID = 5, ParentID = 3, Name = "Support" },
            new Department { ID = 6, ParentID = null, Name = "Branch Office" },
            new Department { ID = 7, ParentID = 6, Name = "Sales" },
            new Department { ID = 8, ParentID = 6, Name = "Logistics" }
        };
    }

    public class Department
    {
        public int ID { get; set; }
        public int? ParentID { get; set; }
        public string Name { get; set; }
    }
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    If Not IsPostBack Then
        RadDropDownTree1.DataSource = GetDummyDepartments()
        RadDropDownTree1.DataBind()
    End If
End Sub

Private Function GetDummyDepartments() As List(Of Department)
    Return New List(Of Department) From {
        New Department With {
            .ID = 1,
            .ParentID = Nothing,
            .Name = "Head Office"
        },
        New Department With {
            .ID = 2,
            .ParentID = 1,
            .Name = "HR"
        },
        New Department With {
            .ID = 3,
            .ParentID = 1,
            .Name = "IT"
        },
        New Department With {
            .ID = 4,
            .ParentID = 3,
            .Name = "Development"
        },
        New Department With {
            .ID = 5,
            .ParentID = 3,
            .Name = "Support"
        },
        New Department With {
            .ID = 6,
            .ParentID = Nothing,
            .Name = "Branch Office"
        },
        New Department With {
            .ID = 7,
            .ParentID = 6,
            .Name = "Sales"
        },
        New Department With {
            .ID = 8,
            .ParentID = 6,
            .Name = "Logistics"
        }
    }
End Function

Public Class Department
    Public Property ID As Integer
    Public Property ParentID As Integer?
    Public Property Name As String
End Class
````


>note In order to use WAI-ARIA the form element on the page must have a role attribute set to "application" (`<form id="form1" runat="server" role="application">`). For more information on this requirement see: [W3C: WAI-ARIA](https://www.w3.org/TR/wai-aria/roles#application)
>

>note An issue with the use of WAI-ARIA is that using ARIA attributes results in invalid HTML mark-up. When you run a HTML document containing ARIA attributes through the W3C Validator it shows errors in the results for any ARIA attributes. The reason is that the DOCTYPE declarations do not include any information about the WAI ARIA attributes and you cannot have a valid document which includes elements, attributes, and attribute values, not detailed in its DTD’s.
>

>note The implementation of the WAI ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements. This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.
>


Enabling WAI-ARIA support of a **RadDropDownTree** will also allow you to adjust the [aria-label](https://www.w3.org/WAI/PF/aria/states_and_properties#aria-label) attribute of the control by using the **AriaLabel** property.

>caption Example 2: Adjusting `aria-label` attribute in **RadDropDownTree**.

````ASP.NET
<telerik:RadDropDownTree ID="RadDropDownTree1" runat="server" CheckBoxes="SingleCheck" EnableAriaSupport="true" 
AriaLabel="DropDownTree with ARIA label" DataFieldParentID="ParentID" DataFieldID="ID" DataTextField="Name" DataValueField="ID" Width="300" />
````


# See Also

 * [WAI-ARIA basic information](https://www.w3.org/WAI/intro/aria)

 * [Documentation: WCAG 2.0 and Section 508 Accessibility Compliance]({%slug dropdownlist/accessibility-and-internationalization/wcag-2.0-and-section-508-accessibility-compliance%}) 
 
 * [Demo: WCAG 2.0 and Section 508 Accessibility Compliance](https://demos.telerik.com/aspnet-ajax/dropdownlist/examples/accessibility/accessibility-compliance/defaultcs.aspx)

