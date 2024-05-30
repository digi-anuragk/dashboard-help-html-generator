# Portfolio Item Cycle Time Dashboard

The Portfolio Item Cycle Time dashboard provides insights into the duration of portfolio items in various status values, categorized by total estimate. These portfolio items could include projects, initiatives, epics, or other units of work that contribute to the organization's objectives. This dashboard enables you to identify patterns, improvements, or potential bottlenecks in the portfolio item workflow.

Cycle refers to the duration of a portfolio item to move from the filtered two status like developing to the ready to demo status.

The Last refresh date on this dashboard refers to the date and time when the data displayed on the dashboard was last updated or refreshed from the underlying data sources. You can know the data's freshness and make informed decisions based on the most recent information.

This dashboard is built using the portfolio_item_time_in_status dataset.

Here is an example portfolio item cycle time panel.
![Portfolio Item Cycle Time](../images/portfolio_item_cycle_time.PNG)

You can filter and view the required data using the following filters:
- Planning level: Displays data of portfolio items in the selected planning level and all child planning levels that belong to the planning level.
:::note

  - The following filters display filter values based on the filtered planning level.
  - The following filters cascade each other except the Include items after filter.

:::
- Program: Displays data of portfolio items in the selected program.
- Portfolio item state: Displays data of portfolio items in any of the following reporting category states: in progress and closed.
- Include items after: Displays data of specific date range or period.
- Cycle start: Displays the status of portfolio items that define the beginning of the cycle.
- Cycle end: Displays the status of portfolio items that define the end of the cycle.
:::note

If you choose a cycle start range value that is higher than the rank of the cycle end status, the system will automatically swap the selected status values for both options. This ensures consistency and accuracy in defining the cycle range for your analysis.

:::
 
You can use these filters to refine the displayed data. For example, you can choose a program from the Program filter to view the corresponding dashboard. Here is an example program-filtered panel.

![portfolio Item Cycle Time filtered panel](../images/portfolio_item_cycle_time_filtered_panel.PNG)

### All portfolio items
Displays the trend of the portfolio item in cycle time. The scatter plot panel visualizes the cycle time of tracked portfolio items based on total estimate grouping.  Each Total Estimate grouping on the scatter plot consists of the following three data points:
- **Average cycle time**: This data point represents the average time for portfolio items within the total estimate grouping in the chosen cycle. 
- **Maximum cycle time**: This data point indicates the maximum duration of portfolio items within the total estimate grouping in the chosen cycle. 
- **Minimum cycle time**: This data point represents the minimum duration of portfolio items within the total estimate grouping in the chosen cycle. 

The x-axis represents the story points and the y-axis represents the minimum, average, and maximum cycle time. You can hover the cursor over the panel to see the story points, portfolio item count, and minimum or average or maximum cycle time.

### Components used in this dashboard
The following components of the dataset are used in this dashboard:

### Attributes
| Attribute Name  | Description |
|:-------------|:------------|
|Story points|Story points assigned to the portfolio item|


### Metrics
| Metric Name  | Description |Metric Formula|
|-------------|------------|-------------|
|Average cycle time|Average duration between work start and work completed for a portfolio item for all the portfolio items in a program|[Cycle time]/[Portfolio item count (level)]|
|Maximum cycle time|Maximum duration between work start and work completed for a portfolio item for all the portfolio items in a program|Max([Cycle time]){[Portfolio item id]+, [Story points]+}|
|Minimum cycle time|Minimum duration between work start and work completed for a portfolio item for all the portfolio items in a program|Min([Cycle time]){[Portfolio item id]+, [Story points]+}|
|Portfolio item count|Count of portfolio items in a program|Count<Distinct=True>([Portfolio item id]@ID){[Story points]+}|
