import sixyearjourney from '../../../../Images/BookLibrary/photo/sixyearjourney.jpg';


    




function Heading({name}) {

  return (
    <>
    <div initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0 }} className='w-[120%] ms-[-5.6%] mt-[-5.6%] ' style={{backgroundImage: `url(${sixyearjourney})`,backgroundSize: 'cover',backgroundRepeat:'no-repeat',backgroundPosition: 'center'}}>

    <section className="py-14 ">

        <h1 className="text-4xl md:text-6xl lg:text-[80px] font-normal px-20 text-white leading-80 text-left" >{name}</h1>

    </section>
    </div>

    </>
  );

 
}

export default Heading;

