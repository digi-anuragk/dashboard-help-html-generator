# Velocity Trend Planned vs. Actual Dashboard

The Velocity Trend Planned vs Actual dashboard helps you see the total estimate or total number of planned and completed backlog items in each iteration. You can use the velocity to predict if the team will finish all the features on time. Planned versus actual provides a view of how much the team can complete compared to the originally planned tasks.

The Last refresh date on this dashboard refers to the date and time when the data displayed on the dashboard was last updated or refreshed from the underlying data sources. You can know the data's freshness and make informed decisions based on the most recent information.

This dashboard is built using the iteration_planned_vs_actual dataset. 

The Velocity Trend Planned vs Actual dashboard consists of the following tabs:
- Total Estimate: This tab provides insights into the velocity trend of work items based on the total estimates assigned to them.
- Work Item Count: This tab provides the velocity trend of work items based on their count.

Here is an example velocity trend planned vs actual panel.
![Velocity Trend Planned vs. Actual](../images/velocity_trend_planned_vs_actual_panel.png)

You can filter and view the required data using the following filters:

- Planning level: Displays data of work items in the selected planning level and all child planning levels that belong to the planning level.
:::note

  - The following filters display filter values based on the filtered planning level.
  - The following filters cascade each other except the Iteration start date range filter.

:::
- Program: Displays data of work items in the selected program.
- Team: Displays data of a specific group of cross-functional members.
- Portfolio item: Displays data of work items in the selected portfolio item and all child portfolio items that belong to the portfolio item.
- Iteration start date range: Displays data of work items in the selected date range. This filter filters the data for the last six months by default.
 
You can use these filters to refine the displayed data. For example, you can choose a team from the Team filter to view the corresponding velocity trend planned vs actual dashboard. Here is an example team-filtered panel.

![Velocity Trend Planned vs. Actual](../images/velocity_trend_planned_vs_actual_panel_filtered_panel.png)

### Velocity Trend Planned vs Actual (Total Estimate)
Displays trends and details of the total estimate for the iterations. This panel has two bars (actual and planned) for each iteration. The planned bar displays the planned work, and the actual bar displays the completed work. Within the grid, you can find total estimate details such as iteration name, planned, actual, and completed % of total estimate. The x-axis represents the iteration, and the y-axis represents the planned and actual total estimate.
### Velocity Trend Planned vs Actual (Work Item Count)
Displays trends and details of work item count. This panel has two bars (actual and planned) for each iteration. The planned bar displays the planned work, and the actual bar displays the completed work. Within the grid, you can find work item count details such as iteration name, planned, actual, and completed % of work item count. The x-axis represents the iteration, and the y-axis represents the planned and actual work item count.

### Components of dataset
The following components of the dataset are used in this dashboard: 

### Attributes
| Attribute Name  | Description |
|:-------------|:------------|
|Iteration name|Name of the iteration|

### Metrics
| Metric Name  | Description |Metric Formula|
|-------------|------------|-------------|
|Actual|The total estimate or the total number of backlog items that were actually completed in each iteration.|NullToZero(Sum<UseLookupForAttributes=False>(Case(([Completed work item flag]@ID="Y"), [Total estimate], 0)))|
|Planned|The total estimate or the total number of backlog items that were planned and completed in each iteration.|Sum(Case(([Planned work item flag]@ID="Y"), [Total estimate], 0))|
|% Completed|% of stories completed in an iteration |NullToZero(([Completed Estimate]/[Planned Estimate]))|


