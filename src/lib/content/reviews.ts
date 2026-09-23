/**
 * Reviews the families left on Google and Facebook, carried over from the
 * widget on the old site rather than fetched live: Google's API returns at
 * most five reviews and charges for the privilege, and these are already
 * published words about this school.
 *
 * Bodies are verbatim. Fix a typo here and it stops being what they wrote.
 */
export type Review = {
  id: string;
  name: string;
  source: "google" | "facebook";
  stars: number;
  /** ISO date, so the list can be sorted newest first. */
  date: string;
  /** Marks the Korean reviews so screen readers switch voice. */
  lang: "en" | "ko";
  body: string;
};

export const reviewSummary = {
  rating: 5,
  total: 13,
  googleCount: 11,
  /** The school's Google listing, for "read them all". */
  googleUrl:
    "https://www.google.com/search?q=PTL+Treehouse+Early+Learning+Center+Bothell",
};

export const reviews: Review[] = [
  {
    id: "hk4ObpF5wsIPA5qsEMIc",
    name: "Soyon Kim",
    source: "google",
    stars: 5,
    date: "2026-02-27",
    lang: "ko",
    body:
      "첫째아이에 이어 둘째도 PTL에 다니고 있습니다.첫째아이 학교를 고를 때, 집에서 편도 한시간거리까지 수십군데의 어린이집과 사립학교들을 알아봤습니다.아무래도 내 아이의 첫 학교, 첫 사회생활이기때문에 부모로서는 더욱 신경을 쓸 수 밖에 없었지요.그런데 정말 운 좋게도 집에서 머지않은 곳에서 PTL을 찾을 수 있었습니다.우리집같은 편안한 환경에 너무나도 좋은 선생님들과, 영양뿐만 아니라 맛도 최고인 점심식사가 있는 곳을 찾았을 때 (진부한 표현이지만)사막에서 오아시스를 찾은 기분이었습니다.역시나, 여러 곳을 비교해봐서 그랬던 것인지, 제 기대이상으로 만족스러웠고요.그래서 저희 가족에게 둘째의 PTL행은 어찌보면 당연한 것이었지요.가족외 누군가를 믿는다는 것은 쉬운 일이 아닙니다만, PTL 선생님들께서는 날이 가면 갈 수록 더 믿음이 가는 분들입니다.그렇기때문에 제 아이들이 학교를 좋아하고 선생님들을 좋아하는 것이라 생각합니다.그것이야말로 그 무엇보다 공정한 평가가 아닐까요.미국에서 살고있는 한국계 미국인, 이민 1.5 혹은 2세대(그 이상일 수도)로서 평생의 숙제는 한국인이지만 미국인으로서 이 곳, 미국에서 잘 성장하고 독립하여 사회의 일원으로서 역할을 충실히 하며 살아가는 것이 아닐까 싶습니다.거기에는 한국과 미국 두 나라의 언어와 문화가 자연스럽게 그 사람 자신에 배어있는 것이 포함된다고 생각하는데요.유치원에 다니기 시작하면 영어를 습득함과 동시에 한국어를 빠르게 잊어버리게 됩니다.아무리 집에서 한국어를 하고, 한글학교에 보낸다 해도 역부족이라 한국인인 부모로서는 걱정스러워지는 상황인데, 그래도 유치원 전에 PTL을 통해 한국어와 한국문화를 익힐 수 있다는 것이 제 아이들에게는 굉장히 좋은 기회였습니다.공립학교 선생님들과 공립학교 언어프로그램 연구가들 말씀이(제가 직접 들은 바로는), 기본적으로 집에서 쓰는 언어를 잘 하는 것이 장기적으로 아이들의 학습능력 향상과 학습 결과에 큰 도움을 준다고 합니다.이런 측면에서 보더라도, PTL에서처럼 한국어와 영어를 함께 사용하는 환경에서 지낼 수 있다는 것이 한국계 미국인 아이들에게는 굉장한 특혜란 생각이 듭니다.아무리 부모여도 내 아이의 모든 걸 알 수 없고, 부모이기때문에 해 줄 수 없는 부분도 있습니다.그걸 학교에서 배우고 사회에 나아가게 되는데, PTL 선생님들께서는 집에서 부모들이 해 줄 수 없는 것들을 해주시며 아이들 정신적 신체적 교육과 성장의 기초를 아주 잘 다져주십니다.리뷰가 너무 길어지긴 했지만, 제가 하고싶은 말의 반도 담지 못 해서 너무 아쉽네요.요지는, 저희 가족이 PTL을 만나게 된 것은 최고의 행운이란 것입니다.PTL은 유치원 입학 전, 어린이집을 찾는 가정이라면 '절대 후회하지 않으실 것'임을 확신하며 적극적으로 추천하고 싶은 곳입니다.",
  },
  {
    id: "5WVw0Gaa6Z6QuSUGmpxl",
    name: "NR K",
    source: "google",
    stars: 5,
    date: "2025-08-19",
    lang: "en",
    body:
      "The teachers here are incredibly warm, and it’s clear how much they genuinely care for the children. I’m always grateful for their dedication and kindness. My child is very energetic and at times a little challenging, but because the teachers guide with such love and patience, I feel completely at ease entrusting my child to them.Even though my first child only attended PTL for one year, to this day they still talk about their teachers and say they wish they could go back. That alone speaks volumes about how warmly and lovingly the teachers care for the children.As many others have mentioned, the meals are another wonderful highlight—they are healthy, delicious, and prepared with so much care. My first child has already graduated, my second is currently attending, and if I had a third, I would gladly enroll them here as well.Another unforgettable memory is the school’s performances and graduation ceremonies—an experience that is truly rare to find in other schools in the U.S. The dedication, effort, and love the teachers put into these events is truly remarkable. Seeing it all unfold was so touching, and it made me appreciate once again the love and attention my children have received at PTL.The classrooms are always bright, cheerful, and well-organized, creating a space where children feel safe and excited to learn. The teachers also communicate wonderfully with parents, sharing updates and little moments that make me feel even more connected to my child’s day. The curriculum balances fun, creativity, and learning so naturally, and I’ve seen such positive growth in my child’s confidence and social skills.This school is truly a gift for both children and parents, and I wholeheartedly recommend it without hesitation!",
  },
  {
    id: "4Swe1QgQ28AFPDjVaJm1",
    name: "이일표",
    source: "google",
    stars: 5,
    date: "2025-07-31",
    lang: "ko",
    body:
      "아이들을 진심으로 사랑하고 최선을 다하시는 선생님들을 통해 감명을 받았습니다. 누구보다 아이들이 오감으로 그것을 젤 잘 느끼고 경험하리라 생각됩니다. 그안에서 안정감을 가지고 행복한 유치원 생활을 하는 것을 보면서 어찌나 감사한지요. 2년 넘게 이곳에서 아이가 선생님께 배우고 친구들과 생활하는 것을 보면서 작은 공동체의 선한영향력을 경험했습니다. 젤 막내로 들어가 이젠 젤언니로 졸업을 했지만 아이가 너무 즐거워하고 PTL을 좋아해서 마지막 여름캠프도 가고 있어요! 오늘이 PTL에서의 마지막 날인데… 아이가 무척 아쉬워하네요… 저도 어릴적 몬테소리를 다녔는데 중학생 가까이 될때까지 선생님을 찾아갔던 기억이…ㅎ 우리 아이에게 가장 필요한 시기에 맞는 배움과 귀한 사랑, 좋은 추억 만들어 주셔서 감사드립니다.",
  },
  {
    id: "TnaC132PxFH0bTpwHkdk",
    name: "Kristen Cha",
    source: "google",
    stars: 5,
    date: "2025-07-25",
    lang: "en",
    body:
      "PTL Treehouse has been a wonderful experience for our family. From the get-go, they were warm, welcoming, and responsive to questions. Their well-structured program helped our child quickly integrate, and the quality of their meals and summer activities—especially water play—has been outstanding. Most importantly, the teachers are genuinely caring and dedicated to all the children. They have created an amazing learning and child care environment. I highly recommend PTL Treehouse.",
  },
  {
    id: "sjuhiVTnbFbS6rkQi4jc",
    name: "Yoomi Kim",
    source: "google",
    stars: 5,
    date: "2025-07-25",
    lang: "en",
    body:
      "We’ve had such a wonderful experience with PTL Treehouse. Our first child attended for 3 years and our second for nearly 2. Esther 선생님 and Julie 선생님 are incredibly loving, caring, and passionate.Early childhood education is so important, and we’ve never once regretted sending our kids here. As a Korean-speaking household, we appreciated how well the school supported our children both in language and overall development. They were well-prepared for kindergarten, both academically and socially.It’s a safe, fun, and nurturing environment where kids are truly loved, guided, and taught with care. Highly recommend for Korean American families, whether you speak Korean or English at home!집에서 한국어를 주로 쓰던 가정에서도 아이들이 자연스럽게 영어와 학교생활에 잘 적응할 수 있도록 도와준 감사한 프리스쿨입니다!!",
  },
  {
    id: "XVW0hQGmusVxOzmRF4gF",
    name: "Sonia Park",
    source: "google",
    stars: 5,
    date: "2025-07-24",
    lang: "en",
    body:
      "We loved this preschool! We were so sad to leave them moving out of State, but my child still remembers and talks about her teachers, friends, and things she learned there - things that she couldn’t verbalize before because she was too young - but we can see it made such big, positive impact on her now that she is able to tell us we’re amazed of what we hear from her. Thank you PTL!",
  },
  {
    id: "qm8HY4BUjeTDVgCEM7Jp",
    name: "Byongsu Kim",
    source: "google",
    stars: 5,
    date: "2025-07-24",
    lang: "en",
    body:
      "Our daughter Olivia attended PTL Treehouse about 4–5 years ago, and she still talks about how much she loved it! Ms. Esther and Ms. Julie created such a warm, loving space where kids could learn, play, and grow with confidence.One thing we still remember is how amazing the food was—everything was made fresh by their own chef with natural ingredients. Olivia still says it was her favorite school lunch ever!We’re so thankful for the sweet memories and strong foundation PTL gave our daughter. Highly recommend this special little school!",
  },
  {
    id: "x4PmL5vndPgozxwS5cKM",
    name: "Cecilia hoyeon Yook",
    source: "google",
    stars: 5,
    date: "2025-07-22",
    lang: "en",
    body:
      "At PTL Treehouse, the teachers take such good care of the children, and the food is especially delicious, nutritious, and thoughtfully prepared — we absolutely love it. My kids really enjoyed the meals. The annual events like the graduation ceremony and Mother’s Day tea party were truly heartwarming and unforgettable, unlike anything we’ve seen elsewhere.Highly recommended for those who want to teach English and Korean.But since they don’t usually answer calls, I recommend texting instead.",
  },
  {
    id: "SfUJFxXX7EAAwIZloWx7",
    name: "Sam Chung",
    source: "google",
    stars: 5,
    date: "2025-06-24",
    lang: "en",
    body:
      "We have our daughter go here and absolutely love it. The bilingual aspect really helps our daughter keep up with her korean while also learning English. Her fellow classmates are also really well behaved. I think the school really promotes a cohesive atmosphere and the teachers are just the best. They love the kids and really help keep the parents well aware of everything that's going on.Cannot recommend PTL enough!!!",
  },
  {
    id: "D21wlAl5gJlTh5BPy2ik",
    name: "J Ko",
    source: "google",
    stars: 5,
    date: "2023-03-02",
    lang: "en",
    body:
      "My kid attended PTL. Thanks to PTL, he was able to be in touch with his Korean heritage a bit while longer before attending public school.The teachers are cordial and genuine and very caring. I'm planning on sending my second kid here when he grows up even if it's a bit far from where I currently live.",
  },
  {
    id: "ICvp56yYSBtlRLTmjzM5",
    name: "Kevin Kim",
    source: "facebook",
    stars: 5,
    date: "2022-10-21",
    lang: "ko",
    body:
      "아이들 성향에 맞게 교육해주시는게 장점인것 같아요. 수업 퀄리티도 좋고, 런치는... 최고에요. 궁금한게 있거나 아이에 관련된 제 개인적인 고민으로 상담을 할때도 늘 이성적으로, 사려깊게 들어주시고.. 선생님들께 너무 감사했고, 시간이 지나도 가끔 생각날것 같아요!",
  },
  {
    id: "D0uS99FWTzeRQjdntv4U",
    name: "Woohyung Park",
    source: "google",
    stars: 5,
    date: "2022-06-06",
    lang: "en",
    body:
      "My family is so fortunate to have found PTL Treehouse learning center. My two little boys love the teachers and program. I have always desired my boys to be exposed to a place where they could learn their mother language so that they keep up with the Korean language, and PTL was the perfect place. All teachers there are warm, enthusiastic and caring. Highly recommended this learning center!!",
  },
  {
    id: "H1CIW4KjUVUAsVjWtixR",
    name: "Lauren Lee",
    source: "facebook",
    stars: 5,
    date: "2020-01-25",
    lang: "en",
    body:
      "This is a wonderful place for kids! We feel very fortunate to have found PTL for our daughter. She attended for two years and she grew tremendously during that time. The teachers are all so caring and patient with the kids. They put a lot of thought into the program and really engages each student. An added bonus is the awesome homemade food 🤩. We highly recommend PTL for anyone looking for a preschool in the area.",
  },
];
