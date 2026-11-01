import React, { useState } from 'react';
import { X, Sparkles, Compass, RefreshCw, ArrowRight, Waves } from 'lucide-react';

interface SurfAdvisorModalProps {
  onClose: () => void;
  onSelectRecommendedLesson: (lessonName: string) => void;
}

interface Recommendation {
  recommendedLesson: string;
  rationale: string;
  tip: string;
  weeklyFrequency: string;
}

const GOALS = [
  'Stand up for the first time',
  'Catch unbroken green waves',
  'Improve my turns & style',
  'Learn at my own pace, one-on-one',
];

// Used when the AI endpoint is unavailable
const FALLBACKS: Record<string, Recommendation> = {
  'Stand up for the first time': {
    recommendedLesson: 'Beginner lesson',
    rationale: 'Our beginner lesson starts on the sand with safety and pop-up drills, then moves into gentle whitewash where standing up comes naturally.',
    tip: 'Look at the beach, not your feet.',
    weeklyFrequency: '3-5 lessons in your first week'
  },
  'Catch unbroken green waves': {
    recommendedLesson: 'Intermediate coaching',
    rationale: 'Intermediate coaching takes you out past the whitewash to learn positioning, timing and angled take-offs on real green waves.',
    tip: 'Paddle two extra strokes, then pop up.',
    weeklyFrequency: '3-4 sessions per week'
  },
  'Improve my turns & style': {
    recommendedLesson: 'Advanced performance',
    rationale: 'Advanced performance sessions on the reef and point use video analysis to break down your turns and build speed and flow.',
    tip: 'Speed comes from the bottom turn.',
    weeklyFrequency: '2-3 filmed sessions per week'
  },
  'Learn at my own pace, one-on-one': {
    recommendedLesson: 'Private coaching',
    rationale: 'Private coaching gives you a coach to yourself, a plan built around your goals, and session times matched to the best tide.',
    tip: 'Relax your shoulders, breathe, and enjoy it.',
    weeklyFrequency: '2-4 sessions per week'
  }
};

export const SurfAdvisorModal: React.FC<SurfAdvisorModalProps> = ({
  onClose,
  onSelectRecommendedLesson,
}) => {
  const [goal, setGoal] = useState<string>(GOALS[0]);
  const [experience, setExperience] = useState<string>('Never surfed');
  const [fitness, setFitness] = useState<string>('Comfortable swimmer');
  const [loading, setLoading] = useState<boolean>(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goal, experience, fitness }),
      });

      if (!response.ok) throw new Error('Advisor unavailable');
      setRecommendation(await response.json());
    } catch {
      setRecommendation(FALLBACKS[goal] || FALLBACKS[GOALS[0]]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#f4efe6] text-[#3d372e] p-6 sm:p-8 shadow-2xl border border-[#dcd4c4] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#e6dfd1] text-[#3d372e] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#2a362a] mb-1">
          <Sparkles className="w-4 h-4 text-amber-700" />
          <span>Brave Lesson Advisor</span>
        </div>
        <h3 className="font-serif-cormorant text-3xl font-light tracking-[0.14em] uppercase text-[#2a362a] mb-6">
          FIND YOUR LESSON
        </h3>

        {!recommendation ? (
          <div className="space-y-5 font-sans-body text-xs">
            <div>
              <label className="block font-semibold uppercase tracking-wider mb-2 text-[#3d372e]">
                1. What's your surf goal?
              </label>
              <div className="grid grid-cols-1 gap-2">
                {GOALS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setGoal(option)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      goal === option
                        ? 'border-[#2a362a] bg-[#2a362a] text-[#f4efe6] font-semibold'
                        : 'border-[#d2c9b8] bg-[#e9e2d4] text-[#3d372e] hover:border-[#2a362a]/50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold uppercase tracking-wider mb-1.5 text-[#3d372e]">
                  2. Experience
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#e9e2d4] border border-[#d2c9b8] text-[#2a362a] focus:outline-none focus:border-[#2a362a]"
                >
                  <option value="Never surfed">Never surfed</option>
                  <option value="A few lessons">A few lessons</option>
                  <option value="Surfing regularly">Surfing regularly</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider mb-1.5 text-[#3d372e]">
                  3. In the Water
                </label>
                <select
                  value={fitness}
                  onChange={(e) => setFitness(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#e9e2d4] border border-[#d2c9b8] text-[#2a362a] focus:outline-none focus:border-[#2a362a]"
                >
                  <option value="A bit nervous">A bit nervous</option>
                  <option value="Comfortable swimmer">Comfortable swimmer</option>
                  <option value="Strong & confident">Strong & confident</option>
                </select>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full py-4 rounded-full bg-[#2a362a] text-[#f4efe6] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#1e271e] transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-amber-200" />
                    <span>Reading the Conditions...</span>
                  </>
                ) : (
                  <>
                    <Compass className="w-4 h-4 text-amber-200" />
                    <span>Find My Lesson</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 font-sans-body">
            <div className="bg-[#e9e2d4] p-6 rounded-2xl border border-[#d2c9b8]">
              <span className="text-[0.625rem] uppercase font-semibold text-emerald-800 tracking-widest block mb-1">
                Your Best Match
              </span>
              <h4 className="font-serif-cormorant text-3xl font-normal text-[#2a362a] uppercase">
                {recommendation.recommendedLesson}
              </h4>

              <p className="text-xs text-[#5c5448] font-light leading-relaxed mt-3">
                {recommendation.rationale}
              </p>

              <div className="mt-4 pt-4 border-t border-[#d2c9b8] flex flex-col space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#2a362a]">
                  <Waves className="w-4 h-4 text-sky-700" />
                  <span className="italic font-serif-cormorant text-base">"{recommendation.tip}"</span>
                </div>
                <div className="text-[0.6875rem] text-[#6b6255]">
                  <span className="font-semibold text-[#2a362a]">Suggested pace:</span> {recommendation.weeklyFrequency}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setRecommendation(null)}
                className="w-1/2 py-3 rounded-full border border-[#8a8174]/40 text-[#3d372e] text-xs uppercase tracking-wider"
              >
                Start Over
              </button>
              <button
                onClick={() => {
                  onSelectRecommendedLesson(recommendation.recommendedLesson);
                  onClose();
                }}
                className="w-1/2 py-3 rounded-full bg-[#2a362a] text-[#f4efe6] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#1e271e] flex items-center justify-center gap-2 shadow-md"
              >
                <span>View Lesson</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
