"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Play, RotateCcw, Monitor, Globe, X, Minus, Square } from "lucide-react";
import { useTranslations } from "@/lib/i18n";

const GRID_SIZE = 20;
const INITIAL_SPEED = 150;

type Point = { x: number; y: number };

export default function SnakeGame() {
  const [snake, setSnake] = useState<Point[]>([{ x: 10, y: 10 }, { x: 10, y: 11 }, { x: 10, y: 12 }]);
  const [food, setFood] = useState<Point>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Point>({ x: 0, y: -1 });
  const [playing, setPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const t = useTranslations();

  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);

  const generateFood = useCallback((currentSnake: Point[]) => {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      if (!currentSnake.some(s => s.x === newFood!.x && s.y === newFood!.y)) break;
    }
    return newFood;
  }, []);

  const moveSnake = useCallback(() => {
    setSnake((prev) => {
      const head = { x: prev[0].x + direction.x, y: prev[0].y + direction.y };

      // Wall Collision
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setGameOver(true);
        setPlaying(false);
        return prev;
      }

      // Self Collision
      if (prev.some(s => s.x === head.x && s.y === head.y)) {
        setGameOver(true);
        setPlaying(false);
        return prev;
      }

      const newSnake = [head, ...prev];

      // Food Collision
      if (head.x === food.x && head.y === food.y) {
        setScore(s => s + 10);
        setFood(generateFood(newSnake));
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, generateFood]);

  useEffect(() => {
    if (playing && !gameOver) {
      gameLoopRef.current = setInterval(moveSnake, Math.max(INITIAL_SPEED - Math.floor(score / 50) * 10, 60));
    } else {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    }
    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [playing, gameOver, moveSnake, score]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if ((key === "w" || key === "arrowup") && direction.y !== 1) setDirection({ x: 0, y: -1 });
      if ((key === "s" || key === "arrowdown") && direction.y !== -1) setDirection({ x: 0, y: 1 });
      if ((key === "a" || key === "arrowleft") && direction.x !== 1) setDirection({ x: -1, y: 0 });
      if ((key === "d" || key === "arrowright") && direction.x !== -1) setDirection({ x: 1, y: 0 });
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  const startGame = () => {
    setSnake([{ x: 10, y: 10 }, { x: 10, y: 11 }, { x: 10, y: 12 }]);
    setFood({ x: 5, y: 5 });
    setDirection({ x: 0, y: -1 });
    setScore(0);
    setGameOver(false);
    setPlaying(true);
  };

  useEffect(() => {
    if (score > highScore) setHighScore(score);
  }, [score, highScore]);

  return (
    <div className="w-full max-w-[400px] mx-auto bg-white dark:bg-neutral-900 rounded-2xl border-4 border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden flex flex-col font-sans select-none aspect-square lg:aspect-auto lg:h-[450px] transition-colors">
      
      {/* Browser Bar */}
      <div className="h-10 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 flex items-center px-4 justify-between transition-colors">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex-1 mx-6 h-6 bg-white dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 flex items-center px-3 gap-2 overflow-hidden transition-colors">
          <Globe className="w-3 h-3 text-neutral-400 dark:text-neutral-500" />
          <span className="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono truncate">agent-skill.co/simulator/snake</span>
        </div>
        <div className="flex gap-3 text-neutral-400 hover:text-neutral-600">
           <Minus className="w-3.5 h-3.5" />
           <Square className="w-2.5 h-2.5 translate-y-0.5" />
           <X className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Game Content Area */}
      <div className="flex-1 relative bg-neutral-50 dark:bg-neutral-900/50 p-4 flex flex-col transition-colors">
        {/* Scoreboard */}
        <div className="flex justify-between items-center mb-4 px-2">
            <div className="flex flex-col">
                <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">{t.snake.score}</span>
                <span className="text-xl font-black text-neutral-800 dark:text-neutral-100">{score}</span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">{t.snake.best}</span>
                <span className="text-xl font-black text-neutral-400 dark:text-neutral-600">{highScore}</span>
            </div>
        </div>

        {/* The Grid Canvas */}
        <div className="flex-1 relative bg-white dark:bg-neutral-900 rounded-xl border-2 border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-inner grid grid-cols-20 grid-rows-20 transition-colors">
          {/* Render Snake */}
          {snake.map((s, i) => (
            <div
              key={i}
              className={`absolute rounded-sm transition-all duration-100 ${i === 0 ? "bg-emerald-500 z-10" : "bg-emerald-400"}`}
              style={{
                width: `${100 / GRID_SIZE}%`,
                height: `${100 / GRID_SIZE}%`,
                left: `${(s.x * 100) / GRID_SIZE}%`,
                top: `${(s.y * 100) / GRID_SIZE}%`,
              }}
            >
              {/* Snake Head Eyes */}
              {i === 0 && (
                <div className="relative w-full h-full flex items-center justify-around px-[15%]">
                    <div className="w-[20%] h-[20%] bg-black rounded-full" />
                    <div className="w-[20%] h-[20%] bg-black rounded-full" />
                </div>
              )}
            </div>
          ))}

          {/* Render Food */}
          <div
            className="absolute rounded-full bg-rose-500 z-10 flex items-center justify-center animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.3)]"
            style={{
              width: `${100 / GRID_SIZE}%`,
              height: `${100 / GRID_SIZE}%`,
              left: `${(food.x * 100) / GRID_SIZE}%`,
              top: `${(food.y * 100) / GRID_SIZE}%`,
            }}
          >
            <div className="w-[40%] h-[20%] bg-emerald-600 rounded-full absolute -top-[20%] right-[30%] rotate-45" />
          </div>

          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: `${100 / GRID_SIZE}% ${100 / GRID_SIZE}%` }} />
          
          {/* Overlays */}
          {!playing && (
            <div className="absolute inset-0 bg-white/60 dark:bg-neutral-900/80 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in duration-300">
                <div className="mb-6">
                    <div className="text-2xl font-black text-neutral-800 dark:text-neutral-100 tracking-tighter mb-1 uppercase">
                        {gameOver ? t.snake.gameOver : t.snake.title}
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed">
                        {t.snake.desc}
                    </p>
                </div>
                <button
                    onClick={startGame}
                    className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-full font-bold text-sm shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all"
                >
                    {gameOver ? <RotateCcw size={16} /> : <Play size={16} fill="currentColor" />}
                    {gameOver ? t.snake.reboot : t.snake.init}
                </button>
            </div>
          )}
        </div>

        {/* Footer controls instruction */}
        <div className="mt-4 flex justify-center items-center gap-6 text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
            <span className="flex items-center gap-1.5"><Monitor size={10} strokeWidth={3}/> {t.snake.controls}</span>
            <span className="w-1 h-1 bg-neutral-300 rounded-full"/>
            <span>{t.snake.mode}</span>
        </div>
      </div>
    </div>
  );
}
