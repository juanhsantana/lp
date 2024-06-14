import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Loading() {
  const [progress, setProgress] = useState<number>(0);
  const [showFinalContent, setShowFinalContent] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = 5000 / 100;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setShowFinalContent(true);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [progress]);

  if (progress < 100 || !showFinalContent) {
    return (
      <div className="flex flex-col w-full justify-center items-center">
        <Card className="max-w-[625px] w-full max-h-[450px] py-10 max-[540px]:py-5 border-[#750DC7] border-2">
          <CardContent className="flex flex-col justify-center items-center gap-10 max-[540px]:gap-5">
            <h1 className="font-bold text-2xl text-center">
              ENVIANDO SUA AVALIAÇÃO
            </h1>
            <Progress value={progress} className="h-5 relative" />
            {progress >= 100 ? (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-green-500 font-semibold"
              >
                Concluído! 🎉
              </motion.div>
            ) : (
              <span className="font-semibold">{progress}%</span>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Card className="max-w-[625px] w-full max-h-[450px] py-10 max-[540px]:py-5 border-[#750DC7] border-2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <CardContent className="flex flex-col justify-center items-center gap-10 max-[540px]:gap-5">
            <h1 className="font-bold text-2xl text-center">
              PARABÉNS VOCÊ PODE UTILIZAR A RECEITA RUSSA...
            </h1>
            <p className="font-medium text-md text-center">
              Assista um curto vídeo e veja como se livrar da candidíase de
              forma definitiva em 7 dias!
            </p>
            <Button
              onClick={() => navigate("/sales-page")}
              className="animate-pulse flex items-center gap-2 rounded-sm bg-[#01cd00] hover:bg-[#01cd00] hover:opacity-80 shadow-sm shadow-green-500 font-semibold"
            >
              <Play size={20} /> ASSISTIR VÍDEO
            </Button>
          </CardContent>
        </motion.div>
      </Card>
    </div>
  );
}
