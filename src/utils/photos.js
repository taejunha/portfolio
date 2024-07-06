const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset, width) {
  return `${asset}?w=${width}&q=75`;
}

const photos = [
  { asset: "/photos/austria.jpg", width: 1080, height: 780 },
  { asset: "/photos/tokyo_1.jpg", width: 1080, height: 1410 },
  { asset: "/photos/swiss_2.jpg", width: 1080, height: 720 },
  { asset: "/photos/fuji.jpg", width: 1080, height: 1450 },
  { asset: "/photos/budapest_1.JPG", width: 1080, height: 780 },
  { asset: "/photos/paris_2.jpg", width: 1080, height: 1320 },
  { asset: "/photos/budapest_3.JPG", width: 1080, height: 640 },
  { asset: "/photos/seoul.jpg", width: 1080, height: 1201 },
  { asset: "/photos/busan_2.jpg", width: 1080, height: 700 },
  { asset: "/photos/greece_5.jpg", width: 1080, height: 1190 },
  { asset: "/photos/busan.jpg", width: 1080, height: 850 },
  { asset: "/photos/jeju_2.jpg", width: 1080, height: 720 },
  { asset: "/photos/tokyo_2.jpg", width: 1080, height: 694 },
  { asset: "/photos/kyoto_2.jpg", width: 1080, height: 1320 },
  { asset: "/photos/greece_3.jpg", width: 1080, height: 920 },
  { asset: "/photos/uk.jpg", width: 1080, height: 1340 },
  { asset: "/photos/jeju_1.jpg", width: 1080, height: 1520 },
  { asset: "/photos/paris_4.jpg", width: 1080, height: 910 },
  { asset: "/photos/slovenia.JPG", width: 1080, height: 555 },
  { asset: "/photos/uk_2.JPG", width: 1080, height: 700 },
  { asset: "/photos/swiss_7.jpg", width: 1080, height: 760 },
  { asset: "/photos/croatia_3.jpg", width: 1080, height: 790 },
  { asset: "/photos/kyoto_1.jpg", width: 1080, height: 820 },
  { asset: "/photos/greece_1.jpg", width: 1080, height: 1440 },
  { asset: "/photos/swiss_5.jpg", width: 1080, height: 690 },
  { asset: "/photos/italy_2.jpg", width: 1080, height: 800 },
  { asset: "/photos/austria_2.JPG", width: 1080, height: 690 },
  { asset: "/photos/paris_3.jpg", width: 1080, height: 700 },
  { asset: "/photos/greece_4.jpg", width: 1080, height: 900 },
  { asset: "/photos/osaka.jpg", width: 1080, height: 1285 },
  { asset: "/photos/tokyo_3.JPG", width: 1080, height: 600 },
  { asset: "/photos/croatia.jpg", width: 1080, height: 840 },
  { asset: "/photos/brussels.JPG", width: 1080, height: 750 },
  { asset: "/photos/swiss_8.jpg", width: 1080, height: 900 },
  { asset: "/photos/slovenia_2.JPG", width: 1080, height: 700 },
  { asset: "/photos/budapest.JPG", width: 1080, height: 600 },
  { asset: "/photos/germany.jpg", width: 1080, height: 1440 },
  { asset: "/photos/swiss_3.jpg", width: 1080, height: 700 },
  { asset: "/photos/italy.jpg", width: 1080, height: 920 },
  { asset: "/photos/tokyo_4.JPG", width: 1080, height: 1440 },
  { asset: "/photos/greece_2.jpg", width: 1080, height: 880 },
  { asset: "/photos/italy_1.jpg", width: 1080, height: 940 },
  { asset: "/photos/paris.jpg", width: 1080, height: 1340 },
  { asset: "/photos/swiss_1.jpg", width: 1080, height: 770 },
  { asset: "/photos/croatia_2.jpg", width: 1080, height: 700 },
].map(({ asset, width, height }) => ({
  src: assetLink(asset, width),
  width,
  height,
  srcSet: breakpoints.map((breakpoint) => ({
    src: assetLink(asset, breakpoint),
    width: breakpoint,
    height: Math.round((height / width) * breakpoint),
  })),
}));

export default photos;
export { breakpoints };
