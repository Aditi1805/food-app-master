import Link  from 'next/link';

const AuthLink = ({ href, text }: {href:string , text:String}) => {
    return (
      <Link href={href}>
        <p className="bg-accent text-white px-6 py-2 rounded-3xl hover:bg-accent-dark">
          {text}
        </p>
      </Link>
    );
  };
  
  export default AuthLink