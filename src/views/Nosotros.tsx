export default function Nosotros() {
    return (
        <div className="my-10" id="nosotros">
            <h1 className="text-center text-4xl font-bold text-green-700 my-5">¿Quiénes somos?</h1>
            <section className="h-auto bg-white mx-auto my-10 border border-gray-200 rounded-lg shadow-lg p-8">
                <div className="lg:w-3/4 mx-auto lg:flex bg-cover bg-center gap-10">
                    <div className="flex-1 mb-6 lg:mb-0">
                        <p className="text-xl text-justify text-gray-700 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia aliquid tempore quidem nostrum eligendi porro rem similique repudiandae quod vero, maxime impedit nam veritatis dolores hic optio doloribus deleniti. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde laborum laboriosam, est cumque corrupti alias eligendi reprehenderit sed eos? Itaque neque reiciendis aspernatur quos molestias repellendus, odio laudantium perspiciatis consequatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nobis quae error dolorem architecto numquam, iusto voluptatibus debitis sunt ab tempora inventore dicta fugiat eos ducimus placeat incidunt magni deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a aliquam at eveniet perferendis, voluptatibus sint illum sequi facilis quas eius aperiam esse laboriosam numquam, architecto deserunt iste? Aperiam, modi.
                        </p>
                    </div>
                    <div className="lg:max-w-sm flex-1">
                        <img
                            src="./img/Javier.jpg"
                            alt="Javier"
                            className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
