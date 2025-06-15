export interface SchoolType {
    id: string;
    name: string;
    rating: string;
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
    },
    {
        id: "gset",
        name: "GSET",
        rating: calculateRating({
            price: 2.904762,
            curriculum: 3.939394,
            teacher: 3.236842,
            support: 2.722222
        }),
        address: "東京都新宿区",
        url: "https://maps.app.goo.gl/nQEwjxksMWAhWzkb7",
        scores: {
            price: 2.904762,
            curriculum: 3.939394,
            teacher: 3.236842,
            support: 2.722222
        },
        reviews: {
            price: [
                "料金は高めと認識されていますが、発音改善の効果を実感した層からは価格に見合うと評価される一方、講師の質などに不満を持つ層からはコストパフォーマンスが低いとの意見も見られます。月謝制で手続きが簡単な点は利点とされています。"
            ],
            curriculum: [
                "「発音とリズム」に特化し、「毎日の宿題とフィードバック」を繰り返すトレーニング形式が高く評価されています。これにより学習が習慣化し、リスニング力の向上に繋がるとの声が多数あります。ただし、宿題の提出方法が煩雑な点や、文法・語彙は自習が必要な点が指摘されています。"
            ],
            teacher: [
                "講師の質は「当たり外れがある」という意見が多く、評価が最も分かれる項目です。「熱心で的確な指導」を称賛する声がある一方で、講師によって指摘内容が異なる「評価のバラツキ」への不満も多数見られます。"
            ],
            support: [
                "メールでの問い合わせや追加セッションなど、授業外のサポートは丁寧だと評価されています。しかし、やり取りが基本的に英語のため、初心者や複雑な質問をしたい受講者には難易度が高いという課題も挙げられています。"
            ]
        },
        referenceUrls: {
            price: [
                "https://maps.app.goo.gl/S43EKo4KF2RwZTCp9",
                "https://maps.app.goo.gl/yd4fDbAmtVEvx85h6"
            ],
            curriculum: [
                "https://maps.app.goo.gl/yd4fDbAmtVEvx85h6",
                "https://maps.app.goo.gl/CsFxnBxV2QzQdYpo8"
            ],
            teacher: [
                "https://maps.app.goo.gl/DQYkVAqGD8uMh7zd6",
                "https://maps.app.goo.gl/hF3mpm2FmwCGd7ED8"
            ],
            support: [
                "https://maps.app.goo.gl/yd4fDbAmtVEvx85h6",
                "https://maps.app.goo.gl/nv4qcN3vGCaYXfc5A"
            ]
        }
    },
    {
        id: "english-innovations-shinjuku",
        name: "イングリッシュイノベーションズ新宿校",
        rating: calculateRating({
            price: 3.583333,
            curriculum: 4.541667,
            teacher: 4.609756,
            support: 4.260870
        }),
        address: "東京都新宿区",
        url: "https://maps.app.goo.gl/eYLKRfx4sZ282j8p6",
        scores: {
            price: 3.583333,
            curriculum: 4.541667,
            teacher: 4.609756,
            support: 4.260870
        },
        reviews: {
            price: [
                "全体として、料金に対する満足度は二極化する傾向が見られます。多くの受講生は、授業の質やスコアアップという結果に対して「コストパフォーマンスが高い」「業界最安値」と高く評価しています。特に、追加料金なしで模擬試験を受けられる点や、学生にとって通いやすい価格設定であるという好意的な意見が散見されます。",
                "一方で、解約時の返金対応に対して強い不満を示す声も少数ながら存在します。「説明のない高い解約金を課せられた」「支払額に対して返金額が非常に少なかった」といったネガティブな意見があり、契約前に保証期間や解約条件を確認する必要性を示唆する口コミも見られました。"
            ],
            curriculum: [
                "カリキュラムの有効性を評価する声が圧倒的多数を占めています。「All English」の授業形式がリスニング力やスピーキング力の向上に直結したという意見や、IELTSやTOEFLなど各試験に特化した「戦略（ストラテジー）」や「ロジック」を学ぶことで、短期間でのスコアアップを実現できたという報告が数多く寄せられています。",
                "しかし、ごく一部で批判的な意見も見られます。特にオンラインレッスンにおいて「講師によって資料共有の方法がバラバラ」「解法の説明が不十分でいきなり問題を解かされる」といった指導の一貫性の欠如を指摘する声がありました。また、一部の教材（ストラテジーブック等）が期待外れだったという意見も存在します。"
            ],
            teacher: [
                "講師の質は、このスクールの最も高く評価されている点の一つです。大多数の口コミで、講師陣は「ネイティブ」「優しく、熱心」「ユーモアがある」「分かりやすい」と絶賛されています。「理解できるまで丁寧に教えてくれる」「生徒に寄り添ってくれる」といった、個々の受講生に対応する姿勢も評価されています。",
                "ただし、極めて稀なケースとして、体験レッスン時に講師の振る舞いが非常にプロフェッショナルさに欠けていたという痛烈な批判もあります。これは例外的な出来事の可能性が高いですが、学校全体の質に対する信頼を損なう可能性のある重大な指摘と言えます。"
            ],
            support: [
                "講師やスタッフのサポート体制についても、好意的な評価が多数を占めます。「講師やスタッフに質問しやすい雰囲気がある」「休み時間や授業後でもきちんと教えてくれる」といった声が多く、受講生が安心して学習に取り組める環境が整っていることがうかがえます。スタッフも「フレンドリー」「親切」と評され、アットホームな校風の形成に寄与しているようです。",
                "その一方で、「スタッフのフォローが全くなかった」「メールでの問い合わせに話が噛み合わないスタッフがいた」など、サポート体制の不備を指摘する真逆の意見も少数ながら確認できました。特にオンラインでの対応や事務手続きの面で、一部の受講生が不満を感じたケースがあるようです。"
            ]
        },
        referenceUrls: {
            price: [
                "https://maps.app.goo.gl/GpGeTwWw4TFjyqmm7",
                "https://maps.app.goo.gl/DYQtRmZK7JHwrfxn9"
            ],
            curriculum: [
                "https://maps.app.goo.gl/C8YaczKbkGFzfJW98",
                "https://maps.app.goo.gl/AMNzyb2gKXRYfmbS9"
            ],
            teacher: [
                "https://maps.app.goo.gl/mVqTwk7TKdxbJhBx8",
                "https://maps.app.goo.gl/MUrBRfgSiF8GBLCi6"
            ],
            support: [
                "https://maps.app.goo.gl/7Jit78y4DJRZnGki8",
                "https://maps.app.goo.gl/AWbmAjZGKm7sdZ5k6"
            ]
        }
    },
    {
        id: "english-innovations-yokohama",
        name: "イングリッシュイノベーションズ横浜校",
        rating: calculateRating({
            price: 4.333333,
            curriculum: 4.844444,
            teacher: 4.806452,
            support: 5.000000
        }),
        address: "神奈川県横浜市",
        url: "https://maps.app.goo.gl/s4HDE1Av6sBZjfYD9",
        scores: {
            price: 4.333333,
            curriculum: 4.844444,
            teacher: 4.806452,
            support: 5.000000
        },
        reviews: {
            price: [
                "口コミ全体の中で料金に関する言及は少数でしたが、言及のあった口コミはすべて肯定的でした。「グループレッスンなのでコスパも良い」「授業料の割に効果的に学ぶことができた」など、提供される授業の質に対して料金がリーズナブルであるという、コストパフォーマンスの高さを評価する声が見られます。"
            ],
            curriculum: [
                "スコアアップに直結する、戦略的で効率的なカリキュラムが高く評価されています。「IELTSの各セクションの攻略をわかりやすく教えてもらった」「独自のストラテジーによって、どのように解答すればいいのか明確になった」といった声が多く、特に試験対策を重視する生徒から絶大な支持を得ています。",
                "また、「All English」の授業がリスニング力向上や、英語で思考する力の養成に効果的であったという意見も多数見られました。"
            ],
            teacher: [
                "講師の質に関しては、その「指導力」と「人柄」の両面で、ほぼ全ての口コミが絶賛しています。「わかりやすい教え方で希望を持たせてくれる」「優秀な講師陣で、テスト対策に特化した授業で効率的に勉強できた」といった指導スキルへの評価に加え、「優しくて面白い」「フレンドリーで、生徒一人一人に足りない部分や課題を丁寧に指摘してくれる」など、親しみやすく丁寧な人柄が、生徒のモチベーション維持や安心して学べる環境作りに繋がっています。"
            ],
            support: [
                "講師だけでなく、スタッフを含めたスクール全体のサポート体制も高く評価されています。「スコアが伸び悩んでいるとき、スタッフの方々が親身になってアドバイスをくださる」「受付の先生には大学進学の相談など様々な相談にものっていただけた」など、学習上の悩みから進路相談に至るまで、親身に対応してくれる姿勢が信頼に繋がっています。",
                "質問しやすいフレンドリーな雰囲気も、生徒の学習効率を高める一因となっているようです。"
            ]
        },
        referenceUrls: {
            price: [
                "https://maps.app.goo.gl/AQjFiqaaL1zPoomLA",
                "https://maps.app.goo.gl/47p7mRSjq4ToQSgM8"
            ],
            curriculum: [
                "https://maps.app.goo.gl/3qaobeTMWVixCcsc6",
                "https://maps.app.goo.gl/sukBkfhiMHaSjFru5"
            ],
            teacher: [
                "https://maps.app.goo.gl/P5X2tgNWmtkAKc8Y7",
                "https://maps.app.goo.gl/1dAmSrEnN92vYYyV9"
            ],
            support: [
                "https://maps.app.goo.gl/yViLqAvzCaH1hHNQA",
                "https://maps.app.goo.gl/iSArrCpW1AEPBap58"
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