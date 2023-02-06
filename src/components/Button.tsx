type ButtonProps = {
 title: string;
}

export function Button({ title }: ButtonProps) {
 return(
  <div>
    <a href="https://www.instagram.com/eusoujorgeandrade/" target="_blank">
     <button className="bg-primary text-white font-semibold py-2 px-4 rounded-lg">
      {title}
     </button>
    </a>
  </div>
 );
}