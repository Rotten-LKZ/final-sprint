
const defaultConfig = {
  target: '高考目标',
  bgImageUrl: 'https://kumakumakumabear.com/core_sys/images/contents/00000034/block/00000128/00000204.jpg?1640243773',
  school: {
    logo: 'https://www.tsinghua.edu.cn/image/logo.png',
    // It supports HTML tags.
    name: '清华大学',
    website: {
      // It supports HTML tags.
      name: '清华大学官方网站',
      url: 'http://www.tsinghua.edu.cn/'
    }
  },
  // 13 位时间戳
  time: 1654560000000,
  // Chuuni means 中二, it supports HTML tags
  chuuni: 'A wider world is waiting for you to explore.\nNever give up or give in.'
}

const defaultConfigStr = `{
  "target":"高考目标",
  "bgImageUrl":"https://kumakumakumabear.com/core_sys/images/contents/00000034/block/00000128/00000204.jpg?1640243773",
  "school":{
    "logo":"https://www.tsinghua.edu.cn/image/logo.png",
    "name":"清华大学",
    "website":{
      "name":"清华大学官方网站",
      "url":"http://www.tsinghua.edu.cn/"
    }
  },
  "time":1654560000000,
  "chuuni":"A wider world is waiting for you to explore.\\nNever give up or give in."
}`
