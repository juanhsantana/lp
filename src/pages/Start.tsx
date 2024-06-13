import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export function Start() {
  return (
    <Card className="max-w-[625px] max-h-[450px] py-10 max-[540px]:py-5 border-[#750DC7] border-2">
      <CardContent className="flex flex-col justify-center items-center gap-10 max-[540px]:gap-5">
        <h1 className="text-4xl font-bold text-center max-[540px]:text-2xl">
          RECEITA RUSSA QUE ELIMINA CANDIDÍASE EM 7 DIAS
        </h1>
        <p className="text-center text-lg max-[540px]:text-md">
          Responda o quiz abaixo e descubra se você pode utilizar
        </p>
        <p className="text-2xl text-center font-semibold max-[540px]:text-lg">
          Clique no botão abaixo para começar agora
        </p>
        <Button className="w-full h-12 text-xl rounded-sm bg-gradient-to-r from-[#750DC7] to-[#9E23EA] hover:opacity-70 transition duration-250 max-[540px]:text-sm">
          CLIQUE AQUI PARA COMEÇAR
        </Button>
      </CardContent>
    </Card>
  );
}
