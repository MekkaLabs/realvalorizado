import React from 'react'
import Carousel from './carousel'
import CarouselItem from './carousel-item'
import Review from './review'

const Testimonials: React.FC = () => (
    <Carousel className="bg-black text-white py-10 lg:py-20">
        <CarouselItem index={0}>
            <Review by="Axel (CEO of Showtime)">
                Margelo and showtime both share the love for high-quality software, the passion for buil,ding something people want and the ambietion of always doing our best. 10/10 would recommend working with Marc and his team.
            </Review>
        </CarouselItem>
        <CarouselItem index={1}>
            <Review by="Louise (CEO of Stori)">
                When we first found Margelo they seemed too good to be true. Professional, fast and ridiculously talented; the 3D AR Filter component they have developed for our React Native app is super smooth and responsive.
            </Review>
        </CarouselItem>
        <CarouselItem index={2}>
            <Review by="Clinton (CEO of Slingshot)">
                Working with the Margelo team feels like a cheat code. When it comes to building performant and scalable React Native mobile apps, they&ldquo;re the best hands down.
            </Review>
        </CarouselItem>
        <CarouselItem index={3}>
            <Review by="Alex (CTO of Steakwallet)">
                The output of Margelo is unlike any other team we&ldquo;ve worked with. Their speed, professionalism and familiarity with all things mobile helped turn Steakwallet into the slick application it is known as today.
            </Review>
        </CarouselItem>
        <CarouselItem index={4}>
            <Review by="Adam Carlton (CEO Pink Panda)">
                Margelo is a collection of world class talent, from React Native to website, full stack to design - I&ldquo;ve been nothing but pleased with their communication, imagination, insight and delivery.
            </Review>
        </CarouselItem>
    </Carousel>
)

export default Testimonials