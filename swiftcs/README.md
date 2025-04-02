This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# My Dependancies
# UI Lib --> Tailwind Css
# Icons --> Licide Icons => npm install lucide-react
# Animation --> GSAp => npm install gsap
# MongoDb --> npm install mongodb
# Mongoose --> npm install mongoose
# Typewriter --> npm install react-typical
# Lenis --> npm install @studio-freight/lenis
# Lottie --> npm install lottie-react



<div className="flex flex-wrap mt-10">
          <div className='p-4 max-w-sm'>
            <h1 className='flex justify-center gap-x-2'>
              <span>Students Event</span>
              <i className='text-green-500'><Hexagon /></i>
            </h1>
            <p>Engaging events where students showcase talent, compete, and learn together.</p>
            <Link href='' className={`${styles.Link} flex justify-center gap-x-2`}>
              <span>More</span>
              <i> <Unlink /></i>
            </Link>
          </div>
          <div className='p-4 max-w-sm'>
            <h1 className='flex justify-center gap-x-2'>
              <span>Certifications</span>
              <i className='text-green-500'><Gem /></i>
            </h1>
            <p>Recognized certifications that validate student skills and boost careers.</p>
            <Link href='' className={`${styles.Link} flex justify-center gap-x-2`}>
              <span>More</span>
              <i> <Unlink /></i>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap mt-10">
          <div className='p-4 max-w-sm'>
            <h1 className='flex justify-center gap-x-2'>
              <span>Medals</span>
              <i className='text-green-500'><Medal /></i>
            </h1>
            <p>Awards for excellence in academics, sports, and activities, inspiring success.</p>
            <Link href='' className={`${styles.Link} flex justify-center gap-x-2`}>
              <span>More</span>
              <i> <Unlink /></i>
            </Link>
          </div>
          <div className='p-4 max-w-sm'>
            <h1 className='flex justify-center gap-x-2'>
              <span>Coordinators</span>
              <i className='text-green-500'><Flame /></i>
            </h1>
            <p>Leaders who plan, organize, and ensure smooth event execution.</p>
            <Link href='' className={`${styles.Link} flex justify-center gap-x-2`}>
              <span>More</span>
              <i> <Unlink /></i>
            </Link>
          </div>
        </div>