export default [
 
    {
      "name": "product",
      "type":"html",
      "async":false,
      "priorty":2,
      "text": "waleed",
      "propsData": { "msg": "Name", "title": "hey", "isChart": false , "columnStart":2,
      "rowStart":3, "align":"start","rows":2,
      "columns":1,"info":"dynamic h3"
        }
    },
    {
      "name": "Product",
      "type":"chart",
      "async": true,
      "priorty":1,
      "text":"",
      "propsData": {
        "width": 250,
        "height": 250,
        "columnStart":1,
        "rowStart":1,
        "rows": 1,
        "columns": 1,
        "rules": {
          "type": "radar",
          "data" : {
            "labels": [
                        "Red",
                        "Blue",
                        "Yellow",
                        "purple",
                        "teal",
                        "grey"
                    ],
            "datasets": [
                        {
                "label": "# of Votes",
                "data": [
                                8,
                                9,
                                10,
                                6,
                                5,
                                7
                            ],
                "backgroundColor": [
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(255, 206, 86, 0.2)",
                                "rgba(60, 192, 192, 0.2)",
                                "rgba(153, 102, 255, 0.2)",
                                "rgba(200, 159, 64, 0.2)"
                            ],
                "borderColor": [
                                "rgba(255, 99, 132, 1)",
                                "rgba(54, 162, 235, 1)",
                                "rgba(255, 206, 86, 1)",
                                "rgba(75, 192, 192, 1)",
                                "rgba(153, 102, 255, 1)",
                                "rgba(255, 159, 64, 1)"
                            ],
                "borderWidth": 3
                        }
                    ]
                },
          "options": {
            "scales": {
              "yAxes": [
                            {
                  "ticks": {
                    "min": 0
                                }
                            }
                        ]
                    },
            "responsive": true
                }
            },
        "isChart": true
        }
    },
    {
      "name": "product",
      "text": "Send",
      "type":"html",
      "isChart":"false",
      "priorty":3,
      "propsData": { "msg": "Send", "title": "", "isChart": false , "columnStart":1,
      "rowStart":3,"align":"start","icon":"https://hackr.io/tutorials/learn-html-5/logo/logo-html-5?ver=1587977020"
        }
    },
    
    {
      "name": "product",
      "type":"html",
      "priorty":3,
      "propsData": { "msg": "Nothing else matters", "title": "left", "isChart": false, "columnStart":1,
      "rowStart":3,"align":"end"
        }
    },
    {
      "name": "product",
      "type":"chart",
      "priorty":1,
      "propsData": {
         "rows": 1,
        "columns": 1,
        "columnStart":1,
        "rowStart":2,
        "width": 250,
        "height": 250,
        "rules": {
          "type": "bar",
          "data": {
            "labels": [
                        "Red",
                        "Blue",
                        "Yellow",
                        "purple",
                        "teal",
                        "grey"
                    ],
            "datasets": [
                        {
                "label": "# of Votes",
                "data": [
                                8,
                                9,
                                10,
                                6,
                                5,
                                7
                            ],
                "backgroundColor": [
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(255, 206, 86, 0.2)",
                                "rgba(60, 192, 192, 0.2)",
                                "rgba(153, 102, 255, 0.2)",
                                "rgba(200, 159, 64, 0.2)"
                            ],
                "borderColor": [
                                "rgba(255, 99, 132, 1)",
                                "rgba(54, 162, 235, 1)",
                                "rgba(255, 206, 86, 1)",
                                "rgba(75, 192, 192, 1)",
                                "rgba(153, 102, 255, 1)",
                                "rgba(255, 159, 64, 1)"
                            ],
                "borderWidth": 1
                        }
                    ]
                },
          "options": {
            "scales": {
              "yAxes": [
                            {
                  "ticks": {
                    "min": 0
                                }
                            }
                        ]
                    },
            "responsive": true
          }
            },
        "isChart": true
        }
    },
    {
      "name": "product",
      "type":"chart",
      "priorty":2,
      "propsData": {
        "width": 250,
        "height": 250,
        "rows": 1,
        "columns": 2,
        "columnStart":2,
        "rowStart":1,
        "rules": {
          "type": "pie",
          "data": {
            "labels": [
                        "Red",
                        "Blue",
                        "Yellow",
                        "purple",
                        "teal",
                        "grey"
                    ],
            "datasets": [
                        {
                "label": "# of Votes",
                "data": [
                                8,
                                9,
                                10,
                                6,
                                5,
                                7
                            ],
                "backgroundColor": [
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(255, 206, 86, 0.2)",
                                "rgba(60, 192, 192, 0.2)",
                                "rgba(153, 102, 255, 0.2)",
                                "rgba(200, 159, 64, 0.2)"
                            ],
                "borderColor": [
                                "rgba(255, 99, 132, 1)",
                                "rgba(54, 162, 235, 1)",
                                "rgba(255, 206, 86, 1)",
                                "rgba(75, 192, 192, 1)",
                                "rgba(153, 102, 255, 1)",
                                "rgba(255, 159, 64, 1)"
                            ],
                "borderWidth": 1
                        }
                    ]
                },
          "options": {
            "scales": {
              "yAxes": [
                            {
                  "ticks": {
                    "min": 0
                                }
                            }
                        ]
                    },
            "responsive": true
                }
            },
        "isChart": true
        }
    }
]
