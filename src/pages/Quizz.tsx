import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Frown, Laugh } from "lucide-react";
import Corpo from "../assets/corpo.png";
import Farma from "../assets/farma.png";
import Triste from "../assets/triste.png";
import Felicidade from "../assets/felicidade.png";

export function Quizz() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen gap-5 py-20">
      {/* card 1 */}
      <Card className="max-w-[400px] w-full border-[#750DC7] border-2 rounded-lg">
        <CardContent className="flex flex-col justify-center items-center p-3 gap-5">
          <Card className="w-full h-auto border-2 border-[#9204ff] rounded-md">
            <img src={Corpo} alt="corpo" className="w-full h-auto rounded-sm" />
          </Card>

          <p className="text-xl text-center font-bold">
            Você já teve candidíase?
          </p>

          <div className="flex items-center justify-around w-full">
            <Button className="flex justify-center items-center gap-2 font-semibold rounded-sm bg-red-600 shadow-sm shadow-red-700 hover:bg-red-600 hover:opacity-80">
              <Frown /> SIM
            </Button>
            <Button className="flex justify-center items-center gap-2 font-semibold rounded-sm bg-green-500 shadow-sm shadow-green-600 hover:bg-green-500 hover:opacity-80">
              <Laugh /> NÃO
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* card 2 */}
      <Card className="max-w-[400px] w-full border-[#750DC7] border-2 rounded-lg">
        <CardContent className="flex flex-col justify-center items-center p-3 gap-5">
          <Card className="w-full h-auto border-2 border-[#9204ff] rounded-md">
            <img src={Farma} alt="Farma" className="w-full h-auto rounded-sm" />
          </Card>

          <p className="text-xl text-center font-bold">
            Já utilizou remédios e pomadas, mas ela sempre volta?
          </p>

          <div className="flex items-center justify-around w-full">
            <Button className="flex justify-center items-center gap-2 font-semibold rounded-sm bg-red-600 shadow-sm shadow-red-700 hover:bg-red-600 hover:opacity-80">
              <Frown /> SIM
            </Button>
            <Button className="flex justify-center items-center gap-2 font-semibold rounded-sm bg-green-500 shadow-sm shadow-green-600 hover:bg-green-500 hover:opacity-80">
              <Laugh /> NÃO
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* card 3 */}
      <Card className="max-w-[400px] w-full border-[#750DC7] border-2 rounded-lg">
        <CardContent className="flex flex-col justify-center items-center p-3 gap-5">
          <Card className="w-full h-auto border-2 border-[#9204ff] rounded-md">
            <img
              src={Triste}
              alt="Triste"
              className="w-full h-auto rounded-sm"
            />
          </Card>

          <p className="text-xl text-center font-bold">
            Está cansada de sofrer com dores, corrimentos, mau cheiro e outros
            sintomas causados pela candidíase?
          </p>

          <div className="flex items-center justify-around w-full">
            <Button className="flex justify-center items-center gap-2 font-semibold rounded-sm bg-red-600 shadow-sm shadow-red-700 hover:bg-red-600 hover:opacity-80">
              <Frown /> SIM
            </Button>
            <Button className="flex justify-center items-center gap-2 font-semibold rounded-sm bg-green-500 shadow-sm shadow-green-600 hover:bg-green-500 hover:opacity-80">
              <Laugh /> NÃO
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* card 4 */}
      <Card className="max-w-[400px] w-full border-[#750DC7] border-2 rounded-lg">
        <CardContent className="flex flex-col justify-center items-center p-3 gap-5">
          <Card className="w-full h-auto border-2 border-[#9204ff] rounded-md">
            <img
              src={Felicidade}
              alt="Felicidade"
              className="w-full h-auto rounded-sm"
            />
          </Card>

          <p className="text-xl text-center font-bold">
            Você quer recuperar a sua qualidade de vida e dar adeus à candidíase
            ainda hoje?
          </p>

          <div className="flex items-center justify-around w-full">
            <Button className="flex justify-center items-center gap-2 font-semibold rounded-sm bg-green-500 shadow-sm shadow-green-600 hover:bg-green-500 hover:opacity-80">
              <Laugh /> SIM
            </Button>
            <Button className="flex justify-center items-center gap-2 font-semibold rounded-sm bg-red-600 shadow-sm shadow-red-700 hover:bg-red-600 hover:opacity-80">
              <Frown /> NÃO
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
