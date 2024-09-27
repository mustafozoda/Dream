import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Main from "./pages/Main.jsx";
import "./App.css";
function App() {
  const todo = [
    {
      id: 1,
      title: "Grocery Shopping",
      description: "Buy fruits, vegetables, and milk.",
      completed: true,
      dueDate: "2024-09-30",
      priority: "high",
      category: "Personal",
      notes: "Remember to check for discounts!",
    },
    {
      id: 2,
      title: "Clean the House",
      description: "Vacuum and dust all rooms.",
      completed: true,
      dueDate: "2024-09-28",
      priority: "medium",
      category: "Personal",
      notes: "Focus on the living room and kitchen.",
    },
    {
      id: 3,
      title: "Finish Project Report",
      description:
        "Complete the report for the project and send it to the manager.",
      completed: false,
      dueDate: "2024-09-29",
      priority: "high",
      category: "Work",
      notes: "Include all team contributions.",
    },
    {
      id: 4,
      title: "Read a Book",
      description: "Read 'The Great Gatsby'.",
      completed: false,
      dueDate: "2024-10-05",
      priority: "low",
      category: "Leisure",
      notes: "Take notes on key themes.",
    },
    {
      id: 5,
      title: "Exercise",
      description: "Go for a 30-minute jog in the evening.",
      completed: true,
      dueDate: "2024-09-25",
      priority: "medium",
      category: "Health",
      notes: "Wear comfortable shoes.",
    },
    {
      id: 6,
      title: "Attend Yoga Class",
      description: "Join the yoga class at the gym.",
      completed: false,
      dueDate: "2024-09-27",
      priority: "medium",
      category: "Health",
      notes: "Bring a yoga mat.",
    },
    {
      id: 7,
      title: "Prepare Presentation",
      description: "Create slides for the upcoming meeting.",
      completed: true,
      dueDate: "2024-09-29",
      priority: "high",
      category: "Work",
      notes: "Rehearse the presentation with a colleague.",
    },
    {
      id: 8,
      title: "Plan Weekend Trip",
      description: "Research places to visit for the weekend getaway.",
      completed: false,
      dueDate: "2024-09-26",
      priority: "medium",
      category: "Personal",
      notes: "Check for any travel restrictions.",
    },
    {
      id: 9,
      title: "Organize Files",
      description: "Sort and organize digital files on the computer.",
      completed: false,
      dueDate: "2024-10-01",
      priority: "low",
      category: "Work",
      notes: "Backup important files before organizing.",
    },
    {
      id: 10,
      title: "Update Resume",
      description: "Revise and update the resume with recent experiences.",
      completed: false,
      dueDate: "2024-10-05",
      priority: "high",
      category: "Career",
      notes: "Make sure to highlight key achievements.",
    },
    {
      id: 11,
      title: "Schedule Doctor's Appointment",
      description: "Book a check-up with the doctor.",
      completed: true,
      dueDate: "2024-10-10",
      priority: "medium",
      category: "Health",
      notes: "Check for available slots online.",
    },
    {
      id: 12,
      title: "Buy Birthday Gift",
      description: "Purchase a gift for Sarah's birthday.",
      completed: false,
      dueDate: "2024-09-28",
      priority: "high",
      category: "Personal",
      notes: "Consider her favorite books.",
    },
    {
      id: 13,
      title: "Complete Online Course",
      description: "Finish the Python programming course.",
      completed: true,
      dueDate: "2024-10-15",
      priority: "high",
      category: "Education",
      notes: "Focus on modules 3 and 4.",
    },
    {
      id: 14,
      title: "Clean the Garage",
      description: "Organize and clean the garage space.",
      completed: false,
      dueDate: "2024-10-02",
      priority: "medium",
      category: "Home",
      notes: "Dispose of old items.",
    },
    {
      id: 15,
      title: "Plan Team Outing",
      description: "Organize a team outing for next month.",
      completed: false,
      dueDate: "2024-10-08",
      priority: "medium",
      category: "Work",
      notes: "Consider team preferences.",
    },
    {
      id: 16,
      title: "Finish Reading Current Book",
      description: "Complete reading '1984' by George Orwell.",
      completed: false,
      dueDate: "2024-10-05",
      priority: "low",
      category: "Leisure",
      notes: "Take notes on major themes.",
    },
    {
      id: 17,
      title: "Prepare Grocery List",
      description: "List items needed for the week.",
      completed: false,
      dueDate: "2024-09-29",
      priority: "medium",
      category: "Personal",
      notes: "Check pantry and fridge.",
    },
    {
      id: 18,
      title: "Create Budget Plan",
      description: "Draft a budget plan for the upcoming month.",
      completed: false,
      dueDate: "2024-10-01",
      priority: "high",
      category: "Finance",
      notes: "Include savings goals.",
    },
    {
      id: 19,
      title: "Join Local Book Club",
      description: "Sign up for the community book club.",
      completed: false,
      dueDate: "2024-10-12",
      priority: "low",
      category: "Social",
      notes: "Meetings every Saturday.",
    },
    {
      id: 20,
      title: "Plan Family Vacation",
      description: "Research destinations for the family trip.",
      completed: false,
      dueDate: "2024-11-15",
      priority: "medium",
      category: "Personal",
      notes: "Consider budget and activities.",
    },
  ];

  const [data, setData] = useState(todo);

  return (
    <BrowserRouter>
      <div className="flex h-[150vh] flex-col">
        <section className="ctr header fixed left-0 right-0 top-0 z-[102]">
          <Header data={data} setData={setData} todo={todo} />
        </section>
        <section className="ctr main h-full bg-white pt-[64px]">
          <Main data={data} setData={setData} />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
