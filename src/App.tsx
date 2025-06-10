import { useState } from "react";
import { schoolsData, dummyReviewsData } from "./data";
import type { SchoolType } from "./data";
import { motion, AnimatePresence } from "framer-motion";
import { Star, School, X } from "lucide-react";

// ratingを比較用数値に変換
function ratingToScore(rating: string): number {
  if (rating === "A+") return 3;
  if (rating === "A") return 2;
  if (rating === "B") return 1;
  return 0;
}

// 円形プログレスバーコンポーネント
function CircleProgress({ value, max = 100, label }: { value: number; max?: number; label: React.ReactNode }) {
  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const percent = Math.min(value / max, 1);
  const strokeDashoffset = circumference * (1 - percent);

  return (
    <div className="flex flex-col items-center">
      <svg height={radius * 2} width={radius * 2} className="mb-2">
        <circle
          stroke="#334155"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <motion.circle
          stroke="#6366f1"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1 }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="1.2em"
          fill="#fff"
        >
          {value}
        </text>
      </svg>
      <span className="text-xs text-slate-400">{label}</span>
    </div>
  );
}

// データは src/data.ts からインポート

export default function App() {
  const [selected, setSelected] = useState<SchoolType | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [reviewOpen, setReviewOpen] = useState({
    support: true,
    price: true,
    teacher: true,
    curriculum: true,
  });

  // dummyReviewsData は直接使用せず、selected.id に基づいて取得

  const toggleReview = (key: keyof typeof reviewOpen) => {
    setReviewOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const sortedSchools = [...schoolsData].sort((a, b) => {
    const aScore = ratingToScore(a.rating);
    const bScore = ratingToScore(b.rating);
    return sortOrder === "asc" ? aScore - bScore : bScore - aScore;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="px-4 py-10">
        <h1 className="text-4xl font-bold mb-8 text-center flex items-center justify-center gap-3">
          <School className="w-10 h-10 text-indigo-400" />
          英語スクール評価システム
        </h1>

        <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="pb-2 sm:pb-4 text-indigo-300 font-semibold text-xs sm:text-lg min-w-[100px]">スクール名</th>
                  <th
                    className="pb-2 sm:pb-4 text-indigo-300 font-semibold text-xs sm:text-lg cursor-pointer select-none hover:text-indigo-200 transition-colors min-w-[80px]"
                    onClick={() => setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))}
                  >
                    総合Rating
                    <span className="ml-2 text-sm">{sortOrder === "asc" ? "▲" : "▼"}</span>
                  </th>
                  <th className="pb-2 sm:pb-4 text-indigo-300 font-semibold text-xs sm:text-lg min-w-[80px]">提供形式</th>
                  <th className="pb-2 sm:pb-4 text-indigo-300 font-semibold text-xs sm:text-lg min-w-[120px]">住所</th>
                  <th className="pb-2 sm:pb-4 text-indigo-300 font-semibold text-xs sm:text-lg min-w-[120px]">URL</th>
                  <th className="pb-2 sm:pb-4 text-indigo-300 font-semibold text-xs sm:text-lg min-w-[80px]">詳細</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {sortedSchools.map((school, index) => (
                  <motion.tr
                    key={school.id}
                    className="group hover:bg-indigo-900/30 transition-all duration-300 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="py-2 sm:py-6 pr-2 sm:pr-6 text-xs sm:text-base min-w-[100px]">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="p-1 sm:p-2 bg-indigo-600/20 rounded-lg group-hover:bg-indigo-600/40 transition-colors">
                          <School className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
                        </div>
                        <span className="font-semibold text-xs sm:text-lg">{school.name}</span>
                      </div>
                    </td>
                    <td className="py-2 sm:py-6 pr-2 sm:pr-6 text-xs sm:text-base min-w-[80px]">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                        <span className="text-lg sm:text-2xl font-bold text-yellow-400">{school.rating}</span>
                      </div>
                    </td>
                    <td className="py-2 sm:py-6 pr-2 sm:pr-6 text-xs sm:text-base min-w-[80px]">{school.format}</td>
                    <td className="py-2 sm:py-6 pr-2 sm:pr-6 text-xs sm:text-base min-w-[120px]">{school.address}</td>
                    <td className="py-2 sm:py-6 pr-2 sm:pr-6 text-xs sm:text-base min-w-[120px]">
                      <a
                        href={school.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors break-all"
                      >
                        {school.url.replace('https://', '')}
                      </a>
                    </td>
                    <td className="py-2 sm:py-6 text-xs sm:text-base min-w-[80px]">
                      <motion.button
                        className="px-3 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => setSelected(school)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        レーティングを見る
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 詳細モーダル */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-slate-900/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <button
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-full transition-all"
                  onClick={() => setSelected(null)}
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl mb-4">
                    <Star className="w-12 h-12 text-yellow-400 fill-yellow-400" />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-yellow-400">{selected.rating}</div>
                  <div className="text-2xl text-indigo-300 font-semibold">{selected.name}</div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <CircleProgress value={selected.scores.price} max={5} label="料金" />
                  <CircleProgress value={selected.scores.curriculum} max={5} label="カリキュラム" />
                  <CircleProgress value={selected.scores.teacher} max={5} label="講師の質" />
                  <CircleProgress value={selected.scores.support} max={5} label="質問対応" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-300 mb-4">口コミ・レビュー</h3>
                  {(["price", "curriculum", "teacher", "support"] as const).map((key) => (
                    <div key={key} className="bg-slate-800/50 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-indigo-300 font-semibold">
                          {key === "support" && "質問対応"}
                          {key === "price" && "料金"}
                          {key === "teacher" && "講師の質"}
                          {key === "curriculum" && "カリキュラム"}
                        </span>
                        <button
                          className="text-sm px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 hover:text-white transition-colors"
                          onClick={() => toggleReview(key)}
                        >
                          {reviewOpen[key] ? "隠す" : "表示"}
                        </button>
                      </div>
                      <AnimatePresence initial={false}>
                        {reviewOpen[key] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-2 text-slate-200 leading-relaxed">
                              {selected && dummyReviewsData[selected.id] ? dummyReviewsData[selected.id][key] : "口コミはありません"}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div >
  );
}
