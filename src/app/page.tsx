"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { dailyProblems } from "@/lib/problems"

export default function Home() {
  const [answer, setAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<{ status: 'idle' | 'success' | 'error', message: string }>({ status: 'idle', message: '' });
  
  const [isSolved, setIsSolved] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [timeTaken, setTimeTaken] = useState<string>("");
  const [streak, setStreak] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [includeTime, setIncludeTime] = useState(true);

  // Estado para saber qué problema estamos viendo
  const [activeProblem, setActiveProblem] = useState(dailyProblems[0]);

  // Calculamos la fecha local de hoy
  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  // Filtramos los problemas para la sección de Archivo (todos los que su fecha sea igual o menor a hoy)
  const pastProblems = dailyProblems
    .filter(p => p.date <= todayStr)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Los ordena del más reciente al más viejo

  useEffect(() => {
    setIsClient(true);

    // Revisamos si la URL tiene un ID de problema específico (ej. ?id=desert-chase)
    const params = new URLSearchParams(window.location.search);
    const problemIdFromUrl = params.get('id');
    
    let currentProblem = dailyProblems.find(p => p.date === todayStr) || dailyProblems[0];
    
    if (problemIdFromUrl) {
      const foundProblem = dailyProblems.find(p => p.id === problemIdFromUrl);
      if (foundProblem) {
        currentProblem = foundProblem;
      }
    }
    
    setActiveProblem(currentProblem);

    // Revisamos el caché específico para ESTE problema
    const savedState = localStorage.getItem(`dailyProblem_${currentProblem.id}`);
    const savedStreak = localStorage.getItem('dailyProblem_Streak');
    
    if (savedStreak) setStreak(parseInt(savedStreak));

    if (savedState) {
      const data = JSON.parse(savedState);
      setIsSolved(true);
      setShowHint(data.usedHint);
      setTimeTaken(data.time);
      setFeedback({ 
        status: 'success', 
        message: `${currentProblem.successMessage} You solved it in ${data.time}.` 
      });
    } else {
      setStartTime(Date.now());
    }
  }, []); // Solo se ejecuta al cargar la página

  const handleSubmit = () => {
    if (isSolved) return;
    
    const cleanAnswer = answer.replace('%', '').trim();
    if (!cleanAnswer) return;

    if (cleanAnswer === activeProblem.answer) {
      const endTime = Date.now();
      const diffInSeconds = Math.floor((endTime - startTime) / 1000);
      const minutes = Math.floor(diffInSeconds / 60);
      const seconds = diffInSeconds % 60;
      const formattedTime = `${minutes}m ${seconds}s`;

      setIsSolved(true);
      setTimeTaken(formattedTime);
      setStreak(prev => prev + 1);
      
      setFeedback({ 
        status: 'success', 
        message: `${activeProblem.successMessage} You solved it in ${formattedTime}.` 
      });

      localStorage.setItem(`dailyProblem_${activeProblem.id}`, JSON.stringify({
        solved: true,
        usedHint: showHint,
        time: formattedTime
      }));
      localStorage.setItem('dailyProblem_Streak', (streak + 1).toString());

    } else {
      setFeedback({ status: 'error', message: 'Incorrect.' });
    }
  };

  const handleShare = () => {
    const timeText = includeTime ? `⏱️ Time: ${timeTaken} | ` : "";
    // Generamos el link con el ID exacto del problema para que los amigos aterricen ahí
    const problemLink = `thedailyproblem.com/?id=${activeProblem.id}`;
    
    const shareText = `${activeProblem.title} 🎲\n${timeText}💡 Hint: ${showHint ? 'Yes' : 'No'} | 🔥 Streak: ${streak}\n\n"${activeProblem.context.substring(0, 60)}..."\n\nPlay at: ${problemLink}`;
    
    navigator.clipboard.writeText(shareText).then(() => {
      alert("Results copied to clipboard! Ready to paste on X, WhatsApp, etc.");
    });
  };

  if (!isClient) return null; 

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl space-y-12">

        <header className="flex flex-col items-center justify-between sm:flex-row">
          <div className="text-center sm:text-left cursor-pointer" onClick={() => window.location.href = '/'}>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">The Daily Problem</h1>
            <p className="mt-2 text-slate-600">No calculators. Just pure logic.</p>
          </div>
          <div className="mt-4 flex flex-col items-center rounded-lg bg-orange-100 px-4 py-2 text-orange-600 sm:mt-0 sm:items-end">
            <span className="text-xs font-bold uppercase tracking-wider">Current Streak</span>
            <span className="text-xl font-black">🔥 {streak}</span>
          </div>
        </header>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              {activeProblem.date === todayStr ? "Today's Challenge" : "Archived Challenge"}
            </span>
            <span className="text-sm text-slate-400">{activeProblem.displayDate}</span>
          </div>
          
          <h2 className="mb-4 text-xl font-bold text-slate-900">{activeProblem.title}</h2>
          <div className="space-y-4 text-slate-700">
            <p>{activeProblem.context}</p>
            
            {/* NUEVO: Bloque que dibuja la imagen solo si el problema tiene una */}
            {/* @ts-ignore - Evitamos errores si algunos problemas no tienen imageUrl */}
            {activeProblem.imageUrl && (
              <div className="my-6 flex justify-center">
                <img 
                  // @ts-ignore
                  src={activeProblem.imageUrl} 
                  alt={activeProblem.title} 
                  className="rounded-lg border border-slate-200 shadow-sm max-w-full h-auto object-contain max-h-[300px]"
                />
              </div>
            )}

            <ul className="list-inside list-disc space-y-2 pl-2">
              {activeProblem.options.map((option, idx) => {
                const splitOption = option.split(':');
                return (
                  <li key={idx}>
                    {splitOption.length > 1 ? (
                      <><strong>{splitOption[0]}:</strong>{splitOption.slice(1).join(':')}</>
                    ) : (
                      option
                    )}
                  </li>
                )
              })}
            </ul>
            <p className="mt-4 font-medium">Question: {activeProblem.question}</p>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
              <Input 
                type="text" 
                placeholder={isSolved ? "Solved!" : "e.g., 45.2"} 
                className="w-full sm:max-w-[200px]"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                disabled={isSolved}
              />
              <Button onClick={handleSubmit} disabled={isSolved} className="w-full sm:w-auto">
                Submit Answer
              </Button>
              {!isSolved && (
                <Button variant="outline" onClick={() => setShowHint(!showHint)} className="w-full sm:w-auto">
                  {showHint ? "Hide Hint" : "Need a Hint?"}
                </Button>
              )}
            </div>

            {isSolved && (
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center mt-2">
                <Button onClick={handleShare} className="w-full bg-blue-600 hover:bg-blue-700 sm:w-auto">
                  Share Result 📤
                </Button>
                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={includeTime} 
                    onChange={(e) => setIncludeTime(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  Include my time
                </label>
              </div>
            )}

            {feedback.status !== 'idle' && (
              <div className={`rounded-lg p-4 text-sm font-medium ${feedback.status === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                {feedback.message}
              </div>
            )}

            {showHint && !isSolved && (
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                <strong>Hint:</strong> {activeProblem.hint}
              </div>
            )}
          </div>
        </section>

        {/* Historial de Problemas - Ahora dinámico y funcional */}
        <section className="pt-8">
          <h2 className="mb-6 text-lg font-semibold tracking-tight text-slate-900">Problem Archive</h2>
          <div className="relative">
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pastProblems.map((problem) => (
                <li 
                  key={problem.id} 
                  onClick={() => window.location.href = `/?id=${problem.id}`}
                  className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-blue-400 hover:shadow-md cursor-pointer"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {problem.displayDate}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <span>👥</span>
                      <span>{problem.plays}</span>
                    </div>
                  </div>
                  <span className="block text-sm font-semibold text-slate-900">{problem.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}