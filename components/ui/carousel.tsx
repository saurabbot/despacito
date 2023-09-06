// /* eslint-disable react/display-name */
// import * as React from "react";
// import { cn } from "@/lib/utils";
// import { cva, type VariantProps } from "class-variance-authority";
// import { JsonObject } from "@prisma/client/runtime/library";
// const defaultItemsPerSlide = 3;
// type CarouselProps = {
//   loading?: boolean;
//   children: string | JSX.Element | JSX.Element[];
//   variant: "default" | "disabled";
//   childrenLength: number;
// };

// const corouselVariants = cva("p-1 m-1", {
//   variants: {
//     variant: {
//       default: "flex bg-black shadow-md ",
//       disabled: "bg-slate-400",
//     },
//   },
//   defaultVariants: {
//     variant: "default",
//   },
// });
// type SlideProps = {
//   children: string | JSX.Element | JSX.Element[] | JsonObject
// };
// const Slide: React.FC<SlideProps> = () => {
//   return <div></div>;
// };
// const Carousel: React.FC<CarouselProps> = React.forwardRef<
//   HTMLDivElement,
//   CarouselProps
// >((props, ref) => {
//   const numberOfSlides = Math.ceil(props.childrenLength / defaultItemsPerSlide);
//   const variant = props.variant;
//   const a = {}
//   for(let i = 0;i<=defaultItemsPerSlide;i++){
//     a[i] = props.children.slice(0,3)
//   }

//   return (
//     <div ref={ref} className={cn(corouselVariants({ variant }))}>
//       <div>
//         <span>X</span>
//         {a.map(slideData) => (
//             <Slide data={slideData} />
//         )}
       
//         <span>X</span>
//       </div>
//       <div>Pagination</div>
//     </div>
//   );
// });

// export default Carousel;
