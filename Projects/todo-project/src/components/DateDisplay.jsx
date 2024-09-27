import { useEffect, useState } from "react";

export default function DateDisplay() {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const formatDate = () => {
      const options = { weekday: "long" };
      const date = new Date();
      const day = date.toLocaleDateString("en-US", options);
      const dateString = date.toLocaleDateString("en-GB");

      setFormattedDate(`${day}\n${dateString}`);
    };

    formatDate();
  }, []);

  const [day, dateString] = formattedDate.split("\n");

  return (
    <div className="flex flex-col items-end justify-end">
      <h1 className="text-[18px]">{day}</h1>
      <h1 className="text-red-700">{dateString}</h1>
    </div>
  );
}
