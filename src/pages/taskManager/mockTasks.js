const currentDate = new Date();

const mockTasks = [
    {
      id: 1,
      title: "Brush Teeth",
      description: "Important part of the day!",
      priority: "medium",
      duration: 2,
      completionBy: new Date(currentDate.getTime() + 12 * 60 * 60 * 1000),
      status: "notStarted",
    },
    {
      id: 2,
      title: "London marathon",
      description: "Do a five mile run every day, increasing the distance by a mile every month. Make sure I have registered and have all the necessary gear before start date.",
      priority: "medium",
      duration: 1441,
      completionBy: "2024-04-21T09:00",
      status: "inProgress",
    },    
    {
      id: 3,
      title: "Make a weather app",
      description: "Create a weather applicaiton using React",
      priority: "high",
      duration: 720,
      completionBy: "2023-09-15T15:00",
      status: "inProgress",
    },
    {
      id: 4,
      title: "Buy Groceries",
      description: "Make a list of essential groceries and go shopping.",
      priority: "medium",
      duration: 60,
      completionBy: "2023-09-15T15:00",
      status: "finished",
    },
    {
      id: 5,
      title: "Read a Book",
      description: "Choose a book from your reading list and start reading for at least 30 minutes.",
      priority: "low",
      duration: 30,
      completionBy: "2025-09-15T15:00",
      status: "shelved",
    },
    {
      id: 6,
      title: "Organize Home Office",
      description: "Declutter and organize my home office space for improved productivity.",
      priority: "low",
      duration: 120,
      completionBy: "2027-09-22T16:00",
      status: "notStarted",
    },
  ];

export default mockTasks;