---
title: "How to annotate a barplot in seaborn"
description: "Read this short port if you are searching for a quick solution to annotate a barplot in seaborn"
pubDate: "Jun 01 2023"
heroImage: "/seaborn-barplot-hero-image.png"
---

Text

```py
import seaborn as sns
import matplotlib.pyplot as plt

sns.set_theme(style="whitegrid")
ax = sns.countplot(x='sales_method',
              data=df_clean,
              order=['Email', 'Call', 'Email + Call'],
              palette=['#003f5c', '#58508d', '#bc5090'])

ax.set_title('Most of the customers received emails only',
    fontsize=10)
ax.set_xlabel('Sales Method')
ax.set_ylabel('Count of Customers')
ax = plt.suptitle('Count of customers for each approach')
    
plt.show()
```
---
This code produces the following plot. 

<img src="/public/seaborn-barplot-without-annotation.png" alt="seaborn-barplot-without-annotation">

As you can see
