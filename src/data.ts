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
    },
    {
        id: "alpros",
        name: "総合英語学校アルプロス",
        rating: calculateRating({
            price: 3.000000,
            curriculum: 4.400000,
            teacher: 4.428571,
            support: 4.400000
        }),
        format: "対面とオンライン",
        address: "東京都新宿区",
        url: "https://maps.app.goo.gl/XYFCDkUx3q94QSD29",
        scores: {
            price: 3.000000,
            curriculum: 4.400000,
            teacher: 4.428571,
            support: 4.400000
        },
        reviews: {
            price: [
                "今回参照した口コミの中では、料金設定に関する具体的な言及は非常に限定的でした。",
                "一件の口コミで「決して学費はお安くはない」と述べられていますが、同時に「その分授業の質が高く、満足しております」と続いており、価格に見合った価値があると感じられているようです。"
            ],
            curriculum: [
                "個人の目標達成に向けた、柔軟で効果的なカリキュラムが高く評価されています。特に、IELTSやTOEICのスコアアップ、ビジネスでの実践といった目的に合わせ、「マンツーマンレッスン」や「個人に合わせたカリキュラム」を組んでもらえる点が、「目標点を達成できた」「効果的だった」といった具体的な成果に繋がっています。",
                "また、「4技能をしっかり提供」「少人数クラスでじっくり勉強できる」といった、着実に実力を伸ばせる学習環境も評価の対象となっています。"
            ],
            teacher: [
                "講師の指導力や受講生への向き合い方を評価する声が多数見られます。",
                "「細かくフィードバックをくれる」「的確な指導」といったスキル面での評価に加え、「積極的に教えてくれる」「分かりやすく楽しい」など、講師の熱意や人柄が、学習者の満足度やモチベーション向上に貢献している様子がうかがえます。"
            ],
            support: [
                "授業内外でのサポート体制に満足する声が挙がっています。",
                "授業で分からなかった点を後から質問した際に「丁寧に教えて貰えた」という直接的な質問対応や、IELTSの模擬テスト後に「丁寧なフィードバックをいただけた」という、個々の弱点を克服するためのサポートが高く評価されています。"
            ]
        },
        referenceUrls: {
            price: [
                "https://maps.app.goo.gl/FH9jGBVd7UeHgrdF9"
            ],
            curriculum: [
                "https://maps.app.goo.gl/FH9jGBVd7UeHgrdF9",
                "https://maps.app.goo.gl/qkvdd8UVJQA7oPQt8"
            ],
            teacher: [
                "https://maps.app.goo.gl/46j4LqDw8DgLH8Z5A",
                "https://maps.app.goo.gl/t4KUcvmSpauYW3Py5"
            ],
            support: [
                "https://maps.app.goo.gl/46j4LqDw8DgLH8Z5A",
                "https://maps.app.goo.gl/hqKAumt1cvw1HzfX8"
            ]
        }
    },
    {
        id: "british-council",
        name: "ブリティッシュ・カウンシル",
        rating: calculateRating({
            price: 1.666667,
            curriculum: 3.687500,
            teacher: 3.400000,
            support: 2.285714
        }),
        format: "対面",
        address: "東京都新宿区",
        url: "https://maps.app.goo.gl/km62x55N2vcUGuK27",
        scores: {
            price: 1.666667,
            curriculum: 3.687500,
            teacher: 3.400000,
            support: 2.285714
        },
        reviews: {
            price: [
                "「授業料が異常に高く、コスパが相当に悪い」といった、料金設定が割高であるという意見や、「少なくないお金を払っている」にもかかわらず、サービス品質が伴っていないという費用対効果への不満の声が明確に見られます。",
                "また、「徐々に値は上がっているみたいです」という報告もあり、価格面では厳しい評価が中心です。"
            ],
            curriculum: [
                "「他にはないクラスがある」「英語圏の文化を学ぶ雰囲気」「授業が楽しい」など、ユニークなクラスや学習環境、授業スタイルを評価する声があります。また、予約システムが柔軟で「自分の都合の良い時間で直前予約できる」点をメリットとして挙げる意見も見られました。",
                "一方で、「基本的には日本人の生徒同士で話すので、成長するかと言われると疑問」「長年通うと効果が薄い」など、特に会話力向上への効果を疑問視する声も存在します。初心者の第一歩としては良いが、それ以上の成長は難しいという指摘もされています。"
            ],
            teacher: [
                "「講師のレベルは高い」「先生方も明るくどの授業も凄く楽しい」「一人一人きちんとケアーしてくれる」と、指導力や人柄、生徒へのサポート姿勢を高く評価する声が多数あります。",
                "ただし、「講師によってやる気の有無が全然違います」「指導員のレベルにばらつきが大きく、ハズレの教師に当たると最悪」といった、講師の質が均一ではないという点が繰り返し指摘されています。素晴らしい講師がいる一方で、そうではない講師に当たるリスクもあるようです。"
            ],
            support: [
                "クレームに対して「翌週から講師変更」されたり、「校長先生からも謝罪のメールがきた」りと、正式な申し立てには誠実に対応する姿勢が見られます。",
                "しかしながら、「電話がつながらずいつも留守電、折り返しの電話もない」「生徒から先生に対するフィードバックの機会がほぼない」など、日常的な窓口業務やフィードバックの仕組みが機能していないという厳しい批判が複数あります。また、試験監督の対応やスタッフの案内能力にも問題が指摘されており、運営全体の安定性には課題があるようです。"
            ]
        },
        referenceUrls: {
            price: [
                "https://maps.app.goo.gl/RwoPcjeGTRp7xgzN8",
                "https://maps.app.goo.gl/FojeJmFKvLsjJBiQ6"
            ],
            curriculum: [
                "https://maps.app.goo.gl/apKHSXkzsqSzrhGG6",
                "https://maps.app.goo.gl/QgGermHUjeV49KdcA"
            ],
            teacher: [
                "https://maps.app.goo.gl/eKmr3TEGQNLro6ia9",
                "https://maps.app.goo.gl/RwoPcjeGTRp7xgzN8"
            ],
            support: [
                "https://maps.app.goo.gl/qs5hPGP9RRxjFXpn8",
                "https://maps.app.goo.gl/QgGermHUjeV49KdcA"
            ]
        }
    },
    {
        id: "english-innovations-osaka",
        name: "イングリッシュイノベーションズ大阪校",
        rating: calculateRating({
            price: 5.000000,
            curriculum: 4.000000,
            teacher: 4.454545,
            support: 3.666667
        }),
        format: "対面",
        address: "大阪府大阪市北区",
        url: "https://maps.app.goo.gl/bVGNEvsnihrAVaiU8",
        scores: {
            price: 5.000000,
            curriculum: 4.000000,
            teacher: 4.454545,
            support: 3.666667
        },
        reviews: {
            price: [
                "今回の分析対象の口コミの中では、料金に関する言及は1件のみでした。その口コミでは「他の学校と比べると、授業料がとても安く、かつ高い質の授業を受けることができる」と、コストパフォーマンスの高さを絶賛しています。",
                "ただし、言及している口コミが非常に少ないため、料金設定に関する全体的な傾向を判断するには情報が不十分です。"
            ],
            curriculum: [
                "「1ヶ月でTOEICスコアが300点台から500点に上がった」「IELTSのライティングで塾のテンプレートが有効だった」など、スコアアップに直結する具体的な成果を評価する声が多数見られます。また、「授業が全て英語」である点や、「楽しくスコアアップできた」という点から、学習効果と楽しさを両立したカリキュラムであることが伺えます。",
                "一方で、「半年間通学して得点は入会前比20%ダウンしました」という、効果に強く疑問を呈する意見も1件ありました。"
            ],
            teacher: [
                "講師の質に関しては、肯定的な意見が大半を占めています。「先生方はプロフェッショナル」「説明や解説も分かりやすく、凄く勉強になりました」といった指導力を評価する声や、「優しくて面白い」「フレンドリーで丁寧に接してくださる」など、講師の人柄やコミュニケーションの取りやすさを高く評価する声が目立ちます。",
                "ただし、1件の口コミでは「ネイティブアルバイト教師による個人フォローの無い集合学習」という運用体制への不満が述べられており、これがスコアダウンに繋がったと指摘されています。"
            ],
            support: [
                "「先生に聞いたらちゃんと答えてくれる」「質問しやすい環境でした」など、生徒が疑問を解消しやすい環境であることを評価する声が見られます。",
                "その一方で、「個人フォローが無い」というサポート体制の不足を指摘する否定的な意見もありました。カウンセリングなど、授業外でのサポート体制に関する言及は少なく、この項目で全体の傾向を判断するには、より多くの情報が必要です。"
            ]
        },
        referenceUrls: {
            price: [
                "https://maps.app.goo.gl/hF5uhModtgetWNpG7"
            ],
            curriculum: [
                "https://maps.app.goo.gl/6XQbp3Vja4kWUoqv9",
                "https://maps.app.goo.gl/xV93hwkcvVTfi5Se6"
            ],
            teacher: [
                "https://maps.app.goo.gl/MKkmdm7aG6JboqWi6",
                "https://maps.app.goo.gl/xV93hwkcvVTfi5Se6"
            ],
            support: [
                "https://maps.app.goo.gl/vPXmsCWC9Ty7qn2C6",
                "https://maps.app.goo.gl/xV93hwkcvVTfi5Se6"
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
