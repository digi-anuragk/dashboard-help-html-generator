# Issue Summary Dashboard

The Issue Summary dashboard provides an overview that helps you understand the distribution and details of issues within a planning level or program. It breaks down issues by dimensions, such as issue type, state, priority, and resolution, offering insights into various aspects.

 The Last refresh date on this dashboard refers to the date and time when the data displayed on the dashboard was last updated or refreshed from the underlying data sources. You can know the data's freshness and make informed decisions based on the most recent information.

This dashboard is built using the issue_summary dataset.

### Issue Summary

Displays summary of issues. Using the Group By filter, you can view the summary of the issues on different dimensions like issue type, state, priority, and resolution. The issue type values are unspecified, impediment, engineering, performance, and process. The example priority values are unspecified, high, medium, and low. The resolution values are unspecified, resolved, and no action. The state values are open and closed.  You can hover the cursor over the panel to see the dimension, issue count, and percentage of dimension.

Here is an example issue summary panel.
![Issue Summary](./images/issue_summary.PNG)

You can filter and view the required data using the following filters:

- Planning level: Displays data of issues in the selected planning level and all child planning levels that belong to the planning level.
:::note

  - The following filters display filter values based on the filtered planning level.
  - The following filters cascade each other.

:::
- Program: Displays data on issues in the selected program.
- Issue state: Displays data of issues in any of the following reporting category states: open and closed.
- Group by: Displays data of issues in any of the following dimensions: state, priority, resolution, and issue type.
 
You can use these filters to refine the displayed data. For example, you can choose a program from the Program filter to view the corresponding issue summary dashboard. Here is an example program-filtered panel.

![Issue summary filtered panel](./images/issue_summary_filtered_panel.PNG)

### Components of dataset

The following components of the dataset are used in this dashboard: 

### Attributes
| Attribute Name  | Description |
|:-------------|:------------|
|Priority|Priority of the issues|
|Resolution|Type of issue resolution|
|State|Current state of the issues|
|Type|Type of the issue|

### Metrics
| Metric Name  | Description |Metric Formula|
|-------------|------------|-------------|
|Issue count|Count of Issues at program or planning level|Count([Issue id ])|

