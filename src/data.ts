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
            price: 4.428571,
            curriculum: 4.263158,
            teacher: 4.071429,
            support: 4.250000
        }),
        format: "対面",
        address: "東京都豊島区",
        url: "https://maps.app.goo.gl/xJTevMaD3exVvn1P6",
        scores: {
            price: 4.428571,
            curriculum: 4.263158,
            teacher: 4.071429,
            support: 4.250000
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
    },
    {
        id: "liberty-english-academy",
        name: "リバティイングリッシュアカデミー",
        rating: calculateRating({
            price: 2.272727,
            curriculum: 4.615385,
            teacher: 4.466667,
            support: 4.038462
        }),
        format: "対面とオンライン",
        address: "東京都港区",
        url: "https://maps.app.goo.gl/7GkkvyrdYBQZAd8X8",
        scores: {
            price: 2.272727,
            curriculum: 4.615385,
            teacher: 4.466667,
            support: 4.038462
        },
        reviews: {
            price: [
                "「受講料は高めでも一生使える英語力なら安い」「コスパが良い」と、投資価値を認める声が複数。特に長期的視点で費用対効果を感じている受講者が目立つ。",
                "「授業料が高すぎて続けにくい」「価格に見合わない」といった不満も根強い。料金に見合った成果を実感できなかったケースでは後悔の声も。"
            ],
            curriculum: [
                "独自メソッド「Grammar Table」を中心に、英文構造を論理的に学べる体系的プログラムが高評価。４技能を底上げできるとの声も多数。",
                "「難度が高く基礎がないと厳しい」「Writing／Speaking パートの内容にムラがある」など、コース間の一貫性やレベル設計への指摘が散見。"
            ],
            teacher: [
                "「丁寧で熱心」「弱点を的確にフォロー」と、藤川先生を筆頭に講師陣の指導力を高く評価する声が多数。スコアアップ実績にも直結。",
                "「講師やスタッフ間で質にばらつき」「トップダウンで威圧的」といった相性・指導スタイルへの不満も一定数存在。"
            ],
            support: [
                "「スタッフが親身で相談しやすい」「オンラインでもサポート体制が整っている」など、レスポンスの速さや丁寧さを評価する声がある。",
                "「オンラインクラスのリマインド不足」「カスタマーサポートが不親切」「質問への回答が的外れ」といった対応品質への不満も報告。"
            ]
        },
        referenceUrls: {
            price: [
                "https://maps.app.goo.gl/iXCm12LWGNW8noU17",
                "https://maps.app.goo.gl/HxpSpdzecBioDnje9",
                "https://maps.app.goo.gl/4NAwBVMvZ2Vt5DNh9"
            ],
            curriculum: [
                "https://maps.app.goo.gl/3LUkBugqw5qabUXL8",
                "https://maps.app.goo.gl/xW5pa7LVKqPE1rzo7",
                "https://maps.app.goo.gl/3SSo7eEeXGB3XdBL7"
            ],
            teacher: [
                "https://maps.app.goo.gl/rDkFFKfwoFGb6TLj7",
                "https://maps.app.goo.gl/632h6bnfgbeTBHvg7",
                "https://maps.app.goo.gl/85m8FDDHDR9QEayh9"
            ],
            support: [
                "https://maps.app.goo.gl/FtMtXipR5ebwwwoEA",
                "https://maps.app.goo.gl/9UpNd54say8oFYXB9",
                "https://maps.app.goo.gl/WZWwZGWnNmRfr3KM7"
            ]
        }
    },
    {
        id: "berkeley-house",
        name: "バークレーハウス語学センター",
        rating: calculateRating({
            price: 1.333333,
            curriculum: 3.714286,
            teacher: 4.166667,
            support: 3.500000
        }),
        format: "対面とオンライン",
        address: "東京都千代田区",
        url: "https://maps.app.goo.gl/bmb9NK7rQrNhJtVJ7",
        scores: {
            price: 1.333333,
            curriculum: 3.714286,
            teacher: 4.166667,
            support: 3.500000
        },
        reviews: {
            price: [
                "「他のIELTS対策スクールより遥かに高額」「高い授業料を払っているのに」といった、料金設定が割高であるという意見や、費用対効果に疑問を持つ声が見られます。"
            ],
            curriculum: [
                "IELTSやビジネス英会話など、個人の目的に合わせて「レッスン内容をカスタムしてもらえた」点や、それによって「スコアが1.0上がった」「商談がスムーズに進んだ」といった具体的な成果に繋がっている点が高く評価されています。",
                "一方で、「受講後に成績が下がった」「通っているだけでは習得できそうにない」といった、効果を疑問視する声も存在します。"
            ],
            teacher: [
                "「弱点を把握してしっかり対策してくれた」「講師がとても良い」と、指導力やレベルアップの実感を評価する声が多数あります。",
                "ただし、「講師によって当たり外れがある」「文法を間違える講師がいた」など、講師の質にばらつきがある点を指摘する声も見られました。"
            ],
            support: [
                "「カウンセリングで丁寧に悩みを聞いてもらえた」「スタッフはとても礼儀正しくて親切」など、受講生に寄り添う姿勢を評価する声があります。",
                "一方で、「カウンセリングが雑」「不都合な口コミを削除するなど対応が不誠実」といった、サポート体制や学校側の姿勢に対する厳しい批判も報告されています。"
            ]
        },
        referenceUrls: {
            price: [
                "https://maps.app.goo.gl/biKAVzdqMPWYxE6G7",
                "https://maps.app.goo.gl/3rQcSJ6PYhAEWvfv7"
            ],
            curriculum: [
                "https://maps.app.goo.gl/1X9mt9uNHzpVRVNe9",
                "https://maps.app.goo.gl/7dZyCHJZVVoWz9QE8"
            ],
            teacher: [
                "https://maps.app.goo.gl/RnW6kHWVD7j8eiEM6",
                "https://maps.app.goo.gl/3rQcSJ6PYhAEWvfv7"
            ],
            support: [
                "https://maps.app.goo.gl/hqKAumt1cvw1HzfX8",
                "https://maps.app.goo.gl/biKAVzdqMPWYxE6G7"
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
