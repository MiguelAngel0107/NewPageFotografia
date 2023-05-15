import Image from "next/image";

export default function Home() {
  const articlePhotos = [
    {
      id: 0,
      date: "3553",
      title: "Hola",
      image: "dafafa",
      description: "dafwaf",
      href: "faagw",
    },
    {
      id: 1,
      date: "3553",
      title: "Hola",
      image: "dafafa",
      description: "dafwaf",
      href: "faagw",
    },
    {
      id: 2,
      date: "3553",
      title: "Hola",
      image: "dafafa",
      description: "dafwaf",
      href: "faagw",
    },
    {
      id: 3,
      date: "3553",
      title: "Hola",
      image: "dafafa",
      description: "dafwaf",
      href: "faagw",
    },
  ];

  return (
    <>
      <section className="my-10 text-black px-4 py-2 rounded-full relative ">
        <div className="text-black">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Estudio fotografico en Miraflores, Lima
          </h2>
          <p className="text-lg text-center">
            Bienvenido al estudio fotográfico más innovador de Miraflores, Lima.
            Capturamos momentos inolvidables con un enfoque creativo y
            profesional.
          </p>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-4 gap-4">
          {articlePhotos.map((item) => {
            return (
              <div className="group relative" key={item.id}>
                <article
                  className="overflow-hidden rounded-lg shadow transition"
                  key={item.id}
                >
                  <div className="relative pb-[177%]">
                    <img
                      alt="Office"
                      src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      className="absolute top-0 left-0 h-full w-full object-cover"
                    />
                  </div>

                  <div className=" rounded-lg bg-white p-4 sm:p-6 absolute bottom-0 transform translate-y-full group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 scale-0">
                    <time
                      className="block text-xs text-gray-500"
                      dateTime="2022-10-10"
                    >
                      10th Oct 2022
                    </time>

                    <a href="#">
                      <h3 className="mt-0.5 text-lg text-gray-900">
                        How to position your furniture for positivity
                      </h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Recusandae dolores, possimus pariatur animi temporibus
                      nesciunt praesentium dolore sed nulla ipsum eveniet
                      corporis quidem, mollitia itaque minus soluta, voluptates
                      neque explicabo tempora nisi culpa eius atque dignissimos.
                      Molestias explicabo corporis voluptatem?
                    </p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
