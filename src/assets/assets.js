import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import order_icon from "./order_icon.svg";
import upload_area from "./upload_area.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import warranty_icon from "./leaf_icon.svg"; // Repurposed as warranty icon
import coin_icon from "./coin_icon.svg";
import box_icon from "./box_icon.svg";
import trust_icon from "./trust_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import main_banner_bg from "./main_banner_bg.png";
import main_banner_bg_sm from "./main_banner_bg_sm.png";
import bottom_banner_image from "./bottom_banner_image.png";
import bottom_banner_image_sm from "./bottom_banner_image_sm.png";
import add_address_image from "./add_address_image.svg";

// Electronics Category Images
import smartphones_image from "./smartphones_image.png";
import laptops_image from "./laptops_image.png";
import tv_image from "./tv_image.png";
import headphones_image from "./headphones_image.png";
import smartwatches_image from "./smartwatches_image.png";
import camera_image from "./camera_image.png";
import accessories_image from "./accessories_image.png";

// Smartphones Images
import iphone_15_pro_image from "./iphone_15_pro_image.png";
import samsung_s24_ultra_image from "./samsung_s24_ultra_image.png";
import google_pixel_8_image from "./google_pixel_8_image.png";
import oneplus_12_image from "./oneplus_12_image.png";
import xiaomi_14_image from "./xiaomi_14_image.png";

// Laptops Images
import macbook_pro_image from "./macbook_pro_image.png";
import dell_xps_15_image from "./dell_xps_15_image.png";
import hp_spectre_image from "./hp_spectre_image.png";
import lenovo_yoga_image from "./lenovo_yoga_image.png";
import asus_zenbook_image from "./asus_zenbook_image.png";

// TV Images
import lg_oled_tv_image from "./lg_oled_tv_image.png";
import samsung_qled_tv_image from "./samsung_qled_tv_image.png";
import sony_bravia_tv_image from "./sony_bravia_tv_image.png";
import tcl_4k_tv_image from "./tcl_4k_tv_image.png";
import hisense_tv_image from "./hisense_tv_image.png";

// Headphones Images
import airpods_pro_image from "./airpods_pro_image.png";
import sony_wh1000xm5_image from "./sony_wh1000xm5_image.png";
import bose_qc45_image from "./bose_qc45_image.png";
import samsung_buds2_pro_image from "./samsung_buds2_pro_image.png";
import jbl_tune_image from "./jbl_tune_image.png";

// Smartwatches Images
import apple_watch_s9_image from "./apple_watch_s9_image.png";
import samsung_watch6_image from "./samsung_watch6_image.png";
import garmin_fenix_image from "./garmin_fenix_image.png";
import fitbit_sense_image from "./fitbit_sense_image.png";
import amazfit_gtr_image from "./amazfit_gtr_image.png";

// Cameras Images
import canon_eos_r6_image from "./canon_eos_r6_image.png";
import sony_a7iv_image from "./sony_a7iv_image.png";
import nikon_z6ii_image from "./nikon_z6ii_image.png";
import fujifilm_xt5_image from "./fujifilm_xt5_image.png";
import gopro_hero11_image from "./gopro_hero11_image.png";

// Accessories Images
import anker_powerbank_image from "./anker_powerbank_image.png";
import logitech_mx_master_image from "./logitech_mx_master_image.png";
import sandisk_ssd_image from "./sandisk_ssd_image.png";
import belkin_charger_image from "./belkin_charger_image.png";
import razer_keyboard_image from "./razer_keyboard_image.png";

export const assets = {
    logo,
    search_icon,
    remove_icon,
    arrow_right_icon_colored,
    star_icon,
    star_dull_icon,
    cart_icon,
    nav_cart_icon,
    add_icon,
    refresh_icon,
    product_list_icon,
    order_icon,
    upload_area,
    profile_icon,
    menu_icon,
    delivery_truck_icon,
    warranty_icon,
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
};

export const categories = [
    {
        text: "Smartphones",
        path: "Smartphones",
        image: smartphones_image,
        bgColor: "#FEF6DA",
    },
    {
        text: "Laptops",
        path: "Laptops",
        image: laptops_image,
        bgColor: "#FEE0E0",
    },
    {
        text: "Televisions",
        path: "TVs",
        image: tv_image,
        bgColor: "#F0F5DE",
    },
    {
        text: "Headphones",
        path: "Headphones",
        image: headphones_image,
        bgColor: "#E1F5EC",
    },
    {
        text: "Smartwatches",
        path: "Smartwatches",
        image: smartwatches_image,
        bgColor: "#FEE6CD",
    },
    {
        text: "Cameras",
        path: "Cameras",
        image: camera_image,
        bgColor: "#E0F6FE",
    },
    {
        text: "Accessories",
        path: "Accessories",
        image: accessories_image,
        bgColor: "#F1E3F9",
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
        title: "Customer Support",
        links: [
            { text: "Shipping Information", url: "#" },
            { text: "Return & Warranty Policy", url: "#" },
            { text: "Payment Methods", url: "#" },
            { text: "Track your Order", url: "#" },
            { text: "Technical Support", url: "#" },
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
        title: "Fast Delivery",
        description: "Orders delivered within 24-48 hours.",
    },
    {
        icon: warranty_icon,
        title: "Extended Warranty",
        description: "All products come with manufacturer warranty.",
    },
    {
        icon: coin_icon,
        title: "Best Prices",
        description: "Quality electronics at competitive prices.",
    },
    {
        icon: trust_icon,
        title: "Trusted by Millions",
        description: "Over 1 million satisfied customers.",
    },
];

export const dummyProducts = [
    // Smartphones
    {
        _id: "sm01a12b",
        name: "iPhone 15 Pro 256GB",
        category: "Smartphones",
        price: 119900,
        offerPrice: 114900,
        image: [iphone_15_pro_image],
        description: [
            "A17 Pro chip with 6-core CPU",
            "6.1-inch Super Retina XDR display",
            "48MP main camera with 4x optical zoom",
            "Titanium design with Action button",
            "All-day battery life with USB-C",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "sm02b23c",
        name: "Samsung Galaxy S24 Ultra",
        category: "Smartphones",
        price: 99900,
        offerPrice: 94900,
        image: [samsung_s24_ultra_image],
        description: [
            "Snapdragon 8 Gen 3 processor",
            "6.8-inch QHD+ Dynamic AMOLED 2X",
            "200MP main camera with 10x optical zoom",
            "Galaxy AI features with real-time translation",
            "5000mAh battery with 45W fast charging",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "sm03c34d",
        name: "Google Pixel 8 Pro",
        category: "Smartphones",
        price: 79900,
        offerPrice: 74900,
        image: [google_pixel_8_image],
        description: [
            "Google Tensor G3 chip",
            "6.7-inch Super Actua display",
            "50MP triple camera system",
            "Advanced AI features with Google Assistant",
            "4950mAh battery with wireless charging",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "sm04d45e",
        name: "OnePlus 12 5G",
        category: "Smartphones",
        price: 69900,
        offerPrice: 64900,
        image: [oneplus_12_image],
        description: [
            "Snapdragon 8 Gen 3 processor",
            "6.82-inch 120Hz LTPO AMOLED display",
            "50MP Hasselblad camera system",
            "5400mAh battery with 100W SUPERVOOC charging",
            "16GB RAM + 512GB storage",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "sm05e56f",
        name: "Xiaomi 14 Ultra",
        category: "Smartphones",
        price: 74900,
        offerPrice: 69900,
        image: [xiaomi_14_image],
        description: [
            "Snapdragon 8 Gen 3 processor",
            "6.73-inch 2K 120Hz AMOLED display",
            "50MP Leica quad camera system",
            "5000mAh battery with 90W turbo charging",
            "IP68 water and dust resistance",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },

    // Laptops
    {
        _id: "lp01f67g",
        name: "MacBook Pro 16-inch",
        category: "Laptops",
        price: 249900,
        offerPrice: 239900,
        image: [macbook_pro_image],
        description: [
            "M3 Pro or M3 Max chip",
            "16-inch Liquid Retina XDR display",
            "Up to 24-core CPU and 40-core GPU",
            "Up to 128GB unified memory",
            "Up to 22 hours of battery life",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "lp02g78h",
        name: "Dell XPS 15 (2025)",
        category: "Laptops",
        price: 179900,
        offerPrice: 169900,
        image: [dell_xps_15_image],
        description: [
            "Intel Core Ultra 9 processor",
            "15.6-inch 4K OLED InfinityEdge display",
            "NVIDIA GeForce RTX 4070 graphics",
            "32GB DDR5 RAM, 1TB SSD",
            "CNC aluminum unibody design",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "lp03h89i",
        name: "HP Spectre x360 16",
        category: "Laptops",
        price: 149900,
        offerPrice: 139900,
        image: [hp_spectre_image],
        description: [
            "Intel Core Ultra 7 processor",
            "16-inch 3K+ OLED touchscreen",
            "Intel Arc graphics",
            "32GB RAM, 2TB SSD",
            "360° hinge with stylus support",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "lp04i90j",
        name: "Lenovo Yoga 9i Gen 9",
        category: "Laptops",
        price: 129900,
        offerPrice: 119900,
        image: [lenovo_yoga_image],
        description: [
            "Intel Core Ultra 7 processor",
            "14-inch 4K OLED touchscreen",
            "Intel Arc graphics",
            "16GB RAM, 1TB SSD",
            "Rotating soundbar with Dolby Atmos",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "lp05j01k",
        name: "ASUS Zenbook Pro 16X",
        category: "Laptops",
        price: 189900,
        offerPrice: 179900,
        image: [asus_zenbook_image],
        description: [
            "Intel Core i9 processor",
            "16-inch 4K OLED touchscreen",
            "NVIDIA GeForce RTX 4080 graphics",
            "32GB RAM, 2TB SSD",
            "AAS Ultra hinge with cooling system",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },

    // TVs
    {
        _id: "tv01k12l",
        name: "LG OLED evo G4 65-inch",
        category: "TVs",
        price: 249900,
        offerPrice: 229900,
        image: [lg_oled_tv_image],
        description: [
            "4K OLED evo display with Brightness Booster Max",
            "α11 AI Processor with AI Picture Pro",
            "Dolby Vision IQ and Dolby Atmos",
            "HDMI 2.1 with 4K 120Hz gaming",
            "webOS 24 with AI Concierge",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "tv02l23m",
        name: "Samsung Neo QLED QN90D 75-inch",
        category: "TVs",
        price: 279900,
        offerPrice: 259900,
        image: [samsung_qled_tv_image],
        description: [
            "4K Neo QLED with Mini LED backlight",
            "NQ8 AI Gen2 Processor",
            "Anti-glare display with Ultra Viewing Angle",
            "Object Tracking Sound+ with Q-Symphony",
            "Gaming Hub with 144Hz refresh rate",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "tv03m34n",
        name: "Sony BRAVIA XR A95L 65-inch",
        category: "TVs",
        price: 329900,
        offerPrice: 299900,
        image: [sony_bravia_tv_image],
        description: [
            "4K QD-OLED display",
            "Cognitive Processor XR",
            "Acoustic Surface Audio+",
            "BRAVIA Core streaming service",
            "Perfect for PS5 with HDMI 2.1",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "tv04n45o",
        name: "TCL 65" 4K QLED Google TV",
        category: "TVs",
        price: 89900,
        offerPrice: 79900,
        image: [tcl_4k_tv_image],
        description: [
            "4K QLED display with Quantum Dot technology",
            "Google TV with built-in Google Assistant",
            "Dolby Vision and Dolby Atmos",
            "144Hz Variable Refresh Rate for gaming",
            "AI-powered picture and sound enhancement",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "tv05o56p",
        name: "Hisense 75" U8N Mini-LED TV",
        category: "TVs",
        price: 139900,
        offerPrice: 129900,
        image: [hisense_tv_image],
        description: [
            "4K Mini-LED with over 1500 nits peak brightness",
            "Full Array Local Dimming Pro",
            "IMAX Enhanced and Filmmaker Mode",
            "HDMI 2.1 with 144Hz gaming mode",
            "VIDAA U7 OS with voice control",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },

    // Headphones
    {
        _id: "hp01p67q",
        name: "Apple AirPods Pro 2",
        category: "Headphones",
        price: 24900,
        offerPrice: 22900,
        image: [airpods_pro_image],
        description: [
            "Active Noise Cancellation",
            "Adaptive Transparency mode",
            "Personalized Spatial Audio",
            "H2 chip with advanced computational audio",
            "Up to 6 hours of listening time",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "hp02q78r",
        name: "Sony WH-1000XM5",
        category: "Headphones",
        price: 34900,
        offerPrice: 29900,
        image: [sony_wh1000xm5_image],
        description: [
            "Industry-leading noise cancellation",
            "8 microphones with Auto NC Optimizer",
            "30-hour battery life",
            "LDAC codec support for Hi-Res Audio",
            "Multipoint connection with Speak-to-Chat",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "hp03r89s",
        name: "Bose QuietComfort 45",
        category: "Headphones",
        price: 29900,
        offerPrice: 26900,
        image: [bose_qc45_image],
        description: [
            "World-class noise cancellation",
            "24-hour battery life",
            "Lightweight and comfortable design",
            "Aware Mode for hearing surroundings",
            "High-fidelity audio performance",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "hp04s90t",
        name: "Samsung Galaxy Buds2 Pro",
        category: "Headphones",
        price: 17900,
        offerPrice: 15900,
        image: [samsung_buds2_pro_image],
        description: [
            "Hi-Fi 24-bit audio",
            "Intelligent Active Noise Cancellation",
            "360 Audio with Direct Multi-Channel",
            "IPX7 water resistance",
            "Up to 18 hours of battery with case",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "hp05t01u",
        name: "JBL Tune 770NC",
        category: "Headphones",
        price: 12900,
        offerPrice: 9900,
        image: [jbl_tune_image],
        description: [
            "Active Noise Cancellation",
            "JBL Pure Bass Sound",
            "70 hours of battery life",
            "Multipoint connection",
            "Lightweight foldable design",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },

    // Smartwatches
    {
        _id: "sw01u12v",
        name: "Apple Watch Series 9",
        category: "Smartwatches",
        price: 44900,
        offerPrice: 41900,
        image: [apple_watch_s9_image],
        description: [
            "Always-On Retina display",
            "Double tap gesture control",
            "Advanced health sensors",
            "Crash Detection and Fall Detection",
            "Water resistant to 50 meters",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "sw02v23w",
        name: "Samsung Galaxy Watch6 Classic",
        category: "Smartwatches",
        price: 39900,
        offerPrice: 36900,
        image: [samsung_watch6_image],
        description: [
            "Rotating bezel with Super AMOLED display",
            "BioActive Sensor for health monitoring",
            "Body Composition analysis",
            "Advanced sleep coaching",
            "IP68 and 5ATM water resistance",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "sw03w34x",
        name: "Garmin Fenix 8 Pro",
        category: "Smartwatches",
        price: 79900,
        offerPrice: 74900,
        image: [garmin_fenix_image],
        description: [
            "AMOLED display with touchscreen",
            "Multi-band GPS with mapping",
            "Advanced training metrics",
            "Up to 28 days battery life",
            "Titanium bezel with sapphire crystal",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "sw04x45y",
        name: "Fitbit Sense 2",
        category: "Smartwatches",
        price: 24900,
        offerPrice: 21900,
        image: [fitbit_sense_image],
        description: [
            "EDA sensor for stress management",
            "ECG app for heart health",
            "Built-in GPS",
            "6+ days battery life",
            "Google Assistant and Alexa built-in",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "sw05y56z",
        name: "Amazfit GTR 4",
        category: "Smartwatches",
        price: 16900,
        offerPrice: 14900,
        image: [amazfit_gtr_image],
        description: [
            "1.43-inch AMOLED display",
            "Dual-band GPS",
            "150+ sports modes",
            "14-day battery life",
            "Alexa built-in with offline voice assistant",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },

    // Cameras
    {
        _id: "cm01z67a",
        name: "Canon EOS R6 Mark II",
        category: "Cameras",
        price: 249900,
        offerPrice: 239900,
        image: [canon_eos_r6_image],
        description: [
            "24.2MP full-frame CMOS sensor",
            "4K60p video with 6K oversampling",
            "In-body image stabilization up to 8 stops",
            "40fps electronic shutter",
            "Dual card slots with Wi-Fi and Bluetooth",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "cm02a78b",
        name: "Sony Alpha A7 IV",
        category: "Cameras",
        price: 249900,
        offerPrice: 234900,
        image: [sony_a7iv_image],
        description: [
            "33MP full-frame Exmor R CMOS sensor",
            "4K 60p 10-bit 4:2:2 video",
            "759-point phase-detection AF",
            "5-axis in-body image stabilization",
            "CFexpress Type A and SD UHS-II card slots",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "cm03b89c",
        name: "Nikon Z6 II",
        category: "Cameras",
        price: 189900,
        offerPrice: 179900,
        image: [nikon_z6ii_image],
        description: [
            "24.5MP full-frame BSI CMOS sensor",
            "Dual EXPEED 6 processors",
            "4K 60p video with N-Log",
            "5-axis in-body VR stabilization",
            "Dual card slots (CFexpress/XQD and SD UHS-II)",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    // Cameras (continued)
    {
        _id: "cm04c90d",
        name: "Fujifilm X-T5",
        category: "Cameras",
        price: 179900,
        offerPrice: 169900,
        image: [fujifilm_xt5_image],
        description: [
            "40.2MP APS-C X-Trans CMOS 5 HR sensor",
            "6.2K/30p video with F-Log2",
            "5-axis in-body stabilization",
            "High-speed autofocus with deep learning",
            "Retro-style body with analog controls",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "cm05d01e",
        name: "GoPro HERO11 Black",
        category: "Cameras",
        price: 59900,
        offerPrice: 54900,
        image: [gopro_hero11_image],
        description: [
            "5.3K video at 60fps",
            "HyperSmooth 5.0 stabilization",
            "Waterproof up to 10m",
            "Front and rear LCD screens",
            "Enduro battery included",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },

    // Accessories
    {
        _id: "ac01e12f",
        name: "Anker PowerCore 20000mAh",
        category: "Accessories",
        price: 3499,
        offerPrice: 2999,
        image: [anker_powerbank_image],
        description: [
            "High-capacity portable charger",
            "Dual USB-A output",
            "MultiProtect safety system",
            "Fast charging with PowerIQ",
            "Compact and travel-friendly",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "ac02f23g",
        name: "Logitech MX Master 3S",
        category: "Accessories",
        price: 9999,
        offerPrice: 8999,
        image: [logitech_mx_master_image],
        description: [
            "Ergonomic design with ultra-quiet clicks",
            "8000 DPI sensor for any surface",
            "MagSpeed Electromagnetic scrolling",
            "USB-C quick charging",
            "Works with Windows and macOS",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "ac03g34h",
        name: "SanDisk Extreme SSD 1TB",
        category: "Accessories",
        price: 14999,
        offerPrice: 13499,
        image: [sandisk_ssd_image],
        description: [
            "High-speed NVMe solid state performance",
            "Read speeds up to 1050MB/s",
            "Drop protection and IP55 water/dust resistance",
            "USB-C and USB-A compatible",
            "Compact and rugged design",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "ac04h45i",
        name: "Belkin 3-in-1 Wireless Charger",
        category: "Accessories",
        price: 12999,
        offerPrice: 11999,
        image: [belkin_charger_image],
        description: [
            "Charges iPhone, Apple Watch, and AirPods",
            "Fast wireless charging up to 15W",
            "MagSafe-compatible design",
            "LED indicator and safety features",
            "Sleek and modern stand",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "ac05i56j",
        name: "Razer BlackWidow V4 Pro",
        category: "Accessories",
        price: 19999,
        offerPrice: 18499,
        image: [razer_keyboard_image],
        description: [
            "Mechanical gaming keyboard",
            "Razer Green switches for tactile feedback",
            "Dedicated macro keys and media controls",
            "Razer Chroma RGB with 38-zone underglow",
            "Ergonomic wrist rest included",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
    },
];

export const dummyAddress = [
    {
        _id: "user1_address_1",
        userId: "user1",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        street: "123 Tech Street",
        city: "Electro City",
        state: "CA",
        zipcode: 90210,
        country: "US",
        phone: "5551234567",
    },
];

export const dummyOrders = [
    {
        _id: "order001",
        userId: "user1",
        items: [
            {
                product: dummyProducts[0],
                quantity: 1,
                _id: "order001_item1",
            },
        ],
        amount: 114900,
        address: dummyAddress[0],
        status: "Order Placed",
        paymentType: "Online",
        isPaid: true,
        createdAt: "2025-04-01T10:00:00.000Z",
        updatedAt: "2025-04-01T10:05:00.000Z",
    },
    {
        _id: "order002",
        userId: "user1",
        items: [
            {
                product: dummyProducts[10],
                quantity: 1,
                _id: "order002_item1",
            },
            {
                product: dummyProducts[22],
                quantity: 2,
                _id: "order002_item2",
            },
        ],
        amount: 129800,
        address: dummyAddress[0],
        status: "Delivered",
        paymentType: "COD",
        isPaid: false,
        createdAt: "2025-04-02T14:00:00.000Z",
        updatedAt: "2025-04-02T18:00:00.000Z",
    },
];
