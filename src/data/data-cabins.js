import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;

export const cabins = [
  {
    name: "001",
    maxCapacity: 2,
    regularPrice: 250,
    discount: 0,
    image: imageUrl + "cabin-001.jpg",
    description:
      "在温馨的木屋001中发现最适合情侣的终极豪华度假胜地。这座迷人的木屋坐落在风景如画的森林中，提供了一个幽静而私密的休憩之所。木屋内部是现代的高品质木质内饰，舒适的休息区、壁炉和设施齐全的厨房。豪华的大床铺有高档床品，保证您能享受宁静的睡眠。在类似水疗中心的淋浴间放松身心，在带有热水浴缸的私人甲板上放松身心。",
  },
  {
    name: "002",
    maxCapacity: 2,
    regularPrice: 350,
    discount: 25,
    image: imageUrl + "cabin-002.jpg",
    description:
      "逃离喧嚣，投入自然的怀抱，在我们的002号舒适小木屋中尽享奢华。这座木屋专为伴侣设计，坐落在风景如画的森林中心，提供一处幽静而私密的避世之所。室内，您将看到温暖宜人、由高品质木材精心打造的内饰，配有一个舒适的起居区、壁炉和设施齐全的厨房。豪华卧室内设一张奢华特大床和类似水疗中心的淋浴间。您可以在带有热水浴缸的私人露台上放松身心，沉浸于大自然的美景之中。",
  },
  {
    name: "003",
    maxCapacity: 4,
    regularPrice: 300,
    discount: 0,
    image: imageUrl + "cabin-003.jpg",
    description:
      "在我们的中型木屋003中，体验奢华的家族生活。这个木屋最多可容纳4人，提供了一个舒适而温馨的空间，配备所有现代设施。内部采用高品质木材打造的温暖而诱人的内饰，设有舒适的起居区、壁炉和设施齐全的厨房。卧室配有柔软舒适的床铺和类似水疗中心的浴室。木屋还拥有一个私人露台，配有热水浴缸和户外休息区，非常适合欣赏周围的自然风光。",
  },
  {
    name: "004",
    maxCapacity: 4,
    regularPrice: 500,
    discount: 50,
    image: imageUrl + "cabin-004.jpg",
    description:
      "在这座中型木屋004中，尽享极致奢华的家庭度假。这座木屋专为最多4人的家庭设计，为挑剔的旅行者提供了一个奢华的休憩之所。木屋内部，采用顶级木材打造的华丽内饰，舒适的起居区，壁炉，以及设备齐全的美食厨房，无不彰显其尊贵品质。卧室中，柔软舒适的床铺与灵感源自水疗的套间浴室相得益彰。走出室外，您的私人露台上，您可以在热水浴缸中放松身心，同时沉浸于自然的怀抱之中。",
  },
  {
    name: "005",
    maxCapacity: 6,
    regularPrice: 350,
    discount: 0,
    image: imageUrl + "cabin-005.jpg",
    description:
      "与您的团体或家人在我们宽敞的005号小屋享受舒适温馨的度假时光。这间小屋最多可容纳6人，为您提供在大自然中心地带的私密休憩之所。室内，小屋采用优质木材打造出温暖宜人的内部空间，设有带壁炉的起居区和设备齐全的厨房。卧室舒适，并配有独立卫浴。走出门外，来到您的私人露台，在您自己的热水浴缸中放松身心，同时欣赏周围的自然景色。",
  },
  {
    name: "006",
    maxCapacity: 6,
    regularPrice: 800,
    discount: 100,
    image: imageUrl + "cabin-006.jpg",
    description:
      "与您的团体或家人一起在我们的宽敞木屋006中体验奢华的极致。这间木屋设计舒适，最多可容纳6人，为您提供在大自然中心的豪华度假胜地。木屋内部采用优质木材打造的奢华内饰，设有带壁炉的宽敞起居区和设备齐全的美食厨房。卧室配有舒适的床铺和类似水疗中心的套间浴室。走出室外，来到您的私人露台，在享受热水浴缸的同时沉浸于自然环境中。",
  },
  {
    name: "007",
    maxCapacity: 8,
    regularPrice: 600,
    discount: 100,
    image: imageUrl + "cabin-007.jpg",
    description:
      "宽敞而宏伟的木屋007可容纳您的大家庭或多个家庭。这间小屋最多可舒适地容纳8人，坐落在美丽的森林和山脉中心，为您提供一处幽静的静修之地。木屋内部采用优质木材打造，温暖而迷人，设有多个带壁炉的起居区，以及一个设备齐全的厨房。卧室舒适温馨，配有独立浴室。小屋还设有一个私人露台，配有热水浴缸和户外休息区，是享受自然风光的绝佳场所。",
  },
  {
    name: "008",
    maxCapacity: 10,
    regularPrice: 1400,
    discount: 0,
    image: imageUrl + "cabin-008.jpg",
    description:
      "欢迎您与庞大的团队或多组家庭共同入住我们宏伟的008号木屋，尽享奢华与壮丽的巅峰体验。这座木屋为您提供了一处奢华的避风港，满足您的一切需求与渴望。木屋设计富丽堂皇，选用顶级材质，细节之处精雕细琢，整体以最优质的木材打造。室内，多个宽敞的起居区域均配有壁炉，正式用餐区与美食厨房相得益彰，为厨师们圆梦。卧室设计追求极致舒适与奢华，配备柔软床铺及私人温泉式浴室。移步室外，私人露台让您沉浸于自然美景之中，豪华热水浴缸及充足的休憩区域为您带来无与伦比的放松与愉悦。",
  },
];
