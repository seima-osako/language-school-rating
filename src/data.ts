export interface SchoolType {
    id: string;
    name: string;
    rating: string;
    format: string;
    address: string;
    url: string;
    scores: {
        price: number;
        curriculum: number;
        teacher: number;
        support: number;
    };
    reviews: {
        price: string[];
        curriculum: string[];
        teacher: string[];
        support: string[];
    };
    referenceUrls: {
        price: string[];
        curriculum: string[];
        teacher: string[];
        support: string[];
    };
}

// レーティング計算関数
export function calculateRating(scores: { price: number; curriculum: number; teacher: number; support: number }): string {
    const average = (scores.price + scores.curriculum + scores.teacher + scores.support) / 4;
    if (average >= 4.5) return "A+";
    if (average >= 4.0) return "A";
    if (average >= 3.0) return "B";
    return "C";
}

export const schoolsData: SchoolType[] = [
    {
        id: "ielts-trainer-pro",
        name: "IELTS TRAINER PRO",
        rating: calculateRating({
            price: 4.571429,
            curriculum: 4.619048,
            teacher: 4.590909,
            support: 4.428571
        }),
        format: "対面",
        address: "東京池袋",
        url: "https://maps.app.goo.gl/xJTevMaD3exVvn1P6",
        scores: {
            price: 4.571429,
            curriculum: 4.619048,
            teacher: 4.590909,
            support: 4.428571
        },
        reviews: {
            price: [
                "多くの受講者が「コスパが良い」「リーズナブルで続けやすい」と評しており、特に6ヶ月プランや短期集中コースで費用対効果を実感しています。",
                "一方で「料金が高すぎて続けられない」「費用に見合った価値を感じない」といったネガティブな声も散見されます。"
            ],
            curriculum: [
                "４技能（リーディング・リスニング・ライティング・スピーキング）をバランスよく、しかも実践的に学べる体系的な構成が高く評価されています。",
                "一方で「市販テキストとあまり変わらない」「コース間で進度や内容にムラがある」との指摘もあり、安定性に不安を感じる方も。"
            ],
            teacher: [
                "「教え方が丁寧で熱心」「弱点を的確にフォローしてくれる」と、講師レベルの高さを実感する声が多数あります。",
                "ただし「講師によって教え方に差が大きい」「説明が雑で質問をはぐらかされる」といった相性や質のムラを指摘する口コミも。"
            ],
            support: [
                "「質問へのレスポンスが速い」「どんな細かい疑問にも親身に答えてくれる」といった、サポート体制の手厚さを評価する声が目立ちます。",
                "一方で代講時の引き継ぎ不足や対応の事務的さで「忙しそう」「相性の合わない先生に当たる」といった不満も報告されています。"
            ]
        },
        referenceUrls: {
            price: [
                "https://maps.app.goo.gl/LEsHru7UZmVHmYg2A",
                "https://maps.app.goo.gl/EvGgyYHG9yZ5MVmH8"
            ],
            curriculum: [
                "https://maps.app.goo.gl/raTwhLDdNjSFRMH7A",
                "https://maps.app.goo.gl/1bJjpaQuGX7J7SNo6"
            ],
            teacher: [
                "https://maps.app.goo.gl/JC4jqFfHZ8dRqLp36",
                "https://maps.app.goo.gl/1bJjpaQuGX7J7SNo6"
            ],
            support: [
                "https://maps.app.goo.gl/NgGY8gqZA9SWcT1n6",
                "https://maps.app.goo.gl/1iCBx1JLxAfGF1gp8"
            ]
        }
    }
];

export const dummyReviewsData = {
    "ielts-trainer-pro": {
        price: "料金に関する詳細なレビュー...",
        curriculum: "カリキュラムに関する詳細なレビュー...",
        teacher: "講師の質に関する詳細なレビュー...",
        support: "質問対応に関する詳細なレビュー..."
    }
};
