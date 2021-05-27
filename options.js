data = [
    {
      type: "product",
      text: "waleed",
      propsData: { msg: "Name", title: "hey", isChart: false },
      rowStart:2,
      columnStart:1,
    },
            {
      type: "product",
      propsData: {
        width: 250,
        height: 250,
        rows:1,
        rowStart:1,
        columnStart:1,
        columns:1,
        rules: {
          type: "radar",
          data: {
            labels: ["Red", "Blue", "Yellow", "purple", "teal", "grey"],
            datasets: [
              {
                label: "# of Votes",
                data: [8, 9, 10, 6, 5, 7],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(60, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(200, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 3,
              },
            ],
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    min: 0,
                  },
                },
              ],
            },
            responsive: true
          },
        },
        isChart: true,
      },
    },
    {
      type: "product",
      text: "Send",
      columnStart:1,
      columns:2,
      propsData: { msg: "Send", title: "Html", isChart: false },
    },
    {
      type: "product",
      propsData: { msg: "configurator + prio + location", title:"left", isChart: false },
    },
    {
      type: "product",
      propsData: {
         rows:1,
        columns:1,
        width: 250,
        height: 250,
        rules: {
          type: "bar",
          data: {
            labels: ["Red", "Blue", "Yellow", "purple", "teal", "grey"],
            datasets: [
              {
                label: "# of Votes",
                data: [8, 9, 10, 6, 5, 7],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(60, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(200, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    min: 0,
                  },
                },
              ],
            },
            responsive: true,
          },
        },
        isChart: true,
      },
    },
    {
      type: "product",
      propsData: {
        width: 250,
        height: 250,
        rows:1,
        columns:1,
        rules: {
          type: "pie",
          data: {
            labels: ["Red", "Blue", "Yellow", "purple", "teal", "grey"],
            datasets: [
              {
                label: "# of Votes",
                data: [8, 9, 10, 6, 5, 7],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(60, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(200, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    min: 0,
                  },
                },
              ],
            },
            responsive: true
          },
        },
        isChart: true,
      },
    },
     
  ]