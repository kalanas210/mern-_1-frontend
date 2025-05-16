import logo from "./logo.png";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.png";
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import cart_icon_2 from "./cart_icon_2.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import order_icon from "./order_icon.svg";
import upload_area from "./upload_area.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import leaf_icon from "./leaf_icon.svg";
import coin_icon from "./coin_icon.svg";
import box_icon from "./box_icon.svg";
import trust_icon from "./trust_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import main_banner_bg from "./banner3.jpg";
import main_banner_bg_sm from "./bannersm3.png";
import bottom_banner_image from "./bottom1.png";
import bottom_banner_image_sm from "./bottomsm3.png";
import add_address_image from "./add_address_image.svg";
import ad_image from "./ad.png";
import gift_card from "./giftcard.png";
import tshirt1 from "./tshirt1.png";
import polo from "./polo.png";
import womenpolo from "./women-polo.png";
import men from "./men.png";
import watch from "./watch.png";
import shirt from "./shirt.png";
import skirt from "./skirt.png";

export const assets = {
  logo,
  men,
  womenpolo,
  polo,
  tshirt1,
  gift_card,
  ad_image,
  search_icon,
  remove_icon,
  arrow_right_icon_colored,
  star_icon,
  star_dull_icon,
  cart_icon,
  cart_icon_2,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  product_list_icon,
  order_icon,
  upload_area,
  profile_icon,
  menu_icon,
  delivery_truck_icon,
  leaf_icon,
  coin_icon,
  trust_icon,
  black_arrow_icon,
  white_arrow_icon,
  main_banner_bg,
  main_banner_bg_sm,
  bottom_banner_image,
  bottom_banner_image_sm,
  add_address_image,
  box_icon,
  watch,
  skirt,
  shirt
};

export const categories = [
  {
    text: "Mens Shirts",
    path: "Mens-Shirts",
    image: shirt,
    bgColor: "#fff3f3",
  },
  {
    text: "Women T-Shirts",
    path: "Women-T-Shirts",
    image: tshirt1,
    bgColor: "#fbf8e8",
  },

  {
    text: "Polo T-Shirts",
    path: "Polo-T-Shirts",
    image: polo,
    bgColor: "#f6faed",
  },

  {
    text: "Trousers",
    path: "Trousers",
    image: men,
    bgColor: "#ecfdf6",
  },
  {
    text: "Watches",
    path: "Watches",
    image: watch,
    bgColor: "#fdf3e5",
  },
  {
    text: "Skirts",
    path: "Skirts",
    image: skirt,
    bgColor: "#ecf4fa",
  },
  {
    text: "Giftcards",
    path: "Giftcards",
    image: gift_card,
    bgColor: "#fbf4fb",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Best Sellers", url: "#" },
      { text: "Offers & Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your Order", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];

export const features = [
  {
    icon: delivery_truck_icon,
    title: "Fastest Delivery",
    description: "Orders delivered in 3 business days.",
  },
  {
    icon: leaf_icon,
    title: "Quality Guaranteed",
    description: "High Quality produce straight from the source.",
  },
  {
    icon: coin_icon,
    title: "Affordable Prices",
    description: "Quality items at unbeatable prices.",
  },
  {
    icon: trust_icon,
    title: "Trusted by Thousands",
    description: "Loved by 10,000+ happy customers.",
  },
];

