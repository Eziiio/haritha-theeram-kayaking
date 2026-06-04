import React, { useState } from 'react';
import { ZoomIn, MapPin } from 'lucide-react';


export default function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null);


  const galleryItems = [

    {
      id: 1,
      title: 'Golden Moments at Arival Thoodu',
      description:
        'Experience peaceful kayaking moments surrounded by calm waters, greenery, and the natural beauty of Arival Thoodu.',
      imgSrc: '/images/arival-hero.png',
      location: 'Arival Thoodu, Vaikom',
    },


    {
      id: 2,
      title: 'Kayaking Through Green Trails',
      description:
        'A refreshing paddling experience through the natural waterways of Kulashekaramangalam.',
      imgSrc: '/images/kayaking-trail.png',
      location: 'Kulashekaramangalam',
    },


    {
      id: 3,
      title: 'Explore the Waterway',
      description:
        'Discover the quiet routes of Arival Thoodu connected with the Muvattupuzha River system.',
      imgSrc: '/images/river-route.png',
      location: 'Arival Thoodu',
    },


    {
      id: 4,
      title: 'Into The Green',
      description:
        'Enjoy kayaking through peaceful surroundings filled with trees, birds, and village landscapes.',
      imgSrc: '/images/nature-kayak.png',
      location: 'Vaikom, Kottayam',
    },


    {
      id: 5,
      title: 'Nature Around Every Turn',
      description:
        'A calm journey through the hidden waterways and natural beauty of Kulashekaramangalam.',
      imgSrc: '/images/waterway.png',
      location: 'Kulashekaramangalam',
    },

  ];



  return (

    <div className="bg-slate-50 min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">


        {/* Header */}

        <div className="text-center space-y-4 max-w-3xl mx-auto">


          <h1 className="text-xs font-bold text-teal-600 uppercase tracking-widest">

            Moments From Nature

          </h1>


          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">

            Arival Thoodu Kayaking Gallery

          </h2>


          <p className="text-slate-500 font-medium">

            Explore real moments from Haritha Theeram Kayaking at
            Arival Thoodu, Kulashekaramangalam, Vaikom. Experience
            peaceful waters, greenery, and the charm of our local
            waterway.

          </p>


        </div>




        {/* Photo Grid */}


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">


          {galleryItems.map((item) => (


            <div

              key={item.id}

              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-100"


            >


              <div className="relative aspect-video overflow-hidden">


                <img

                  src={item.imgSrc}

                  alt={item.title}

                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"

                />



                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">


                  <button

                    onClick={() => setSelectedImage(item)}

                    className="p-4 bg-white/20 backdrop-blur rounded-xl text-white"

                  >


                    <ZoomIn />


                  </button>


                </div>


              </div>




              <div className="p-6 space-y-3">


                <div className="flex justify-between gap-4">


                  <h3 className="font-bold text-lg text-slate-800">


                    {item.title}


                  </h3>



                  <div className="flex items-center gap-1 text-xs text-slate-500">


                    <MapPin className="h-3 w-3 text-teal-600" />


                    {item.location}


                  </div>


                </div>




                <p className="text-sm text-slate-600">


                  {item.description}


                </p>


              </div>



            </div>


          ))}


        </div>





        {/* Image Preview */}


        {selectedImage && (


          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-5">


            <button

              onClick={() => setSelectedImage(null)}

              className="absolute top-5 right-5 text-white"

            >

              Close

            </button>



            <img

              src={selectedImage.imgSrc}

              alt={selectedImage.title}

              className="max-h-[80vh] rounded-2xl"

            />


          </div>


        )}



      </div>

    </div>

  );

}