"use client";
import { useState } from "react";
import Link from "next/link";
import { getRecommendations } from "@/lib/rackets";
import RacketCard from "@/components/RacketCard";

const STEPS = [
  {
    key: "level",
    label: "Step 1 of 4",
    title: "What's your level?",
    sub: "Be honest — the right racket for your level makes a bigger difference than you'd think.",
    options: [
      { value: "beginner", icon: "🌱", title: "Beginner", desc: "Playing under 1 year, still building consistency" },
      { value: "intermediate", icon: "⚡", title: "Intermediate", desc: "Comfortable with the basics, developing tactics" },
      { value: "advanced", icon: "🏆", title: "Advanced", desc: "Compete regularly, strong technical game" },
    ],
  },
  {
    key: "position",
    label: "Step 2 of 4",
    title: "Where do you play?",
    sub: "Court position shapes everything — racket shape, balance, and sweet spot size all differ by side.",
    options: [
      { value: "right", icon: "🎯", title: "Right side", desc: "Drive, volleys, control from the deuce court" },
      { value: "left", icon: "💥", title: "Left side", desc: "Power, smashes, attacking from the ad court" },
      { value: "both", icon: "🔄", title: "Both / flexible", desc: "Switch sides, or still figuring out your position" },
    ],
  },
  {
    key: "background",
    label: "Step 3 of 4",
    title: "Racket sport background",
    sub: "Your history shapes your instincts — tennis players prefer larger sweet spots, squash players want rapid response.",
    options: [
      { value: "none", icon: "🆕", title: "No background", desc: "Padel is my first racket sport" },
      { value: "tennis", icon: "🎾", title: "Tennis", desc: "Used to full swings and flat drives" },
      { value: "squash", icon: "🟡", title: "Squash", desc: "Quick wrist, tight spaces, rapid response" },
      { value: "badminton", icon: "🏸", title: "Badminton", desc: "Finesse, touch, net play" },
    ],
  },
];

const STYLE_LABELS = ["Control", "Control-leaning", "Balanced", "Power-leaning", "Power"];
const PACE_LABELS = ["Defensive", "Steady", "Medium", "Attacking", "Aggressive"];

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ level: null, position: null, background: null, style: 50, pace: 50 });
  const [results, setResults] = useState(null);

  const currentStep = STEPS[step];
  const isSliderStep = step === 3;
  const isComplete = !!results;

  function select(key, val) {
    setAnswers((prev) => ({ ...prev, [key]: val }));
  }

  function next() {
    if (step < 3) setStep((s) => s + 1);
  }

  function back() {
    if (step > 0) setStep((s) => s - 1);
  }

  function submit() {
    setResults(getRecommendations(answers, 3));
  }

  function restart() {
    setAnswers({ level: null, position: null, background: null, style: 50, pace: 50 });
    setStep(0);
    setResults(null);
  }

  const canContinue = isSliderStep || (currentStep && answers[currentStep.key] !== null);

  if (isComplete) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-8">
          <p className="section-label text-lime mb-2">Your recommendations</p>
          <h1 className="font-display text-4xl md:text-5xl tracking-wide mb-3">Top picks for your game</h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/50">
            <span>Level: <strong className="text-white/80 font-medium capitalize">{answers.level}</strong></span>
            <span>Position: <strong className="text-white/80 font-medium capitalize">{answers.position === "both" ? "Both sides" : `${answers.position} side`}</strong></span>
            <span>Style: <strong className="text-white/80 font-medium">{STYLE_LABELS[Math.round(answers.style / 25)]}</strong></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {results.map((r, i) => (
            <RacketCard key={r.id} racket={r} rank={i} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center p-5 bg-white/[0.03] border border-white/[0.07] rounded-xl">
          <p className="text-sm text-white/50">Not quite right? Change your answers and try again.</p>
          <button onClick={restart} className="btn-secondary text-sm whitespace-nowrap">Retake quiz</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      {/* Progress */}
      <div className="flex gap-2 mb-10">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === step ? "flex-[2] bg-lime" : i < step ? "flex-1 bg-white/30" : "flex-1 bg-white/10"
            }`}
          />
        ))}
      </div>

      {/* Option step */}
      {!isSliderStep && (
        <div>
          <p className="section-label text-lime mb-3">{currentStep.label}</p>
          <h1 className="font-display text-4xl md:text-5xl tracking-wide mb-3">{currentStep.title}</h1>
          <p className="text-white/50 text-sm leading-relaxed mb-8">{currentStep.sub}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
            {currentStep.options.map((opt) => {
              const selected = answers[currentStep.key] === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => select(currentStep.key, opt.value)}
                  className={`text-left p-5 rounded-xl border transition-all duration-150 ${
                    selected
                      ? "bg-lime/[0.08] border-lime"
                      : "bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.07] hover:border-lime/30"
                  }`}
                >
                  <div className="text-2xl mb-3">{opt.icon}</div>
                  <div className="font-medium text-sm text-white mb-1">{opt.title}</div>
                  <div className="text-xs text-white/50 leading-relaxed">{opt.desc}</div>
                </button>
              );
            })}
          </div>

          <div className="flex justify-between items-center">
            {step > 0 ? (
              <button onClick={back} className="btn-secondary text-sm">← Back</button>
            ) : (
              <div />
            )}
            <button onClick={next} disabled={!canContinue} className="btn-primary text-sm disabled:opacity-30 disabled:cursor-not-allowed">
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* Slider step */}
      {isSliderStep && (
        <div>
          <p className="section-label text-lime mb-3">Step 4 of 4</p>
          <h1 className="font-display text-4xl md:text-5xl tracking-wide mb-3">Dial in your style</h1>
          <p className="text-white/50 text-sm leading-relaxed mb-10">
            Move both sliders to reflect how you naturally play.
          </p>

          {/* Style slider */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-white">Playing style</span>
              <span className="font-display text-xl text-lime tracking-wide">
                {STYLE_LABELS[Math.round(answers.style / 25)]}
              </span>
            </div>
            <input
              type="range" min="0" max="100" step="1" value={answers.style}
              onChange={(e) => setAnswers((prev) => ({ ...prev, style: +e.target.value }))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-white/30 mt-2 uppercase tracking-widest">
              <span>Control</span><span>Power</span>
            </div>
          </div>

          {/* Pace slider */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-white">Pace of play</span>
              <span className="font-display text-xl text-lime tracking-wide">
                {PACE_LABELS[Math.round(answers.pace / 25)]}
              </span>
            </div>
            <input
              type="range" min="0" max="100" step="1" value={answers.pace}
              onChange={(e) => setAnswers((prev) => ({ ...prev, pace: +e.target.value }))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-white/30 mt-2 uppercase tracking-widest">
              <span>Defensive</span><span>Aggressive</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button onClick={back} className="btn-secondary text-sm">← Back</button>
            <button onClick={submit} className="btn-primary text-sm">Find my racket →</button>
          </div>
        </div>
      )}
    </div>
  );
}
