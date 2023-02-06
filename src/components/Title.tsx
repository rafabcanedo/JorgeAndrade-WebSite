type TitleProps = {
 title: string;
}

export function Title({ title }: TitleProps) {
 return(
 <h1 className="text-center font-roboto font-bold mb-8 text-black text-3xl underline decoration-primary">
  {title}
 </h1>
 );
}