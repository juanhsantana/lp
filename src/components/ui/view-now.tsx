import { useEffect, useState } from "react";
import axios from "axios";

const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 21) + 30;
};

export function ViewNow() {
  const [count, setCount] = useState<number>(getRandomNumber());
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(getRandomNumber());
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        setCity(response.data.city);
      } catch (error) {
        console.error("Error fetching city:", error);
      }
    };

    fetchCity();
  }, []);

  return (
    <div className="absolute top-0 flex justify-center items-center w-full h-16 px-5 bg-red-600">
      <span className="text-lg text-center font-bold">
        {count} pessoas de {city} estão assistindo esse vídeo
      </span>
    </div>
  );
}
