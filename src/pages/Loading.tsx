import { useState, useEffect } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function Loading() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = 5000 / 100; // 5 segundos dividido por 100 para incrementar 1% a cada iteração
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, interval);

    return () => clearInterval(timer); // Limpeza do timer quando o componente desmonta
  }, []);

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Card className="max-w-[625px] w-full max-h-[450px] py-10 max-[540px]:py-5 border-[#750DC7] border-2">
        <CardContent className="flex flex-col justify-center items-center gap-10 max-[540px]:gap-5">
          <h1 className="font-bold text-2xl text-center">
            ENVIANDO SUA AVALIAÇÃO
          </h1>
          <Progress value={progress} className="h-5" />
        </CardContent>
      </Card>
    </div>
  );
}
