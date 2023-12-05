import CardArtikel from '@/components/artikel'
import Card from '@/components/card'
import CardWithDecorativeImage from '@/components/card2'
import Card2 from '@/components/card2'
import DefaultCarousel from '@/components/carousel'
import DefaultNavbar from '@/components/navbar'
import Image from 'next/image'


export default function Home() {
  
  return (
    <>
  <div className='bg-bekgron3 w-screen  '>
    <DefaultNavbar/>
   <div className='bg-bekgron2  md:w-screen sm:w-screen w-screen md:h-[550px] sm:h-80 bg-cover h-48  '>
    <p className='text-center md:text-9xl text-rose-700 md:pt-64 sm:pt-48 font-bold sm:text-5xl text-4xl pt-20 '>REALITY CLUB</p>
   </div>
   
   <div >
    
       <div>
        {/* <p className='text-[#FFE17B] font-bold text-center text-4xl pt-24'>Reality Club
    </p> */}
    <CardArtikel/>
        {/* <p className='text-white font-bold text-justify md:text-2xl sm:text-xl   text-base pb-20 pt-24 md:m-auto sm:ml-[67px] ml-28  md:w-[1200px] sm:w-[600px] w-[400px] 
        '>
       
        </p>  */}
       
        
    </div>
    
    <div className='md:m-auto sm:ml-[67px]  md:w-[1200px] sm:w-[600px] ml-28  w-[400px] border-t-4 border-rose-700 '>
    <img src="/images/fathia.jpg" className='m-7     md:float-left sm:grid md:w-[450px] sm:w-[300px] w-[250px] grid'
        />
         
         <p className='text-white font-bold text-justify md:text-2xl sm:text-lg text-base  border-l-4 border-rose-700 pt-5  sm:pl-3 pl-5 pb-10 '>
         <span className='text-[#FF9F29] font-bold text-left md:text-3xl sm:text-xl text-lg '>Fathia Izzati Saripudin<br/></span>
         <span  className='text-[#FF9F29] font-bold text-left text-2xl '>Vokalis - Keyboardis<br/> </span>
        Fathia lahir di Jakarta pada 26 September 1994 dari ibu bernama Zulfanah dan ayah bernama Mohamad Hery Saripudin yang bekerja sebagai diplomat. Ia merupakan anak kedua dari tiga bersaudara dengan kakak bernama Faiz Novascotia Saripudin dan adik Farisha Aqilah Saripudin. Fathia membangun kanal YouTubenya sejak 30 Mei 2011. Ia sering membagikan cerita mengenai hidupnya, pekerjaannya, opini, dan cover lagu.
        Selain menjadi seorang pencipta konten, Fathia juga menjadi vokalis di Reality Club, grup musik yang ia besarkan bersama kakak dan teman-temannya.

        </p>
        <img src="/images/faiz1.jpg" className='m-7   md:float-right sm:grid md:w-[450px] sm:w-[300px] w-[280px] grid'
        />
         <p className='text-white font-bold text-justify  border-r-4 md:text-2xl sm:text-lg text-base border-rose-700 pt-5 pb-10 pr-5'>
         <span className='text-[#FF9F29] font-bold text-left text-3xl md:text-3xl sm:text-xl text-lg '>Faiz Novascotia Saripudin<br/></span>
         <span  className='text-[#FF9F29] font-bold text-left text-2xl '>Gitaris - vokalis<br/> </span>
         Faiz lahir di Nova Scotia, Kanada pada 14 Juni 1993 dari ibu bernama Zulfanah dan ayah bernama Mohamad Hery Saripudin yang bekerja sebagai diplomat. Ia merupakan anak pertama dari tiga bersaudara dengan adik bernama Fathia Izzati Saripudin dan Farisha Aqilah Saripudin. 
        </p>

        <img src="/images/nugi.jpg" className='m-7     md:float-left sm:grid md:w-[450px] sm:w-[300px] w-[280px] grid '
        />
         <p className='text-white font-bold text-justify  border-l-4 md:text-2xl sm:text-lg text-base  border-rose-700 pt-7 pb-5 pl-5'>
         <span className='text-[#FF9F29] font-bold text-left text-3xl md:text-3xl sm:text-xl text-lg '>Nugi Wicaksono<br/></span>
         <span  className='text-[#FF9F29] font-bold text-left text-2xl '>Bassis<br/> </span>
         Nugi Wicaksono adalah seorang penulis, penyiar radio, dan pembuat konten asal Indonesia yang dikenal sebagai salah satu anggota Reality Club, sebuah kelompok penulis muda yang aktif di Indonesia. Kelompok ini terkenal karena tulisan-tulisan mereka yang kreatif dan pemikiran yang dalam. Nugi Wicaksono adalah seorang penulis, penyiar radio, dan pembuat konten asal Indonesia yang dikenal sebagai salah satu anggota Reality Club, sebuah kelompok penulis muda yang aktif di Indonesia. Kelompok ini terkenal karena tulisan-tulisan mereka yang kreatif dan pemikiran yang dalam.
        </p>

        <img src="/images/eraa1.jpeg" className='m-7      md:float-right sm:grid md:w-[450px] sm:w-[300px] w-[280px] grid'
        />
         <p className='text-white font-bold text-justify md:text-2xl sm:text-lg text-base border-r-4 border-rose-700 pt-5 pb-10 pr-5'>
         <span className='text-[#FF9F29] font-bold text-left text-3xl md:text-3xl sm:text-xl text-lg'>Era Patigo<br/></span>
         <span  className='text-[#FF9F29] font-bold text-left text-2xl '>Drummer<br/> </span>
         Era Patigo adalah drummer yang memiliki mantan paling banyak di antara member lain ini juga sempat menempuh pendidikan di universitas yang sama dengan Fathia dan Faiz. Selain itu, ia juga merupakan mahasiswa berprestasi yang menyumbangkan medali emas baseball di ajang pertandingan PON 2016.
        </p>
        md:text-3xl sm:text-xl text-lg
        <img src="/images/ikbal.jpeg" className='m-7      md:float-left sm:grid md:w-[450px] sm:w-[300px] w-[280px] grid '
        />
         <p className='text-white font-bold text-justify md:text-2xl sm:text-lg text-base border-l-4 border-rose-700 pt-5 pb-14 pl-5'>
         <span className='text-[#FF9F29] font-bold text-left text-3xl md:text-3xl sm:text-xl text-lg'>Iqbal Anggakusumah<br/></span>
         <span  className='text-[#FF9F29] font-bold text-left text-2xl '>Gitaris(Ex Member)<br/> </span>
         Iqbal Anggakusumah, memutuskan hengkang dari grup musik yang telah menaunginya selama hampir enam tahun. Kabar mengenai hengkangnya Iqbal Anggakusumah tersebut diketahui dari unggahan akun Instagram Reality Club.
        </p>
        <img src="/images/mayo1.jpg" className='m-7      md:float-right sm:grid md:w-[450px] sm:w-[300px] w-[280px] grid '
         />
         <p className='text-white font-bold text-justify md:text-2xl sm:text-lg text-base border-r-4 border-b-4 border-rose-700 pt-5 pb-14 pr-5'>
         <span className='text-[#FF9F29] font-bold text-left text-3xl md:text-3xl sm:text-xl text-lg'>Mayo Falmonti<br/></span>
         <span  className='text-[#FF9F29] font-bold text-left md:text-2xl sm:text-lg '>Bassis(Ex Member)<br/> </span>
         Mayo keluar setelah enam bulan terbentuk karena kesibukan pribadi. Selain tergabung dalam band lain, Mayo juga berprofesi sebagai pengacara. kepergian Mayo tidak mengganggu proses kreatif dan jadwal penampilan Reality Club. Mereka tetap membuat musik dan menulis lirik dengan tujuan menghibur pecinta musik. Sampai akhirnya, mereka mengajak Nugi Wicaksono untuk menggantikan Mayo.


        </p>
       </div>
    
    
   
    </div>
    </div>
    </>
  )
}
