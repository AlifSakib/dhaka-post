# The Downtown - News Portal

A modern news website built with Next.js 15, React 18, and Tailwind CSS 3.x, based on the CityNews template design.

## 🚀 Technologies Used

- **Next.js 15.1.3** - React framework with App Router
- **React 18.3.1** - UI library
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **TypeScript 5.7.2** - Type-safe JavaScript
- **Next.js Image Optimization** - Automatic image optimization

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗️ Build

Build the application for production:

```bash
npm run build
```

## 🚀 Production

Start the production server:

```bash
npm start
```

## 📱 Features

### Responsive Design
- **Desktop**: Full three-column layout with sidebars
- **Tablet**: Adaptive layout with optimized spacing
- **Mobile**: Single-column stacked layout

### Components

#### Header
- Site branding with "THE DOWNTOWN" logo
- Horizontal navigation menu with 9 categories
- Responsive navigation with scroll on mobile

#### The Latest Sidebar (Left)
- List of recent news articles
- Thumbnail images with titles
- Hover effects for better UX

#### Featured Article (Center)
- Large hero image
- Main headline and excerpt
- Author and date information
- Grid of 3 related articles below

#### Right Sidebar
- Featured card with category badge
- Secondary featured article
- Images and descriptions

#### Opinion Section
- Bullet-point list of opinion articles
- Clean typography
- Hover states

## 🎨 Design Features

- Clean, modern news layout
- Consistent spacing and typography
- Hover effects and transitions
- Optimized images with Next.js Image component
- Mobile-first responsive design
- Semantic HTML structure

## 📁 Project Structure

```
dhaka-post-task/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Home page with layout composition
├── components/
│   ├── Header.tsx            # Site header and navigation
│   ├── TheLatestSidebar.tsx  # Left sidebar news list
│   ├── FeaturedArticle.tsx   # Main content area
│   ├── RightSidebar.tsx      # Right sidebar content
│   └── OpinionSection.tsx    # Opinion articles list
├── public/                   # Static assets
├── .github/
│   └── copilot-instructions.md
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
└── package.json              # Dependencies and scripts
```

## 🔧 Configuration

### Tailwind CSS
Configured with custom theme extensions in `tailwind.config.ts`

### Next.js
- App Router enabled
- Image optimization configured for external images
- TypeScript strict mode enabled

## 📝 Notes

- All images use Next.js Image component for automatic optimization
- Components are fully reusable and type-safe
- Follows Next.js 15 best practices with App Router
- Semantic HTML for better accessibility
- CSS utilities organized with Tailwind's utility-first approach

## 🌐 Reference

Design based on the CityNews template from [jnews.io/citynews/](https://jnews.io/citynews/)
# dhaka-post
