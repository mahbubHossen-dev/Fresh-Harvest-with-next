
# 🥦 Fresh Harvest – Grocery Delivery Website (Next.js + TypeScript)

Fresh Harvest is a modern and responsive grocery/produce website.  
It is built using Next.js, TypeScript, Tailwind CSS, and Next/Image for optimized performance.

## 🌟 Live Preview

[👉 Live Demo (Vercel link)](https://fresh-harvest-with-next.vercel.app/)

## 📸 Homepage Sections Overview

The homepage includes the following sections:

1. **Banner** – Hero section with headline and CTA
2. **About** – Introduction to Fresh Harvest
3. **Product Filter Section** – Filter products by Fruits, Vegetables, Salad
4. **Special Offer** – Time-limited discount UI
5. **Testimonial** – Customer reviews
6. **Blog Section** – Blog cards with tips and recipes

## 🚀 Technologies Used

| Tool              | Description                        |
|-------------------|------------------------------------|
| Next.js           | React Framework for SSR & Routing |
| TypeScript        | Type-safe JavaScript               |
| Tailwind CSS      | Utility-first CSS framework        |
| Next/Image        | Optimized image loading            |
| React Hooks       | `useState`, `useEffect`, etc.      |

## 🧠 Features

- Responsive design (mobile-first)
- Product filtering (`Fruits`, `Vegetables`, `Salad`)
- Blog and testimonial cards
- UI-based special offer countdown
- Optimized image loading with Next/Image

## 🔧 Installation & Run Locally

```bash
git clone https://github.com/mahbubHossen-dev/Fresh-Harvest-with-next
cd fresh-harvest
npm install
npm run dev
```


## 📁 Project Structure

```
fresh-harvest/
├── components/
│   └── homeComponents/
│       ├── About.tsx
│       ├── Banner.tsx
│       ├── BlogSection.tsx
│       ├── FreshProductComponent.tsx
│       ├── SpecialOffer.tsx
│       └── Testimonial.tsx
├── public/
├── pages/
│   └── index.tsx
├── styles/
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## 🐞 Known Issues

- Product filter UI works, but filtering logic is not applied yet
- Typo: "Out Products" → should be "Our Products"
- Blog images use deprecated layout prop

## 📌 Future Improvements

- Fix product filter logic
- Implement dynamic countdown timer
- Add footer and contact form
- Add product/blog details pages

## 🙋‍♂️ Author

**Mahbub Hossen**  
👉 [GitHub](https://github.com/mahbubHossen-dev)
