---
title: Binding to Array or IEnumerable
page_title: Binding to Array or IEnumerable | RadTimeline for ASP.NET AJAX Documentation
description: Binding to Array or IEnumerable
slug: timeline/data-binding/server-side/binding-to-array-or-ienumerable
tags: binding,to,array,or,ienumerable
published: True
position: 1
---

# Binding to Array or IEnumerable

## 

**RadTimeline** can be bound either to **Array** or **IEnumerable**. The following example shows how to bind **RadTimeline** objects to both Array and IEnumerable, at runtime.

The declaration of RadTimeline objects includes no **DataSourceID** property or **`<Items>`** section:

````ASPNET
<telerik:RadTimeline runat="server" ID="RadTimeline1"></telerik:RadTimeline>
<telerik:RadTimeline runat="server" ID="RadTimeline2"></telerik:RadTimeline>
````

In the **Page_Load** event handler, create the IEnumerable collections, and bind them to the RadTimeline objects. The **DataBind** method must be called after setting the **DataSource** property.

````C#
protected void Page_Load(object sender, EventArgs e)
{
    var ds = new List<MyTimelineItem>()
    {
        new MyTimelineItem(){
            Title = "My title",
            Subtitle= "My subtitle",
            Date= DateTime.Now.AddDays(23),
            Description="My item description",
            Images = new List<MyImage>()
            {
                new MyImage(){ Src="https://via.placeholder.com/64" },
                new MyImage(){ Src="https://via.placeholder.com/32x64" },
            },
            Actions = new List<MyAction>()
            {
                new MyAction(){ Text = "Go here", Url="https://www.google.com/search?q=here"},
                new MyAction(){ Text = "Go there", Url="https://www.google.com/search?q=there"}
            }
        }
    };

    RadTimeline1.DataActionsField = "Actions";
    RadTimeline1.DataImagesField = "Images";
    RadTimeline1.DataTitleField = "Title";
    RadTimeline1.DataSubtitleField = "Subtitle";
    RadTimeline1.DataDateField = "Date";
    RadTimeline1.DataDescriptionField = "Description";
    RadTimeline1.DataSource = ds;
    RadTimeline1.DataBind();

    var ds2 = new List<SecondTypeMyTimelineItem>()
    {
        new SecondTypeMyTimelineItem(){
            SecondTypeTitle = "My SecondType title",
            SecondTypeSubtitle= "My SecondType subtitle",
            SecondTypeDate= DateTime.Now.AddDays(30),
            SecondTypeDescription="My SecondType item description",
            SecondTypeImages = new List<MyImage>()
            {
                new MyImage(){ Src="https://via.placeholder.com/64x54" },
                new MyImage(){ Src="https://via.placeholder.com/32x64" },
            },
            SecondTypeActions = new List<MyAction>()
            {
                new MyAction(){ Text = "Go SecondType here", Url="https://www.google.com/search?q=SecondType+here"},
                new MyAction(){ Text = "Go SecondType there", Url="https://www.google.com/search?q=SecondType+there"}
            }
        }
    };

    RadTimeline2.DataSource = ds2;
    RadTimeline2.DataActionsField = "SecondTypeActions";
    RadTimeline2.DataImagesField = "SecondTypeImages";
    RadTimeline2.DataTitleField = "SecondTypeTitle";
    RadTimeline2.DataSubtitleField = "SecondTypeSubtitle";
    RadTimeline2.DataDateField = "SecondTypeDate";
    RadTimeline2.DataDescriptionField = "SecondTypeDescription";
    RadTimeline2.DataBind();
}
public class SecondTypeMyTimelineItem
{
    public string SecondTypeDescription { get; set; }
    public string SecondTypeTitle { get; set; }
    public string SecondTypeSubtitle { get; set; }
    public DateTime SecondTypeDate { get; set; }
    public List<MyAction> SecondTypeActions { get; set; }
    public List<MyImage> SecondTypeImages { get; set; }
}
public class MyTimelineItem
{
    public string Description { get; set; }
    public string Title { get; set; }
    public string Subtitle { get; set; }
    public DateTime Date { get; set; }

    public List<MyAction> Actions { get; set; }
    public List<MyImage> Images { get; set; }
}
public class MyAction
{
    public string Text { get; set; }
    public string Url { get; set; }
}
public class MyImage
{
    public string Src { get; set; }
}
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    Dim ds = New List(Of MyTimelineItem)() From {
        New MyTimelineItem() With {
            .Title = "My title",
            .Subtitle = "My subtitle",
            .DateValue = DateTime.Now.AddDays(23),
            .Description = "My item description",
            .Images = New List(Of MyImage)() From {
                New MyImage() With {
                    .Src = "https://via.placeholder.com/64"
                },
                New MyImage() With {
                    .Src = "https://via.placeholder.com/32x64"
                }
            },
            .Actions = New List(Of MyAction)() From {
                New MyAction() With {
                    .Text = "Go here",
                    .Url = "https://www.google.com/search?q=here"
                },
                New MyAction() With {
                    .Text = "Go there",
                    .Url = "https://www.google.com/search?q=there"
                }
            }
        }
    }
    RadTimeline1.DataActionsField = "Actions"
    RadTimeline1.DataImagesField = "Images"
    RadTimeline1.DataTitleField = "Title"
    RadTimeline1.DataSubtitleField = "Subtitle"
    RadTimeline1.DataDateField = "Date"
    RadTimeline1.DataDescriptionField = "Description"
    RadTimeline1.DataSource = ds
    RadTimeline1.DataBind()

    Dim ds2 = New List(Of SecondTypeMyTimelineItem)() From {
        New SecondTypeMyTimelineItem() With {
            .SecondTypeTitle = "My SecondType title",
            .SecondTypeSubtitle = "My SecondType subtitle",
            .SecondTypeDate = DateTime.Now.AddDays(30),
            .SecondTypeDescription = "My SecondType item description",
            .SecondTypeImages = New List(Of MyImage)() From {
                New MyImage() With {
                    .Src = "https://via.placeholder.com/64x54"
                },
                New MyImage() With {
                    .Src = "https://via.placeholder.com/32x64"
                }
            },
            .SecondTypeActions = New List(Of MyAction)() From {
                New MyAction() With {
                    .Text = "Go SecondType here",
                    .Url = "https://www.google.com/search?q=SecondType+here"
                },
                New MyAction() With {
                    .Text = "Go SecondType there",
                    .Url = "https://www.google.com/search?q=SecondType+there"
                }
            }
        }
    }

    RadTimeline2.DataSource = ds2
    RadTimeline2.DataActionsField = "SecondTypeActions"
    RadTimeline2.DataImagesField = "SecondTypeImages"
    RadTimeline2.DataTitleField = "SecondTypeTitle"
    RadTimeline2.DataSubtitleField = "SecondTypeSubtitle"
    RadTimeline2.DataDateField = "SecondTypeDate"
    RadTimeline2.DataDescriptionField = "SecondTypeDescription"
    RadTimeline2.DataBind()
End Sub

Public Class SecondTypeMyTimelineItem
    Public Property SecondTypeDescription As String
    Public Property SecondTypeTitle As String
    Public Property SecondTypeSubtitle As String
    Public Property SecondTypeDate As DateTime
    Public Property SecondTypeActions As List(Of MyAction)
    Public Property SecondTypeImages As List(Of MyImage)
End Class

Public Class MyTimelineItem
    Public Property Description As String
    Public Property Title As String
    Public Property Subtitle As String
    Public Property DateValue As DateTime
    Public Property Actions As List(Of MyAction)
    Public Property Images As List(Of MyImage)
End Class

Public Class MyAction
    Public Property Text As String
    Public Property Url As String
End Class

Public Class MyImage
    Public Property Src As String
End Class
	
````



