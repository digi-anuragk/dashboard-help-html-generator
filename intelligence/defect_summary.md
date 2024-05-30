# Defect Summary Dashboard

The Defect Summary dashboard provides an overview of reported defects. This dashboard has a detailed summary of defects that enables you to understand the breakdown of defects in a program by various dimensions such as status, priority, and type.

The Last refresh date on this dashboard refers to the date and time when the data displayed on the dashboard was last updated or refreshed from the underlying data sources. You can know the data's freshness and make informed decisions based on the most recent information.

Program is a grouping of cross-hierarchical planning levels used for filtering and reporting purposes. Program helps you to group a set of planning levels that do not all roll up together within a single hierarchy.

This dashboard is built using the defect_summary dataset.

### Defect Summary 
Displays a summary and detailed information about defects in a program. Within the grid, you can find defect details such as dimensions, count, and percentage for each defect. Using the Group By filter, you can view a summary and details of defects based on different dimensions like status, priority, and defect type. The status values are unspecified, done, open, and in progress. The defect types are release, unspecified, pre-release, and documentation. The defect priority values are high, medium, and low. You can hover the cursor over the panel to see the dimension, defect count, and percentage of dimension.

Here is an example defect summary panel.
![Defect Summary](../images/defect_summary.PNG)

You can filter and view the required data of defects using the following filters:

- Planning level: Displays data of defects in the selected planning level and all child planning levels that belong to the planning level.
:::note

  - The following filters display filter values based on the filtered planning level.
  - The following filters cascade each other.

:::
- Program: Displays data on defects in the selected program.
- Backlog group: Displays data of defects  in the selected backlog group and child backlog group that belongs to the backlog group.
- Team: Displays data of a specific group of cross-functional members.
- Iteration: Displays data of a specific planning period for an Agile team.
- Portfolio item: Displays data of defects  in the selected portfolio item and all child portfolio items that belong to the portfolio item.
- Backlog goal: Displays data of defects  in the selected backlog goal.
- Defect state: Displays data of defects in any of the following reporting category states: in progress and closed.
- Group by: Displays data of defects in any of the following dimensions: status, priority, and defect type.

 Refer to the [Agility User guide](https://docs.digital.ai/bundle/agility-onlinehelp/page/Content/Digital.ai_Agility/Digital.ai_Agility.htm) to get more details about the agility parameters like planning level, program, backlog group, backlog goal, and iteration. You can use these filters to refine the displayed data. For example, you can choose a program from the Program filter to view the corresponding defects summary dashboard. Here is an example program-filtered panel.

![Defect Summary filtered panel](../images/defect_summary_filtered_panel.PNG)

### Components of dataset

The following components of the dataset are used in this dashboard: 

### Attributes
| Attribute Name  | Description |
|:-------------|:------------|
|Status|Status of the defect|
|Priority|Priority of the defect|
|Defect type| Type of the defect|

### Metrics
| Metric Name  | Description |Metric Formula|
|-------------|------------|-------------|
|Work item count|Count of defects in a program or planning level|Count([Workitem ID])|
|Count|Count of defects in a program or planning level|Count([Workitem ID])|
|Percentage|Percentage of a dimension in a program or planning level|[Workitem Count]/Sum<UseLookupForAttributes=False>([Workitem Count])|


