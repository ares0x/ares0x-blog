import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="p-24">
    <Header />
    <section className="py-24 flex flex-col items-center text-center gap-8">
      <h1 className="text-4xl font-bold">Build in public && Feedback in public</h1>
      <p className="text-2xl text-primary">Connect to your clients, collect the feedback from your client.</p>
    </section>
    <div className="flex gap-6 py-6 items-center justify-center">
      <Button variant={"secondary"}>Learn More</Button>
      <Button>Learn More</Button>
      </div>
      <Footer />
  </main>
  )
}
