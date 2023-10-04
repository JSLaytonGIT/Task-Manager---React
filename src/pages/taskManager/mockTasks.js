const currentDate = new Date();

const mockTasks = [
    {
      id: 3,
      title: "Organize Home Office",
      description: "Declutter and organize my home office space for improved productivity.",
      priority: "low",
      duration: 120,
      completionBy: "2027-09-22T16:00",
      status: "notStarted",
    },
    {
      id: 1,
      title: "London marathon",
      description: "Do a five mile run every day, increasing the distance by a mile every month. Make sure I have registered and have all the necessary gear before start date.",
      priority: "high",
      duration: 1441,
      completionBy: "2024-04-21T09:00",
      status: "inProgress",
    },
    {
      id: 2,
      title: "Brush Teeth",
      description: "Important part of the day!",
      priority: "low",
      duration: 2,
      completionBy: new Date(currentDate.getTime() + 12 * 60 * 60 * 1000),
      status: "inProgress",
    },
    {
      id: 6,
      title: "Read a Book",
      description: "Choose a book from my reading list and start reading for at least 30 minutes.",
      priority: "medium",
      duration: 30,
      completionBy: "2025-09-15T15:00",
      status: "finished",
    },
    {
      id: 4,
      title: "Make a weather app",
      description: "Create a weather applicaiton using React",
      priority: "medium",
      duration: 720,
      completionBy: "2023-09-15T15:00",
      status: "notStarted",
    },
    {
      id: 5,
      title: "Go food shopping",
      description: "Go to the shops and buy all the food I need for the week.",
      priority: "high",
      duration: 60,
      completionBy: "2023-09-15T15:00",
      status: "notStarted",
    },
  ];

export default mockTasks;