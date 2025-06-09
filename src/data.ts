export type SchoolType = {
    id: number;
    name: string;
    rating: string;
    url: string;
    format: "対面" | "オンライン" | "ハイブリッド";
    address: string;
    scores: {
        support: number;
        price: number;
        teacher: number;
        curriculum: number;
    };
};

export const schoolsData: SchoolType[] = [
    {
        id: 1,
        name: "Alpha School",
        rating: "A+",
        url: "https://alpha.example.com",
        format: "ハイブリッド",
        address: "東京都新宿区西新宿2-8-1",
        scores: {
            support: 5,
            price: 4,
            teacher: 5,
            curriculum: 4,
        },
    },
    {
        id: 2,
        name: "Beta Academy",
        rating: "B",
        url: "https://beta.example.com",
        format: "オンライン",
        address: "-",
        scores: {
            support: 3,
            price: 5,
            teacher: 3,
            curriculum: 3,
        },
    },
    {
        id: 3,
        name: "Gamma Institute",
        rating: "A",
        url: "https://gamma.example.com",
        format: "対面",
        address: "大阪府大阪市北区梅田1-1-1",
        scores: {
            support: 4,
            price: 2,
            teacher: 4,
            curriculum: 5,
        },
    },
];

export const dummyReviewsData: Record<number, Record<string, string>> = {
    1: { // Alpha School
        support: "Alpha校のサポートは迅速で、疑問点をすぐに解消できました。",
        price: "料金は平均的ですが、内容を考えると妥当です。",
        teacher: "経験豊富な講師が多く、質の高い授業を受けられました。",
        curriculum: "Alpha校独自のカリキュラムは実践的で役立ちました。"
    },
    2: { // Beta Academy
        support: "オンラインサポートが充実しており、いつでも質問できました。",
        price: "Beta校は非常にリーズナブルで、コストパフォーマンスが高いです。",
        teacher: "フレンドリーな講師が多く、楽しく学べました。",
        curriculum: "基礎から応用までバランスの取れたカリキュラムでした。"
    },
    3: { // Gamma Institute
        support: "Gamma校の進路相談サポートが手厚かったです。",
        price: "少し高めですが、その分施設や教材が充実しています。",
        teacher: "専門分野に特化した講師から深い知識を学べました。",
        curriculum: "Gamma校の専門性の高いカリキュラムは満足度が高いです。"
    }
};
